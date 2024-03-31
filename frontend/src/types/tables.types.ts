import {
  CompanyTypes,
  JobTypes,
  NationalityTypes,
  OwnerTypes,
  UserTypes,
} from "./store.types";

interface JobsTableTypes {
  data: JobTypes[] | null;
  isLoading?: boolean;
  fileIndex?: number;
}

interface CompaniesTableTypes {
  data: CompanyTypes[] | null;
  isLoading?: boolean;
  fileIndex?: number;
}

interface OwnersTableTypes {
  data: OwnerTypes[] | null;
  isLoading?: boolean;
  fileIndex?: number;
}

interface NationalitiesTableTypes {
  data: NationalityTypes[] | null;
  isLoading?: boolean;
  fileIndex?: number;
}

interface UsersTableTypes {
  data: UserTypes[] | null;
  isLoading?: boolean;
}

export type {
  CompaniesTableTypes,
  JobsTableTypes,
  NationalitiesTableTypes,
  OwnersTableTypes,
  UsersTableTypes,
};
