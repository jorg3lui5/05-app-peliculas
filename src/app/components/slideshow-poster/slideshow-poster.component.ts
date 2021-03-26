import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Pelicula } from 'src/app/interfaces/interfaces';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
})
export class SlideshowPosterComponent implements OnInit {
  @Input() peliculas: Pelicula[]=[];
  slideOpts = {
    slidesPerView: 3.3,
    freeMode: true
  };
  
  constructor(
    private modalController: ModalController,

  ) { }

  ngOnInit() {}

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
