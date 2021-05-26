package com.stackroute.recommendationservice.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.stackroute.recommendationservice.config.ChallengeServiceProxy;
import com.stackroute.recommendationservice.model.Domain;
import com.stackroute.recommendationservice.model.ProxyChallenge;
import com.stackroute.recommendationservice.model.User;
import com.stackroute.recommendationservice.repository.DomainRepository;
import com.stackroute.recommendationservice.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class RecommendationServiceImpl implements RecommendationService {
    @Autowired
    UserRepository userRepository;

    @Autowired
    DomainRepository domainRepository;

    @Autowired
    ChallengeServiceProxy challengeServiceProxy;

    @Override
    public String createUserNode(User user) {
        userRepository.createUserNode(user.getEmailId());
        this.createDomainNode(user.getInterestedDomain());
        this.createInterestedRelation(user);
        return "Created user node!!";
    }

    @Override
    public void createDomainNode(String[] interestedDomain) {
        for (String domain:interestedDomain) {
            domainRepository.createDomainNode(domain);
        }
    }

    public void createInterestedRelation(User user) {
        String emailId = user.getEmailId();
        String[] interestedDomain=user.getInterestedDomain();
        for (String domain:interestedDomain) {
            userRepository.createInterestedRelationship(emailId, domain);
        }
//        userRepository.createInterestedRelationship(emailId, domain);
    }

    @Override
    public List<ProxyChallenge> getAllRecommendation(String emailId) {
        List<Domain> recommend = userRepository.getAllRecommendedDomain(emailId);
        System.out.println("recommended:"+recommend);
        List<Domain> interestedDomain = userRepository.getInterestedDomain(emailId);
        System.out.println("interested domain:"+interestedDomain);
        recommend.addAll(interestedDomain);
        List<String> recommendedDomain = new ArrayList<>();
        for (Domain domain:recommend) {
            recommendedDomain.add(domain.getDomain());
        }
//        for (String domain: interestedDomain) {
//            recommendedDomain.add(domain);
//        }
        List<ProxyChallenge> recommendedChallenge= challengeServiceProxy.getChallenges(recommendedDomain).getBody();
        return recommendedChallenge;
    }

    @Override
    public String getMessageFromProxy() {
        String messageFromProxy = challengeServiceProxy.getMessage();
        return messageFromProxy;
    }

}
