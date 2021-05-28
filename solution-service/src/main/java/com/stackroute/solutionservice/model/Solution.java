package com.stackroute.solutionservice.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Document(collection = "solution")
@Entity
public class Solution {

    @Id
    private UUID solutionId;
    private String solution;
//    private int challengeId;
//    private String attachment;
    private String solvedBy=" ";
    private String description;
    private String solStatus="Not Reviewed";
    private Feedback[] feedback;

}
