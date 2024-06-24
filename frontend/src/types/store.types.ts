import { EntityType } from "./app.types";

interface AuthValuesTypes {
  token: string | null;
  userId: string | null;
  user: UserTypes | null;
  activities: ActivityTypes[] | null;
  isLoading: boolean;
}

interface ActivityTypes {
  type: EntityType;
  userName: string;
  id: string;
  avatar?: string;
  action: string;
  userId: UserTypes;
  route: string;
  ownerType?: string;
  createdAt?: Date;
}

interface ActivitiesValuesTypes {
  activities: ActivityTypes[] | null;
  isLoading: boolean;
}

interface ActivitiesArgsTypes {
  page?: number;
  limit?: number;
  search?: string;
  type?: string;
  operation?: string;
  to?: string;
  from?: string;
}

interface ActivitiesCounterValuesTypes {
  isLoading: boolean;
  activitiesCounter: number;
}

interface RecentActivitiesValuesTypes {
  recentActivities: ActivityTypes[] | null;
  isLoading: boolean;
}

interface RecentActivitiesArgsTypes {
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

interface RecentUsersArgsTypes {
  limit?: number;
}

interface RecentUsersValuesTypes {
  isLoading: boolean;
  recentUsers: UserTypes[] | null;
}

interface UserValuesTypes {
  isLoading: boolean;
  user: UserTypes | null;
  activities: ActivityTypes[] | null;
}

//Owner

interface OwnerTypes {
  _id?: string;
  uid: string;
  name: string;
  nameAr: string;
  avatar: string;
  gender: string;
  job: string;
  dob?: Date;
  sponsors: SponsorTypes[];
  idNationality: string;
  nationality: string;
  phone: string;
  email: string;
  remarks: string;
  state: string;
  address: string;
  emiratesId: string;
  personCode: string;
  fileImmgNo: string;
  status: string;
  sponsor: string;
  type?: string;
  residenceExpiryDate?: Date;
  createdAt?: Date;
  user?: string;
}

interface OwnerValuesTypes {
  isLoading: boolean;
  owner: OwnerTypes | null;
  companies: CompanyTypes[] | null;
  activities: ActivityTypes[] | null;
  eChannel: EChannelTypes | null;
  tasheel: TasheelTypes | null;
  natwasal: NatwasalTypes | null;
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
  residenceTo?: string;
  residenceFrom?: string;
  state?: string;
  status?: string;
  nationality?: string;
}

interface RecentOwnersValuesTypes {
  isLoading: boolean;
  recentOwners: OwnerTypes[] | null;
}

interface RecentOwnersArgsTypes {
  limit?: number;
}

interface OwnersCounterValuesTypes {
  isLoading: boolean;
  ownersCounter: number;
}

//PRO

interface ProTypes extends OwnerTypes {}

interface ProValuesTypes {
  isLoading: boolean;
  pro: ProTypes | null;
  companies: CompanyTypes[] | null;
  activities: ActivityTypes[] | null;
  eChannel: EChannelTypes | null;
  tasheel: TasheelTypes | null;
  natwasal: NatwasalTypes | null;
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

interface RecentProsValuesTypes {
  isLoading: boolean;
  recentPros: ProTypes[] | null;
}

interface RecentProsArgsTypes {
  limit?: number;
}

interface ProsCounterValuesTypes {
  isLoading: boolean;
  prosCounter: number;
}

//Customer

interface CustomerTypes extends OwnerTypes {}

interface CustomerValuesTypes {
  isLoading: boolean;
  customer: CustomerTypes | null;
  companies: CompanyTypes[] | null;
  activities: ActivityTypes[] | null;
  eChannel: EChannelTypes | null;
  tasheel: TasheelTypes | null;
  natwasal: NatwasalTypes | null;
}

interface CustomersValuesTypes {
  isLoading: boolean;
  customers: CustomerTypes[] | null;
}

interface CustomersArgsTypes {
  page?: number;
  search?: string;
  sort?: string;
  limit?: number;
  dobTo?: string;
  dobFrom?: string;
  state?: string;
  status?: string;
  nationality?: string;
}

interface RecentCustomersValuesTypes {
  isLoading: boolean;
  recentCustomers: CustomerTypes[] | null;
}

interface RecentCustomersArgsTypes {
  limit?: number;
}

interface CustomersCounterValuesTypes {
  isLoading: boolean;
  customersCounter: number;
}

//Sponsor

interface SponsorTypes extends CustomerTypes {
  relativeRelation: string;
}

interface SponsorsValuesTypes {
  isLoading: boolean;
  sponsors: SponsorTypes[] | null;
}

//Employee

interface EmployeeTypes {
  _id?: string;
  avatar: string;
  name: string;
  nameAr: string;
  dob?: Date;
  personCode: string;
  companyId: CompanyTypes[] | string[];
  sponsors: SponsorTypes[];
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
  fileImmgNo: string;
  passportNumber: string;
  passportExpiry?: Date;
  residenceExpireDate?: Date;
  lcExpireDate?: Date;
  workPermitNumber: string;
  medicalInsuranceCompany: string;
  medicalPolicyNo: string;
  medicalExpireDate?: Date;
  medical: { insurance: string; expireDate: Date };
  iLOEInsuranceCompany: string;
  iLOEPolicyNo: string;
  iLOEExpireDate?: Date;
  iLOE: { insurance: string; expireDate: Date };
  uid: string;
  emiratesId: string;
  remarks: string;
  user?: string;
  createdAt?: Date;
}

interface EmployeeValuesTypes {
  isLoading: boolean;
  employee: EmployeeTypes | null;
  companies: CompanyTypes[] | null;
  activities: ActivityTypes[] | null;
  eChannel: EChannelTypes | null;
  tasheel: TasheelTypes | null;
  natwasal: NatwasalTypes | null;
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

interface RecentEmployeesValuesTypes {
  isLoading: boolean;
  recentEmployees: EmployeeTypes[] | null;
}

interface RecentEmployeesArgsTypes {
  limit?: number;
}

interface EmployeesCounterValuesTypes {
  isLoading: boolean;
  employeesCounter: number;
}

//E-Channel

interface EChannelTypes {
  _id?: string;
  name: string;
  username: string;
  password: string;
  type: string;
  phone: string;
  gender: string;
  uid: string;
  emiratesId: string;
  personCode: string;
  eChannelNotes: string;
  status: "active" | "inactive";
  owner?: string | OwnerTypes;
  employee?: string | EmployeeTypes;
  user?: string;
  createdAt?: Date;
  searchForPerson: string;
}

interface EChannelsValuesTypes {
  isLoading: boolean;
  eChannels: EChannelTypes[] | null;
}

interface EChannelsArgsTypes {
  search?: string;
  sort?: string;
  type?: string;
  gender?: string;
  status?: string;
  page?: number;
  limit?: number;
}

interface EChannelsCounterValuesTypes {
  isLoading: boolean;
  eChannelsCounter: number;
}

//Tasheel

interface TasheelTypes {
  _id?: string;
  name: string;
  nameAr: string;
  personCode: string;
  emiratesId: string;
  username: string;
  password: string;
  security1: string;
  security2: string;
  email: string;
  mobile: string;
  type: string;
  notes: string;
  owner?: string | OwnerTypes;
  employee?: string | EmployeeTypes;
  user?: string;
  createdAt?: Date;
  searchForPerson: string;
}

interface TasheelsValuesTypes {
  isLoading: boolean;
  tasheels: TasheelTypes[] | null;
}

interface TasheelsArgsTypes {
  search?: string;
  sort?: string;
  type?: string;
  gender?: string;
  status?: string;
  page?: number;
  limit?: number;
}

interface TasheelsCounterValuesTypes {
  isLoading: boolean;
  tasheelsCounter: number;
}

//Tasheel

interface NatwasalTypes extends TasheelTypes {}

interface NatwasalsValuesTypes {
  isLoading: boolean;
  natwasals: NatwasalTypes[] | null;
}

interface NatwasalsArgsTypes {
  search?: string;
  sort?: string;
  type?: string;
  gender?: string;
  status?: string;
  page?: number;
  limit?: number;
}

interface NatwasalsCounterValuesTypes {
  isLoading: boolean;
  natwasalsCounter: number;
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
  proCode: ProTypes[] | string[];
  ownerId: OwnerTypes[] | string[];
  customerId: CustomerTypes[] | string[];
  employees: EmployeeTypes[] | string[];
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
  echannelRemarks: string;
  userName: string;
  password: string;
  noqodiWalet: string;
  noqodiPass: string;
  pinToken: string;
  noqodiNew: string;
  noqodiReg: string;
  noqodiNPass: string;
  echannelExpiryDate: Date;
  user?: string;
}

interface CompanyValuesTypes {
  isLoading: boolean;
  company: CompanyTypes | null;
  activities: ActivityTypes[] | null;
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
  id?: string;
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

interface RecentCompaniesValuesTypes {
  isLoading: boolean;
  recentCompanies: CompanyTypes[] | null;
}

interface RecentCompaniesArgsTypes {
  limit?: number;
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

interface RecentJobsValuesTypes {
  isLoading: boolean;
  recentJobs: JobTypes[] | null;
}

interface RecentJobsArgsTypes {
  limit?: number;
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

interface RecentNationalitiesArgsTypes {
  limit?: number;
}

interface RecentNationalitiesValuesTypes {
  isLoading: boolean;
  recentNationalities: NationalityTypes[] | null;
}

interface NationalityTypes {
  _id?: string;
  id: string;
  nationality: string;
  user?: string;
}

export type {
  ActivitiesArgsTypes,
  ActivitiesCounterValuesTypes,
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
  EChannelTypes,
  EChannelsArgsTypes,
  EChannelsCounterValuesTypes,
  EChannelsValuesTypes,
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
  NatwasalTypes,
  NatwasalsArgsTypes,
  NatwasalsCounterValuesTypes,
  NatwasalsValuesTypes,
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
  RecentActivitiesArgsTypes,
  RecentActivitiesValuesTypes,
  RecentCompaniesArgsTypes,
  RecentCompaniesValuesTypes,
  RecentCustomersArgsTypes,
  RecentCustomersValuesTypes,
  RecentEmployeesArgsTypes,
  RecentEmployeesValuesTypes,
  RecentJobsArgsTypes,
  RecentJobsValuesTypes,
  RecentNationalitiesArgsTypes,
  RecentNationalitiesValuesTypes,
  RecentOwnersArgsTypes,
  RecentOwnersValuesTypes,
  RecentProsArgsTypes,
  RecentProsValuesTypes,
  RecentUsersArgsTypes,
  RecentUsersValuesTypes,
  SponsorTypes,
  SponsorsValuesTypes,
  TasheelTypes,
  TasheelsArgsTypes,
  TasheelsCounterValuesTypes,
  TasheelsValuesTypes,
  UserTypes,
  UserValuesTypes,
  UsersArgsTypes,
  UsersCounterValuesTypes,
  UsersValuesTypes,
};
