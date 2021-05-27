package com.stackroute.challenge.service;

import com.stackroute.challenge.model.Challenge;
import com.stackroute.challenge.repository.ChallengeRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;


import java.util.ArrayList;
import java.util.List;

@Service
public class ChallengeServiceImpl implements ChallengeService {


    @Autowired
    ChallengeRespository challengeRespository;

    @Autowired
    MongoTemplate mongoTemplate;

    public Challenge save(Challenge challenge){
        return challengeRespository.save(challenge);
    }

    @Override

    public List<Challenge> getAllChallenges() {
        return (List<Challenge>) challengeRespository.findAll();
    }
    public List<Challenge> getDomainChallenges(List<String> domain) {
        List<Challenge> challenges = new ArrayList<>();
        Query query = new Query();
        if (domain != null && domain.size() != 0) {
            query.addCriteria(Criteria.where("challengeDomain").in(domain));
        }
        challenges = mongoTemplate.find(query, Challenge.class);
        return challenges;
    }
}
