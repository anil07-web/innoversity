FROM openjdk:11-jre-slim
EXPOSE 8095
ADD ./target/challenge-0.0.1-SNAPSHOT.jar /usr/src/challenge-0.0.1-SNAPSHOT.jar
WORKDIR usr/src
ENTRYPOINT ["java","-jar", "challenge-0.0.1-SNAPSHOT.jar"]