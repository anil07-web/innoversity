package com.stackroute.recommendationservice.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.annotation.Id;

import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class ProxyChallenge {
    @Id
    private UUID challengeId;
    private String challengerName;
    private String[] challengeDomain;
    private String  description;
    private String challengeTitle;
    private String expiryDate;
}
