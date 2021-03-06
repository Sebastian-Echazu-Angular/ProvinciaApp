import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Provincia } from '../interface/provincia';

@Injectable({
  providedIn: 'root'
})
export class ProvinciasService {

  public provincias: any[] = [];

  public provincia : Provincia;

  urlProvincia : string = 'http://localhost/proyectos/lista_provincias.php';

  constructor(private http: HttpClient) { }

  public getProvincias() {
    return this.http.get(this.urlProvincia)
      .pipe(map((provinciaserve => {
        this.provincias = JSON.parse(JSON.stringify(provinciaserve));
        console.log(this.provincias);
        return this.provincias;
      })))
  }
  public getProvinciaTarjeta(nombreProvincia:String){
    this.provincias.forEach(element => {
      if(element.provincia == nombreProvincia)
      this.provincia = element;
    });
    return this.provincia;
  }
  
  public buscarProvincias(superficie: string):Provincia[] {
    
    let provinciaArr: Provincia[] = [];
    let superficieInt = parseInt(superficie);
    console.log(superficieInt.valueOf());
    for(let provincia of this.provincias){
      let ins = parseInt(provincia.superficie);
      if (superficieInt >= ins) {
        provinciaArr.push(provincia);
      }
    }
    console.log(provinciaArr);
   return provinciaArr;
  }
}
