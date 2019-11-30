import { Component, OnInit } from '@angular/core';
import { ProvinciasService } from 'src/app/service/provincias.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-provincias-argentinas',
  templateUrl: './provincias-argentinas.component.html',
  styleUrls: ['./provincias-argentinas.component.css']
})
export class ProvinciasArgentinasComponent implements OnInit {

  columns:number = 4;

  provincias: any[] = [];

  constructor(private _provinciasService:ProvinciasService, private router:Router) { }

  ngOnInit() {
    
    this._provinciasService.getProvincias().subscribe(data => {this.provincias = data});
  }

}
