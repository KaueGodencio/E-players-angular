import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// Imports das Views/Rotas
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { ProdutoComponent } from './views/produto/produto.component';
import { TesteComponent } from './views/teste/teste.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "produto", component: ProdutoComponent},
  {path: "testeEdu", component: TesteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
