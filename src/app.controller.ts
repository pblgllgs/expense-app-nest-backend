import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('/report/:type')
export class AppController {
  @Get()
  getHello(): string {
    return 'Hello World!';
  }
  @Get()
  getAllIncomeReports() {
    return {};
  }
  @Get(':id')
  getReportById() {
    return [];
  }
  @Post()
  createReport() {
    return 'created';
  }
  @Put(':id')
  updateReport() {
    return 'updated';
  }
  @Delete(':id')
  deleteReport() {
    return 'deleted';
  }
}
