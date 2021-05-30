package com.stackroute.challenge.service;

import com.stackroute.challenge.model.Challenge;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;


@Service

public interface ChallengeService {

    public Challenge save(Challenge challenge);
     List<Challenge> getAllChallenges();

    public List<Challenge> getDomainChallenges(List<String> domain);

//    public String uploadFile(MultipartFile file);

}
