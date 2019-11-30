import { Component, OnInit, Input } from '@angular/core';
import { ProvinciasService } from 'src/app/service/provincias.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Provincia } from 'src/app/interface/provincia';

@Component({
  selector: 'app-provincia',
  templateUrl: './provincia.component.html',
  styleUrls: ['./provincia.component.css']
})
export class ProvinciaComponent implements OnInit {

  @Input() nombreProvincia : string;
  provincia : Provincia;

  constructor(private _provinciasService:ProvinciasService, private ActivaRoute:ActivatedRoute,private router: Router) { }

  ngOnInit() {

    this.ActivaRoute.params.subscribe(params =>{
      this.provincia = this._provinciasService.getProvinciaTarjeta(this.nombreProvincia);
    })
  }
  public provinciaDetalle(ins:string){ this.router.navigate(['/provincia-detalle', ins]) }

}
