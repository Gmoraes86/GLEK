export interface Transaction {
    id: string;
    description: string;
    amount: number;
    fees?: number;
    rate?: number;
    previsionDate: Date;
    paymentDate?: Date;
    paymentType: PaymentType; 
    operationType: 'CREDIT' | 'DEBIT';
    category?: Category;
    account: Account;
    provider: Provider;
    installments?: Installment[]; 
    split?: SplitItems[];
    status: 'PENDING' | 'PAID' | 'CANCELED' | 'PROVISIONED' | 'EXPIRED';       
    createdAt: Date;
    createdBy: string;
    updatedAt: Date;
    updatedBy: string;
}

export interface SplitItems {
    id: string;
    description: string;
    amount: number;    
    quantity: number;
}

export interface Installment {
    id: string;
    transactionId: string;
    installmentNumber: number;
    amount: number;
    fees: number;
    rate: number;
    paymentDate: Date;
    previsionDate: Date;
    status: 'PENDING' | 'PAID' | 'CANCELED' | 'EXPIRED';
    createdAt: Date;
    createdBy: string;
    updatedAt: Date;
    updatedBy: string;    
}

export interface PaymentType {
    id: string;
    name: string;
    //'cash-in' | 'cash-out' | 'credit-card' | 'transfer' | 'pix' | 'debit-card' | 'debit-automatic' | 'check' | 'none'
}

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

export interface Owner {
    id: string;
    name: string;    
}

export interface Bank{
    id: string;
    name: string;
    number: string;    
    logo: string;
}

export interface Category {
    id: string;
    name: string;
    icon: string;
}

export interface Provider {
    id: string;
    name: string;
    logo: string;
}