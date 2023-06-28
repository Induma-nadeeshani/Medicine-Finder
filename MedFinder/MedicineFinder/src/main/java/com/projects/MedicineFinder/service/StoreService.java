package com.projects.MedicineFinder.service;

import com.projects.MedicineFinder.model.Store;
import com.projects.MedicineFinder.repository.StoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StoreService {

    @Autowired
    private StoreRepository storeRepository;

    public List<Store> findAll() {
        return storeRepository.findAll();
    }


    public List<Store> findStoresByAgency(Integer agencyId) {

        return storeRepository.findStoresByAgency(agencyId);
    }
}
