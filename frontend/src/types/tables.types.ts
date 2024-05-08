import {
  CompanyTypes,
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
}

interface CompaniesTableTypes {
  data: CompanyTypes[] | null;
  count: number;
  isLoading?: boolean;
  fileIndex?: number;
  noPagination?: boolean;
  unLink?: boolean;
}

interface OwnersTableTypes {
  data: OwnerTypes[] | null;
  count: number;
  isLoading?: boolean;
  fileIndex?: number;
  noPagination?: boolean;
}

interface ProsTableTypes {
  data: OwnerTypes[] | null;
  count: number;
  isLoading?: boolean;
  fileIndex?: number;
  noPagination?: boolean;
}

interface NationalitiesTableTypes {
  data: NationalityTypes[] | null;
  count: number;
  isLoading?: boolean;
  fileIndex?: number;
  noPagination?: boolean;
}

interface UsersTableTypes {
  data: UserTypes[] | null;
  count: number;
  isLoading?: boolean;
  noPagination?: boolean;
}

export type {
  CompaniesTableTypes,
  JobsTableTypes,
  NationalitiesTableTypes,
  OwnersTableTypes,
  ProsTableTypes,
  UsersTableTypes,
};
