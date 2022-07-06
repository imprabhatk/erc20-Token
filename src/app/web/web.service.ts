import { Injectable } from '@angular/core';
import Web3 from 'web3';

const web3 =new Web3(window.web3.currentProvider);
declare let window: any;

@Injectable({
  providedIn: 'root'
})

export class WebService {

  constructor() { }

  // returnAllowance(owner , spender) {

  // }

  // Send Transaction Ether
  sendTransactionEther(from : string, to : string, value : string) {    
    let value1 = value.toString();    
    web3.eth.sendTransaction({
      from :  from,
      to : to,
      value : web3.utils.toWei(value1, "ether")
    });
  }
}