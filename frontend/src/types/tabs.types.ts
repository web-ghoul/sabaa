import { ReactNode } from "react";
import { EntityType } from "./app.types";
import {
  ActivityTypes,
  CompanyTypes,
  CustomerTypes,
  EmployeeTypes,
  OwnerTypes,
  ProTypes,
  UserTypes,
} from "./store.types";

interface UserProfileProps {
  user: UserTypes | null;
  isLoading: boolean;
}

interface OwnerProfileProps {
  owner: OwnerTypes | null;
  isLoading: boolean;
  companies: CompanyTypes[] | null;
  activities: ActivityTypes[] | null;
}

interface ProProfileProps {
  pro: ProTypes | null;
  isLoading: boolean;
  companies: CompanyTypes[] | null;
  activities: ActivityTypes[] | null;
}

interface EmployeeProfileProps {
  employee: EmployeeTypes | null;
  isLoading: boolean;
  activities: ActivityTypes[] | null;
}

interface CustomerProfileProps {
  customer: CustomerTypes | null;
  isLoading: boolean;
  companies: CompanyTypes[] | null;
  activities: ActivityTypes[] | null;
}

interface CompanyProfileProps {
  company: CompanyTypes | null;
  isLoading: boolean;
  activities: ActivityTypes[] | null;
}

interface TabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}

interface PrimaryTabTypes {
  variant: EntityType;
  tabsTitles: string[];
  children: ReactNode;
}

export type {
  CompanyProfileProps,
  CustomerProfileProps,
  EmployeeProfileProps,
  OwnerProfileProps,
  PrimaryTabTypes,
  ProProfileProps,
  TabPanelProps,
  UserProfileProps,
};
