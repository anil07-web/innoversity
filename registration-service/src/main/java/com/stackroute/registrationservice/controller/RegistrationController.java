package com.stackroute.registrationservice.controller;

import com.stackroute.registrationservice.model.User;
import com.stackroute.registrationservice.service.RegistrationService;
import com.stackroute.registrationservice.service.RegistrationServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
public class RegistrationController {
     RegistrationService registrationService;
    @Autowired
    public RegistrationController(RegistrationService registrationService){
        this.registrationService=registrationService;
    }
    @CrossOrigin(origins = "*")
    @PostMapping("/registered")
    public User saveUser(@RequestBody User user){
        User userobj=null;
        UUID uuid = UUID.randomUUID();
        user.setUserId(uuid);
         userobj=registrationService.saveUser(user);
         return userobj;
    }

}
