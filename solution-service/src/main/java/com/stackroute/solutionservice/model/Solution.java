package com.stackroute.solutionservice.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Document(collection = "solution")
public class Solution {
    @Id
    private UUID id;
    private String solution;
    private String attachment;
    private String description;
    private String solStatus="Not reviewed";
    
}
