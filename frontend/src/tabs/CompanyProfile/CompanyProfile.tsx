import { AddRounded } from "@mui/icons-material";
import { Box } from "@mui/material";
import { useContext } from "react";
import { RiFileExcel2Fill } from "react-icons/ri";
import Button from "../../components/Button/Button";
import ProfileDetails from "../../components/ProfileDetails/ProfileDetails";
import UnderDevelopment from "../../components/UnderDevelopment/UnderDevelopment";
import { ModalsContext } from "../../contexts/ModalsContext";
import { TabsContext } from "../../contexts/TabsContext";
import ActivitiesSection from "../../sections/ActivitiesSection";
import EmployeesTable from "../../tables/EmployeesTable/EmployeesTable";
import OwnersTable from "../../tables/OwnersTable/OwnersTable";
import ProsTable from "../../tables/ProsTable/ProsTable";
import {
  CompanyTypes,
  EmployeeTypes,
  OwnerTypes,
  ProTypes,
} from "../../types/store.types";
import { CompanyProfileProps } from "../../types/tabs.types";
import CustomTabPanel from "../CustomTabPanel";
import PrimaryTab from "../PrimaryTab";

const CompanyProfile = ({
  company,
  isLoading,
  activities,
}: CompanyProfileProps) => {
  const { companyTabsValue } = useContext(TabsContext);
  const {
    handleOpenUploadEmployeesModal,
    handleOpenOwnerModal,
    handleOpenProModal,
  } = useContext(ModalsContext);

  return (
    <PrimaryTab
      tabsTitles={[
        "Profile Info",
        "Owners",
        "Public Relation Officers",
        "Employees",
        "Transactions",
        "Activities",
        "Documents",
      ]}
      variant={"company"}
    >
      <CustomTabPanel value={companyTabsValue} index={0}>
        <ProfileDetails
          title={`Profile Info`}
          variant={"company"}
          data={company as CompanyTypes}
          isLoading={isLoading}
        />
      </CustomTabPanel>
      <CustomTabPanel value={companyTabsValue} index={1}>
        <Box className={`grid justify-stretch items-center gap-4`}>
          <Box className={`flex justify-end items-center`}>
            <Button
              title={"Add Owner"}
              icon={<AddRounded />}
              handling={() => handleOpenOwnerModal("addOwner")}
            />
          </Box>
          <OwnersTable
            count={company?.ownerId?.length || 0}
            data={company && (company.ownerId as OwnerTypes[])}
            isLoading={isLoading}
            noPagination={true}
          />
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={companyTabsValue} index={2}>
        <Box className={`grid justify-stretch items-center gap-4`}>
          <Box className={`flex justify-end items-center`}>
            <Button
              title={"Add Officer"}
              icon={<AddRounded />}
              handling={() => handleOpenProModal("addPro")}
            />
          </Box>
          <ProsTable
            count={company?.proCode?.length || 0}
            data={company && (company.proCode as ProTypes[])}
            isLoading={isLoading}
            noPagination={true}
          />
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={companyTabsValue} index={3}>
        <Box
          className={`grid justify-stretch items-center gap-6 md:gap-4 sm:!gap-3`}
        >
          <Box
            className={`flex justify-end items-center gap-4 md:gap-3 sm:!gap-2`}
          >
            <Button
              handling={handleOpenUploadEmployeesModal}
              icon={<RiFileExcel2Fill />}
              bg={"excel"}
              title={"Upload Excel"}
            />
            <Button
              icon={<RiFileExcel2Fill />}
              variant={"under development"}
              bg={"excel"}
              title={"Excel"}
            />
            <Button
              icon={<RiFileExcel2Fill />}
              variant={"under development"}
              bg={"excel"}
              title={"Excel All"}
            />
          </Box>
          <EmployeesTable
            count={company?.employees?.length || 0}
            data={company && (company.employees as EmployeeTypes[])}
            isLoading={false}
            noPagination={true}
          />
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={companyTabsValue} index={4}>
        <UnderDevelopment />
      </CustomTabPanel>
      <CustomTabPanel value={companyTabsValue} index={5}>
        <ActivitiesSection data={activities} isLoading={isLoading} />
      </CustomTabPanel>
      <CustomTabPanel value={companyTabsValue} index={6}>
        <UnderDevelopment />
      </CustomTabPanel>
    </PrimaryTab>
  );
};

export default CompanyProfile;
