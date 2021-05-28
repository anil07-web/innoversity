package com.stackroute.solutionservice.controller;

import com.stackroute.solutionservice.model.Solution;
import com.stackroute.solutionservice.service.SolutionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1")
public class SolutionController {
    private SolutionService solutionService;



    @Autowired
    public SolutionController(SolutionService solutionService) {
        this.solutionService = solutionService;
    }

    @PostMapping("/solve")
    public ResponseEntity<Solution> saveDetails(@RequestBody Solution solution){
        UUID uuid = UUID.randomUUID();
        solution.setSolutionId(uuid);
        Solution savedDetails =solutionService.saveDetails(solution);
        return new ResponseEntity<>(savedDetails, HttpStatus.CREATED);
    }
    @GetMapping("/getsolution")
    public ResponseEntity<List<Solution>> getAllUsers(){
        return new ResponseEntity<List<Solution>>((List<Solution>)solutionService.getAllUsers(),HttpStatus.OK);
    }

    @PutMapping("/solve/{solutionId}")
    public String updateStatus(String solStatus,@PathVariable("solutionId") UUID solutionId) {
        solutionService.updateStatus(solStatus,solutionId);
        return "Hello";
    }

}
