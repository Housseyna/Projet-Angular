import { Component, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SumService {
  

  constructor(private httpClient:HttpClient) {}

  //public sendGetRequest(a:any, b:any)

  public getSum(a:any, b:any)
  {
    return this.httpClient.get(`http://localhost:5000/api/sum?a=a&b=b`);

    //return this.httpClient.get(`http://localhost:5000/api/sum?`,{params:{"param1": a, "param2": b}});
  }

  

  //getSum(a:number,b:number)
  //{
   // return +this.httpClient.get('http://localhost:5000/api/sum?a=+a&b=+b');
  //}

  

}