
import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { DepositoService,Deposito } from 'src/app/service/deposito.service';


@Component({
  selector: 'app-alteracao',
  templateUrl: './alteracao.component.html',
  styleUrls: ['./alteracao.component.css']
})
export class AlteracaoComponent implements OnInit {
  deposito: Deposito = {
    id_tranferencias: 0,
    nomeCliente:'',
    valor:'',
    conta:''

  }

  constructor(private depositoService:DepositoService, private router:Router,private ativarRota:ActivatedRoute ) { }

  ngOnInit(): void {
    const movimentacao = <any>this.ativarRota.snapshot.params['id']
    console.log("id da movimentação " + movimentacao);
    this.depositoService.umaTranfrerencia(movimentacao).subscribe({
      next:(resultado)=>{
        console.log(resultado)
        this.deposito = resultado
      },
      error:(erro)=>console.error(erro),
      complete:()=>console.info("Tudo certo")

    })

  }
  editar(){
    this.depositoService.editarDeposito(this.deposito.id_tranferencias,this.deposito).subscribe({
      next:(resultado)=>{
        console.log("Editado com sucesso")
        this.deposito = resultado
      },
      error:(erro)=>console.error(erro),
      complete:()=>console.info("Tudo certo")

    })
    this.router.navigate(['/transferencia'])
  }
}
