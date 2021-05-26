package com.stackroute.challenge.controller;

import com.stackroute.challenge.model.Challenge;
import com.stackroute.challenge.service.ChallengeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1")
public class ChallengeController {


    @Autowired
    ChallengeService challengeService;

    @PostMapping("/Challenge")
    public ResponseEntity<Challenge> saveChallenge(@RequestBody Challenge challenge)
    {
        UUID uuid=UUID.randomUUID();
        challenge.setChallengeId(uuid);
        Challenge savedChallenge=challengeService.save(challenge);
        return new ResponseEntity<>(savedChallenge, HttpStatus.CREATED);
    }

    @GetMapping("/challenges")
    public ResponseEntity<List<Challenge>> getChallenges(@RequestParam(name = "domain", required = false) List<String> domain) {
        List<Challenge> challenges =  challengeService.getDomainChallenges(domain);
        return new ResponseEntity<>(challenges, HttpStatus.OK);
    }

    @GetMapping("/getMessage")
    public String getMessage() {
        System.out.println("got a request from recommend");
        return "hai from challenge service";
    }
}
