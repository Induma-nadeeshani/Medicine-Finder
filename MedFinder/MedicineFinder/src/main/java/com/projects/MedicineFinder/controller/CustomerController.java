package com.projects.MedicineFinder.controller;


import com.projects.MedicineFinder.auth.AuthenticationResponse;
import com.projects.MedicineFinder.config.JwtService;
import com.projects.MedicineFinder.model.Customer;
import com.projects.MedicineFinder.model.Drug;
import com.projects.MedicineFinder.model.Role;
import com.projects.MedicineFinder.model.User;
import com.projects.MedicineFinder.repository.CustomerRepository;
import com.projects.MedicineFinder.repository.UserRepository;
import com.projects.MedicineFinder.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000/")
@RequestMapping("/customer")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private UserRepository userRepository;

    //private JwtService jwtService;

    @GetMapping(value = "/customers")
    public List<Customer> getAllCustomers(){
        return customerService.findAll();
    }


//    @PostMapping
//    public AuthenticationResponse add( @RequestBody Customer customer){
//
//        //Customer email = customerService.getByNumber(customer.getEmail());
//        try {
//            customerRepository.save(customer);
//
//        } catch (Exception ex) {
//            return null;
//           // return "Error : " + ex.getMessage();
//        }
////
   // }

    @PutMapping("/update")
    public String update(@Validated @RequestBody Customer customer) {
        Customer cus = customerRepository.getOne(customer.getId());
        if (cus != null) {
            try {
                customerRepository.save(customer);
                return "0";

            } catch (Exception ex) {
                return "Error : " + ex.getMessage();

            }
        } else {
            return "Error : Customer doesn't Exist";

        }
    }

    @DeleteMapping("delete")
    @PreAuthorize("hasAnyAuthority('ADMIN')")
    public String delete(@Validated @RequestBody Customer customer) {

        Customer delCustomer = customerRepository.getOne(customer.getId());
        if (delCustomer != null) {
            try {
                customerRepository.delete(delCustomer);
                return "0";

            } catch (Exception ex) {
                return "Error : " + ex.getMessage();

            }
        } else {
            return "Error : Drug doesn't Exist";

        }

    }
}
