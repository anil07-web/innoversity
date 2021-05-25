package com.stackroute.solutionservice.service;

import com.stackroute.solutionservice.model.Solution;

import java.util.List;

public interface SolutionService {
    public Solution saveDetails(Solution solution);
    List<Solution> getAllUsers();
}
