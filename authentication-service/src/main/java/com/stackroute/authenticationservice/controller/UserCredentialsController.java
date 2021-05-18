package com.stackroute.authenticationservice.controller;

import com.stackroute.authenticationservice.model.UserCredentials;
import com.stackroute.authenticationservice.service.UserCredentialsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/usercredentials")
public class UserCredentialsController {
    private UserCredentialsService userCredentialsService;

    @Autowired
    public UserCredentialsController(UserCredentialsService userCredentialsService) {
        this.userCredentialsService = userCredentialsService;
    }

    @PostMapping("/login")
    public ResponseEntity<UserCredentials> saveUserCredentials(@RequestBody UserCredentials userCredentials){
        UserCredentials savedLoginDetails=userCredentialsService.saveUser(userCredentials);
        return new ResponseEntity<>(savedLoginDetails, HttpStatus.CREATED);
    }

    @GetMapping("/logindata")
    public ResponseEntity<List<UserCredentials>> getAllUsers(){
        return new ResponseEntity<List<UserCredentials>>((List<UserCredentials>)userCredentialsService.getAllUsers(),HttpStatus.OK);
    }
}
