package com.stackroute.challenge.repository;


import com.stackroute.challenge.model.Challenge;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface ChallengeRespository extends MongoRepository<Challenge, UUID> {
}
