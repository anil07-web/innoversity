package com.demo.Upload.Service.repository;

import com.demo.Upload.Service.model.ChallengeUpload;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ChallengeRepository extends MongoRepository<ChallengeUpload,Integer> {

}
