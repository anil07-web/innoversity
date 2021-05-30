package com.stackroute.challenge.controller;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.stackroute.challenge.model.Challenge;
import com.stackroute.challenge.service.ChallengeService;
import com.stackroute.challenge.service.RabbitMqSender;
import org.springframework.beans.factory.annotation.Autowired;
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
    public ChallengeController(RabbitMqSender rabbitMqSender){
        this.rabbitMqSender=rabbitMqSender;
    }


    @PostMapping("/file/upload")
    public ResponseEntity<String> uploadFile(@RequestParam(value = "file") MultipartFile file) {
        return new ResponseEntity<>(challengeService.uploadFile(file), HttpStatus.OK);
    }

    @PostMapping("/upload")
    public ResponseEntity<Challenge> uploadFile(@RequestParam(value = "file") MultipartFile file,
                                           @RequestParam(value = "image") MultipartFile image , @RequestParam("item") String item) throws IOException {

       Challenge ChallengeObj = new ObjectMapper().readValue(item,Challenge.class);
        ChallengeObj.setFileByte(file.getBytes());
        ChallengeObj.setFile(file.getOriginalFilename());
        ChallengeObj.setImageByte(image.getBytes());
        ChallengeObj.setImage(image.getOriginalFilename());
        ChallengeObj.setType(image.getContentType());
        ChallengeObj.setUploadedOn(new Date(System.currentTimeMillis()));
        String fileUrl= challengeService.uploadFile(file);
        final String response = "[" + file.getOriginalFilename() + "] uploaded successfully.";
        ChallengeObj.setUploadUrl(fileUrl);
         Challenge savedChallenge=challengeService.save(ChallengeObj);
        return new ResponseEntity<>(savedChallenge, HttpStatus.CREATED);
    }
>>>>>>> ba3796cf002653a0ae2b9edb3c023577be12d9c1

    @PostMapping("/Challenge")
    public ResponseEntity<Challenge> saveChallenge(@RequestBody Challenge challenge)
    {
        UUID uuid=UUID.randomUUID();
        challenge.setChallengeId(uuid);
        Challenge savedChallenge=challengeService.save(challenge);
        rabbitMqSender.send(challenge);
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