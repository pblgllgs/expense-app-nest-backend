import { Injectable } from '@nestjs/common';
import { ReportType, data } from './data';
import { v4 as uuid } from 'uuid';

interface Report {
  source: string;
  amount: number;
}

@Injectable()
export class AppService {
  getAllReports(type: ReportType) {
    return data.report.filter((report) => report.type === type);
  }
  getReportById(type: ReportType, id: string) {
    return data.report
      .filter((report) => report.type === type)
      .find((report) => report.id === id);
  }
  createReport({ source, amount }: Report, type: ReportType) {
    const newReport = {
      id: uuid(),
      source: source,
      amount: amount,
      createAt: new Date(),
      updatedAt: new Date(),
      type,
    };
    data.report.push(newReport);
    return newReport;
  }
  updateReport(type: ReportType, id: string, body: Report) {
    const reportToUpdate = data.report
      .filter((report) => report.type === type)
      .find((report) => report.id === id);
    if (!reportToUpdate) {
      return;
    }
    const reportIndex = data.report.findIndex(
      (report) => report.id === reportToUpdate.id,
    );
    const updatedReport = (data.report[reportIndex] = {
      ...data.report[reportIndex],
      ...body,
      updatedAt: new Date(),
    });
    return updatedReport;
  }
  deleteReport(id: string) {
    const reportIndex = data.report.findIndex((report) => report.id === id);
    if (reportIndex === -1) {
      return;
    }
    const reportDeleted = data.report.splice(reportIndex, 1);
    return reportDeleted;
  }
}
