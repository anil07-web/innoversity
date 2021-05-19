//package com.stackroute.authenticationservice.bootstrap;
//
//import com.stackroute.authenticationservice.model.UserCredentials;
//import com.stackroute.authenticationservice.repository.UserCredentialsRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.CommandLineRunner;
//import org.springframework.stereotype.Component;
//
//@Component
//public class UserCredentialsBootstrap implements CommandLineRunner {
//    private UserCredentialsRepository userCredentialsRepository;
//
//    @Autowired
//    public UserCredentialsBootstrap(UserCredentialsRepository userCredentialsRepository) {
//        this.userCredentialsRepository = userCredentialsRepository;
//    }
//
//
//    @Override
//    public void run(String... args) throws Exception {
//        UserCredentials userCredentials1=new UserCredentials(1,"vinaykumar@outlook.com","outlook.com");
//        UserCredentials userCredentials2=new UserCredentials(2,"vinay@yahoo.com","@yahoo.com");
//        userCredentialsRepository.save(userCredentials1);
//        userCredentialsRepository.save(userCredentials2);
//    }
//}
