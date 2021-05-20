package com.demo.Upload.Service.service;
import com.demo.Upload.Service.model.ChallengeUpload;
import com.demo.Upload.Service.repository.ChallengeRepository;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;


@Service
public class ChallengeServiceImpl implements ChallengeService {

    private ChallengeRepository challengeRepository;

    @Autowired
    public ChallengeServiceImpl(ChallengeRepository challengeRepository) {
        this.challengeRepository = challengeRepository;

    }

    @Override
    public ChallengeUpload save(ChallengeUpload challengeUpload) {
        return challengeRepository.save(challengeUpload);
    }



}

