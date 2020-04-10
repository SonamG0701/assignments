export type AccountType = {
    date: string;
    narration: string;
    chequeNo: number;
    valueDate: string,
    withdrawl:number,
    deposit:number,
    closingBalanace:number
}

export const Accounts: AccountType[] = [
    {
        "date":"12-10-2019",
        "narration":"Test",
        "chequeNo":1234,
        "valueDate":"12-10-2019",
        "withdrawl":0,
        "deposit":1000,
        "closingBalanace":10000
      },
      {
        "date":"12-11-2019",
        "narration":"Test",
        "chequeNo":1235,
        "valueDate":"12-10-2019",
        "withdrawl":0,
        "deposit":1000,
        "closingBalanace":10000
      },
      {
        "date":"12-12-2019",
        "narration":"Test",
        "chequeNo":1236,
        "valueDate":"12-10-2019",
        "withdrawl":0,
        "deposit":1000,
        "closingBalanace":10000
      }
  ]