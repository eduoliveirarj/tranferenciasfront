import { DepositoService,Deposito } from './../../service/deposito.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tranferencias',
  templateUrl: './tranferencias.component.html',
  styleUrls: ['./tranferencias.component.css']
})
export class TranferenciasComponent implements OnInit {
  ListaDeDepositos: Deposito[]


  constructor(private depositoService:DepositoService, private router:Router) {
    this.ListaDeDepositos = []
   }

  ngOnInit(): void {
    this.listaDepositos()

  }
  listaDepositos(){
    this.depositoService.todasTranferencias().subscribe({
      next:(resultado)=>{
        console.log(resultado)
        this.ListaDeDepositos = <any>resultado
      },
      error:(erro)=>console.error(erro),
      complete:()=>console.info("Tudo certo")
    })
  }
  excluir(id:any){
    this.depositoService.excluirDeposito(id).subscribe({
      next:(resultado)=>{
        console.log('Exclusão Feita com Sucesso')
        this.listaDepositos()
      },
      error:(erro)=>console.error(erro),
      complete:()=>console.info("Tudo certo")
    })


  }
  editar(id:any){
    this.router.navigate(['/editar/' + id])

  }


}
