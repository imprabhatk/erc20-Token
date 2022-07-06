import { Component, OnInit } from '@angular/core';
import Web3 from 'web3';

const web3 = new Web3(window.web3.currentProvider);
declare let window: any;
let tokenAbi =  [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "Paused",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "Unpaused",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      }
    ],
    "name": "allowance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "burn",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "burnFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "decimals",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "subtractedValue",
        "type": "uint256"
      }
    ],
    "name": "decreaseAllowance",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "addedValue",
        "type": "uint256"
      }
    ],
    "name": "increaseAllowance",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "mint",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "pause",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "paused",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "unpause",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]

@Component({
  selector: 'app-erc20-token',
  templateUrl: './erc20-token.component.html',
  styleUrls: ['./erc20-token.component.scss']
})

export class Erc20TokenComponent implements OnInit {

  public web: any;
  public from: string = '';
  public tokenContract: any;
  public contractAddress: string = '0x7c3dC7eDEB6bF17aD66ab48f9b377beda00a02Aa';
  public account: string = '';
  public isAccount: boolean = false;
  public approveSpender: string = '';
  public approveAmounts: number = 0;
  public transactionHashApprove: string = '';
  public isTransactionHash: boolean = false;
  public burnAmount: number = 0;
  public isBurn: boolean = false;
  public transactionHashBurn: string = '';
  public burnFromAddress: string = '';
  public burnFromAmount: number = 0;
  public trasactionHashBurnFrom: string = '';
  public isBurnFrom: boolean = false;
  public spenderDecrease: string = '';
  public amountSub: number = 0;
  public transactionHashDecrease: string = '';
  public isDecrease: boolean = false;
  public increaseSender: string = '';
  public increaseValue: number = 0;
  public transactionHashIncrease: string = '';
  public isIncrease: boolean = false;
  public mintAddress: string = '';
  public mintAmount: number = 0;
  public transactionHashMint: string = '';
  public isMint: boolean = false;
  public transactionHashPause: string = '';
  public isPause: boolean = false;
  public isPauseStatus: boolean = false;
  public transactionHashRenounceOwnerShip : string ='';
  public isRenounceOwnerShip : boolean = false;
  public toTransfer: string = '';
  public amountTransfer: number = 0;
  public transactionHashTransfer : string = '';
  public isTransfer : boolean = false;
  public fromTransferFrom: string = '';
  public toTransferFrom: string = '';
  public amountTransferFrom: number = 0;
  public transactionHashFrom : string = '';
  public isFrom : boolean = false;
  public newOwnerAddress: string = '';
  public transactionHashTransferOwner : string = '';
  public isTransferOwner : boolean = false;
  public transactionHashUnPause : string = '';
  public isUnPause : boolean = false;
  public unPauseStatus : boolean = false;
  public allowanceOwner: any;
  public allowanceSpender: any;
  public allowedAmount :number = 0;
  public isAllowance: boolean = false;  
  public addressBalanceOf: string = '';
  public isBalance: boolean = false;
  public balance: string = '';
  public decimal: string = '';
  public isDecimal: boolean = false;
  public name: string = '';
  public isName: boolean = false
  public ownerAddress: string = ''
  public isOwner: boolean = false;
  public pausedStatus: string = '';
  public isPausedStatus: boolean = false;
  public symbol: string = '';
  public isSymbol: boolean = false;
  public totalSupply: string = '';
  public isTotalSupply: boolean = false;

  constructor() { }

  ngOnInit(): void {
    if (typeof window.web3 !== 'undefined') {
      this.loadWeb3();
      this.web = new Web3(window.web3.currentProvider);
      this.web.eth.net.getId((err: any, netId: any) => {
        switch (netId) {
          case 1:
            //            console.log('This is mainnNet.');
            break;
          case 2:
            //            console.log('This s the deprecated modern test network.');
            break;
          case 3:
            //            console.log('This is the Ropsten test network.');
            break;
          case 4:
            //            console.log('This is the Rinky test network.');
            break;
          default:
            //            console.log('This is an Unknown network.');
            alert('Please connect to the test network ');
        }
      })
      if (this.web.eth.net.getId !== 4) {
        //        console.log(this.web.eth.net.getId);
      }
      else {
        console.warn('Please use a dapp browser like mist or MetaMask plugin for chrome');
      }
    }
    this.tokenContract = new this.web.eth.Contract(tokenAbi, this.contractAddress);
  }

