import { Box } from "@mui/material";
import { useContext } from "react";
import { RiFileExcel2Fill } from "react-icons/ri";
import Button from "../../components/Button/Button";
import ProfileDetails from "../../components/ProfileDetails/ProfileDetails";
import ProfileSetting from "../../components/ProfileSetting/ProfileSetting";
import { FormsContext } from "../../contexts/FormsContext";
import { TabsContext } from "../../contexts/TabsContext";
import EmployeesTable from "../../tables/EmployeesTable/EmployeesTable";
import OwnersTable from "../../tables/OwnersTable/OwnersTable";
import ProsTable from "../../tables/ProsTable/ProsTable";
import { CompanyTypes, OwnerTypes, ProTypes } from "../../types/store.types";
import { CompanyProfileProps } from "../../types/tabs.types";
import CustomTabPanel from "../CustomTabPanel";
import PrimaryTab from "../PrimaryTab";

const CompanyProfile = ({ company, isLoading }: CompanyProfileProps) => {
  const { companyTabsValue } = useContext(TabsContext);
  const { handleOpenUploadEmployeesModal } = useContext(FormsContext);
  return (
    <PrimaryTab
      tabsTitles={[
        "Profile Info",
        "Owners",
        "PROs",
        "Employees",
        "Transactions",
        "Activities",
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
        <OwnersTable
          count={company?.ownerId?.length || 0}
          data={company && (company.ownerId as OwnerTypes[])}
          isLoading={isLoading}
          noPagination={true}
        />
      </CustomTabPanel>
      <CustomTabPanel value={companyTabsValue} index={2}>
        <ProsTable
          count={company?.proCode?.length || 0}
          data={company && (company.proCode as ProTypes[])}
          isLoading={isLoading}
          noPagination={true}
        />
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
            count={0}
            data={[]}
            isLoading={false}
            noPagination={true}
          />
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={companyTabsValue} index={4}>
        <ProfileSetting />
      </CustomTabPanel>
      <CustomTabPanel value={companyTabsValue} index={5}>
        <ProfileSetting />
      </CustomTabPanel>
    </PrimaryTab>
  );
};

export default CompanyProfile;
