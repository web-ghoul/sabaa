import { Injectable } from '@nestjs/common';
import { PdfGenerator } from './IPdfMaker';

@Injectable()
export class EmployeePdfGenerator extends PdfGenerator {
  constructor() {
    super({
      Helvetica: {
        normal: 'Helvetica',
        bold: 'Helvetica-Bold',
        italics: 'Helvetica-Oblique',
        bolditalics: 'Helvetica-BoldOblique',
      },
    });
  }

  generateReport(employees: any[]) {
    const docDefinition = {
      content: [
        {
          text: 'Employee Report',
          fontSize: 25,
          alignment: 'center',
          style: 'header',
        },
        {
          layout: 'lightHorizontalLines',
          table: {
            headerRows: 1,
            widths: ['auto', 'auto', 100, 'auto', 'auto'],
            body: [
              [
                'Person Code',
                'Name',
                'Job Title',
                'Passport Number',
                'Card Details',
              ],
              ...employees.map((employee) => [
                employee.personCode || 'N/A',
                employee.name || 'N/A',
                employee.job || 'N/A',
                employee.passportNumber || 'N/A',
                {
                  stack: [
                    `Number: ${employee.cardNumber || 'N/A'}`,
                    `Type: ${employee.cardType || 'N/A'}`,
                  ],
                },
              ]),
            ],
          },
        },
      ],
      defaultStyle: {
        font: 'Helvetica',
      },
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [10, 10, 10, 10],
        },
        subheader: {
          fontSize: 16,
          bold: true,
          margin: [0, 10, 0, 5],
        },
        tableExample: {
          margin: [5, 5, 0, 15],
          padding: [2, 2, 2, 2],
        },
        tableHeader: {
          bold: true,
          fontSize: 13,
          color: 'black',
        },
      },
    };

    const pdfDoc = this.printer.createPdfKitDocument(docDefinition as any);
    // pdfDoc.pipe(fs.createWriteStream('employee_report.pdf'));
    // pdfDoc.end();

    return pdfDoc;
  }
}
