package com.stackroute.solutionservice.controller;

import com.stackroute.solutionservice.model.Feedback;
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
    public ResponseEntity<Solution> saveDetails(@RequestBody Solution solution) {
        UUID uuid = UUID.randomUUID();
        solution.setSolutionId(uuid);
        Solution savedDetails = solutionService.saveDetails(solution);
        return new ResponseEntity<>(savedDetails, HttpStatus.CREATED);
    }

    @PutMapping("/solve/{solutionId}")
    public void updatesol(@RequestBody Feedback[] feedback, @PathVariable("solutionId") UUID
            solutionId) {
        solutionService.updateSol(feedback, solutionId);
    }

    @GetMapping("/solve/{solutionId}")
    public ResponseEntity<Solution> getById(@PathVariable("solutionId") UUID solutionId) {
        Solution solution = this.solutionService.getById(solutionId);
        return new ResponseEntity<Solution>(solution, HttpStatus.OK);
    }

    @GetMapping("/getsolution")
    public ResponseEntity<List<Solution>> getAllUsers(){
        return new ResponseEntity<List<Solution>>((List<Solution>)solutionService.getAllUsers(),HttpStatus.OK);

    }


    @PutMapping("/status/{solutionId}")
    public void updateStatus(String solStatus,@PathVariable("solutionId") UUID solutionId) {
        solutionService.updateStatus(solStatus,solutionId);
    }

}



