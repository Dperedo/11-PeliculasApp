import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  buscar = '';

  // tslint:disable-next-line: variable-name
  constructor(public _ps: PeliculasService, public route: ActivatedRoute ) {

    this.route.params.subscribe( parametros =>  {
      console.log(parametros);
      if ( parametros['texto'] ){
        this.buscar = parametros['texto'];
        this.buscarPelicula();
      }
    });
  }

  ngOnInit(): void {
  }

  buscarPelicula() {
    if ( this.buscar.length === 0 ) {
      return;
    }

    this._ps.buscarPelicula( this.buscar ).subscribe(

    );
    return;
  }

}
