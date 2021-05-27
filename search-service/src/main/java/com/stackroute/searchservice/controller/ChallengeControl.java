package com.stackroute.searchservice.controller;

import com.stackroute.searchservice.model.Challenge;
import com.stackroute.searchservice.repository.ChallengeRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

/**
 * This is the controller of the search service.
 */
@RestController
@CrossOrigin(value = "*")
@RequestMapping("/challenges")
public class ChallengeControl {

    /**
     * This is the constructor of the book controller that @Autowired the
     * BookRepository
     */
    @Autowired
    private ChallengeRepository challengeRepository;

    public ChallengeControl(ChallengeRepository challengeRepository) {
        this.challengeRepository = challengeRepository;
    }

    /**
     * This method is used to insert the data in elastic search. The data are coming
     * from the Frontend.
     *
     * @param challenge
     * @return
     * @throws Exception
     */
    @PostMapping
    public Challenge insertChallenge(@RequestBody Challenge challenge) throws Exception {
        return challengeRepository.insertChallenge(challenge);
    }

    /**
     * This method is used to get all the books.
     *
     * @return
     */
    @GetMapping("/allchallenges")
    public Map<String, Object> getAllChallenge() {
        return challengeRepository.getAllChallenge();
    }

    /**
     * This method is used to get the book related to the id which is passing in
     * this method.
     *
     * @param id
     * @return
     */
    @GetMapping("/{id}")
    public Map<String, Object> getChallengeById(@PathVariable String id) {
        return challengeRepository.getChallengeById(id);
    }

    /**
     * This method is used to update the book related to the id which is passing in
     * this method.
     *
     * @param id
     * @return
     */
    @PutMapping("/{id}")
    public Map<String, Object> updateChallengeById(@RequestBody Challenge book, @PathVariable String id) {
        return challengeRepository.updateChallengeById(id, book);
    }

    /**
     * This method is used to delete the book related to the id which is passing in
     * this method.
     *
     * @param id
     * @return
     */
    @DeleteMapping("/{id}")
    public void deleteChallengeById(@PathVariable String id) {
        challengeRepository.deleteChallengeById(id);
    }

    /**
     * This method is used to get the challenges related to keyword which is passing in
     * this method.
     *
     * @param queries
     * @return
     */
    @GetMapping("/search/{queries}")
    public List<Challenge> ChallengeSearch(@PathVariable String queries)  {
        System.out.println("\n\n\nInside Challenge Service.Ths is what we have got from challenge query :  " + queries);
        String text = "";
        System.out.println("\n\nReturnning back to challengequery service");
        return challengeRepository.findChallenge(queries);
    }
}

