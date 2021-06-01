package com.stackroute.challenge.service;

//import com.amazonaws.services.s3.AmazonS3;
//import com.amazonaws.services.s3.model.PutObjectRequest;
import com.stackroute.challenge.model.Challenge;
import com.stackroute.challenge.repository.ChallengeRespository;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.*;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.PostConstruct;

@Service
public class ChallengeServiceImpl implements ChallengeService {

//    @Autowired
//    private AmazonS3 s3Client;

    @Autowired
    ChallengeRespository challengeRespository;

    @Autowired
    MongoTemplate mongoTemplate;

    private static final Logger LOGGER = LoggerFactory.getLogger(ChallengeServiceImpl.class);


    public Challenge save(Challenge challenge) {
        return challengeRespository.save(challenge);
    }

//    @Value("${aws.s3.bucket}")
//    private String bucketName;
//
//    @Value("${aws.s3.endpointUrl}")
//    private String endpointUrl;
//
//    @Value("${aws.access_key_id}")
//    private String accessKeyId;
//    @Value("${aws.secret_access_key}")
//    private String secretAccessKey;
//    @Value("${aws.s3.region}")
//    private String region;


//    @PostConstruct
//    private void initializeAmazon() {
//
//        BasicAWSCredentials creds = new BasicAWSCredentials(accessKeyId, secretAccessKey);
//        this.s3client = AmazonS3ClientBuilder
//                .standard()
//                .withRegion(Regions.fromName(region))
//                .withCredentials(new AWSStaticCredentialsProvider(creds))
//                .build();
//    }

    @Override
    public List<Challenge> getAllChallenges() {
        return (List<Challenge>) challengeRespository.findAll();
    }
    @Override
    public Challenge getById(UUID challengeId) {
        List<Challenge> challenge = challengeRespository.findByChallengeId(challengeId);
        System.out.println(challenge);
        return challenge.get(0);
    }
    @Override
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
//      }

//    @Override
//    @Async
//    public String uploadFile(MultipartFile multipartFile) {
//        LOGGER.info("File upload in progress.");
//        String fileUrl = "";
//        try {
//            final File file = convertMultiPartFileToFile(multipartFile);
//            String fileName = generateFileName(multipartFile);
//            fileUrl = endpointUrl + "/" + bucketName + "/" + fileName;
//            uploadFileToS3Bucket(fileName, file);
//            LOGGER.info("File upload is completed.");
//            file.delete();    // To remove the file locally created in the project folder.
//        } catch (final AmazonServiceException ex) {
//            LOGGER.info("File upload is failed.");
//        }
//        return fileUrl;
//    }
//
//    private String generateFileName(MultipartFile multiPart) {
//        return new Date().getTime() + "-" + multiPart.getOriginalFilename()
//                .replace(" ", "_");
//    }
//
//    private File convertMultiPartFileToFile(final MultipartFile multipartFile) {
//        LOGGER.info("converting");
//        final File file = new File(multipartFile.getOriginalFilename());
//        try (final FileOutputStream outputStream = new FileOutputStream(file)) {
//            outputStream.write(multipartFile.getBytes());
//        } catch (final IOException ex) {
//            LOGGER.error("Error converting the multi-part file to file= ");
//        } catch (Exception exception) {
//            LOGGER.info("Caught exception while converting");
//        }
//        return file;
//    }
//
//
//    private void uploadFileToS3Bucket(final String fileName, final File file) {
//        try {
//            LOGGER.info("Uploading file:" + fileName);
//            final PutObjectRequest putObjectRequest = new PutObjectRequest(bucketName, fileName, file);
//            LOGGER.info("putObject:" + putObjectRequest);
//            s3client.putObject(putObjectRequest);
//            LOGGER.info("file Uploaded");
//        } catch (Exception exc) {
//            LOGGER.info("Exception caught:" + exc);
//            LOGGER.info("Exception caught will uploading" + exc.getMessage());
//        }
//    }


}
