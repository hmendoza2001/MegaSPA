package com.example.javaApi.services;

//import java.util.ArrayList;
import java.util.List;

import com.example.javaApi.entities.Country;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.javaApi.repositories.CountryRepository;

@Service
public class CountryService
{
  private final CountryRepository countryRepository;

  @Autowired
  public CountryService(CountryRepository countryRepository)
  {
    this.countryRepository = countryRepository;
  }

  /**
   *
   */
  public List<Country> getAllCountries()
  {
    System.out.println("CountryService.getAllCountries reached");

    //List<Country> countries = new ArrayList<Country>();
    //countries.add(new Country("USA", 2025));
    //return countries;

    return countryRepository.findAll();
  }
}