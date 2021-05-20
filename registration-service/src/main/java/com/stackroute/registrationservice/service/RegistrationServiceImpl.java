package com.stackroute.registrationservice.service;

import com.stackroute.registrationservice.model.User;
import com.stackroute.registrationservice.repository.RegistrationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RegistrationServiceImpl implements RegistrationService{
    RegistrationRepository registrationRepository;

   @Autowired
   public RegistrationServiceImpl(RegistrationRepository registrationRepository){
       this.registrationRepository = registrationRepository;
   }

   @Override
    public User saveUser(User user){
        return registrationRepository.save(user);
    }

}
