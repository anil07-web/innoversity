package com.stackroute.recommendationservice.repository;

import com.stackroute.recommendationservice.model.Domain;
import com.stackroute.recommendationservice.model.User;
import org.springframework.data.neo4j.annotation.Query;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends Neo4jRepository<User, Long> {

    //Create a node for a user
    @Query("Merge(u:User {email:$email}) Return u")
    User createUserNode(String email);

    // Find all user with email as emailId
    @Query("MATCH(u:User {email:$email}) RETURN u")
    List<User> findUsersByEmailId(String email);

    // Create a interested domain relation between user and a domain
    @Query("MATCH(u:User {email:$email}),(d:Domain {domain:$domain}) Merge(u)-[:interested]->(d)")
    void createInterestedRelationship(String email, String domain);

    //get the recommended domain for a user
    @Query("MATCH(u1:User {email:$email})-[:interested]->(:Domain)<-[:interested]-(u2:User)-[:interested]->(d:Domain)  WHERE u1<>u2 AND NOT (u1)-[:interested]->(d)  WITH d,count(d) as frequency  ORDER BY frequency DESC  RETURN  d")
    List<Domain> getAllRecommendedDomain(String email);
}
