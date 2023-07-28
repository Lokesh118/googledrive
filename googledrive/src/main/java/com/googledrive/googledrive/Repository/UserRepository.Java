package com.googledrive.googledrive.Repository;
import.com.googledrive.googledrive.Models.User;
import org.springframework.data.jpa.Repository.JpaRepository;

@Repository
public interface StudentRepository extends JpaRepository<User,Integer>{

}