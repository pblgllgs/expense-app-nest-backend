export enum ReportType {
  INCOME = 'income',
  EXPENSE = 'expense',
}

export interface Data {
  report: {
    id: string;
    source: string;
    amount: number;
    createAt: Date;
    updatedAt: Date;
    type: ReportType;
  }[];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const data: Data = {
  report: [
    {
      id: '1',
      source: '1',
      amount: 1,
      createAt: new Date(),
      updatedAt: new Date(),
      type: ReportType.INCOME,
    },
    {
      id: '2',
      source: '2',
      amount: 2,
      createAt: new Date(),
      updatedAt: new Date(),
      type: ReportType.EXPENSE,
    },
  ],
};

// data.report.push({
//   id: '1',
//   source: 'income',
//   amount: 100,
//   createAt: new Date(),
//   updatedAt: new Date(),
//   type: ReportType.INCOME,
// });
