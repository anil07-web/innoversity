package com.stackroute.registrationservice.controller;

import com.stackroute.registrationservice.model.User;
import com.stackroute.registrationservice.service.RabbitMqSender;
import com.stackroute.registrationservice.service.RegistrationService;
import com.stackroute.registrationservice.service.RegistrationServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@CrossOrigin(value = "*")
@RequestMapping("/api/v1/register")
public class RegistrationController {
    RegistrationService registrationService;
    RabbitMqSender rabbitMqSender;
    @Autowired
    public RegistrationController(RegistrationService registrationService, RabbitMqSender rabbitMqSender){
        this.registrationService=registrationService;
        this.rabbitMqSender= rabbitMqSender;
    }
    @PostMapping("/registered")
    public User saveUser(@RequestBody User user){
        User userobj=null;
        UUID uuid = UUID.randomUUID();
        user.setUserId(uuid);
        userobj=registrationService.saveUser(user);
        rabbitMqSender.send(user);
        return userobj;
    }

}
