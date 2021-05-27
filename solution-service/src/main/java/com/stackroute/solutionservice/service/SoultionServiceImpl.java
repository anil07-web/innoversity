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

import java.util.List;
<<<<<<< HEAD
import java.util.Optional;
import java.util.UUID;
=======
>>>>>>> 096a9d5b604df8bda2c69208ed4e82622844dac0

@Service
public class SoultionServiceImpl implements SolutionService {
    private SolutionRepo solutionRepo;
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
<<<<<<< HEAD
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
    public void updateSol(Feedback[] feedback, UUID solutionId) {
        Query query = new Query(Criteria.where("solutionId").is(solutionId));
        Update updateQuery = new Update();
        updateQuery.set("comment","Nice job" );
        updateQuery.set("commentedBy","Arshad Anees");
      UpdateResult result = mongoTemplate.upsert(query, updateQuery, "solution");
//    return mongoTemplate.save(update);
}
=======
    public List<Solution> getAllUsers() {
        return (List<Solution>) solutionRepo.findAll();
    }
>>>>>>> 096a9d5b604df8bda2c69208ed4e82622844dac0

}
