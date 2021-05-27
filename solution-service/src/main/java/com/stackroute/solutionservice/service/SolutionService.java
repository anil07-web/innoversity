package com.stackroute.solutionservice.service;

import com.stackroute.solutionservice.model.Feedback;
import com.stackroute.solutionservice.model.Solution;

import java.util.List;
<<<<<<< HEAD
import java.util.UUID;

public interface SolutionService {
public Solution saveDetails(Solution solution);
public List<Solution> getDetails();
   Solution getById(UUID solutionId);
   public void  updateSol(Feedback[] feedback, UUID solutionId);

=======

public interface SolutionService {
    public Solution saveDetails(Solution solution);
    List<Solution> getAllUsers();
>>>>>>> 096a9d5b604df8bda2c69208ed4e82622844dac0
}
