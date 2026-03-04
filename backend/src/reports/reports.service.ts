import { CompanyService } from './../company/company.service';
import { Injectable } from '@nestjs/common';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import { PdfGenerator } from '../utils/PdfMaker/IPdfMaker';

@Injectable()
export class ReportsService extends PdfGenerator {
  constructor(private companyService: CompanyService) {
    super({
      Roboto: {
        normal: 'Helvetica',
        bold: 'Helvetica-Bold',
        italics: 'Helvetica-Oblique',
        bolditalics: 'Helvetica-BoldOblique',
      },
    });
  }
  async generateEmployeePdf(id: string) {
    const employee = await this.companyService.findOne(id);

    const docDefinition = {
      pageMargins: [20, 20, 20, 20],
      content: [
        {
          columns: [
            {
              image: '../design_material/5.png',
              width: 30,
              height: 30,
              margin: [0, -7, 0, 0],
            },
            { text: 'Employee Detail', style: 'header' },
            {
              text: 'Monday, 8 April 2024\n12:18:44 AM',
              alignment: 'right',
              style: 'outerValues',
            },
          ],
        },
        { text: ' ' },
        { text: ' ' },
        {
          columns: [
            { text: 'Person Code :', bold: true, style: 'outerHeaders' },
            { text: '00108048165952', style: 'outerValues' },
            { text: '' },
            { text: '' },
          ],
        },
        {
          columns: [
            { text: 'Employee Name :', bold: true, style: 'outerHeaders' },
            {
              text: 'AHMED ELDESSOUKI ELSAYED YOUSSEF',
              style: 'outerValues',
              with: 200,
              margin: [-140, 0, 0, 0],
            },
          ],
        },
        {
          columns: [
            { text: 'Nationality :', bold: true, style: 'outerHeaders' },
            { text: 'EGYPT' },
            { text: 'Date Of Birth :', bold: true, style: 'outerHeaders' },
            { text: '20/10/2000' },
          ],
        },
        { text: ' ' },
        {
          table: {
            widths: [150, '*'],
            body: [
              [
                { text: 'Person Code :', style: 'tableHeader' },
                { text: '00108048165952', style: 'tableValues' },
              ],
              [
                { text: 'Employee Name :', style: 'tableHeader' },
                {
                  text: 'AHMED ELDESSOUKI ELSAYED YOUSSEF',
                  style: 'tableValues',
                },
              ],
              [
                { text: 'Company Code :', style: 'tableHeader' },
                { text: '895198', style: 'tableValues' },
              ],
              [
                { text: 'Company Name :', style: 'tableHeader' },
                { text: 'AL THAHAB BLDG CONT CO LLC', style: 'tableValues' },
              ],
              [
                { text: 'Date Of Birth :', style: 'tableHeader' },
                { text: '20/10/2000', style: 'tableValues' },
              ],
              [
                { text: 'Gender :', style: 'tableHeader' },
                { text: 'Male', style: 'tableValues' },
              ],
              [
                { text: 'Nationality :', style: 'tableHeader' },
                { text: 'EGYPT', style: 'tableValues' },
              ],
              [
                { text: 'Passport Number :', style: 'tableHeader' },
                { text: 'A27405303', style: 'tableValues' },
              ],
              [
                { text: 'Passport Expiry :', style: 'tableHeader' },
                { text: '17/10/2025', style: 'tableValues' },
              ],
              [
                { text: 'UID No. :', style: 'tableHeader' },
                { text: '98511111', style: 'tableValues' },
              ],
              [
                { text: 'Emirates ID No. :', style: 'tableHeader' },
                { text: '784200633333333', style: 'tableValues' },
              ],
              [
                { text: 'Job Title :', style: 'tableHeader' },
                { text: 'Building Labourer', style: 'tableValues' },
              ],
              [
                { text: 'Work Permit No. :', style: 'tableHeader' },
                { text: '104848878', style: 'tableValues' },
              ],
              [
                { text: 'Transactions No. :', style: 'tableHeader' },
                { text: 'MB241949710AE', style: 'tableValues' },
              ],
              [
                { text: 'Work Permit Expiry :', style: 'tableHeader' },
                { text: '19/03/2025', style: 'tableValues' },
              ],
              [
                { text: 'Card Type :', style: 'tableHeader' },
                { text: 'RENEW WORK PERMIT', style: 'tableValues' },
              ],
              [
                { text: 'Card Status :', style: 'tableHeader' },
                { text: 'Active', style: 'tableValues' },
              ],
              [
                { text: 'Residence Expiry Date :', style: 'tableHeader' },
                { text: '25/10/2025', style: 'tableValues' },
              ],
            ],
          },
        },
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [10, 0, 0, 0],
        },
        subheader: {
          fontSize: 12,
          alignment: 'right',
        },
        tableValues: {
          fontSize: 12,
          alignment: 'center',
          bold: true,
        },
        tableHeader: {
          fontSize: 12,
          alignment: 'left',
          bold: true,
        },
        outerHeaders: {
          fontSize: 12,
          margin: [0, 5, 0, 5],
          decoration: 'underline',
          decorationStyle: 'solid',
          decorationThickness: 1,
          decorationSkipInk: true,
          decorationMargin: 20, // Adjust to add space between the text and the underline
          decorationColor: 'grey',
        },
        outerValues: {
          fontSize: 10,
        },
      },
    };

    return this.generatePdf(docDefinition);
  }

  employeeAllTrancactions() {
    return `This action returns all reports`;
  }

  companyTransactions(id: number) {
    return `This action returns a #${id} report`;
  }

  companyDetails(id: number, updateReportDto: UpdateReportDto) {
    return `This action updates a #${id} report`;
  }

  owenrCompany(id: number) {
    return `This action removes a #${id} report`;
  }
}
