FROM openjdk:11-jre-slim

ADD ./target/solution-service-0.0.1-SNAPSHOT.jar /usr/src/solution-service-0.0.1-SNAPSHOT.jar

WORKDIR usr/src

ENTRYPOINT ["java","-jar", "solution-service-0.0.1-SNAPSHOT.jar"]
