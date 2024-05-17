import { Box, Divider, Paper } from "@mui/material";
import { PieChart } from "@mui/x-charts";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Counter from "../components/Counter/Counter";
import Title from "../components/Title/Title";
import TotalBox from "../components/TotalBox/TotalBox";
import { PrimaryBox } from "../mui/boxes&containers/PrimaryBox";
import { PrimaryContainer } from "../mui/boxes&containers/PrimaryContainer";
import ActivitiesSection from "../sections/ActivitiesSection";
import { getCompaniesCounter } from "../store/companiesCounterSlice";
import { getCustomersCounter } from "../store/customersCounterSlice";
import { getEmployeesCounter } from "../store/employeesCounterSlice";
import { getJobsCounter } from "../store/jobsCounterSlice";
import { getNationalitiesCounter } from "../store/nationalitiesCounterSlice";
import { getOwnersCounter } from "../store/ownersCounterSlice";
import { getProsCounter } from "../store/prosCounterSlice";
import { getRecentActivities } from "../store/recentActivitiesSlice";
import { getRecentCompanies } from "../store/recentCompaniesSlice";
import { getRecentCustomers } from "../store/recentCustomersSlice";
import { getRecentEmployees } from "../store/recentEmployeesSlice";
import { getRecentOwners } from "../store/recentOwnersSlice";
import { getRecentPros } from "../store/recentProsSlice";
import { getRecentUsers } from "../store/recentUsersSlice";
import { AppDispatch, RootState } from "../store/store";
import { getUsersCounter } from "../store/usersCounterSlice";
import CompaniesTable from "../tables/CompaniesTable/CompaniesTable";
import CustomersTable from "../tables/CustomersTable/CustomersTable";
import EmployeesTable from "../tables/EmployeesTable/EmployeesTable";
import OwnersTable from "../tables/OwnersTable/OwnersTable";
import ProsTable from "../tables/ProsTable/ProsTable";

const sectionClasses = `grid justify-stretch items-start gap-4 md:grid-cols-1 md:gap-3 sm:!gap-2`;

