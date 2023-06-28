package com.projects.MedicineFinder.controller;


import com.projects.MedicineFinder.model.Drug;
import com.projects.MedicineFinder.repository.DrugRepository;
import com.projects.MedicineFinder.service.DrugService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000/")
@RequestMapping("/drug")
public class DrugController {

    @Autowired
    private DrugService drugService;

    @Autowired
    private DrugRepository drugRepository;

    @GetMapping(value = "/drugs")
    public List<Drug> getAllDrugs(){
        return drugService.findAll();
    }

    @PostMapping
//    @PreAuthorize("hasAnyAuthority('ADMIN','AGENCY')")
    public String add(@Validated @RequestBody Drug drug){

        try {
            drugRepository.save(drug);
            return "0";
        } catch (Exception ex) {
            return "Error : " + ex.getMessage();
        }

    }

    @PutMapping
    @PreAuthorize("hasAnyAuthority('ADMIN','AGENCY')")
    public String update(@Validated @RequestBody Drug drug) {
        Drug drugUp = drugRepository.getOne(drug.getId());
        if (drugUp != null) {

            try {
                drugRepository.save(drug);
                return "0";

            } catch (Exception ex) {
                return "Error : " + ex.getMessage();

            }
        } else {
            return "Error : Drug doesn't Exist";

        }
    }


    @DeleteMapping
    @PreAuthorize("hasAnyAuthority('ADMIN','AGENCY')")
    public String delete(@Validated @RequestBody Drug drug) {

            Drug delDrug = drugRepository.getOne(drug.getId());
            if (delDrug != null) {
                try {
                    drugRepository.delete(delDrug);
                    return "0";

                } catch (Exception ex) {
                    return "Error : " + ex.getMessage();

                }
            } else {
                return "Error : Drug doesn't Exist";

            }

    }
}
