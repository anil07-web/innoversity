package com.stackroute.challenge.service;

import com.stackroute.challenge.model.Challenge;
import org.springframework.stereotype.Service;

@Service
public interface ChallengeService {

    public Challenge save(Challenge challenge);

}
