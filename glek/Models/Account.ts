import { Bank, Owner } from ".";

export interface Account {
    id: string;
    description: string;
    startBalance: number;    
    balance: number;    
    type: 'POUPANCA' | 'CONTA-CORRENTE' | 'CARTAO-CREDITO' | 'SALARIO' | 'INVESTIMENTOS';
    bank: Bank;
    agency: string;    
    number: string;
    owner: Owner;
}

