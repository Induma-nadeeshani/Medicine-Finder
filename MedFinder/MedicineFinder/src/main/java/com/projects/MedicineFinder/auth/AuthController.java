package com.projects.MedicineFinder.auth;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RequiredArgsConstructor
@RestController
@RequestMapping ("/auth")

public class AuthController {

    private final AuthService service;

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(@RequestBody RegisterRequest request){

        return ResponseEntity.ok(service.register(request));
    }

    @PostMapping("/registeragency")
    public ResponseEntity<AuthenticationResponse> agencyRegister(@RequestBody AgencyRequest agencyRequest){

        return ResponseEntity.ok(service.registerAgency(agencyRequest));
    }


    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(
            @RequestBody RegisterRequest request
    ){

        return ResponseEntity.ok(service.authenticate(request));

    }

}

