package com.stackroute.solutionservice.service;

import com.stackroute.solutionservice.model.Solution;

import java.util.List;
import java.util.UUID;

public interface SolutionService {
     Solution saveDetails(Solution solution);
     List<Solution> getAllUsers();
     public void updateStatus(String solStatus, UUID solutionID) ;
}
