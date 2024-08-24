import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ActivityLog } from 'schemas/activityLog.schema';
import { Employee } from 'schemas/employee.schema';
import { Transaction } from 'schemas/transaction.schema';
import * as exceljs from 'exceljs';
import { Response } from 'express';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectModel('Employee') private employeeModel: Model<Employee>,
    @InjectModel('Transaction') private transactionModel: Model<Transaction>,
    @InjectModel(ActivityLog.name) private activityModel: Model<ActivityLog>,
  ) {}
  async create(createTransactionDto: CreateTransactionDto) {
    try {
      if(createTransactionDto.employeeId)
      {
        const newObj = {
          companyName: createTransactionDto.companyId,
          companyCode: createTransactionDto.companyId,
          companyId: createTransactionDto.companyId,
          lcNumber: createTransactionDto.lcNumber,
          lcExpiryDate: createTransactionDto.lcExpiryDate,
          cardType: createTransactionDto.cardType,
        }
        await this.employeeModel.findByIdAndUpdate(createTransactionDto.employeeId, newObj);
        return await this.transactionModel.create(createTransactionDto);
      }

      const newObj = {
        name: createTransactionDto.employeeName,
        nameAr: createTransactionDto.employeeNameAr,
        nationality : createTransactionDto.nationality,
        dob : createTransactionDto.dob,
        gender: createTransactionDto.gender,
        companyId: createTransactionDto.companyId,
        companyName: createTransactionDto.companyId,
        companyCode: createTransactionDto.companyId,
        lcNumber: createTransactionDto.lcNumber,
        lcExpiryDate: createTransactionDto.lcExpiryDate,
        cardType: createTransactionDto.cardType,
      }
      const newEmp = await this.employeeModel.create(newObj);
      createTransactionDto.employeeId = newEmp._id as any;
        
      return await this.transactionModel.create(createTransactionDto);
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }

  async findAll(
    limit: number,
    page: number,
    search: string,
    selectFields: string[],
    sort: string,
    lcExpiryDateFrom: string,
    status: string,
    lcExpiryDateTo: string,
    deleted: boolean,
    type: string,
    residenceTo: string,
    residenceFrom: string,
    changeStatusDateFrom: string,
    changeStatusDateTo: string,
  ): Promise<Transaction[]> {
    const query: any = {};

    if (search) {
      query.$or = [
        { transactionNo: { $regex: search, $options: 'i' } },
        { employeeName: { $regex: search, $options: 'i' } },
        { companyName: { $regex: search, $options: 'i' } },
      ];
    }

    if (lcExpiryDateFrom || lcExpiryDateTo) {
      query.lcExpiryDate = {};
      if (lcExpiryDateFrom) {
        query.lcExpiryDate.$gte = new Date(lcExpiryDateFrom);
      }
      if (lcExpiryDateTo) {
        query.lcExpiryDate.$lte = new Date(lcExpiryDateTo);
      }
    }

    if (status) {
      query.status = status;
    }

    if (typeof deleted !== 'undefined') {
      query.deleted = deleted;
    }else{
      query.deleted = false
    }

    if(type == "pre"){
      query.type = {$in: ["approved","pre"]} ; 
    }else{
      query.type = type ; 
    }

    if (residenceFrom || residenceTo) {
      query.residenceExpiryDate = {};
      if (residenceFrom) {
        query.residenceExpiryDate.$gte = new Date(residenceFrom);
      }
      if (residenceTo) {
        query.residenceExpiryDate.$lte = new Date(residenceTo);
      }
    }

    if (changeStatusDateFrom || changeStatusDateTo) {
      query.changeStatusDate = {};
      if (changeStatusDateFrom) {
        query.changeStatusDate.$gte = new Date(changeStatusDateFrom);
      }
      if (changeStatusDateTo) {
        query.changeStatusDate.$lte = new Date(changeStatusDateTo);
      }
    }

    const fieldsToSelect =
      selectFields && selectFields.length ? selectFields.join(' ') : '';

    const sortBy = {};

    if (sort) {
      sortBy[sort] = -1;
    } else {
      sortBy['createdAt'] = -1;
      sortBy['status'] = -1;
    }

    return this.transactionModel
      .find(query)
      .skip(page*limit)
      .limit(limit)
      .select(fieldsToSelect)
      .sort(sortBy)
      .exec();
  }

  findOne(id: string) {
    return this.transactionModel.findById(id);
  }

  update(id: string, updateTransactionDto: UpdateTransactionDto) {
    return this.transactionModel.updateOne({ _id: id }, updateTransactionDto);
    
  }

  async remove(id: string) {
    try {
      await Promise.all([
        this.transactionModel.updateOne({ _id: id }, { deleted: true }),
      ]);

      return {_id: id} ; 
    } catch (err) {
      throw new HttpException(err, HttpStatus.FORBIDDEN);
    }
  }

  async export(
    res: Response,
    fileName: string,
  ) {
    const transactions = await this.transactionModel.find({ deleted: false});

    const workbook = new exceljs.Workbook();
    const worksheet = workbook.addWorksheet('Transactions');
    worksheet.columns = [
      { header: 'Transaction No', key: 'transactionNo', width: 20 },
      { header: 'Employee ID', key: 'employeeId', width: 20 },
      { header: 'Serial No', key: 'serialNo', width: 20 },
      { header: 'Company Code', key: 'companyCode', width: 20 },
      { header: 'Company ID', key: 'companyId', width: 20 },
      { header: 'Company Name', key: 'companyName', width: 20 },
      { header: 'Employee Name', key: 'employeeName', width: 20 },
      { header: 'Date of Birth', key: 'dob', width: 20 },
      { header: 'Gender', key: 'gender', width: 20 },
      { header: 'Nationality ID', key: 'idNationality', width: 20 },
      { header: 'Nationality', key: 'nationality', width: 20 },
      { header: 'Passport Number', key: 'passportNumber', width: 20 },
      { header: 'Passport Expiry', key: 'passportExpiry', width: 20 },
      { header: 'Job', key: 'job', width: 20 },
      { header: 'Person Code', key: 'personCode', width: 20 },
      { header: 'UID', key: 'uid', width: 20 },
      { header: 'Emirates No', key: 'emiratesNo', width: 20 },
      { header: 'lcNumber', key: 'lcNumber', width: 20 },
      { header: 'LC No', key: 'lcNo', width: 20 },
      { header: 'LC Expiry Date', key: 'lcExpiryDate', width: 20 },
      {
        header: 'Work Permit Expiry Date',
        key: 'workPermitExpiryDate',
        width: 20,
      },
      { header: 'Visit Expiry Date', key: 'visitExpiryDate', width: 20 },
      { header: 'Tawjeeh Date', key: 'tawjeehDate', width: 20 },
      { header: 'Medical Date', key: 'medicalDate', width: 20 },
      { header: 'Change Status Date', key: 'changeStatusDate', width: 20 },
      { header: 'Status', key: 'status', width: 20 },
      { header: 'WP Status', key: 'wpStatus', width: 20 },
      { header: 'Status Date', key: 'statusDate', width: 20 },
      { header: 'Card Type', key: 'cardType', width: 20 },
      { header: 'Salary', key: 'salary', width: 20 },
      { header: 'Remarks', key: 'remarks', width: 20 },
      {
        header: 'Residence Expiry Date',
        key: 'residenceExpiryDate',
        width: 20,
      },
      { header: 'Deleted', key: 'deleted', width: 10 },
    ];

    transactions.forEach((transaction) => {
      worksheet.addRow({
        transactionNo: transaction.transactionNo,
        employeeId: transaction.employeeId,
        companyCode: transaction.companyCode,
        companyId: transaction.companyId,
        companyName: transaction.companyName,
        employeeName: transaction.employeeName,
        dob: transaction.dob,
        gender: transaction.gender,
        idNationality: transaction.idNationality,
        nationality: transaction.nationality,
        passportNumber: transaction.passportNumber,
        passportExpiry: transaction.passportExpiry,
        job: transaction.job,
        personCode: transaction.personCode,
        uid: transaction.uid,
        emiratesNo: transaction.emiratesNo,
        lcNumber: transaction.lcNumber,
        lcNo: transaction.lcNo,
        lcExpiryDate: transaction.lcExpiryDate,
        visitExpiryDate: transaction.visitExpiryDate,
        tawjeehDate: transaction.tawjeehDate,
        medicalDate: transaction.medicalDate,
        changeStatusDate: transaction.changeStatusDate,
        status: transaction.status,
        statusDate: transaction.statusDate,
        cardType: transaction.cardType,
        salary: transaction.salary,
        remarks: transaction.remarks,
        residenceExpiryDate: transaction.residenceExpiryDate,
        deleted: transaction.deleted,
      });
    });

    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', `attachment; filename=${fileName}.xlsx`);
    await workbook.xlsx.write(res);
    res.end();
  }
  async getCounters() {
    const [count, deleted] = await Promise.all([
      this.transactionModel.countDocuments({ deleted: false }),
      this.transactionModel.countDocuments({ deleted: true }),
    ]);
    return {
      count,
      deleted,
    };
  }
}
