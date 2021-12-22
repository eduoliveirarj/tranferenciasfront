import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepositoService {
  url = 'http://localhost:3000/banco'

  constructor(private http:HttpClient) { }

  todasTranferencias(){
    return this.http.get(this.url)

  }
  umaTranfrerencia(id:any){
    return this.http.get(this.url + '/' + id)
  }


  fazerDeposito(deposito:Deposito){
    return this.http.post(this.url,deposito)
  }
  excluirDeposito(id:any){
    return this.http.delete(this.url + '/' + id)
  }
  editarDeposito(id:any,deposito:Deposito){
    return this.http.put(this.url + '/' + id, deposito)
  }

}
export interface Deposito{
                            id_tranferencias?:number
                            nomeCliente?:string
                            valor?:string
                            conta?:string}


