import mongoose from 'mongoose';
import { faker } from '@faker-js/faker';
import * as bcrypt from 'bcryptjs';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';

dotenv.config();

const DB_URI =
  process.env.DB ||
  'mongodb+srv://mahmoudaboraya2021_db_user:kJ5tsNCQkLGtooIA@app.jhtwurl.mongodb.net/sabaa';

async function seed() {
  try {
    console.log('Connecting to database...');
    await mongoose.connect(DB_URI);
    console.log('Connected to database.');

    const collections = await mongoose.connection.db.collections();
    for (const collection of collections) {
      console.log(`Clearing collection: ${collection.collectionName}`);
      await collection.deleteMany({});
    }

    // Load data from JSON files
    const permissionsData = JSON.parse(
      fs.readFileSync(
        path.join(__dirname, '../../sabaa.permissions.json'),
        'utf8',
      ),
    );
    const usersData = JSON.parse(
      fs.readFileSync(path.join(__dirname, '../../sabaa.users.json'), 'utf8'),
    );

    console.log('Creating Permissions...');
    const insertedPermissions = [];
    for (const perm of permissionsData) {
      const { _id, ...permWithoutId } = perm;
      // Convert MongoDB JSON format if necessary
      if (permWithoutId.createdAt && permWithoutId.createdAt.$date)
        permWithoutId.createdAt = new Date(permWithoutId.createdAt.$date);
      if (permWithoutId.updatedAt && permWithoutId.updatedAt.$date)
        permWithoutId.updatedAt = new Date(permWithoutId.updatedAt.$date);

      const res = await mongoose.connection.db
        .collection('permissions')
        .insertOne({
          ...permWithoutId,
          createdAt: permWithoutId.createdAt || new Date(),
          updatedAt: permWithoutId.updatedAt || new Date(),
        });
      insertedPermissions.push(res.insertedId);
    }

    console.log('Creating Roles...');
    const roles = ['Admin', 'Manager', 'User', 'Accountant', 'Operator'];
    const insertedRoles = [];
    for (const roleName of roles) {
      const res = await mongoose.connection.db.collection('roles').insertOne({
        name: roleName,
        echanel: true,
        newEmp: 'true',
        renewEmp: 'true',
        addNationality: 'true',
        addEmployee: 'true',
        deleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      insertedRoles.push({ name: roleName, _id: res.insertedId });
    }

    console.log('Creating Users...');
    const hashedDefaultPassword = await bcrypt.hash('password123', 10);
    const users = [];

    // Seed initial users from JSON
    for (const userData of usersData) {
      const { _id, ...userWithoutId } = userData;
      if (userWithoutId.createdAt && userWithoutId.createdAt.$date)
        userWithoutId.createdAt = new Date(userWithoutId.createdAt.$date);
      if (userWithoutId.updatedAt && userWithoutId.updatedAt.$date)
        userWithoutId.updatedAt = new Date(userWithoutId.updatedAt.$date);

      const res = await mongoose.connection.db.collection('users').insertOne({
        ...userWithoutId,
        createdAt: userWithoutId.createdAt || new Date(),
        updatedAt: userWithoutId.updatedAt || new Date(),
      });
      users.push(res.insertedId);
    }

    // Seed more random users to reach ~100
    for (let i = 0; i < 97; i++) {
      const res = await mongoose.connection.db.collection('users').insertOne({
        name: faker.person.fullName(),
        email: faker.internet.email(),
        password: hashedDefaultPassword,
        role: faker.helpers.arrayElement(roles),
        phone: faker.phone.number(),
        avatar: faker.image.avatar(),
        status: 'active',
        deleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      users.push(res.insertedId);
    }
    const adminId = users[0];

    console.log('Creating Nationalities...');
    const nationalities = [];
    const countryNames = faker.helpers.uniqueArray(faker.location.country, 25);
    for (let i = 0; i < countryNames.length; i++) {
      const nat = await mongoose.connection.db
        .collection('nationalities')
        .insertOne({
          id: (i + 1).toString(),
          nationality: countryNames[i],
          user: adminId,
          deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      nationalities.push({
        id: (i + 1).toString(),
        name: countryNames[i],
        _id: nat.insertedId,
      });
    }

    console.log('Creating Job Titles...');
    const jobTitles = [];
    for (let i = 0; i < 100; i++) {
      const jobName = faker.person.jobTitle();
      const job = await mongoose.connection.db
        .collection('jobtitles')
        .insertOne({
          MOHRE: faker.string.numeric(6),
          ENSCOCode: faker.string.numeric(6),
          jobTitle: jobName,
          user: adminId,
          deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      jobTitles.push({ name: jobName, _id: job.insertedId });
    }

    console.log('Creating Owners...');
    const owners = [];
    for (let i = 0; i < 100; i++) {
      const ownerName = faker.person.fullName();
      const owner = await mongoose.connection.db
        .collection('owners')
        .insertOne({
          uid: faker.string.numeric(12),
          name: ownerName,
          nameAr: ownerName + ' (العربية)',
          avatar: faker.image.avatar(),
          dob: faker.date.birthdate(),
          idNationality: nationalities[i % nationalities.length].id,
          nationality: nationalities[i % nationalities.length].name,
          phone: faker.phone.number(),
          email: faker.internet.email(),
          remarks: 'Generated Seed Data',
          state: faker.location.state(),
          address: faker.location.streetAddress(),
          residenceExpiryDate: faker.date.future(),
          fileImmgNo: faker.string.numeric(8),
          status: 'active',
          type: 'owner',
          gender: faker.person.sex(),
          job: jobTitles[i % jobTitles.length].name,
          emiratesId: faker.string.numeric(15),
          personCode: faker.string.numeric(10),
          user: adminId,
          deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      owners.push(owner.insertedId);
    }

    console.log('Creating Customers...');
    const customers = [];
    for (let i = 0; i < 100; i++) {
      const customerName = faker.person.fullName();
      const customer = await mongoose.connection.db
        .collection('owners')
        .insertOne({
          uid: faker.string.numeric(12),
          name: customerName,
          nameAr: customerName + ' (العربية)',
          avatar: faker.image.avatar(),
          dob: faker.date.birthdate(),
          idNationality: nationalities[i % nationalities.length].id,
          nationality: nationalities[i % nationalities.length].name,
          phone: faker.phone.number(),
          email: faker.internet.email(),
          remarks: 'Generated Customer Seed Data',
          state: faker.location.state(),
          address: faker.location.streetAddress(),
          residenceExpiryDate: faker.date.future(),
          fileImmgNo: faker.string.numeric(8),
          status: 'active',
          type: 'customer',
          gender: faker.person.sex(),
          job: jobTitles[i % jobTitles.length].name,
          emiratesId: faker.string.numeric(15),
          personCode: faker.string.numeric(10),
          user: adminId,
          deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      customers.push(customer.insertedId);
    }

    console.log('Creating Officers (Pros)...');
    const officers = [];
    for (let i = 0; i < 100; i++) {
      const officerName = faker.person.fullName();
      const officer = await mongoose.connection.db
        .collection('owners')
        .insertOne({
          uid: faker.string.numeric(12),
          name: officerName,
          nameAr: officerName + ' (العربية)',
          avatar: faker.image.avatar(),
          dob: faker.date.birthdate(),
          idNationality: nationalities[i % nationalities.length].id,
          nationality: nationalities[i % nationalities.length].name,
          phone: faker.phone.number(),
          email: faker.internet.email(),
          remarks: 'Generated Officer Seed Data',
          state: faker.location.state(),
          address: faker.location.streetAddress(),
          residenceExpiryDate: faker.date.future(),
          fileImmgNo: faker.string.numeric(8),
          status: 'active',
          type: 'officer',
          gender: faker.person.sex(),
          job: jobTitles[i % jobTitles.length].name,
          emiratesId: faker.string.numeric(15),
          personCode: faker.string.numeric(10),
          user: adminId,
          deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      officers.push(officer.insertedId);
    }

    console.log('Creating Sponsors...');
    const sponsors = [];
    for (let i = 0; i < 100; i++) {
      const sponsorName = faker.person.fullName();
      const sponsor = await mongoose.connection.db
        .collection('sponsors')
        .insertOne({
          uid: faker.string.numeric(12),
          name: sponsorName,
          nameAr: sponsorName + ' (العربية)',
          avatar: faker.image.avatar(),
          dob: faker.date.birthdate(),
          idNationality: nationalities[(i + 1) % nationalities.length].id,
          nationality: nationalities[(i + 1) % nationalities.length].name,
          phone: faker.phone.number(),
          email: faker.internet.email(),
          remarks: 'Generated Seed Data',
          state: faker.location.state(),
          address: faker.location.streetAddress(),
          gender: faker.person.sex(),
          job: jobTitles[(i + 1) % jobTitles.length].name,
          residenceExpiryDate: faker.date.future(),
          fileImmgNo: faker.string.numeric(8),
          status: 'active',
          emiratesId: faker.string.numeric(15),
          user: adminId,
          deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      sponsors.push(sponsor.insertedId);
    }

    console.log('Creating Companies...');
    const companies = [];
    for (let i = 0; i < 100; i++) {
      const companyName = faker.company.name();
      const company = await mongoose.connection.db
        .collection('companies')
        .insertOne({
          name: companyName,
          nameAr: companyName + ' (العربية)',
          logo: faker.image.url(),
          status: 'active',
          state: faker.location.state(),
          address: faker.location.streetAddress(),
          phone: faker.phone.number(),
          licenseNo: faker.string.numeric(8),
          immgCardNo: faker.string.numeric(10),
          immgCardExpiry: faker.date.future(),
          licenseIssueDate: faker.date.past(),
          licenseExpiryDate: faker.date.future(),
          establishmentType: faker.helpers.arrayElement([
            'LLC',
            'Sole Proprietorship',
            'Branch',
          ]),
          molCode: faker.string.numeric(12),
          molCategory: 'Category A',
          whatsAppNo: faker.phone.number(),
          mobileNo: faker.phone.number(),
          echannelExpiryDate: faker.date.future(),
          website: faker.internet.url(),
          trn: faker.string.numeric(15),
          email: faker.internet.email(),
          tenancyContractValue: faker.number
            .int({ min: 50000, max: 500000 })
            .toString(),
          tenancyContractExp: faker.date.future().toISOString(),
          ownerId: [faker.helpers.arrayElement(owners)],
          proCode: [],
          user: adminId,
          deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      companies.push({ _id: company.insertedId, name: companyName });
    }

    console.log('Creating Employees...');
    const employees = [];
    for (let i = 0; i < 100; i++) {
      const empName = faker.person.fullName();
      const company = faker.helpers.arrayElement(companies);
      const employee = await mongoose.connection.db
        .collection('employees')
        .insertOne({
          name: empName,
          nameAr: empName + ' (العربية)',
          avatar: faker.image.avatar(),
          personCode: faker.string.numeric(12),
          companyId: [company._id.toString()],
          companyName: [company.name],
          dob: faker.date.birthdate(),
          status: 'Active',
          cardType: 'Work Permit',
          lcNumber: faker.string.numeric(12),
          job: faker.helpers.arrayElement(jobTitles).name,
          visaFileNumber: faker.string.numeric(15),
          salary: faker.number.int({ min: 3000, max: 25000 }),
          gender: faker.person.sex(),
          idNationality: nationalities[i % nationalities.length].id,
          nationality: nationalities[i % nationalities.length].name,
          passportNumber: faker.string.alphanumeric(10).toUpperCase(),
          passportExpiry: faker.date.future(),
          uid: faker.string.numeric(12),
          residenceExpireDate: faker.date.future(),
          lcExpireDate: faker.date.future(),
          mobileNumber: faker.phone.number(),
          email: faker.internet.email(),
          emiratesId: faker.string.numeric(15),
          user: adminId,
          deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      employees.push({
        _id: employee.insertedId,
        name: empName,
        companyId: company._id,
        personCode: faker.string.numeric(12),
      });
    }

    console.log('Creating Transactions...');
    const transactions = [];
    for (let i = 0; i < 100; i++) {
      const employee = faker.helpers.arrayElement(employees);
      const res = await mongoose.connection.db
        .collection('transactions')
        .insertOne({
          uid: faker.string.numeric(12),
          username: faker.internet.username() + '_' + i,
          transactionNo: 'TRX' + faker.string.numeric(10),
          personCode: employee.personCode,
          lcNumber: faker.string.numeric(12),
          emiratesNo: faker.string.numeric(15),
          employeeId: employee._id.toString(),
          employeeName: employee.name,
          companyId: employee.companyId.toString(),
          companyCode: faker.string.numeric(10),
          type: faker.helpers.arrayElement([
            'Visa Application',
            'Renewal',
            'Cancellation',
          ]),
          status: 'In Process',
          statusDate: new Date(),
          userId: adminId,
          deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      transactions.push({
        _id: res.insertedId,
        transactionNo: 'TRX' + (i + 1),
      });
    }

    console.log('Creating Natwasals, Tasaheels, EChannels...');
    for (let i = 0; i < 100; i++) {
      const employee = employees[i % employees.length];
      const owner = faker.helpers.arrayElement(owners);
      const customer = faker.helpers.arrayElement(customers);
      const officer = faker.helpers.arrayElement(officers);

      await mongoose.connection.db.collection('natwasals').insertOne({
        personCode: employee.personCode,
        username: faker.internet.username() + '_nat_' + i,
        password: 'password123',
        name: employee.name,
        nameAr: employee.name + ' (العربية)',
        employee: employee._id,
        owner: faker.helpers.arrayElement([owner, customer, officer]),
        deleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      await mongoose.connection.db.collection('tasaheels').insertOne({
        personCode: employee.personCode,
        username: faker.internet.username() + '_tas_' + i,
        password: 'password123',
        name: employee.name,
        nameAr: employee.name + ' (العربية)',
        employee: employee._id,
        owner: faker.helpers.arrayElement([owner, customer, officer]),
        deleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      await mongoose.connection.db.collection('echannels').insertOne({
        uid: faker.string.numeric(12),
        username: faker.internet.username() + '_ech_' + i,
        password: 'password123',
        name: employee.name,
        employee: employee._id,
        owner: faker.helpers.arrayElement([owner, customer, officer]),
        type: faker.helpers.arrayElement([
          'owner',
          'customer',
          'officer',
          'employee',
        ]),
        deleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    console.log('Creating IMMGCards...');
    for (let i = 0; i < 100; i++) {
      await mongoose.connection.db.collection('immgcards').insertOne({
        id: 'IMG' + faker.string.numeric(10) + i,
        cardType: faker.helpers.arrayElement([
          'GDRFA',
          'ECHANEL',
          'ECHANELPersonal',
        ]),
        userName: faker.internet.username(),
        password: 'password123',
        nogodiNewUser: faker.internet.username(),
        nogodiRegNo: faker.string.numeric(10),
        nogodiNewPass: 'pass123',
        nogodiWallet: faker.finance.iban(),
        nogodiPassword: 'pass123',
        pinToken: faker.string.alphanumeric(16),
        dataCreate: new Date().toISOString(),
        eChanelExpiry: faker.date.future(),
        type: 'Card',
        status: 'Active',
        customerName: faker.person.fullName(),
        customerNameAr: faker.person.fullName() + ' (العربية)',
        gender: faker.person.sex(),
        nationality: faker.helpers.arrayElement(nationalities).name,
        emiratesId: faker.string.numeric(15),
        user: adminId,
        deleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    console.log('Creating Tawjeehs...');
    for (let i = 0; i < 100; i++) {
      const employee = faker.helpers.arrayElement(employees);
      await mongoose.connection.db.collection('tawjeehs').insertOne({
        _id: ('TWJ' + faker.string.numeric(10) + i) as any,
        personCode: employee.personCode,
        companyCode: faker.string.numeric(10),
        eMailUser: faker.internet.email(),
        mobilNo: faker.phone.number(),
        userName: faker.internet.username(),
        password: 'password123',
        securityQuestions1: [faker.lorem.sentence(), faker.lorem.sentence()],
        securityQuestions2: [faker.lorem.sentence(), faker.lorem.sentence()],
        dataCreate: new Date(),
        user: adminId,
        deleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    console.log('Creating WorkPermits...');
    for (let i = 0; i < 100; i++) {
      const employee = faker.helpers.arrayElement(employees);
      const transaction = faker.helpers.arrayElement(transactions);
      await mongoose.connection.db.collection('workpermits').insertOne({
        _id: ('WP' + faker.string.numeric(10) + i) as any,
        personCode: employee.personCode,
        transactionsNO: transaction.transactionNo,
        companyCode: faker.string.numeric(10),
        workPermitIssu: faker.date.past(),
        workPermitExpiry: faker.date.future(),
        cardType: 'New Permit',
        cardStatus: 'Issued',
        tawjeehDate: faker.date.recent(),
        uidNo: faker.string.numeric(12),
        emiratesIdNo: faker.string.numeric(15),
        codeMOHREJOB: faker.helpers.arrayElement(jobTitles).name,
        visitExpiryDate: faker.date.future(),
        medicalDate: faker.date.recent(),
        changeStatusDate: faker.date.recent(),
        residenceExpiryDate: faker.date.future(),
        dateEntry: faker.date.recent(),
        user: adminId,
        deleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    console.log('Creating Activity Logs...');
    for (let i = 0; i < 100; i++) {
      await mongoose.connection.db.collection('activitylogs').insertOne({
        action: faker.helpers.arrayElement([
          'CREATE',
          'UPDATE',
          'DELETE',
          'LOGIN',
        ]),
        route: '/' + faker.lorem.word(),
        id: new mongoose.Types.ObjectId(),
        ownerType: faker.helpers.arrayElement(['User', 'Employee', 'Company']),
        userId: adminId,
        userName: 'Admin User',
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from database.');
  }
}

seed();
