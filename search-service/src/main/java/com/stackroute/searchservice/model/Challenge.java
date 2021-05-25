package com.stackroute.searchservice.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/***
 * This is a model of the search-services. Here the schema are same as in the
 * book services. All the data are coming from the book-service via RabbitMQ.
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class Challenge {
    private String challengeId;
    private String challengeTitle;
    private String challengerName;
    private String[] challengeDomain;
}
