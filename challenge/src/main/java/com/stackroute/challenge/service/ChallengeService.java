package com.stackroute.challenge.service;
import com.stackroute.challenge.model.Challenge;
import java.util.List;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service

public interface ChallengeService {

    public Challenge save(Challenge challenge);
     public List<Challenge> getAllChallenges();

    public List<Challenge> getDomainChallenges(List<String> domain);
    String uploadFile(MultipartFile multipartFile);



}
