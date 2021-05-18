package com.stackroute.authenticationservice.repository;

import com.stackroute.authenticationservice.model.UserCredentials;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserCredentialsRepository extends CrudRepository<UserCredentials,Integer> {
}
