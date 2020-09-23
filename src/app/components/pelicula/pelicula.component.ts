import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: [
  ]
})
export class PeliculaComponent implements OnInit {

  pelicula: any;
  regregarA:string = "";
  busqueda: string = "";

  constructor(public _ps: PeliculasService, public route: ActivatedRoute ) {

    this.route.params.subscribe( parametros =>  {
      console.log(parametros);
      this.regregarA = parametros['pag'];
      if ( parametros['busqueda'] ) {
        this.busqueda = parametros['busqueda'];
      }
      this._ps.getPelicula( parametros['id']).subscribe( peli => {
        this.pelicula = peli;
      });
    });
  }



  // private apikey: string = "ee2ec066e7488a87a33dc0b8a49190fe";
  // private urlMoviedb: string = "https://api.themoviedb.org/3";

  // constructor( private http: HttpClient ) { }

  // getCartelera() {

  //   let desde = new Date();
  //   let hasta = new Date();
  //   hasta.setDate( hasta.getDate() + 7);

  //   let desdeStr = `${ desde.getFullYear() }-${ desde.getMonth() + 1 }-${desde.getDate() }`;
  //   let hastaStr = `${ hasta.getFullYear() }-${ hasta.getMonth() + 1 }-${hasta.getDate() }`;

  //   // tslint:disable-next-line: max-line-length
  //   let url = `${ this.urlMoviedb }/movie/popular?api_key=${this.apikey}&language=es`; // &callback=JSONP_CALLBACK
  //   return this.http.get( url )
  // .pipe(map( (res: any) => res.results));
  // }

  ngOnInit(): void {
  }

}
