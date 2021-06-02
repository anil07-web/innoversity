package com.stackroute.solutionservice.service;

import com.stackroute.solutionservice.model.Feedback;
import com.stackroute.solutionservice.model.Solution;

import java.util.List;
import java.util.UUID;

public interface SolutionService {
    Solution saveDetails(Solution solution);

    List<Solution> getAllUsers();

    public void updateStatus(String solStatus, UUID solutionID);

    public List<Solution> getDetails();

//    Solution getById(UUID challengeId);

    public void updateSol(Feedback feedback, UUID solutionId);

    public List<Solution> getSolutionByChallengeId(UUID challengeId);

    public Solution getSolutionBySolutionId(UUID solutionId);
}
