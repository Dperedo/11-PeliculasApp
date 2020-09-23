import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apikey: string = "ee2ec066e7488a87a33dc0b8a49190fe";
  private urlMoviedb: string = "https://api.themoviedb.org/3";
  private lang: string = "es-ES";

  peliculas: any[] = [];

  constructor( private http: HttpClient ) { }

  getPopulares() {
    // tslint:disable-next-line: max-line-length
    let url = `${ this.urlMoviedb }/movie/popular?api_key=${this.apikey}&language=es`; // &callback=JSONP_CALLBACK
    return this.http.get( url )
  .pipe(map( (res: any) => res.results));
  }

  buscarPelicula( texto: string ) {
    // tslint:disable-next-line: max-line-length
    let url = `${ this.urlMoviedb }/search/movie?api_key=${this.apikey}&language=${this.lang}&query=${ texto }`; // &callback=JSONP_CALLBACK
    return this.http.get( url )
  .pipe(map( (res: any) => {
    this.peliculas = res.results;
    return res.results;
  }));
  }

  getPelicula( id: string ) {
    // tslint:disable-next-line: max-line-length
    let url = `${ this.urlMoviedb }/movie/${ id }?api_key=${this.apikey}&language=es-ES`; // &callback=JSONP_CALLBACK ${ id }
    console.log(url);
    return this.http.get( url ).pipe(map( (res: any) => res));
  }
}
