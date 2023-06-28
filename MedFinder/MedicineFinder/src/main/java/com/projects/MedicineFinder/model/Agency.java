package com.projects.MedicineFinder.model;
//


import com.fasterxml.jackson.annotation.JsonInclude;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data //setters,getters
@Builder
@AllArgsConstructor
@Entity
@Table(name = "agency")
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Agency {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "agencyname", nullable = false)
    private String agencyname;

    @Column(name = "address", nullable = false)
    private String address;

    @Column(name = "email" , nullable = false)
    private String email;

    @Column(name = "licenseno", nullable = false)
    private String licenseno;

    @Column(name = "longitude", nullable = false)
    private String longitude;

    @Column(name = "latitude", nullable = false)
    private String latitude;

    @Column(name = "password" , nullable = false)
    private String password;


}
//
//
