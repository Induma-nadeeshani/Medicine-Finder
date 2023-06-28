package com.projects.MedicineFinder.repository;

import com.projects.MedicineFinder.model.Store;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StoreRepository extends JpaRepository<Store, Integer> {

    @Query(value = "select s from Store s where s.agencyId.id =:agencyId")
    List<Store> findStoresByAgency(Integer agencyId);
}
