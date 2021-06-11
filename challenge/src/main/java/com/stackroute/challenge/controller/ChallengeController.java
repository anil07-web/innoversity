package com.stackroute.challenge.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.stackroute.challenge.model.Challenge;
import com.stackroute.challenge.service.ChallengeService;
import com.stackroute.challenge.service.RabbitMqSender;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.UUID;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1/challenge")
public class ChallengeController {
    @Autowired
    ChallengeService challengeService;
    RabbitMqSender rabbitMqSender;

    public ChallengeController(RabbitMqSender rabbitMqSender) {
        this.rabbitMqSender = rabbitMqSender;
    }



//    @PostMapping("/file/upload")
//    public ResponseEntity<String> uploadFile(@RequestParam(value = "file") MultipartFile file) {
//        return new ResponseEntity<>(challengeService.uploadFile(file), HttpStatus.OK);
//    }

//
//    @PostMapping("/file/upload")
//    public ResponseEntity<String> uploadFile(@RequestParam(value = "file") MultipartFile file) {
//        return new ResponseEntity<>(challengeService.uploadFile(file), HttpStatus.OK);
//    }


    @PostMapping("/file/" +"")
    public ResponseEntity<String> uploadFile(@RequestParam(value = "file") MultipartFile file) {
        return new ResponseEntity<>(challengeService.uploadFile(file), HttpStatus.OK);
    }

    @PostMapping("/upload")
    public ResponseEntity<Challenge> uploadFile(@RequestParam(value = "file") MultipartFile file, @RequestParam("item") String item) throws IOException {

        Challenge challengeObj = new ObjectMapper().readValue(item, Challenge.class);
        System.out.println("challenge name:"+challengeObj.getChallengerName());
        System.out.println("challenge name:"+challengeObj.getChallengeTitle());
        System.out.println("file name:"+file.getOriginalFilename());
        UUID uuid = UUID.randomUUID();
        challengeObj.setChallengeId(uuid);
        challengeObj.setUploadedOn(new Date());
        challengeObj.setFileByte(file.getBytes());
        challengeObj.setFile(file.getOriginalFilename());
        String fileUrl = challengeService.uploadFile(file);
        final String response = "[" + file.getOriginalFilename() + "] uploaded successfully.";
        challengeObj.setUploadUrl(fileUrl);
        Challenge savedChallenge = challengeService.save(challengeObj);
        rabbitMqSender.send(challengeObj);
        return new ResponseEntity<>(savedChallenge, HttpStatus.CREATED);
    }

    @PostMapping("/Challenge")
    public ResponseEntity<Challenge> saveChallenge(@RequestBody Challenge challenge) {
        UUID uuid = UUID.randomUUID();
        challenge.setChallengeId(uuid);
        challenge.setUploadedOn(new Date());
        Challenge savedChallenge = challengeService.save(challenge);
        rabbitMqSender.send(challenge);
        return new ResponseEntity<>(savedChallenge, HttpStatus.CREATED);
    }
    @GetMapping("/challenge/{challengeId}")
    public ResponseEntity<Challenge> getById(@PathVariable("challengeId") UUID challengeId) {
        Challenge challenge = this.challengeService.getById(challengeId);
        return new ResponseEntity<Challenge>(challenge, HttpStatus.OK);
    }
    @GetMapping("/challenges")
    public ResponseEntity<List<Challenge>> getChallenges(@RequestParam(name = "domain", required = false) List<String> domain) {
        List<Challenge> challenges = challengeService.getDomainChallenges(domain);
        return new ResponseEntity<>(challenges, HttpStatus.OK);
    }

    @GetMapping("/getMessage")
    public String getMessage() {
        System.out.println("got a request from recommend");
        return "hai from challenge service";
    }
    @GetMapping("/getChallenge/{challengerName}")
    public List<Challenge> getChallengeByName(@PathVariable("challengerName") String challengerName ){
        System.out.println("hello");
        return this.challengeService.getChallengeByName(challengerName);
    }
    @GetMapping("/update/{challengeId}")
    public List<Challenge> updateChallenge(@PathVariable("challengeId") UUID challengeId){
        return this.challengeService.updateChallenge(challengeId);
    }
    @GetMapping("/update/attempt/{challengeId}")
    public List<Challenge> updateAttempt(@PathVariable("challengeId") UUID challengeId){
        return this.challengeService.updateAttempt(challengeId);
    }

    @GetMapping("/download/{challengeId}")
    public ResponseEntity<byte[]> getFile(@PathVariable UUID challengeId){
        Challenge fileDB = challengeService.getById(challengeId);

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + fileDB.getFile() + "\"")
                .body(fileDB.getFileByte());
    }
}