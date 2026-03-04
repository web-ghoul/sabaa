import mongoose from 'mongoose';
import { faker } from '@faker-js/faker';
import * as bcrypt from 'bcryptjs';
import * as dotenv from 'dotenv';

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

    console.log('Creating Admin User...');
    const hashedAdminPassword = await bcrypt.hash('admin123', 10);
    const adminUser = await mongoose.connection.db
      .collection('users')
      .insertOne({
        name: 'Admin User',
        email: 'admin@sabaa.com',
        password: hashedAdminPassword,
        role: 'admin',
        phone: '0501234567',
        avatar:
          'https://res.cloudinary.com/dzajwg1m4/image/upload/v1/sabaa/users/avatar.png',
        status: 'active',
        deleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

    const adminId = adminUser.insertedId;

    console.log('Creating Nationalities...');
    const nationalities = [];
    const countries = [
      'United Arab Emirates',
      'Egypt',
      'India',
      'Pakistan',
      'Philippines',
    ];
    for (let i = 0; i < countries.length; i++) {
      const nat = await mongoose.connection.db
        .collection('nationalities')
        .insertOne({
          id: (i + 1).toString(),
          nationality: countries[i],
          user: adminId,
          deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      nationalities.push({
        id: (i + 1).toString(),
        name: countries[i],
        _id: nat.insertedId,
      });
    }

    console.log('Creating Job Titles...');
    const jobTitles = [];
    const jobs = ['Manager', 'Accountant', 'Engineer', 'Sales', 'Worker'];
    for (let i = 0; i < jobs.length; i++) {
      const job = await mongoose.connection.db
        .collection('jobtitles')
        .insertOne({
          MOHRE: faker.string.numeric(5) + i,
          ENSCOCode: faker.string.numeric(5) + i,
          jobTitle: jobs[i],
          user: adminId,
          deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      jobTitles.push({ name: jobs[i], _id: job.insertedId });
    }

    console.log('Creating Owners...');
    const owners = [];
    for (let i = 0; i < 5; i++) {
      const ownerName = faker.person.fullName();
      const owner = await mongoose.connection.db
        .collection('owners')
        .insertOne({
          uid: faker.string.numeric(10) + i,
          name: ownerName,
          nameAr: ownerName + ' (العربية)',
          avatar: faker.image.avatar(),
          dob: faker.date.birthdate(),
          idNationality: nationalities[0].id,
          nationality: nationalities[0].name,
          phone: faker.phone.number(),
          email: faker.internet.email(),
          remarks: 'Seed data',
          state: 'Dubai',
          address: faker.location.streetAddress(),
          residenceExpiryDate: faker.date.future(),
          fileImmgNo: faker.string.numeric(8),
          status: 'active',
          type: 'owner',
          gender: faker.person.sex(),
          job: jobTitles[0].name,
          emiratesId: faker.string.numeric(15) + i,
          personCode: faker.string.numeric(10) + i,
          user: adminId,
          deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      owners.push(owner.insertedId);
    }

    console.log('Creating Sponsors...');
    const sponsors = [];
    for (let i = 0; i < 5; i++) {
      const sponsorName = faker.person.fullName();
      const sponsor = await mongoose.connection.db
        .collection('sponsors')
        .insertOne({
          uid: faker.string.numeric(10) + i,
          name: sponsorName,
          nameAr: sponsorName + ' (العربية)',
          avatar: faker.image.avatar(),
          dob: faker.date.birthdate(),
          idNationality: nationalities[1].id,
          nationality: nationalities[1].name,
          phone: faker.phone.number(),
          email: faker.internet.email(),
          remarks: 'Seed data',
          state: 'Sharjah',
          address: faker.location.streetAddress(),
          gender: faker.person.sex(),
          job: jobTitles[1].name,
          residenceExpiryDate: faker.date.future(),
          fileImmgNo: faker.string.numeric(8),
          status: 'active',
          emiratesId: faker.string.numeric(15) + i,
          user: adminId,
          deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      sponsors.push(sponsor.insertedId);
    }

    console.log('Creating Companies...');
    const companies = [];
    for (let i = 0; i < 10; i++) {
      const companyName = faker.company.name();
      const company = await mongoose.connection.db
        .collection('companies')
        .insertOne({
          name: companyName,
          nameAr: companyName + ' (العربية)',
          logo: faker.image.url(),
          status: 'active',
          state: 'Dubai',
          address: faker.location.streetAddress(),
          phone: faker.phone.number(),
          licenseNo: faker.string.numeric(7) + i,
          immgCardNo: faker.string.numeric(8) + i,
          immgCardExpiry: faker.date.future(),
          licenseIssueDate: faker.date.past(),
          licenseExpiryDate: faker.date.future(),
          establishmentType: 'LLC',
          molCode: faker.string.numeric(10) + i,
          molCategory: 'Category 1',
          whatsAppNo: faker.phone.number(),
          mobileNo: faker.phone.number(),
          echannelExpiryDate: faker.date.future(),
          website: faker.internet.url(),
          trn: faker.string.numeric(15) + i,
          email: faker.internet.email(),
          tenancyContractValue: '100000',
          tenancyContractExp: faker.date.future().toISOString(),
          ownerId: [owners[i % owners.length]],
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
    for (let i = 0; i < 20; i++) {
      const empName = faker.person.fullName();
      const company = companies[i % companies.length];
      const employee = await mongoose.connection.db
        .collection('employees')
        .insertOne({
          name: empName,
          nameAr: empName + ' (العربية)',
          avatar: faker.image.avatar(),
          personCode: faker.string.numeric(10) + i,
          companyId: [company._id.toString()],
          companyName: [company.name],
          dob: faker.date.birthdate(),
          status: 'Active',
          cardType: 'Work Permit',
          lcNumber: faker.string.numeric(10) + i,
          job: jobTitles[i % jobTitles.length].name,
          visaFileNumber: faker.string.numeric(12) + i,
          salary: faker.number.int({ min: 2000, max: 20000 }),
          gender: faker.person.sex(),
          idNationality: nationalities[i % nationalities.length].id,
          nationality: nationalities[i % nationalities.length].name,
          passportNumber: faker.string.alphanumeric(9).toUpperCase(),
          passportExpiry: faker.date.future(),
          uid: faker.string.numeric(10) + i,
          residenceExpireDate: faker.date.future(),
          lcExpireDate: faker.date.future(),
          mobileNumber: faker.phone.number(),
          email: faker.internet.email(),
          emiratesId: faker.string.numeric(15) + i,
          user: adminId,
          deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      employees.push({
        _id: employee.insertedId,
        name: empName,
        companyId: company._id,
      });
    }

    console.log('Creating Transactions...');
    for (let i = 0; i < 30; i++) {
      const employee = employees[i % employees.length];
      await mongoose.connection.db.collection('transactions').insertOne({
        uid: faker.string.numeric(10) + i + 500,
        username: faker.internet.username() + i + '_trx', // Fixed: Added unique username
        transactionNo: 'TRX' + faker.string.numeric(8) + i,
        personCode: faker.string.numeric(10) + i + 500,
        lcNumber: faker.string.numeric(10) + i + 500,
        emiratesNo: faker.string.numeric(15) + i + 500,
        employeeId: employee._id.toString(),
        employeeName: employee.name,
        companyId: employee.companyId.toString(),
        companyCode: faker.string.numeric(7),
        type: 'Visa Application',
        status: 'In Process',
        statusDate: new Date(),
        userId: adminId,
        deleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    console.log('Creating Natwasals, Tasaheels, EChannels...');
    for (let i = 0; i < 5; i++) {
      const employee = employees[i % employees.length];
      const owner = owners[i % owners.length];

      await mongoose.connection.db.collection('natwasals').insertOne({
        personCode: faker.string.numeric(10) + i + 1000,
        username: faker.internet.username() + i + '_nat',
        password: 'password123',
        name: employee.name,
        nameAr: employee.name + ' (العربية)',
        employee: employee._id,
        owner: owner,
        deleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      await mongoose.connection.db.collection('tasaheels').insertOne({
        personCode: faker.string.numeric(10) + i + 2000,
        username: faker.internet.username() + i + '_tas',
        password: 'password123',
        name: employee.name,
        nameAr: employee.name + ' (العربية)',
        employee: employee._id,
        owner: owner,
        deleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      await mongoose.connection.db.collection('echannels').insertOne({
        uid: faker.string.numeric(10) + i + 3000,
        username: faker.internet.username() + i + '_ech',
        password: 'password123',
        name: employee.name,
        employee: employee._id,
        owner: owner,
        deleted: false,
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
