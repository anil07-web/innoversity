package com.stackroute.challenge.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

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
//    private String challengeTitle;
//    private String challengeAbstract; //I make capital (Abstract) due to abstract keyword predefined in java
//    private String description;
//    private String rules;
}
