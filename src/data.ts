export enum ReportType {
  INCOME = 'income',
  EXPENSE = 'expense',
}

export interface Data {
  report: {
    id: string;
    source: string;
    amount: number;
    created_at: Date;
    updated_at: Date;
    type: ReportType;
  }[];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const data: Data = {
  report: [
    {
      id: '78d0072a-ba16-4457-906b-c622b40acce3',
      source: '1',
      amount: 100,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.INCOME,
    },
    {
      id: '8e131aac-0da0-48b6-90d1-ce368f6bb4e4',
      source: '2',
      amount: 50,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.EXPENSE,
    },
  ],
};
