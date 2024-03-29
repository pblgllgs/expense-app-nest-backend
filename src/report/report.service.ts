import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { ReportResponseDto } from '../dtos/report.dto';
import { ReportType, data } from '../data';

interface CreateReport {
  source: string;
  amount: number;
}

interface UpdateReport {
  source?: string;
  amount?: number;
}

@Injectable()
export class ReportService {
  getAllReports(type: ReportType): ReportResponseDto[] {
    return data.report
      .filter((report) => report.type === type)
      .map((report) => new ReportResponseDto(report));
  }

  getReportById(type: ReportType, id: string): ReportResponseDto {
    const report = data.report
      .filter((report) => report.type === type)
      .find((report) => report.id === id);
    if (!report) {
      return;
    }
    return new ReportResponseDto(report);
  }

  createReport(
    { source, amount }: CreateReport,
    type: ReportType,
  ): ReportResponseDto {
    const newReport = {
      id: uuid(),
      source: source,
      amount: amount,
      created_at: new Date(),
      updated_at: new Date(),
      type,
    };
    data.report.push(newReport);
    return new ReportResponseDto(newReport);
  }

  updateReport(
    type: ReportType,
    id: string,
    body: UpdateReport,
  ): ReportResponseDto {
    const reportToUpdate = data.report
      .filter((report) => report.type === type)
      .find((report) => report.id === id);
    if (!reportToUpdate) {
      return;
    }
    const reportIndex = data.report.findIndex(
      (report) => report.id === reportToUpdate.id,
    );
    data.report[reportIndex] = {
      ...data.report[reportIndex],
      source: body.source ? body.source : reportToUpdate.source,
      amount: body.amount ? body.amount : reportToUpdate.amount,
      updated_at: new Date(),
    };
    return new ReportResponseDto(data.report[reportIndex]);
  }

  deleteReport(id: string): string {
    const reportIndex = data.report.findIndex((report) => report.id === id);
    if (reportIndex === -1) {
      return;
    }
    data.report.splice(reportIndex, 1);
    return 'deleted';
  }
}
