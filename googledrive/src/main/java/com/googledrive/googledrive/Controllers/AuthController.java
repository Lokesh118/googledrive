package com.googledrive.googledrive.Controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.googledrive.googledrive.Models.User;

@RestController
@RequestMapping("/api/v1/auth")
public class AuthController {
    // @Autowired
    // private JwtTokenHelper jwtTokenHelper;

    // @Autowired
    // private UserDetailsService userDetailsService;

    // @Autowired
    // private AuthenticationManager authenticationManager;

    // @Autowired
    // private UserService userService;

    // @PostMapping("/login")
    // public ResponseEntity<JwtAuthResponse>
    @PostMapping("/register")
    public ResponseEntity<User> registerUser(@RequestBody User user){
        // try{
        //     userRepository.save(user);
        //     return new ResponseEntity<>("User registration successful!", Http.CREATED);
        // } catch (Exception e){
        //     return new ResponseEntity<>("Error occured during registration" + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        // }
        return new ResponseEntity<User>(user, null, 0);
    }

}
