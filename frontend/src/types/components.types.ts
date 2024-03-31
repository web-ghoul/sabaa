import { ReactNode } from "react";
<<<<<<< HEAD
import {
  CompanyTypes,
  EmployeeTypes,
  NationalityTypes,
  OwnerTypes,
  PROTypes,
  UserTypes,
} from "./store.types";
=======
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949

interface LogoTypes {
  color?: string;
}

interface UserBoxTypes {
  avatar?: string;
  username: string;
  role?: string;
  menu?: boolean;
  head?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2";
<<<<<<< HEAD
  size: "small" | "medium" | "large" | "xlarge" | "2xlarge" | "3xlarge";
=======
  size: "small" | "medium" | "large";
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
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
<<<<<<< HEAD
  ac?: string;
=======
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
}

interface SubmitButtonTypes {
  loading: boolean;
  children: ReactNode;
  variant?: string;
}

interface TitleTypes {
  head?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
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
  loading?: boolean;
<<<<<<< HEAD
  options: NationalityTypes[];
  name: string;
}

interface ProfileDetailsTypes {
  title: string;
  variant: "user" | "owner" | "company" | "PRO" | "employee";
  data: UserTypes | OwnerTypes | CompanyTypes | PROTypes | EmployeeTypes;
  isLoading?: boolean;
}

interface DataBoxTypes {
  title: string;
  value: string;
  flag?: string;
}

interface UploadStatusTypes {
  icon: ReactNode;
  text: string;
=======
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
}

export type {
  AutoCompleteSearchTypes,
  BadgeNotificationTypes,
<<<<<<< HEAD
  DataBoxTypes,
  InputTypes,
  LogoTypes,
  MenuItemTypes,
  ProfileDetailsTypes,
=======
  InputTypes,
  LogoTypes,
  MenuItemTypes,
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
  SidebarItemTypes,
  SortBoxTypes,
  SubmitButtonTypes,
  TitleTypes,
  UploadImageTypes,
<<<<<<< HEAD
  UploadStatusTypes,
=======
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
  UserBoxTypes,
};
