import { AddRounded } from "@mui/icons-material";
import { Box } from "@mui/system";
import { useContext } from "react";
import { RiFileExcel2Fill } from "react-icons/ri";
import Button from "../../components/Button/Button";
import ProfileDetails from "../../components/ProfileDetails/ProfileDetails";
import UnderDevelopment from "../../components/UnderDevelopment/UnderDevelopment";
import { FormsContext } from "../../contexts/FormsContext";
import { TabsContext } from "../../contexts/TabsContext";
import ActivitiesSection from "../../sections/ActivitiesSection";
import CompaniesTable from "../../tables/CompaniesTable/CompaniesTable";
import SponsorsTable from "../../tables/SponsorsTable/SponsorsTable";
import { CompanyTypes, EmployeeTypes } from "../../types/store.types";
import { EmployeeProfileProps } from "../../types/tabs.types";
import CustomTabPanel from "../CustomTabPanel";
import PrimaryTab from "../PrimaryTab";

const EmployeeProfile = ({
  employee,
  isLoading,
  activities,
  sponsors,
}: EmployeeProfileProps) => {
  const { employeeTabsValue } = useContext(TabsContext);
  const { handleOpenSponsorModal, handleOpenDownloadExcelModal } =
    useContext(FormsContext);

  const handleDownloadExcelAll = () => {
    handleOpenDownloadExcelModal("all", "sponsors", "employee");
  };

  return (
    <PrimaryTab
      tabsTitles={[
        "Personal Info",
        "Companies",
        "Transactions",
        "Activities",
        "Documents",
        "Sponsored Persons",
      ]}
      variant={"employee"}
    >
      <CustomTabPanel value={employeeTabsValue} index={0}>
        <ProfileDetails
          title={`Personal Info`}
          variant={"employee"}
          data={employee as EmployeeTypes}
          isLoading={isLoading}
        />
      </CustomTabPanel>
      <CustomTabPanel value={employeeTabsValue} index={1}>
        <CompaniesTable
          count={employee?.companyId?.length || 0}
          data={employee && (employee.companyId as CompanyTypes[])}
          isLoading={isLoading}
          noPagination={true}
        />
      </CustomTabPanel>
      <CustomTabPanel value={employeeTabsValue} index={2}>
        <UnderDevelopment />
      </CustomTabPanel>
      <CustomTabPanel value={employeeTabsValue} index={3}>
        <ActivitiesSection data={activities} isLoading={isLoading} />
      </CustomTabPanel>
      <CustomTabPanel value={employeeTabsValue} index={4}>
        <UnderDevelopment />
      </CustomTabPanel>
      <CustomTabPanel value={employeeTabsValue} index={5}>
        <Box>
          <Box>
            <Button
              handling={() => handleOpenSponsorModal("addSponsor")}
              title={"Add Sponsor"}
              icon={<AddRounded />}
            />
            <Button
              handling={handleDownloadExcelAll}
              bg={"excel"}
              title={"Excel All"}
              icon={<RiFileExcel2Fill />}
            />
          </Box>
          <SponsorsTable
            data={sponsors}
            isLoading={isLoading}
            count={sponsors?.length || 0}
          />
        </Box>
      </CustomTabPanel>
    </PrimaryTab>
  );
};

export default EmployeeProfile;
