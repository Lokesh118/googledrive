package com.googledrive.googledrive;

import org.springframework.beans.factory.annotation.Autowired;
import com.google.auth.oauth2.GoogleCredentials;
import com.google.cloud.storage.Blob;
import com.google.cloud.storage.Bucket;
import com.google.cloud.storage.Storage;
import com.google.cloud.storage.StorageOptions;
// import com.google.rpc.context.AttributeContext.Response;

// import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
// import java.nio.file.Paths;

@RestController
public class UploadController {
    private final GcsConfig gcsConfig;

    @Autowired
    public UploadController(GcsConfig gcsConfig){
        this.gcsConfig = gcsConfig;
    }

    @PostMapping("/upload")
    public ResponseEntity<String> fileUpload(@RequestParam("file") MultipartFile file){
        try{
            String fileName = file.getOriginalFilename();
            Path tempFile = Files.createTempFile("temp-",fileName);
            file.transferTo(tempFile.toFile());
            Storage storage = StorageOptions.newBuilder().setCredentials(GoogleCredentials.getApplicationDefault()).build().getService();
            Bucket bucket = storage.get(gcsConfig.getBucketName());
            Blob blob = bucket.create(fileName, Files.readAllBytes(tempFile));
            Files.delete(tempFile);
            return ResponseEntity.ok("File uploaded to Google Cloud Storage successfully. File URL: " + blob.getMediaLink());
        } catch (IOException e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error uploading the file to Google Cloud Storage.");
        }
    }
}
