package com.stackroute.solutionservice.service;

import com.stackroute.solutionservice.model.Solution;
import com.stackroute.solutionservice.repository.SolutionRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SoultionServiceImpl implements SolutionService {
    private SolutionRepo solutionRepo;

@Autowired
    public SoultionServiceImpl(SolutionRepo solutionRepo) {
        this.solutionRepo = solutionRepo;
    }

    @Override
    public Solution saveDetails(Solution solution) {
        return solutionRepo.save(solution);
    }

    @Override
    public List<Solution> getAllUsers() {
        return (List<Solution>) solutionRepo.findAll();
    }

}
