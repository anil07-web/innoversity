package com.stackroute.challenge.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;
import java.util.Date;
import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Document(collection = "challenge")
public class Challenge {
    @Id
    private UUID challengeId;
    private String challengerName;
    private String[] challengeDomain;
<<<<<<< HEAD
    private String challengeTitle;
    private String challengeAbstract; //I make capital (Abstract) due to abstract keyword predefined in java
    private String description;
    private String rules;

    LocalDate localDate = LocalDate.now(); // used in java 8
    Date date =new Date();


=======
//    private String challengeTitle;
//    private String challengeAbstract; //I make capital (Abstract) due to abstract keyword predefined in java
//    private String description;
//    private String rules;
>>>>>>> 239ff5da0d4de9df270ae7365be3b0bf8ab697d3
}
