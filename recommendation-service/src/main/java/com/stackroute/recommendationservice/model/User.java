package com.stackroute.recommendationservice.model;

import lombok.*;
import org.neo4j.ogm.annotation.GeneratedValue;
import org.neo4j.ogm.annotation.Id;
import org.neo4j.ogm.annotation.NodeEntity;

@NodeEntity
@NoArgsConstructor
@AllArgsConstructor
@Data
@RequiredArgsConstructor
public class User {
    @Id
    @GeneratedValue
    private Long userId;
    @NonNull
    private String emailId;
    private String[] interestedDomain;
}
