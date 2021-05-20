package com.stackroute.solutionservice.repository;

import com.stackroute.solutionservice.model.Solution;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SolutionRepo extends MongoRepository<Solution,Integer> {
}
