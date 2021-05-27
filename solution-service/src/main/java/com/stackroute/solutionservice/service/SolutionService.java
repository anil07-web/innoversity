package com.stackroute.solutionservice.service;

import com.stackroute.solutionservice.model.Feedback;
import com.stackroute.solutionservice.model.Solution;

import java.util.List;
import java.util.UUID;

public interface SolutionService {
public Solution saveDetails(Solution solution);
public List<Solution> getDetails();
   Solution getById(UUID solutionId);
   public void  updateSol(Feedback[] feedback, UUID solutionId);

}
