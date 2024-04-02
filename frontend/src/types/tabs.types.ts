import { ReactNode } from "react";
import { CompanyTypes, OwnerTypes, UserTypes } from "./store.types";

interface UserProfileProps {
  user: UserTypes | null;
  isLoading: boolean;
}

interface OwnerProfileProps {
  owner: OwnerTypes | null;
  isLoading: boolean;
}

interface CompanyProfileProps {
  company: CompanyTypes | null;
  isLoading: boolean;
}

interface TabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}

interface PrimaryTabTypes {
  variant: string;
  tabsTitles: string[];
  children: ReactNode;
}

export type {
  CompanyProfileProps,
  OwnerProfileProps,
  PrimaryTabTypes,
  TabPanelProps,
  UserProfileProps,
};
