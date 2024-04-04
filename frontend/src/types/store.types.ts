interface AuthValuesTypes {
  token: string | null;
  userId: string | null;
  user: UserTypes | null;
  isLoading: boolean;
}

interface JobsValuesTypes {
  isLoading: boolean;
  jobs: JobTypes[] | null;
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
  date?: string;
  state?: string;
  nationality?: string;
}

interface CompanyValuesTypes {
  isLoading: boolean;
  company: CompanyTypes | null;
}

interface OwnersCounterValuesTypes {
  isLoading: boolean;
  ownersCounter: number;
}
interface CompaniesCounterValuesTypes {
  isLoading: boolean;
  companiesCounter: number;
}
interface JobsCounterValuesTypes {
  isLoading: boolean;
  jobsCounter: number;
}
interface UsersCounterValuesTypes {
  isLoading: boolean;
  usersCounter: number;
}
interface NationalitiesCounterValuesTypes {
  isLoading: boolean;
  nationalitiesCounter: number;
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
}

interface JobsArgsTypes {
  page?: number;
  search?: string;
  sort?: string;
  limit?: number;
}

interface NationalitiesArgsTypes {
  page?: number;
  search?: string;
  sort?: string;
  limit?: number;
}

interface UsersArgsTypes {
  page?: number;
  search?: string;
  sort?: string;
  limit?: number;
  role?: string;
  status?: string;
}

interface NationalitiesValuesTypes {
  isLoading: boolean;
  nationalities: NationalityTypes[] | null;
}

interface UsersValuesTypes {
  isLoading: boolean;
  users: UserTypes[] | null;
}

interface UserValuesTypes {
  isLoading: boolean;
  user: UserTypes | null;
}

interface OwnerTypes {
  _id: string;
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

interface CompanyTypes {
  _id: string;
  name: string;
  nameAr: string;
  logo: string;
  status: string;
  country: string;
  state: string;
  address: string;
  phone: string;
  proCode: string[];
  ownerId: string[];
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
  user?: string;
}

interface EmployeeTypes {
  _id: string;
  employeeName: string;
  companyCode: string;
  dateOfBirth: Date;
  gender: string;
  idNationality: string;
  nationality: string;
  passportNumber: string;
  passportExpiry: Date;
  uidNo: string;
  emiratesIdNo: string;
  user?: string;
}

interface PROTypes {
  avatar: string;
  name: string;
  nameAr: string;
  username: string;
}

interface JobTypes {
  _id: string;
  ENSCOCode: string;
  jobTitle: string;
  user?: string;
}

interface NationalityTypes {
  _id: string;
  nationality: string;
  user?: string;
}

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

export type {
  AuthValuesTypes,
  CompaniesArgsTypes,
  CompaniesCounterValuesTypes,
  CompaniesValuesTypes,
  CompanyTypes,
  CompanyValuesTypes,
  EmployeeTypes,
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
  PROTypes,
  UserTypes,
  UserValuesTypes,
  UsersArgsTypes,
  UsersCounterValuesTypes,
  UsersValuesTypes,
};