const Dashboard = () => {
  const dispatch = useDispatch<AppDispatch>();
  const recentOwners = useSelector((state: RootState) => state.recentOwners);
  const recentCompanies = useSelector(
    (state: RootState) => state.recentCompanies
  );
  const recentCustomers = useSelector(
    (state: RootState) => state.recentCustomers
  );
  const recentActivities = useSelector(
    (state: RootState) => state.recentActivities
  );
  const recentPros = useSelector((state: RootState) => state.recentPros);
  const recentEmployees = useSelector(
    (state: RootState) => state.recentEmployees
  );
  const ownersCounter = useSelector((state: RootState) => state.ownersCounter);
  const employeesCounter = useSelector(
    (state: RootState) => state.employeesCounter
  );
  const prosCounter = useSelector((state: RootState) => state.prosCounter);
  const companiesCounter = useSelector(
    (state: RootState) => state.companiesCounter
  );
  const customersCounter = useSelector(
    (state: RootState) => state.customersCounter
  );
  const usersCounter = useSelector((state: RootState) => state.usersCounter);
  const jobsCounter = useSelector((state: RootState) => state.jobsCounter);
  const nationalitiesCounter = useSelector(
    (state: RootState) => state.nationalitiesCounter
  );

  useEffect(() => {
    dispatch(getRecentActivities({}));
    dispatch(getRecentOwners({}));
    dispatch(getRecentCustomers({}));
    dispatch(getRecentEmployees({}));
    dispatch(getRecentUsers({}));
    dispatch(getRecentCompanies({}));
    dispatch(getRecentPros({}));
    dispatch(getOwnersCounter());
    dispatch(getProsCounter());
    dispatch(getCustomersCounter());
    dispatch(getJobsCounter());
    dispatch(getCompaniesCounter());
    dispatch(getUsersCounter());
    dispatch(getNationalitiesCounter());
    dispatch(getEmployeesCounter());
  }, [dispatch]);

  return (
    <PrimaryBox>
      <PrimaryContainer className={`grid justify-stretch items-start gap-8`}>
        <Box className="grid justify-between items-center gap-4 grid-cols-3 md:grid-cols-2 sm:!grid-cols-1">
          <TotalBox
            variant="owners"
            count={ownersCounter.ownersCounter}
            isLoading={ownersCounter.isLoading}
          />
          <TotalBox
            variant="officers"
            count={prosCounter.prosCounter}
            isLoading={prosCounter.isLoading}
          />
          <TotalBox
            variant="employees"
            count={employeesCounter.employeesCounter}
            isLoading={employeesCounter.isLoading}
          />
          <TotalBox
            variant="customers"
            count={customersCounter.customersCounter}
            isLoading={customersCounter.isLoading}
          />
          <TotalBox
            variant="companies"
            count={companiesCounter.companiesCounter}
            isLoading={companiesCounter.isLoading}
          />
          <TotalBox
            variant="transactions"
            count={prosCounter.prosCounter}
            isLoading={prosCounter.isLoading}
          />
        </Box>
        <Box
          className={`grid justify-stretch items-start grid-cols-2 gap-6 md:gap-5 sm:!gap-3 md:grid-cols-1`}
        >
          <Box className={sectionClasses}>
            <Paper className="paper">
              <Title title={"Recent Owners"} head="h4" align={"left"} />
              <OwnersTable
                data={recentOwners.recentOwners}
                count={+`${import.meta.env.VITE_RECENT_LIMIT_PAGES || 5}`}
                isLoading={recentOwners.isLoading}
                actions={false}
                sort={false}
                recent={true}
              />
            </Paper>
            <Paper className="paper">
              <Title title={"Recent Activitis"} head="h4" align={"left"} />
              <ActivitiesSection
                data={recentActivities.recentActivities}
                isLoading={recentActivities.isLoading}
              />
            </Paper>
            <Paper className="paper">
              <Title title={"Recent Employees"} head="h4" align={"left"} />
              <EmployeesTable
                data={recentEmployees.recentEmployees}
                count={
                  recentEmployees.recentEmployees
                    ? recentEmployees.recentEmployees.length
                    : +`${import.meta.env.VITE_RECENT_LIMIT_PAGES || 5}`
                }
                isLoading={recentEmployees.isLoading}
                actions={false}
                sort={false}
                recent={true}
              />
            </Paper>
            <Paper className="paper">
              <Title title={"Recent Customers"} head="h4" align={"left"} />
              <CustomersTable
                data={recentCustomers.recentCustomers}
                isLoading={recentCustomers.isLoading}
                count={
                  recentCustomers.recentCustomers
                    ? recentCustomers.recentCustomers.length
                    : +`${import.meta.env.VITE_RECENT_LIMIT_PAGES || 5}`
                }
                actions={false}
                sort={false}
                recent={true}
              />
            </Paper>
          </Box>
          <Box className={sectionClasses}>
            <Paper className="paper">
              <Title title={"Recent Companies"} head="h4" align={"left"} />
              <CompaniesTable
                data={recentCompanies.recentCompanies}
                count={0}
                isLoading={recentCompanies.isLoading}
                actions={false}
                sort={false}
                recent={true}
              />
            </Paper>
            <Paper className={`paper`}>
              <Title title={"Overview"} head={"h4"} align={"left"} />
              <Box className={`grid justify-stretch items-center gap-8`}>
                <Box className={`flex justify-center items-center`}>
                  <PieChart
                    height={200}
                    width={25}
                    slotProps={{
                      legend: { hidden: true },
                    }}
                    series={[
                      {
                        innerRadius: 20,
                        outerRadius: 100,
                        paddingAngle: 5,
                        cornerRadius: 5,
                        highlightScope: {
                          faded: "global",
                          highlighted: "item",
                        },
                        faded: {
                          innerRadius: 30,
                          additionalRadius: -30,
                        },
                        data: [
                          { label: "Users", value: usersCounter.usersCounter },
                          {
                            label: "Owners",
                            value: ownersCounter.ownersCounter,
                          },
                          { label: "Officers", value: prosCounter.prosCounter },
                          {
                            label: "Employees",
                            value: employeesCounter.employeesCounter,
                          },
                          {
                            label: "Customers",
                            value: customersCounter.customersCounter,
                          },
                          {
                            label: "Companies",
                            value: companiesCounter.companiesCounter,
                          },
                          {
                            label: "transactions",
                            value: customersCounter.customersCounter,
                          },
                          {
                            label: "jobs",
                            value: jobsCounter.jobsCounter,
                          },
                          {
                            label: "nationalities",
                            value: nationalitiesCounter.nationalitiesCounter,
                          },
                        ],
                      },
                    ]}
                    colors={[
                      "rgb(87 83 78)",
                      "rgb(22 163 74)",
                      "rgb(37 99 235)",
                      "rgb(234 88 12)",
                      "rgb(13 148 136)",
                      "rgb(202 138 4)",
                      "rgb(192 38 211)",
                      "rgb(13 148 136)",
                      "rgb(220 38 38)",
                    ]}
                  />
                </Box>
                <Box className={`grid justify-stretch items-center gap-4`}>
                  <Divider />
                  <Counter variant={"users"} />
                  <Divider />
                  <Counter variant={"owners"} />
                  <Divider />
                  <Counter variant={"officers"} />
                  <Divider />
                  <Counter variant={"employees"} />
                  <Divider />
                  <Counter variant={"customers"} />
                  <Divider />
                  <Counter variant={"companies"} />
                  <Divider />
                  <Counter variant={"transactions"} />
                  <Divider />
                  <Counter variant={"jobs"} />
                  <Divider />
                  <Counter variant={"nationalities"} />
                </Box>
              </Box>
            </Paper>
            <Paper className="paper">
              <Title
                title={"Recent Public Relation Officers"}
                head="h4"
                align={"left"}
              />
              <ProsTable
                data={recentPros.recentPros}
                count={+`${import.meta.env.VITE_RECENT_LIMIT_PAGES || 5}`}
                isLoading={recentPros.isLoading}
                actions={false}
                sort={false}
                recent={true}
              />
            </Paper>
          </Box>
        </Box>
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default Dashboard;
