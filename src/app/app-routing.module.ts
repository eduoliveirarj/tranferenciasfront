import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranferenciasComponent } from './componentes/tranferencias/tranferencias.component';
import { CadastroComponent } from './componentes/cadastro/cadastro.component';
import { AlteracaoComponent } from './componentes/alteracao/alteracao.component';

const routes: Routes = [
  {path:'',redirectTo:'/tranferencia',pathMatch:'full'},
  {path:'transferencia',component:TranferenciasComponent},
  {path:'cadastro',component:CadastroComponent},
  {path:'editar/:id',component:AlteracaoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
