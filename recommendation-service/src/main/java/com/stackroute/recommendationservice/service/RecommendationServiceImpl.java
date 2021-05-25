package com.stackroute.recommendationservice.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.stackroute.recommendationservice.model.Domain;
import com.stackroute.recommendationservice.model.User;
import com.stackroute.recommendationservice.repository.DomainRepository;
import com.stackroute.recommendationservice.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RecommendationServiceImpl implements RecommendationService {
    @Autowired
    UserRepository userRepository;

    @Autowired
    DomainRepository domainRepository;

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
    public List<Domain> getAllRecommendation(String emailId) {
        List<Domain> recommend = userRepository.getAllRecommendedDomain(emailId);
        return recommend;
    }
}
