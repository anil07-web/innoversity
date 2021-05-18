package com.stackroute.authenticationservice.service;

import com.stackroute.authenticationservice.model.UserCredentials;

import java.util.List;

public interface UserCredentialsService {
    UserCredentials saveUser(UserCredentials userCredentials);
    List<UserCredentials> getAllUsers();
}
