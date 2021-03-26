import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Cast, PeliculaDetalle } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {
  @Input() id;
  pelicula: PeliculaDetalle = {};
  oculto = 150;
  actores: Cast[] = [];
  slideOptActores = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -5,
  };

  constructor(
    private _moviesService: MoviesService,
    private modalController: ModalController,

  ) { }

  ngOnInit() {
    console.log('ID', this.id);
    this._moviesService.getPeliculaDetalle(this.id)
      .subscribe(resp=>{
        console.log(resp);
        this.pelicula=resp;
    })

    this._moviesService.getActoresPelicula(this.id)
    .subscribe(resp=>{
      console.log(resp);
      this.actores = resp.cast;
  })
  }

  regresar(){
    this.modalController.dismiss();
  }

  favorito(){
    
  }
}
