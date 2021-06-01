package com.stackroute.solutionservice.controller;

import com.stackroute.solutionservice.model.Feedback;
import com.stackroute.solutionservice.model.Solution;
import com.stackroute.solutionservice.model.SolutionStatus;
import com.stackroute.solutionservice.service.SolutionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1/solution")
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
        solution.setSolStatus(SolutionStatus.NotReviewed);
        Solution savedDetails = solutionService.saveDetails(solution);
        return new ResponseEntity<>(savedDetails, HttpStatus.CREATED);
    }

    @PutMapping("/solve/{solutionId}")
    public void updatesol(@RequestBody Feedback feedback, @PathVariable("solutionId") UUID
            solutionId) {
        solutionService.updateSol(feedback, solutionId);
    }

//    @GetMapping("/solve/{challengeId}")
//    public ResponseEntity<Solution> getById(@PathVariable("challengeId") UUID challengeId) {
//        Solution solution = this.solutionService.getById(challengeId);
//        return new ResponseEntity<Solution>(solution, HttpStatus.OK);
//    }

    @GetMapping("/getsolution")
    public ResponseEntity<List<Solution>> getAllUsers(){
        return new ResponseEntity<List<Solution>>((List<Solution>)solutionService.getAllUsers(),HttpStatus.OK);
    }


    @PutMapping("/status/{solutionId}")
    public void updateStatus(String solStatus,@PathVariable("solutionId") UUID solutionId) {
        System.out.println("Solution Status:"+solStatus);
        solutionService.updateStatus(solStatus,solutionId);
    }

    @GetMapping("/solve/{challengeId}")
    public ResponseEntity<Solution> getSolutionByChallengeId(@PathVariable("challengeId") UUID challengeId){
        System.out.println("Hello");
        return new ResponseEntity((List<Solution>) solutionService.getSolutionByChallengeId(challengeId),HttpStatus.OK);
    }

}
