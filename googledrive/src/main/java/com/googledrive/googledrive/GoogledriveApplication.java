package com.googledrive.googledrive;

import java.beans.JavaBean;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@JavaBean
public class GoogledriveApplication {

	public static void main(String[] args) {
		SpringApplication.run(GoogledriveApplication.class, args);
	}

}
