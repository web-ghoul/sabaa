import PdfPrinter from 'pdfmake';

export abstract class PdfGenerator {
  protected printer: PdfPrinter;

  constructor(fonts: any) {
    this.printer = new PdfPrinter(fonts);
  }

  abstract generateReport(data: any[]): any;
}
