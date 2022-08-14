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

