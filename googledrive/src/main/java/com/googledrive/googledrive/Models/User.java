package com.googledrive.googledrive.Models;
import javax.persistence.GenerationType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Entity;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String username;
    private String email;
    private String password;

    public User(){

    }

    public int getId(){
        return id;
    }
    public void setId(int id){
        this.id = id;
    }
    public void setUserName(String Username){
        username = Username;
    }
    public String getUserName(){
        return username;
    }
    public void setEmail(String Email){
        email = Email;
    }
    public String getEmail(){
        return email;
    }
    public void setPassword(String Password){
        password = Password;
    }
    public String getPassword(){
        return password;
    }

}