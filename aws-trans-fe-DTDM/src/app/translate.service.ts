import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
export class TranslateService {

constructor(private _http:HttpClient) { }
Url="https://translateawsnodejs.herokuapp.com/"

// translate(data:any){
//     return this._http.post<any>('https://translateawsnodejs.herokuapp.com/translate',data );
// }


translate(data:any){
  return this._http.post<any>('http://localhost:3131/translate',data );
}

}