package com.projects.MedicineFinder.controller;


import com.projects.MedicineFinder.config.JwtService;
import com.projects.MedicineFinder.model.Agency;
import com.projects.MedicineFinder.model.Role;
import com.projects.MedicineFinder.model.User;
import com.projects.MedicineFinder.repository.AgencyRepository;
import com.projects.MedicineFinder.repository.UserRepository;
import com.projects.MedicineFinder.service.AgencyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000/")
@RequestMapping("/agency")
public class AgencyController {

    @Autowired
    private AgencyService agencyService;

    @Autowired
    private AgencyRepository agencyRepository;

    @Autowired
    private UserRepository userRepository;

    private JwtService jwtService;

//    public AgencyController(AgencyService agencyService) {
//        this.agencyService = agencyService;
//    }

    @GetMapping(value = "/agencies")
    public List<Agency> getAllAgencies(){
        return agencyService.findAll();
    }


//    @PostMapping
//    public String add(@Validated @RequestBody Agency agency){
//       // Agency email = agencyService.findAll().get(agency.getId());
////
////        if (email != null)
////            return "Error : Agency already Registered(Email Exists)";
//        User user = new User(agency.getId(), agency.getEmail(), agency.getPassword(), Role.AGENCY );
//
//        try {
//            userRepository.save(user);
//            var jwtToken = jwtService.generateToken(user);
//
//            agencyRepository.save(agency);
//            return jwtToken;
//
//        } catch (Exception ex) {
//            return "Error : " + ex.getMessage();
//        }
//
//    }

//    @PutMapping
//    public String update(@Validated @RequestBody Agency agency) {
//        Agency cus = agencyService.getOne(agency.getAgencyid());
//        if (cus != null) {
//            try {
//                agencyService.save(agency);
//                return "0";
//            } catch (Exception ex) {
//                return "Error : " + ex.getMessage();
//
//            }
//        } else {
//            return "Error : Customer doesn't Exist";
//
//        }
//    }

    //public String delete(@Validated @RequestBody Agency agency) {
}
