import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Pelicula } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  peliculasRecientes : Pelicula[] =[]; 

  peliculasPopulares : Pelicula[] = [];

  constructor(
    private moviesService: MoviesService
  ) {}

  ngOnInit() {
    this.moviesService.getfeature()
      .subscribe(resp=>{
        console.log('Peliculas nuevas y cartelera:',resp);
        this.peliculasRecientes=resp.results;
      });
    
    this.getPopulares();
  }

  cargarMas(){
    this.getPopulares();
  }

  getPopulares(){
    this.moviesService.getPopulares()
    .subscribe(resp=>{
      console.log('Populares:',resp);
      const arreTemp= [... this.peliculasPopulares, ...resp.results];
      this.peliculasPopulares = arreTemp;
    });
  }
}
