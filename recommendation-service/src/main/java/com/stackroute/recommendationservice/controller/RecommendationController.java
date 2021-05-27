package com.stackroute.recommendationservice.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.stackroute.recommendationservice.model.Domain;
import com.stackroute.recommendationservice.model.User;
import com.stackroute.recommendationservice.service.RecommendationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/recommendation/")
@CrossOrigin(value = "*")
public class RecommendationController {
    @Autowired
    RecommendationService recommendationService;

    @PostMapping("/user")
    public String createUser(@RequestBody User user) {
        String saved = recommendationService.createUserNode(user);
        return saved;
    }

    @GetMapping("recommend")
    public List<Domain> getRecommendation(@RequestParam(value = "email") String email) {
        List<Domain> allDomains= recommendationService.getAllRecommendation(email);
        return allDomains;
    }
}
