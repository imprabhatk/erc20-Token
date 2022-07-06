import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Erc20Component } from './erc20.component';
import { Erc20TokenComponent } from './erc20-token/erc20-token.component';


const routes: Routes = [
  {
    path : '',
    component : Erc20Component,
    children : [
      {
        path : '',
        redirectTo : 'erc20Token',
        pathMatch : 'full'
      },
      {
        path : 'erc20Token',
        component : Erc20TokenComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class Erc20RoutingModule { }