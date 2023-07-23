package com.googledrive.googledrive;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;


@Component
@ConfigurationProperties("gcs.bucket")
public class GcsConfig{
    private String bucketName;
    private String credentialsLocation;

    public String getBucketName(){
        return bucketName;
    }

    public void setName(String bucketName){
        this.bucketName = bucketName;
    }

    public String getCredentialsLocation(){
        return credentialsLocation;
    }

    public void setCredentialsLocation(String credentialsLocation){
        this.credentialsLocation = credentialsLocation;
    }

} 

