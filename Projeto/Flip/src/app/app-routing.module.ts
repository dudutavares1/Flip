import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { HomeComponent } from './home/home.component';

import { MenuComponent } from './menu/menu.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { RodapeComponent } from './rodape/rodape.component';

const routes: Routes = [
  { path: 'menu', component: MenuComponent },
  { path: 'rodape', component: RodapeComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'cadastro', component: CadastroClienteComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
