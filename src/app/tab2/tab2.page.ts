import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../components/detalle/detalle.component';
import { Pelicula } from '../interfaces/interfaces';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  textoBuscar: string = '';
  ideas: string[] = ['Spiderman', 'Avenger', 'El señor de los anillos', 'La vida es bella']
  peliculas: Pelicula[] = [];
  buscando = false;
  constructor(
    private moviesService: MoviesService,
    private modalController: ModalController,
  ) {}

  buscar(event) {
    this.buscando=true;
    const valor:string=event.detail.value;
    console.log(valor);
    if(valor.length===0){
      this.buscando=false;
      this.peliculas= [];
      return;
    }
    this.moviesService.buscarPeliculas(valor)
    .subscribe(resp=>{
      console.log('Peliculas encontradas:',resp);
      this.peliculas=resp['results'];
      this.buscando=false;
    });
  }

  buscarPeliculaSeleccionada(idea:string){
    this.textoBuscar=idea;
  }

  async verDetalle(id: number){
    console.log('abc')
    const modal= await this.modalController.create({
      component: DetalleComponent,
      componentProps: {
        id: id
      }
    });

    modal.present();
  }
}
