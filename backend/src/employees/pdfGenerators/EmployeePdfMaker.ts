import { Injectable } from '@nestjs/common';
import { PdfGenerator } from '../../utils/PdfMaker/IPdfMaker';
import { Employee } from '../../schemas/employee.schema';

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

  employeePdf(employee: Employee) {
    console.log(employee);

    const docDefinition = {
      content: [
        {
          columns: [
            { image: 'path/to/logo.png', width: 50 },
            { text: 'Employee Detail', style: 'header' },
            {
              text: 'Monday, 8 April 2024\n12:18:44 AM',
              alignment: 'right',
              style: 'subheader',
            },
          ],
        },
        { text: ' ' },
        {
          columns: [
            { text: 'Person Code :', bold: true },
            { text: '00108048165952' },
          ],
        },
        {
          columns: [
            { text: 'Employee Name :', bold: true },
            { text: 'AHMED ELDESSOUKI ELSAYED YOUSSEF' },
          ],
        },
        {
          columns: [
            { text: 'Nationality :', bold: true },
            { text: 'EGYPT' },
            { text: 'Date Of Birth :', bold: true },
            { text: '20/10/2000' },
          ],
        },
        { text: ' ' },
        {
          table: {
            widths: [150, '*'],
            body: [
              [{ text: 'Person Code :', bold: true }, '00108048165952'],
              [
                { text: 'Employee Name :', bold: true },
                'AHMED ELDESSOUKI ELSAYED YOUSSEF',
              ],
              [{ text: 'Company Code :', bold: true }, '895198'],
              [
                { text: 'Company Name :', bold: true },
                'AL THAHAB BLDG CONT CO LLC',
              ],
              [{ text: 'Date Of Birth :', bold: true }, '20/10/2000'],
              [{ text: 'Gender :', bold: true }, 'Male'],
              [{ text: 'Nationality :', bold: true }, 'EGYPT'],
              [{ text: 'Passport Number :', bold: true }, 'A27405303'],
              [{ text: 'Passport Expiry :', bold: true }, '17/10/2025'],
              [{ text: 'UID No. :', bold: true }, '98511111'],
              [{ text: 'Emirates ID No. :', bold: true }, '784200633333333'],
              [{ text: 'Job Title :', bold: true }, 'Building Labourer'],
              [{ text: 'Work Permit No. :', bold: true }, '104848878'],
              [{ text: 'Transactions No. :', bold: true }, 'MB241949710AE'],
              [{ text: 'Work Permit Expiry :', bold: true }, '19/03/2025'],
              [{ text: 'Card Type :', bold: true }, 'RENEW WORK PERMIT'],
              [{ text: 'Card Status :', bold: true }, 'Active'],
              [{ text: 'Residence Expiry Date :', bold: true }, '25/10/2025'],
            ],
          },
        },
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          alignment: 'center',
        },
        subheader: {
          fontSize: 12,
          alignment: 'right',
        },
      },
    };

    return this.generatePdf(docDefinition);
  }
}
