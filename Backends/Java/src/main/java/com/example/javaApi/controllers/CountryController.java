package com.example.javaApi.controllers;

import java.util.List;

import com.example.javaApi.entities.Country;
import com.example.javaApi.services.CountryService;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/v1")
public class CountryController
{
  private final CountryService countryService;

  @Autowired
  public CountryController(CountryService countryService)
  {
    this.countryService = countryService;
  }

  @CrossOrigin(origins = "http://localhost:5173")
  @GetMapping("/countries")
  public List<Country> getAllCountries() {
    System.out.println("CountryController.getAllCountries reached");
    return countryService.getAllCountries();
  }
}