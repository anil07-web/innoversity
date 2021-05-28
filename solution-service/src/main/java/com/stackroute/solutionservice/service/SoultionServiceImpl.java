package com.stackroute.solutionservice.service;


import com.stackroute.solutionservice.model.Solution;
import com.stackroute.solutionservice.repository.SolutionRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class SoultionServiceImpl implements SolutionService {
    private SolutionRepo solutionRepo;
    private Solution solution;

    @Autowired
    public SoultionServiceImpl(SolutionRepo solutionRepo) {
        this.solutionRepo = solutionRepo;
    }

    @Autowired
    MongoTemplate mongoTemplate;

    @Override
    public Solution saveDetails(Solution solution) {
        return solutionRepo.save(solution);
    }

    @Override
    public List<Solution> getAllUsers() {
        return (List<Solution>) solutionRepo.findAll();
    }

    @Override
    public void updateStatus(String solStatus, UUID solutionId) {
        Query query = new Query(Criteria.where("solutionId").is(solutionId));
        Update updateQuery = new Update();
        updateQuery.set("solStatus",solStatus);

        mongoTemplate.upsert(query,updateQuery,"solution");
    }

}
