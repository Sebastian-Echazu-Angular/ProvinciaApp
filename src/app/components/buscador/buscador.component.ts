import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProvinciasService } from 'src/app/service/provincias.service';
import { Provincia } from 'src/app/interface/provincia';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  provincias : Provincia[]=[];
  superficie : string;

  constructor(private activatedRoute:ActivatedRoute,private router:Router,private _provinciasService:ProvinciasService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params =>{
      this.superficie = params['superficie'];
      this.provincias = this._provinciasService.buscarProvincias(params ["superficie"]);
    })
  }
  public provinciaDetalle(ins:string){ this.router.navigate(['/provincia-detalle', ins]) }

}
