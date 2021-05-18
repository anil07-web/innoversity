package com.stackroute.authenticationservice.service;

import com.stackroute.authenticationservice.model.UserCredentials;
import com.stackroute.authenticationservice.repository.UserCredentialsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserCredentialsServiceImpl implements UserCredentialsService{
    private UserCredentialsRepository userCredentialsRepository;

    @Autowired
    public UserCredentialsServiceImpl(UserCredentialsRepository userCredentialsRepository) {
        this.userCredentialsRepository = userCredentialsRepository;
    }

    @Override
    public UserCredentials saveUser(UserCredentials userCredentials) {
        return userCredentialsRepository.save(userCredentials);
    }

    @Override
    public List<UserCredentials> getAllUsers() {
        return (List<UserCredentials>) userCredentialsRepository.findAll();
    }
}
