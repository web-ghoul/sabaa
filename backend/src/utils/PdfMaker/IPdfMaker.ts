import PdfPrinter from 'pdfmake';

export class PdfGenerator {
  protected printer: PdfPrinter;

  constructor(fonts: any) {
    this.printer = new PdfPrinter(fonts);
  }

  generatePdf(docDefinition : object) {
    
    try{
      const pdfDoc = this.printer.createPdfKitDocument(docDefinition as any);
      return pdfDoc;
    }catch(err)
    {
      console.log(err);
    }
    
  }
}
