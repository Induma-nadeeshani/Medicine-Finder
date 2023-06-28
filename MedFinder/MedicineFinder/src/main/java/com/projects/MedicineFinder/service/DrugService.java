package com.projects.MedicineFinder.service;

import com.projects.MedicineFinder.model.Drug;
import com.projects.MedicineFinder.repository.DrugRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DrugService {

    @Autowired
    private DrugRepository drugRepository;

    public List<Drug> findAll() {
        return drugRepository.findAll();
    }

}
