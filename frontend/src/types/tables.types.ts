import {
  CompanyTypes,
  CustomerTypes,
  EChannelTypes,
  EmployeeTypes,
  JobTypes,
  NationalityTypes,
  NatwasalTypes,
  OwnerTypes,
  SponsorTypes,
  TasheelTypes,
  UserTypes,
  TransactionTypes,
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

interface TransactionsTableTypes {
  data: TransactionTypes[] | null;
  count: number;
  isLoading?: boolean;
  fileIndex?: number;
  noPagination?: boolean;
  sort?: boolean;
  actions?: boolean;
  recent?: boolean;
  type: "all" | "pre" | "new" | "renew";
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

interface TasheelsTableTypes {
  data: TasheelTypes[] | null;
  count: number;
  isLoading?: boolean;
  fileIndex?: number;
  noPagination?: boolean;
  sort?: boolean;
  actions?: boolean;
  recent?: boolean;
}

interface NatwasalsTableTypes {
  data: NatwasalTypes[] | null;
  count: number;
  isLoading?: boolean;
  fileIndex?: number;
  noPagination?: boolean;
  sort?: boolean;
  actions?: boolean;
  recent?: boolean;
}

interface PersonsTableTypes {
  data:
    | {
        email: string;
        name: string;
        nameAr: string;
        type: string;
        personCode: string;
        owner?: OwnerTypes;
        employee?: EmployeeTypes;
      }[]
    | TasheelTypes[]
    | NatwasalTypes[]
    | null;
  count: number;
  clicked: (data: TasheelTypes, reset?: boolean) => void;
  noPagination?: boolean;
}

export type {
  CompaniesTableTypes,
  CustomersTableTypes,
  EChannelsTableTypes,
  EmployeesTableTypes,
  JobsTableTypes,
  NationalitiesTableTypes,
  NatwasalsTableTypes,
  OwnersTableTypes,
  PersonsTableTypes,
  ProsTableTypes,
  SponsorsTableTypes,
  TasheelsTableTypes,
  UsersTableTypes,
  TransactionsTableTypes,
};
