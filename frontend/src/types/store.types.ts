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
}

interface OwnersValuesTypes {
  isLoading: boolean;
  owners: OwnerTypes[] | null;
}

interface OwnersArgsTypes {
  page?: number;
  search?: string;
  sort?: string;
}

interface CompanyValuesTypes {
  isLoading: boolean;
  company: CompanyTypes | null;
}

interface CompaniesValuesTypes {
  isLoading: boolean;
  companies: CompanyTypes[] | null;
}

interface CompaniesArgsTypes {
  page?: number;
  search?: string;
  sort?: string;
}

interface JobsArgsTypes {
  page?: number;
  search?: string;
  sort?: string;
}

interface NationalitiesArgsTypes {
  page?: number;
  search?: string;
  sort?: string;
}

interface UsersArgsTypes {
  page?: number;
  search?: string;
  sort?: string;
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
  user?: string;
}

interface CompanyTypes {
  _id: string;
  name: string;
  nameAr: string;
  logo: string;
  status: string;
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
  molCode: string;
  molCategory: string;
  whatsAppNo: string;
  mobileNo: string;
  website: string;
  trn: string;
  email: string;
  tenancyContractValue: string;
  tenancyContractExp: string;
  remarks: string;
  user: string;
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
  status: string;
}

export type {
  AuthValuesTypes,
  CompaniesArgsTypes,
  CompaniesValuesTypes,
  CompanyTypes,
  CompanyValuesTypes,
  EmployeeTypes,
  JobTypes,
  JobsArgsTypes,
  JobsValuesTypes,
  NationalitiesArgsTypes,
  NationalitiesValuesTypes,
  NationalityTypes,
  OwnerTypes,
  OwnerValuesTypes,
  OwnersArgsTypes,
  OwnersValuesTypes,
  PROTypes,
  UserTypes,
  UserValuesTypes,
  UsersArgsTypes,
  UsersValuesTypes,
};