  // Load Web3
  loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      window.ethereum.enable;
      this.connectMetaMask();
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
      console.log("1", window.web3);

    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider using MetaMask');
    }
  }

  // connect metamask
  connectMetaMask() {
    window.web3.eth.requestAccounts().then((result: any) => {
      if (result) {
        this.from = result[0];
        this.getAccount();
      }
    }).catch((error: any) => {
      console.log(error);
      throw new Error(error);
    })
  }

  // get account
  getAccount() {
    if (this.account == null || this.account == '') {
      this.web.eth.getAccounts((err: any, acc: any) => {
        if (err != null) {
          alert('There was an error fetching your accounts.');
        }
        if (acc.length == 0) {
          alert('Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.');
        }
        this.account = acc[0];
        this.web.eth.defaultAccount = this.account;
        this.isAccount = true;
      })
    }
  }

  // Approve
  approveData() {
    this.tokenContract.methods.approve(this.approveSpender, this.approveAmounts).send({
      from: this.account,
      sender: this.approveSpender,
      amount: this.approveAmounts
    }).then((result: any) => {
      //  console.log(result);
      this.receipt(result.transactionHash);
    }).catch((err: any) => {
      console.log(err);
    })
  }

  // Get Receipt
  receipt(transactionHash: string) {
    this.web.eth.getTransactionReceipt(transactionHash).then((result: any, err: any) => {
      this.isTransactionHash = true;
      this.transactionHashApprove = result.transactionHash;
      //  console.log(result);
      // console.log(err);
      // console.log(receiptData);
    })
  }

  // burn
  burn() {
    let eastimateGas: any;
    this.web.eth.getGasPrice().then((result : any) => {
        eastimateGas =  this.web.utils.fromWei(result, 'ether');
        console.log(eastimateGas);
        
      })

    this.tokenContract.methods.burn(this.burnAmount).send({
      from: this.account,
      amount: this.burnAmount,
      gasLimit: 50000,
    }).then((result: any) => {
      this.isBurn = true;
      this.transactionHashBurn = result.transactionHash;
      //   console.log(result);
    }).catch((err: any) => {
      console.log(err);
    })
  }

  // burn from
  burnFrom() {
    let eastimateGas: any;
    this.web.eth.getGasPrice().then((result : any) => {
        eastimateGas =  this.web.utils.fromWei(result, 'ether');
        console.log(eastimateGas);
        
      })

    this.tokenContract.methods.burnFrom(this.burnFromAddress, this.burnFromAmount).send({
      from: this.account,
      amount: this.burnFromAmount,
      gasLimit: 50000,
    }).then((result: any) => {
      this.trasactionHashBurnFrom = result.transactionHash;
      this.isBurnFrom = true;
      // console.log(result);
    }).catch((err: any) => {
      console.log(err);
    })
  }

  // DecreaseAllowance
  decreaseAllowanceData() {
    // let eastimateGas: any;
    // this.web.eth.getGasPrice().then((result : any) => {
    //     eastimateGas =  this.web.utils.fromWei(result, 'ether');
    //     console.log(eastimateGas);
        
    //   })
    this.tokenContract.methods.decreaseAllowance(this.spenderDecrease, this.amountSub).send({
      from: this.account,
//      sender: this.spenderDecrease,
//      value: this.amountSub,
      gasLimit: 50000,
    }).then((result: any) => {
      //  console.log(result);
      this.transactionHashDecrease = result.transactionHash;
      this.isDecrease = true;
    }).catch((err: any) => {
      console.log(err);
    })
  }

  // IncreaseAllowanceData
  increaseAllowanceData() {
    let eastimateGas: any;
    this.web.eth.getGasPrice().then((result : any) => {
        eastimateGas =  this.web.utils.fromWei(result, 'ether');
        console.log(eastimateGas); 
      })
    this.tokenContract.methods.increaseAllowance(this.increaseSender, this.increaseValue).send({
      from: this.account,
    //  sender: this.increaseSender,
   //   value: this.increaseValue,
      gasLimit: 50000,
    }).then((result: any) => {
      //    console.log(result);
      this.transactionHashIncrease = result.transactionHash;
      this.isIncrease = true;
    }).catch((err: any) => {
      console.log(err);
    })
  }

  // Mint 
  mint() {
    this.tokenContract.methods.mint(this.mintAddress, this.mintAmount).send({
      from: this.mintAddress
    }).then((result: any) => {
      this.transactionHashMint = result.transactionHash;
      this.isMint = true;
      // console.log(result);
    }).catch((err: any) => {
      console.log(err);
    })
  }

  // Pause
  getPause() {
    let eastimateGas: any;
    this.web.eth.getGasPrice().then((result : any) => {
        eastimateGas =  this.web.utils.fromWei(result, 'ether');
        console.log(eastimateGas);
        
      })
    this.tokenContract.methods.pause().send({
      owner: this.ownerAddress,
      from: this.account,
      gasLimit: 50000,
    }).then((result: any) => {
      console.log(result);
      this.transactionHashPause = result.transactionHash;
      this.isPause = true;
      this.isPauseStatus = result.status;
    }).catch((err: any) => {
      console.log(err);
    })
  }

  // get Renounce Ownership
  getRenounceOwnership() {
    let eastimateGas: any;
    this.web.eth.getGasPrice().then((result : any) => {
        eastimateGas =  this.web.utils.fromWei(result, 'ether');
        console.log(eastimateGas);
        
      })
    this.tokenContract.methods.renounceOwnership().send({
      from: this.account,
      gasLimit: 50000,
    }).then((result: any) => {
      this.transactionHashRenounceOwnerShip = result.transactionHash;
      this.isRenounceOwnerShip = true;
  //    console.log(result);
    }).catch((err: any) => {
      console.log(err);
    })
  }

  // transfer Data
  transferData() {
    let eastimateGas: any;
    this.web.eth.getGasPrice().then((result : any) => {
        eastimateGas =  this.web.utils.fromWei(result, 'ether');
        console.log(eastimateGas);
        
      })
    this.tokenContract.methods.transfer(this.toTransfer, this.amountTransfer).send({
      from: this.account,
      to: this.toTransfer,
      amount: this.amountTransfer,
      gasLimit: 50000,
    }).then((result: any) => {
      console.log(result);
      this.transactionHashTransfer = result.transactionHash;
      this.isTransfer = true;
    }).catch((err: any) => {
      console.log(err);
    })
  }

  // Transfer Form Data
  transferFromData() {
    let eastimateGas: any;
    let data : any;
    this.web.eth.getGasPrice().then((result : any) => {
        eastimateGas =  this.web.utils.fromWei(result, 'ether');
        data = eastimateGas*Math.pow(10,16) * 1000; 
        console.log(data);     
        this.tokenContract.methods.transferFrom(this.fromTransferFrom, this.toTransferFrom, this.amountTransferFrom).send({
          from: this.account,
         // to: this.toTransferFrom,
         // amount: this.amountTransferFrom,
  //        gasLimit: 9000000,
    //      gasPrice : data
        }).then((result: any) => {
        //  console.log(result);
          this.transactionHashFrom = result.transactionHash;
          this.isFrom = true;
        }).catch((err: any) => {
          console.log(err);
        })

      })
      
      
    
  }

  // transfer Owner Ship
  ownerShipTransfer() {
    let eastimateGas: any;
    this.web.eth.getGasPrice().then((result : any) => {
        eastimateGas =  this.web.utils.fromWei(result, 'ether');
        console.log(eastimateGas);
        
      })
    this.tokenContract.methods.transferOwnership(this.newOwnerAddress).send({
      from: this.account,
      newOwner: this.newOwnerAddress,
      gasLimit: 50000,
    }).then((result: any) => {
      console.log(result);
      this.transactionHashTransferOwner = result.transactionHash;
      this.isTransferOwner = true;
    }).catch((err: any) => {
      console.log(err);
    })
  }

  // Un Pause
  unPause() {
    let gasPrice: any;
    this.web.eth.getGasPrice().then((result : any) => {
      gasPrice =  this.web.utils.fromWei(result, 'ether');
      console.log(gasPrice);
    }) 

this.tokenContract.methods.

    this.tokenContract.methods.unpause().send({
      from: this.account,
      gasLimit: 50000,
    }).then((result: any) => {
      console.log(gasPrice);
      
      console.log(result);
      this.transactionHashUnPause = result.transactionHash;
      this.isUnPause = true;
      this.unPauseStatus = result.status;
    }).catch((err: any) => {
      console.log(err);
    })
  }

  // Allowance
  allow() {
    this.allowData(this.allowanceOwner, this.allowanceSpender);
  }

  // allowData
  allowData(owner: string, spender: string) {
    this.tokenContract.methods.allowance(owner, spender).call((err : any, result: any) => {
      this.allowedAmount = result;
      this.isAllowance = true;
      console.log(result);
      console.log(err);
            
    })
  }

  // get Balance of
  getBalanceOf() {
    this.tokenContract.methods.balanceOf(this.addressBalanceOf).call((err : any, result: any) => {
      this.isBalance = true;
      this.balance = result;
      console.log(err);
    })
  }

  // get Decimals
  getDecimals() {
    this.tokenContract.methods.decimals().call((err: any, result: any) => {
      this.isDecimal = true;
      this.decimal = result;
      console.log(err);
    })
  }

  // getName
  getName() {
    this.tokenContract.methods.name().call((err: any, result: any) => {
      this.isName = true;
      this.name = result;
      console.log(err);
    })
  }

  // get Owner
  getOwner() {
    this.tokenContract.methods.owner().call((err: any, result: any) => {
      this.isOwner = true;
      this.ownerAddress = result;
      console.log(err);
    })
  }

  // paused status
  getPausedStatus() {
    this.tokenContract.methods.paused().call((err: any, result: any) => {
      this.isPausedStatus = true;
      this.pausedStatus = result;
      console.log(err);
    })
  }

  // get Symbol
  getSymbol() {
    this.tokenContract.methods.symbol().call((err: any, result: any) => {
      this.isSymbol = true;
      this.symbol = result;
      console.log(err);
    })
  }

  // get Total Supplay
  getTotalSupplay() {
    this.tokenContract.methods.totalSupply().call((err: any, result: any) => {
      this.isTotalSupply = true;
      this.totalSupply = result;
      console.log(err);
    })
  }
}