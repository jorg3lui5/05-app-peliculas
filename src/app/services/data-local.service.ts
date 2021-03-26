import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { PeliculaDetalle } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  private _storage: Storage | null = null;

  peliculas: PeliculaDetalle[]=[];
  constructor(
    private storage: Storage,
  ) 
  { 
    this.init();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    
    this._storage = storage;
  }

  guardarPelicula(pelicula: PeliculaDetalle){
    
    this.peliculas.push(pelicula);
    console.log(this.peliculas);
    this._storage.set('peliculas', this.peliculas);
    this._storage.get('peliculas').then(
      data=>{
        console.log(data);
      }
    );
  }
}
