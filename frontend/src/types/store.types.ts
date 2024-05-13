interface AuthValuesTypes {
  token: string | null;
  userId: string | null;
  user: UserTypes | null;
  isLoading: boolean;
}

interface ActivityTypes {}

interface ActivitiesValuesTypes {
  activities: ActivityTypes | null;
  isLoading: boolean;
}

interface ActivitiesArgsTypes {
  page?: number;
  limit?: number;
}

//User

interface UserTypes {
  _id: string;
  name: string;
  password: string;
  email: string;
  role: string;
  phone: string;
  avatar: string;
  createdAt: Date;
  status: string;
}

interface UsersCounterValuesTypes {
  isLoading: boolean;
  usersCounter: number;
}

interface UsersArgsTypes {
  page?: number;
  search?: string;
  sort?: string;
  limit?: number;
  role?: string;
  status?: string;
}

interface UsersValuesTypes {
  isLoading: boolean;
  users: UserTypes[] | null;
}

interface UserValuesTypes {
  isLoading: boolean;
  user: UserTypes | null;
}

//Owner

interface OwnerTypes {
  _id?: string;
  uid: string;
  name: string;
  nameAr: string;
  avatar: string;
  dob: Date;
  idNationality: string;
  nationality: string;
  phone: string;
  email: string;
  remarks: string;
  state: string;
  address: string;
  proCode: boolean;
  emiratesId: string;
  personCode: string;
  createdAt: Date;
  user?: string;
}

interface OwnerValuesTypes {
  isLoading: boolean;
  owner: OwnerTypes | null;
  companies: CompanyTypes[] | null;
}

interface OwnersValuesTypes {
  isLoading: boolean;
  owners: OwnerTypes[] | null;
}

interface OwnersArgsTypes {
  page?: number;
  search?: string;
  sort?: string;
  limit?: number;
  dobTo?: string;
  dobFrom?: string;
  state?: string;
  nationality?: string;
}

interface OwnersCounterValuesTypes {
  isLoading: boolean;
  ownersCounter: number;
}

//Customer

interface CustomerTypes extends EmployeeTypes {}

interface CustomerValuesTypes {
  isLoading: boolean;
  customer: CustomerTypes | null;
  companies: CompanyTypes[] | null;
}

interface CustomersValuesTypes {
  isLoading: boolean;
  customers: CustomerTypes[] | null;
}

interface CustomersArgsTypes {
  search?: string;
  sort?: string;
  nationality?: string;
  cardType?: string;
  gender?: string;
  status?: string;
  page?: number;
  limit?: number;
}

interface CustomersCounterValuesTypes {
  isLoading: boolean;
  customersCounter: number;
}

//PRO

interface ProTypes extends OwnerTypes {
  isPro: string;
}

interface ProValuesTypes {
  isLoading: boolean;
  pro: ProTypes | null;
  companies: CompanyTypes[] | null;
}

interface ProsValuesTypes {
  isLoading: boolean;
  pros: ProTypes[] | null;
}

interface ProsArgsTypes {
  page?: number;
  search?: string;
  sort?: string;
  limit?: number;
  dobTo?: string;
  dobFrom?: string;
  state?: string;
  nationality?: string;
}

interface ProsCounterValuesTypes {
  isLoading: boolean;
  prosCounter: number;
}

//Employee

interface EmployeeTypes {
  _id?: string;
  avatar: string;
  name: string;
  nameAr: string;
  dob: Date;
  personCode: string;
  companyCode: string;
  companyName: string;
  idNationality: string;
  nationality: string;
  gender: string;
  email: string;
  job: string;
  mobileNumber: string;
  salary: string;
  cardType: string;
  cardNumber: string;
  status: string;
  visaFileNumber: string;
  passportNumber: string;
  passportExpiry: Date;
  residenceExpireDate: Date;
  lcExpireDate: Date;
  workPermitNumber: string;
  medicalInsuranceCompany: string;
  medicalPolicy: string;
  medicalExpireDate: Date;
  iLOEInsuranceCompany: string;
  iLOEPolicy: string;
  iLOEExpireDate: Date;
  uid: string;
  emiratesId: string;
  remarks: string;
  user?: string;
}

interface EmployeeValuesTypes {
  isLoading: boolean;
  employee: EmployeeTypes | null;
  companies: CompanyTypes[] | null;
}

