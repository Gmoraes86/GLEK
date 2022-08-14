import { Account, Category, Installment, PaymentType, Provider, SplitItems } from ".";

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






