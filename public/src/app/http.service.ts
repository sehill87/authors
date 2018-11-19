import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) { 
  
  }
  getAuthors(){
    // let tempObservable = this._http.get('/tasks');
    // tempObservable.subscribe(data=> console.log('Got our tasks!', data))
    return this._http.get('api');
  }
  getAuthor(id){
    // let tempObservable = this._http.get('/tasks/5be61addf7319843838a0560')
    // tempObservable.subscribe(data=> console.log('Got one task!!!', data))
    return this._http.get('api/' + id)
  }
  addAuthor(newauthor) {
    return this._http.post('api', newauthor)
  }
  editAuthor(id, editauthor) {
    return this._http.put('api/' + id, editauthor)
  }
  deleteAuthor(id) {
    return this._http.delete('api/' + id)
  }
}


 