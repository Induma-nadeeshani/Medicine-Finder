package com.projects.MedicineFinder.auth;

import com.projects.MedicineFinder.model.*;
import com.projects.MedicineFinder.repository.AgencyRepository;
import com.projects.MedicineFinder.repository.CustomerRepository;
import com.projects.MedicineFinder.repository.UserRepository;
import com.projects.MedicineFinder.config.JwtService;
import com.projects.MedicineFinder.service.EmailService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository repository;
    private final CustomerRepository customerRepository;

    private final AgencyRepository agencyRepository;
    private final PasswordEncoder passwordEncoder;

    private final JwtService jwtService;

    private final AuthenticationManager authenticationManager;

    private final EmailService emailService;

    private void sendEmail(String email){
        Email body = new Email();
        body.setRecipient(email);
                body.setSubject("Verify");
        body.setMsgBody("dgsdjsd");

        emailService.sendSimpleMail(body);
    }
    public AuthenticationResponse register(RegisterRequest request) {

        Optional<User> userTemp = repository.findByEmail(request.getEmail());

        if (userTemp.isPresent()) {
            return null;

        } else {

            var user = User.builder()
                    .email(request.getEmail())
                    .password(passwordEncoder.encode(request.getPassword()))
                    .role(request.getRole())
                    .build();

            repository.save(user);

            if (request.getRole() == Role.CUSTOMER){
                Customer cus = new Customer(user.getId(),user.getEmail(), user.getPassword());
                customerRepository.save(cus);
            }

            var jwtToken = jwtService.generateToken(user);

            this.sendEmail(request.getEmail());

            return AuthenticationResponse.builder()
                    .token(jwtToken)
                    .build();
        }

    }

    public AuthenticationResponse registerAgency(@RequestBody AgencyRequest agencyRequest) {

        Optional<User> userTemp = repository.findByEmail(agencyRequest.getEmail());

        if (userTemp.isPresent()) {
            return null;

        } else {

            var user = User.builder()
                    .email(agencyRequest.getEmail())
                    .password(passwordEncoder.encode(agencyRequest.getPassword()))
                    .role(agencyRequest.getRole())
                    .build();

            repository.save(user);

            if (agencyRequest.getRole() == Role.AGENCY){

                Agency ag = Agency.builder()
                                .agencyname(agencyRequest.getAgencyname())
                                .email(agencyRequest.getEmail())
                                .address(agencyRequest.getAddress())
                                .password(passwordEncoder.encode(agencyRequest.getPassword()))
                                .licenseno(agencyRequest.getLicenseno())
                                .latitude(agencyRequest.getLatitude())
                                .longitude(agencyRequest.getLongitude())
                                .build();


                agencyRepository.save(ag);
            }

            var jwtToken = jwtService.generateToken(user);

            return AuthenticationResponse.builder()
                    .token(jwtToken)
                    .build();
        }

    }
    public AuthenticationResponse authenticate(RegisterRequest request) {

        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );
        var user =  repository.findByEmail(request.getEmail())
                .orElseThrow()  ;
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }
}
