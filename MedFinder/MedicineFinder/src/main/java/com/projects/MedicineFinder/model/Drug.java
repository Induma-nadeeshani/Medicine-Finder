package com.projects.MedicineFinder.model;
//


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data //setters,getters
@AllArgsConstructor
@Entity
@Table(name = "drug")
@NoArgsConstructor
public class Drug {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "genericname", nullable = false)
    private String genericname;

    @Column(name = "brandname" , nullable = false)
    private String brandname;

    @Column(name = "searchindex" , nullable = false)
    private String searchindex;

    @Column(name = "description")
    private String description;


    public  Drug(Integer id, String brandname, String genericname,String description ){
        this.id = id;
        this.brandname = brandname;
        this.genericname = genericname;
        this.description = description;
    }

}
//
//
