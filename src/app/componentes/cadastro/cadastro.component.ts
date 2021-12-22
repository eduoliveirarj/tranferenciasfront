import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepositoService,Deposito } from 'src/app/service/deposito.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  deposito: Deposito = {
    id_tranferencias: 0,
    nomeCliente:'',
    valor:'',
    conta:''

  }

  constructor(private depositoService:DepositoService, private router:Router) { }

  ngOnInit(): void {
  }
  novoDeposito(){
    delete this.deposito.id_tranferencias
    this.depositoService.fazerDeposito(this.deposito).subscribe({
      next:(resultado)=>{
        console.log("Inclusão feita com sucesso")
      },
      error:(erro)=>console.error(erro),
      complete:()=>console.info("Tudo certo")

    })
    this.router.navigate(['/transferencia'])
  }
}
