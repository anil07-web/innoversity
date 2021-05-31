package com.stackroute.solutionservice.service;


import com.mongodb.client.result.UpdateResult;
import com.stackroute.solutionservice.model.Feedback;
import com.stackroute.solutionservice.model.Solution;
import com.stackroute.solutionservice.repository.SolutionRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class SoultionServiceImpl implements SolutionService {
    private SolutionRepo solutionRepo;

    private Solution solution;

    @Autowired
    MongoTemplate mongoTemplate;


    @Autowired
    public SoultionServiceImpl(SolutionRepo solutionRepo) {
        this.solutionRepo = solutionRepo;
    }

    @Override
    public Solution saveDetails(Solution solution) {
        return solutionRepo.save(solution);
    }

    @Override
    public List<Solution> getDetails() {
        return solutionRepo.findAll();
    }
    @Override
    public Solution getById(UUID solutionId) {
        Optional<Solution> solution = solutionRepo.findById(solutionId);
        System.out.println(solution);
        return solution.get();
    }
    @Override
    public void updateSol(Feedback feedback, UUID solutionId) {
        List<Solution> solution = solutionRepo.findBySolutionId(solutionId);
        System.out.println("solution extracted:"+solution);
        Query query = new Query(Criteria.where("solutionId").is(solutionId));
        Update updateQuery = new Update();
        List<Feedback> existingFeed = solution.get(0).getFeedback();
        if (existingFeed == null) {
            List<Feedback> feedbackList = new ArrayList<>();
            feedbackList.add(feedback);
            updateQuery.set("feedback", feedbackList);
        } else {
            existingFeed.add(feedback);
            updateQuery.set("feedback", existingFeed);
        }
        UpdateResult result = mongoTemplate.upsert(query, updateQuery, "solution");
    }

    public List<Solution> getAllUsers() {
        return (List<Solution>) solutionRepo.findAll();
    }


    @Override
    public void updateStatus(String solStatus, UUID solutionId) {
        System.out.println(getDetails());
        Query query = new Query(Criteria.where("solutionId").is(solutionId));
        Update updateQuery = new Update();
        updateQuery.set("solStatus",solStatus);
        mongoTemplate.upsert(query,updateQuery,"solution");
    }

}
