import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from '../../interfaces/interfaces';
import {ModalController} from '@ionic/angular'
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
})
export class SlideshowBackdropComponent implements OnInit {

  @Input() peliculas: Pelicula[]=[];
  slideOpts = {
    slidesPerView: 1.3,
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
