package com.projects.MedicineFinder.service;

import com.projects.MedicineFinder.model.Agency;
import com.projects.MedicineFinder.repository.AgencyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AgencyService {

    @Autowired
    private AgencyRepository agencyRepository;

    public List<Agency> findAll() {
        return agencyRepository.findAll();
    }
}
