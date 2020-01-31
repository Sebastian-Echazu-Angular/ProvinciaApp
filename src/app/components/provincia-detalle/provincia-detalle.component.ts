import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProvinciasService } from 'src/app/service/provincias.service';
import { Provincia } from 'src/app/interface/provincia';

@Component({
  selector: 'app-provincia-detalle',
  templateUrl: './provincia-detalle.component.html',
  styleUrls: ['./provincia-detalle.component.css']
})
export class ProvinciaDetalleComponent {

  nombreProvincia: string;

  provincia: Provincia;

  constructor(private activatedRoute: ActivatedRoute, private _provinciaService: ProvinciasService) {
    this.activatedRoute.params.subscribe(params => {
      this.provincia = _provinciaService.getProvinciaTarjeta(params['nombreProvincia']);
    })

  }

}
