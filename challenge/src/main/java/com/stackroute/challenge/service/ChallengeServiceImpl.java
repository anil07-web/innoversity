package com.stackroute.challenge.service;

//import com.amazonaws.services.s3.AmazonS3;
//import com.amazonaws.services.s3.model.PutObjectRequest;
import com.stackroute.challenge.model.Challenge;
import com.stackroute.challenge.repository.ChallengeRespository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
@Slf4j
public class ChallengeServiceImpl implements ChallengeService {

    @Value("${application.bucket.name}")
    private String bucketName;

//    @Autowired
//    private AmazonS3 s3Client;
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

//    @Override
//    public String uploadFile(MultipartFile file) {
//        File fileObj = convertMultiPartFileToFile(file);
//        String fileName = System.currentTimeMillis() + "_" + file.getOriginalFilename();
//        s3Client.putObject(new PutObjectRequest(bucketName, fileName, fileObj));
//        fileObj.delete();
//        return "File uploaded : " + fileName;
//    }
//    private File convertMultiPartFileToFile(MultipartFile file) {
//        File convertedFile = new File(file.getOriginalFilename());
//        try (FileOutputStream fos = new FileOutputStream(convertedFile)) {
//            fos.write(file.getBytes());
//        } catch (IOException e) {
//            log.error("Error converting multipartFile to file", e);
//        }
//        return convertedFile;
//    }

}
