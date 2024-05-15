import {
  CompanyTypes,
  CustomerTypes,
  EmployeeTypes,
  JobTypes,
  NationalityTypes,
  OwnerTypes,
  UserTypes,
} from "./store.types";

interface JobsTableTypes {
  data: JobTypes[] | null;
  count: number;
  isLoading?: boolean;
  fileIndex?: number;
  noPagination?: boolean;
  sort?: boolean;
  actions?: boolean;
  recent?: boolean;
}

interface CompaniesTableTypes {
  data: CompanyTypes[] | null;
  count: number;
  isLoading?: boolean;
  fileIndex?: number;
  noPagination?: boolean;
  unLink?: boolean;
  sort?: boolean;
  actions?: boolean;
  recent?: boolean;
}

interface OwnersTableTypes {
  data: OwnerTypes[] | null;
  count: number;
  isLoading?: boolean;
  fileIndex?: number;
  noPagination?: boolean;
  sort?: boolean;
  actions?: boolean;
  recent?: boolean;
}

interface ProsTableTypes {
  data: OwnerTypes[] | null;
  count: number;
  isLoading?: boolean;
  fileIndex?: number;
  noPagination?: boolean;
  sort?: boolean;
  actions?: boolean;
  recent?: boolean;
}

interface EmployeesTableTypes {
  data: EmployeeTypes[] | null;
  count: number;
  isLoading?: boolean;
  fileIndex?: number;
  noPagination?: boolean;
  sort?: boolean;
  actions?: boolean;
  recent?: boolean;
}

interface CustomersTableTypes {
  data: CustomerTypes[] | null;
  count: number;
  isLoading?: boolean;
  fileIndex?: number;
  noPagination?: boolean;
  sort?: boolean;
  actions?: boolean;
  recent?: boolean;
}

interface NationalitiesTableTypes {
  data: NationalityTypes[] | null;
  count: number;
  isLoading?: boolean;
  fileIndex?: number;
  noPagination?: boolean;
  sort?: boolean;
  actions?: boolean;
  recent?: boolean;
}

interface UsersTableTypes {
  data: UserTypes[] | null;
  count: number;
  isLoading?: boolean;
  noPagination?: boolean;
  sort?: boolean;
  actions?: boolean;
  recent?: boolean;
}

export type {
  CompaniesTableTypes,
  CustomersTableTypes,
  EmployeesTableTypes,
  JobsTableTypes,
  NationalitiesTableTypes,
  OwnersTableTypes,
  ProsTableTypes,
  UsersTableTypes,
};
