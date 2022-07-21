interface Transaction {
  transactionId: string;
  fromAccount: string;
  toAccount: string;
  amount: number;
}

export type {
  Transaction
};
