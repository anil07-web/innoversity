package com.stackroute.challenge.controller;

import com.stackroute.challenge.model.Challenge;
import com.stackroute.challenge.service.ChallengeService;
import com.stackroute.challenge.service.RabbitMqSender;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1")
public class ChallengeController {


    @Autowired
    ChallengeService challengeService;
    RabbitMqSender rabbitMqSender;
    public ChallengeController(RabbitMqSender rabbitMqSender){
        this.rabbitMqSender=rabbitMqSender;
    }



    @PostMapping("/Challenge")
    public ResponseEntity<Challenge> saveChallenge(@RequestBody Challenge challenge)
    {
        UUID uuid=UUID.randomUUID();
        challenge.setChallengeId(uuid);
        Challenge savedChallenge=challengeService.save(challenge);
        rabbitMqSender.send(challenge);
        return new ResponseEntity<>(savedChallenge, HttpStatus.CREATED);
    }
}