interface EmployeesValuesTypes {
  isLoading: boolean;
  employees: EmployeeTypes[] | null;
}

interface EmployeesArgsTypes {
  search?: string;
  sort?: string;
  nationality?: string;
  cardType?: string;
  gender?: string;
  status?: string;
  page?: number;
  limit?: number;
}

interface EmployeesCounterValuesTypes {
  isLoading: boolean;
  employeesCounter: number;
}

//Company

interface CompanyTypes {
  _id?: string;
  name: string;
  nameAr: string;
  logo: string;
  status: string;
  country: string;
  state: string;
  address: string;
  phone: string;
  proCode: OwnerTypes[] | string[];
  ownerId: OwnerTypes[] | string[];
  licenseNo: string;
  immgCardNo: string;
  immgCardExpiry: Date;
  licenseIssueDate: Date;
  licenseExpiryDate: Date;
  establishmentType: string;
  licenseIssuePlace: string;
  zipCode: string;
  molCode: string;
  molCategory: string;
  whatsAppNo: string;
  mobileNo: string;
  website: string;
  trn: string;
  email: string;
  tenancyContractValue: string;
  tenancyContractExp: Date;
  remarks: string;
  createdAt: Date;
  username: string;
  password: string;
  echannelExpiryDate: Date;
  user?: string;
}

interface CompanyValuesTypes {
  isLoading: boolean;
  company: CompanyTypes | null;
}

interface CompaniesCounterValuesTypes {
  isLoading: boolean;
  companiesCounter: number;
}

interface CompaniesValuesTypes {
  isLoading: boolean;
  companies: CompanyTypes[] | null;
}

interface CompaniesArgsTypes {
  page?: number;
  search?: string;
  sort?: string;
  limit?: number;
  state?: string;
  status?: string;
  molCategory?: string;
  establishmentType?: string;
  IMMGFrom?: string;
  IMMGTo?: string;
  licenseFrom?: string;
  licenseTo?: string;
}

//Job

interface JobsValuesTypes {
  isLoading: boolean;
  jobs: JobTypes[] | null;
}

interface JobsArgsTypes {
  page?: number;
  search?: string;
  sort?: string;
  limit?: number;
  reverse?: boolean;
}

interface JobsCounterValuesTypes {
  isLoading: boolean;
  jobsCounter: number;
}

interface JobTypes {
  _id?: string;
  MOHRE: string;
  ENSCOCode: string;
  jobTitle: string;
  user?: string;
}

//Nationality

interface NationalitiesCounterValuesTypes {
  isLoading: boolean;
  nationalitiesCounter: number;
}

interface NationalitiesArgsTypes {
  page?: number;
  search?: string;
  sort?: string;
  limit?: number;
}

interface NationalitiesValuesTypes {
  isLoading: boolean;
  nationalities: NationalityTypes[] | null;
}

interface NationalityTypes {
  _id?: string;
  id: string;
  nationality: string;
  user?: string;
}

export type {
  ActivitiesArgsTypes,
  ActivitiesValuesTypes,
  ActivityTypes,
  AuthValuesTypes,
  CompaniesArgsTypes,
  CompaniesCounterValuesTypes,
  CompaniesValuesTypes,
  CompanyTypes,
  CompanyValuesTypes,
  CustomerTypes,
  CustomerValuesTypes,
  CustomersArgsTypes,
  CustomersCounterValuesTypes,
  CustomersValuesTypes,
  EmployeeTypes,
  EmployeeValuesTypes,
  EmployeesArgsTypes,
  EmployeesCounterValuesTypes,
  EmployeesValuesTypes,
  JobTypes,
  JobsArgsTypes,
  JobsCounterValuesTypes,
  JobsValuesTypes,
  NationalitiesArgsTypes,
  NationalitiesCounterValuesTypes,
  NationalitiesValuesTypes,
  NationalityTypes,
  OwnerTypes,
  OwnerValuesTypes,
  OwnersArgsTypes,
  OwnersCounterValuesTypes,
  OwnersValuesTypes,
  ProTypes,
  ProValuesTypes,
  ProsArgsTypes,
  ProsCounterValuesTypes,
  ProsValuesTypes,
  UserTypes,
  UserValuesTypes,
  UsersArgsTypes,
  UsersCounterValuesTypes,
  UsersValuesTypes,
};
