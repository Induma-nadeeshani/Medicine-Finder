package com.projects.MedicineFinder.controller;


import com.projects.MedicineFinder.model.Store;
import com.projects.MedicineFinder.service.StoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/store")
public class StoreController {

    @Autowired
    private StoreService storeService;


//    public StoreController(StoreService storeService) {
//        this.storeService = storeService;
//    }

    @GetMapping(value = "/stores")
    public List<Store> getAllStores(){
        return storeService.findAll();
    }

    @GetMapping(value = "/byagency", params = {"agencyid"}, produces = "application/json")
    public List<Store> findStoresByAgency(@RequestParam("agencyid") int agencyid) {

        return storeService.findStoresByAgency(agencyid);

    }
//    @PostMapping
//    public String add(@Validated @RequestBody Store store){
//        Store email = storeService.findByStoreId(store.getStoreid());
//
//        if (email != null)
//            return "Error : Store already Registered(Email Exists)";
//
//        try {
//            storeService.save(store);
//            return "0";
//        } catch (Exception ex) {
//            return "Error : " + ex.getMessage();
//        }
//
//    }
//
//    @PutMapping
//    public String update(@Validated @RequestBody Store store) {
//        Store cus = storeService.getOne(store.getStoreid());
//        if (cus != null) {
//            try {
//                storeService.save(store);
//                return "0";
//            } catch (Exception ex) {
//                return "Error : " + ex.getMessage();
//
//            }
//        } else {
//            return "Error : Store doesn't Exist";
//
//        }
//    }

    //public String delete(@Validated @RequestBody Store store) {
}
