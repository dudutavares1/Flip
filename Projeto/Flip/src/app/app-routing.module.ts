import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { ProdutosComponent } from './produtos/produtos.component';
import { RodapeComponent } from './rodape/rodape.component';

const routes: Routes = [
  { path: 'rodape', component: RodapeComponent },
  { path: 'produtos', component: ProdutosComponent },
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
