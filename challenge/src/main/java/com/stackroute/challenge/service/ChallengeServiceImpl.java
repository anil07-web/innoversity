package com.stackroute.challenge.service;

import com.stackroute.challenge.model.Challenge;
import com.stackroute.challenge.repository.ChallengeRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ChallengeServiceImpl implements ChallengeService {
//    private ChallengeRespository challengeRespository;
//
//    @Autowired
//    public ChallengeServiceImpl(ChallengeRespository challengeRespository) {
//        this.challengeRespository = challengeRespository;
//    }

    @Autowired
    ChallengeRespository challengeRespository;

    public Challenge save(Challenge challenge){
        return challengeRespository.save(challenge);
    }
}
