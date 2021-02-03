package com.spring.timeline_service;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class TimelineServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(TimelineServiceApplication.class, args);
    }

}
