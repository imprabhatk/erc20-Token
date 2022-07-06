import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Erc20RoutingModule } from './erc20-routing.module';
import { Erc20Component } from './erc20.component';
import { Erc20TokenComponent } from './erc20-token/erc20-token.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    Erc20Component,
    Erc20TokenComponent
  ],
  imports: [
    CommonModule,
    Erc20RoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class Erc20Module { }
