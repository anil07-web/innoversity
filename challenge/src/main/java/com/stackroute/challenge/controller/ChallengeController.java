package com.stackroute.challenge.controller;

import com.stackroute.challenge.model.Challenge;
import com.stackroute.challenge.service.ChallengeService;
import com.stackroute.challenge.service.ChallengeServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@CrossOrigin(origins="*")
@RequestMapping("/api/v1")
public class ChallengeController {
//    private ChallengeServiceImpl challengeService;
//
//    @Autowired
//    public ChallengeController(ChallengeServiceImpl challengeService) {
//        this.challengeService = challengeService;
//    }

    @Autowired
    ChallengeService challengeService;

    @PostMapping("/challenge")
    public ResponseEntity<Challenge> saveChallenge(@RequestBody Challenge challengeUpload)
    {
        UUID uuid=UUID.randomUUID();
        challengeUpload.setId(uuid);
        Challenge savedChallenge=challengeService.save(challengeUpload);
        return new ResponseEntity<>(savedChallenge, HttpStatus.CREATED);
    }
}
