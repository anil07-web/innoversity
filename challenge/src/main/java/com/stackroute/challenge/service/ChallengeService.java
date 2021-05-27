package com.stackroute.challenge.service;

import com.stackroute.challenge.model.Challenge;
import org.springframework.stereotype.Service;

import java.util.List;

public interface ChallengeService {

    public Challenge save(Challenge challenge);
     List<Challenge> getAllChallenges();

}
