package com.projects.MedicineFinder;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;

//@ComponentScan(basePackages = {"projects.MedicineFinder.Controller", "projects.MedicineFinder.Repository"})
//@SpringBootApplication(scanBasePackages={"[com.projects.MedicineFinder]"})
@SpringBootApplication()
@EnableMethodSecurity()
//@EnableJpaRepositories("com.projects.MedicineFinder.Repository")
public class MedicineFinderApplication {

	public static void main(String[] args) {
		SpringApplication.run(MedicineFinderApplication.class, args);
	}

}
