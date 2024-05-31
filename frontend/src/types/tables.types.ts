import {
  CompanyTypes,
  CustomerTypes,
  EChannelTypes,
  EmployeeTypes,
  JobTypes,
  NationalityTypes,
  OwnerTypes,
  SponsorTypes,
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

interface SponsorsTableTypes {
  data: SponsorTypes[] | null;
  count: number;
  isLoading?: boolean;
  fileIndex?: number;
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

interface EChannelsTableTypes {
  data: EChannelTypes[] | null;
  count: number;
  isLoading?: boolean;
  fileIndex?: number;
  noPagination?: boolean;
  sort?: boolean;
  actions?: boolean;
  recent?: boolean;
}

export type {
  CompaniesTableTypes,
  CustomersTableTypes,
  EChannelsTableTypes,
  EmployeesTableTypes,
  JobsTableTypes,
  NationalitiesTableTypes,
  OwnersTableTypes,
  ProsTableTypes,
  SponsorsTableTypes,
  UsersTableTypes,
};
