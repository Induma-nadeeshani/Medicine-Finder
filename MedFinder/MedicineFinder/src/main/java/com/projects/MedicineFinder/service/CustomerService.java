package com.projects.MedicineFinder.service;

import com.projects.MedicineFinder.model.Customer;
import com.projects.MedicineFinder.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerService {

    @Autowired
    private CustomerRepository customerRepository;

    public List<Customer> findAll() {

        return customerRepository.findAll();
    }



}
