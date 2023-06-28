package com.projects.MedicineFinder.repository;

import com.projects.MedicineFinder.model.Drug;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DrugRepository extends JpaRepository<Drug, Integer> {

//    @Query(value = "SELECT new Drug (d.id,d.brandname,d.genericname,d.description) FROM Drug d where d in(select a.drugId from Store a where a.agencyId=1) ")
//    List<Drug> getDrugsByAgency();

}
