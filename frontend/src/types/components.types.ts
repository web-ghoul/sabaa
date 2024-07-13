import { ReactNode } from "react";
import {
  FieldErrors,
  Path,
  UseFormGetValues,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import { EntitiesType, EntityType, HeadsType } from "./app.types";
import { AllFormsTypes } from "./forms.types";
import {
  CompanyTypes,
  CustomerTypes,
  EChannelTypes,
  EmployeeTypes,
  JobTypes,
  NationalityTypes,
  NatwasalTypes,
  OwnerTypes,
  ProTypes,
  SponsorTypes,
  TasheelTypes,
  UserTypes,
} from "./store.types";

interface LogoTypes {
  color?: string;
  noTitle?: boolean;
  handling?: () => void;
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
  sub?: boolean;
  children?: ReactNode;
}

interface InputTypes {
  register: UseFormRegister<AllFormsTypes>;
  name: Path<AllFormsTypes>;
  errors: FieldErrors<AllFormsTypes>;
  label?: string;
  type?: string;
  select?: boolean;
  options?: Array<string>;
  ac?: string;
  textarea?: boolean;
  disabled?: boolean;
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
  register: UseFormRegister<AllFormsTypes>;
  name: Path<AllFormsTypes>;
  errors: FieldErrors<AllFormsTypes>;
  setValue: UseFormSetValue<AllFormsTypes>;
  getValues: UseFormGetValues<AllFormsTypes>;
  variant?: EntityType;
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
    | CustomerTypes
    | SponsorTypes;
  eChannel?: EChannelTypes;
  tasheel?: TasheelTypes;
  natwasal?: NatwasalTypes;
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

interface ExcelButtonsTypes {
  variant: EntitiesType;
  addBtn?: string;
  upload?: boolean;
  all?: boolean;
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
  ExcelButtonsTypes,
};
