package com.projects.MedicineFinder.auth;


import com.projects.MedicineFinder.model.Role;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AgencyRequest {

    private Integer id;
    private String agencyname;
    private String address;
    private String email;

    @Enumerated(EnumType.STRING)
    private Role role;

    private String licenseno;
    private String longitude;
    private String latitude;
    private String password;


}
