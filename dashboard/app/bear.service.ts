import { Injectable } from '@angular/core';
import {  Jsonp , URLSearchParams , Headers, Http , Response , RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

import {Observable} from 'rxjs/Rx';
import { Bear} from './bear';

@Injectable()
export class BearService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private bearUrl = 'http://localhost:8081/api/bears';  // URL to web api

  constructor(
    private http: Http
    // private jsonp: Jsonp
  ) { }
  // constructor(private jsonp: Jsonp) { }
   ngOnInit() {
   }
  getBears() {
    // return Observable<Check[]>
    return this.http.get(this.bearUrl)
    .map(response => <Bear[]> response.json())
    // .catch(this.handleError)
    ;
  }  

  getAllBears() : Observable<Bear[]>{
    // ...using get request
    return this.http.get(this.bearUrl)
    // ...and calling .json() on the response to return data
    .map((res:Response) => res.json())
    //...errors if any
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }

  // Add a new comment
  addBear (body: Object): Observable<Bear[]> {
    let bodyString = JSON.stringify(body); // Stringify payload
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option

    return this.http.post(this.bearUrl, body, options) // ...using post request
    .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
    .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }

  findBearById(id: string) : Observable<Bear> {
    // End point for list of pets:
    // http://api.petfinder.com/pet.find?key=[API_KEY]&animal=[ANIMAL]&format=json&location=texas
    const endPoint = 'get'
    // URLSearchParams makes it easier to set query parameters and construct URL
    // rather than manually concatinatng
    let params = new URLSearchParams();
    // params.set('key', '555f8155d42d5c9be4705beaf4cce089');
    params.set('id', id);
    // params.set('format', 'json');
    // params.set('callback', 'JSONP_CALLBACK');
    console.log(id);
    // Return response
    return this.http
    .get(this.bearUrl+'/'+id)
    .map((res: Response) => res.json());
  }

    deleteBear(id: string) : Observable<Bear> {
    // End point for list of pets:
    // http://api.petfinder.com/pet.find?key=[API_KEY]&animal=[ANIMAL]&format=json&location=texas
    const endPoint = 'get'
    // URLSearchParams makes it easier to set query parameters and construct URL
    // rather than manually concatinatng
    let params = new URLSearchParams();
    // params.set('key', '555f8155d42d5c9be4705beaf4cce089');
    params.set('id', id);
    // params.set('format', 'json');
    // params.set('callback', 'JSONP_CALLBACK');
    console.log(id);
    // Return response
    return this.http
    .delete(this.bearUrl+'/'+id)
    .map((res: Response) => res.json());
  }

     updateBear(id: string) : Observable<Bear> {
    // End point for list of pets:
    // http://api.petfinder.com/pet.find?key=[API_KEY]&animal=[ANIMAL]&format=json&location=texas
    const endPoint = 'get'
    // URLSearchParams makes it easier to set query parameters and construct URL
    // rather than manually concatinatng
    let params = new URLSearchParams();
    // params.set('key', '555f8155d42d5c9be4705beaf4cce089');
    params.set('id', id);
    // params.set('format', 'json');
    // params.set('callback', 'JSONP_CALLBACK');
    console.log(id);
    // Return response
    return this.http
    .delete(this.bearUrl+'/'+id)
    .map((res: Response) => res.json());
  }




}
