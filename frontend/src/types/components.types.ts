import { FormikProps } from "formik";
import { ReactNode } from "react";
import { EntitiesType, EntityType, HeadsType } from "./app.types";
import { AllFormiksTypes } from "./forms.types";
import {
  CompanyTypes,
  CustomerTypes,
  EmployeeTypes,
  JobTypes,
  NationalityTypes,
  OwnerTypes,
  ProTypes,
  UserTypes,
} from "./store.types";

interface LogoTypes {
  color?: string;
  noTitle?: boolean;
}

interface TotalBoxTypes {
  count: number;
  variant: EntitiesType;
  isLoading?: boolean;
}

interface UserBoxTypes {
  avatar?: string;
  username: string;
  role?: string;
  menu?: boolean;
  head?: HeadsType;
  size: "small" | "medium" | "large" | "xlarge" | "2xlarge" | "3xlarge";
  res?: boolean;
  variant?: string;
}

interface BadgeNotificationTypes {
  not?: number;
}

interface SidebarItemTypes {
  title: string;
  icon: ReactNode;
  url: string;
}

interface InputTypes {
  name: string;
  label?: string;
  type?: string;
  select?: boolean;
  options?: Array<string>;
  ac?: string;
  textarea?: boolean;
  variant?: string;
  change?: (value: string) => void;
}

interface ButtonTypes {
  icon?: ReactNode;
  title?: string;
  bg?: string;
  variant?: string;
  type?: "button" | "submit";
  handling?: () => void;
}

interface SubmitButtonTypes {
  loading: boolean;
  children: ReactNode;
  variant?: string;
}

interface TitleTypes {
  head?: HeadsType;
  title: string;
  align?: "center" | "left" | "right";
}

interface MenuItemTypes {
  icon: ReactNode;
  title: string;
  color?: string;
  handling?: () => void;
}

interface UploadImageTypes {
  variant: string;
  title: string;
}

interface SortBoxTypes {
  title: string;
  handling: () => void;
  asc?: boolean;
  desc?: boolean;
  jc?: "start" | "end" | "center" | "stretch";
}

interface AutoCompleteSearchTypes {
  label: string;
  multiple?: boolean;
  options:
    | NationalityTypes[]
    | OwnerTypes[]
    | CompanyTypes[]
    | JobTypes[]
    | ProTypes[]
    | CustomerTypes[];
  name: string;
  formik: FormikProps<AllFormiksTypes>;
}

interface ProfileDetailsTypes {
  title: string;
  variant: EntityType;
  data:
    | UserTypes
    | OwnerTypes
    | CompanyTypes
    | ProTypes
    | EmployeeTypes
    | CustomerTypes;
  isLoading?: boolean;
}

interface DataBoxTypes {
  title: string;
  value: string | ReactNode;
  flag?: string;
}

interface UploadStatusTypes {
  icon: ReactNode;
  text: string;
}

export type {
  AutoCompleteSearchTypes,
  BadgeNotificationTypes,
  ButtonTypes,
  DataBoxTypes,
  InputTypes,
  LogoTypes,
  MenuItemTypes,
  ProfileDetailsTypes,
  SidebarItemTypes,
  SortBoxTypes,
  SubmitButtonTypes,
  TitleTypes,
  TotalBoxTypes,
  UploadImageTypes,
  UploadStatusTypes,
  UserBoxTypes,
};
