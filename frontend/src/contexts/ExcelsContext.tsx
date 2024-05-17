import { createContext, useState } from "react";
import { handleAlert } from "../functions/handleAlert";
import {
  CompaniesSheetTypes,
  CustomersSheetTypes,
  EmployeesSheetTypes,
  ExcelsContextProps,
  JobsSheetTypes,
  NationalitiesSheetTypes,
  OwnersSheetTypes,
  ProsSheetTypes,
} from "../types/contexts.types";
import {
  CompanyTypes,
  CustomerTypes,
  EmployeeTypes,
  JobTypes,
  NationalityTypes,
  OwnerTypes,
  ProTypes,
} from "../types/store.types";

export const ExcelsContext = createContext<ExcelsContextProps>({
  ownersSheets: [],
  ownerIndex: { fileIndex: 0, index: 0 },
  setOwnerIndex: () => {},
  handleAddOwnersSheet: () => {},
  handleRemoveOwnersSheet: () => {},
  handleEditOwnerInSheet: () => {},
  handleDeleteOwnerFromSheet: () => {},
  prosSheets: [],
  proIndex: { fileIndex: 0, index: 0 },
  setProIndex: () => {},
  handleAddProsSheet: () => {},
  handleRemoveProsSheet: () => {},
  handleEditProInSheet: () => {},
  handleDeleteProFromSheet: () => {},
  employeesSheets: [],
  employeeIndex: { fileIndex: 0, index: 0 },
  setEmployeeIndex: () => {},
  handleAddEmployeesSheet: () => {},
  handleRemoveEmployeesSheet: () => {},
  handleEditEmployeeInSheet: () => {},
  handleDeleteEmployeeFromSheet: () => {},
  customersSheets: [],
  customerIndex: { fileIndex: 0, index: 0 },
  setCustomerIndex: () => {},
  handleAddCustomersSheet: () => {},
  handleRemoveCustomersSheet: () => {},
  handleEditCustomerInSheet: () => {},
  handleDeleteCustomerFromSheet: () => {},
  companiesSheets: [],
  companyIndex: { fileIndex: 0, index: 0 },
  setCompanyIndex: () => {},
  handleAddCompaniesSheet: () => {},
  handleRemoveCompaniesSheet: () => {},
  handleEditCompanyInSheet: () => {},
  handleDeleteCompanyFromSheet: () => {},
  jobsSheets: [],
  jobIndex: { fileIndex: 0, index: 0 },
  setJobIndex: () => {},
  handleAddJobsSheet: () => {},
  handleRemoveJobsSheet: () => {},
  handleDeleteJobFromSheet: () => {},
  handleEditJobInSheet: () => {},
  nationalitiesSheets: [],
  nationalityIndex: { fileIndex: 0, index: 0 },
  setNationalityIndex: () => {},
  handleAddNationalitiesSheet: () => {},
  handleRemoveNationalitiesSheet: () => {},
  handleDeleteNationalityFromSheet: () => {},
  handleEditNationalityInSheet: () => {},
});

const ExcelsProvider = ({ children }: { children: React.ReactNode }) => {
  //Owners Sheets
  const [ownersSheets, setOwnersSheets] = useState<OwnersSheetTypes[]>([]);

  const [ownerIndex, setOwnerIndex] = useState({ fileIndex: 0, index: 0 });

  const handleAddOwnersSheet = (ownersSheet: OwnersSheetTypes) => {
    setOwnersSheets([...ownersSheets, ownersSheet]);
  };

  const handleRemoveOwnersSheet = (fileIndex: number) => {
    setOwnersSheets(ownersSheets.filter((_, i) => i !== fileIndex));
  };

  const handleDeleteOwnerFromSheet = () => {
    const updatedOwnersSheets = [...ownersSheets];
    updatedOwnersSheets[ownerIndex.fileIndex].data = ownersSheets[
      ownerIndex.fileIndex
    ].data.filter((_, i) => i !== ownerIndex.index);
    setOwnersSheets(updatedOwnersSheets);
  };

  const handleEditOwnerInSheet = (owner: OwnerTypes) => {
    if (ownerIndex) {
      const newOwnersSheets = [...ownersSheets];
      newOwnersSheets[ownerIndex.fileIndex].data[ownerIndex.index] = owner;
      setOwnersSheets(newOwnersSheets);
    } else {
      handleAlert({ msg: "Error Occurs", status: "error" });
    }
  };

  //Pros Sheets
  const [prosSheets, setProsSheets] = useState<ProsSheetTypes[]>([]);

  const [proIndex, setProIndex] = useState({ fileIndex: 0, index: 0 });

  const handleAddProsSheet = (prosSheet: ProsSheetTypes) => {
    setProsSheets([...prosSheets, prosSheet]);
  };

  const handleRemoveProsSheet = (fileIndex: number) => {
    setProsSheets(prosSheets.filter((_, i) => i !== fileIndex));
  };

  const handleDeleteProFromSheet = () => {
    const updatedProsSheets = [...prosSheets];
    updatedProsSheets[proIndex.fileIndex].data = prosSheets[
      proIndex.fileIndex
    ].data.filter((_, i) => i !== proIndex.index);
    setProsSheets(updatedProsSheets);
  };

  const handleEditProInSheet = (pro: ProTypes) => {
    if (proIndex) {
      const newProsSheets = [...prosSheets];
      newProsSheets[proIndex.fileIndex].data[proIndex.index] = pro;
      setProsSheets(newProsSheets);
    } else {
      handleAlert({ msg: "Error Occurs", status: "error" });
    }
  };

  //Employees Sheets
  const [employeesSheets, setEmployeesSheets] = useState<EmployeesSheetTypes[]>(
    []
  );

  const [employeeIndex, setEmployeeIndex] = useState({
    fileIndex: 0,
    index: 0,
  });

  const handleAddEmployeesSheet = (employeesSheet: EmployeesSheetTypes) => {
    setEmployeesSheets([...employeesSheets, employeesSheet]);
  };

  const handleRemoveEmployeesSheet = (fileIndex: number) => {
    setEmployeesSheets(employeesSheets.filter((_, i) => i !== fileIndex));
  };

  const handleDeleteEmployeeFromSheet = () => {
    const updatedEmployeesSheets = [...employeesSheets];
    updatedEmployeesSheets[employeeIndex.fileIndex].data = employeesSheets[
      employeeIndex.fileIndex
    ].data.filter((_, i) => i !== employeeIndex.index);
    setEmployeesSheets(updatedEmployeesSheets);
  };

  const handleEditEmployeeInSheet = (employee: EmployeeTypes) => {
    if (employeeIndex) {
      const newEmployeesSheets = [...employeesSheets];
      newEmployeesSheets[employeeIndex.fileIndex].data[employeeIndex.index] =
        employee;
      setEmployeesSheets(newEmployeesSheets);
    } else {
      handleAlert({ msg: "Error Occurs", status: "error" });
    }
  };

  //Customers Sheets
  const [customersSheets, setCustomersSheets] = useState<CustomersSheetTypes[]>(
    []
  );

  const [customerIndex, setCustomerIndex] = useState({
    fileIndex: 0,
    index: 0,
  });

  const handleAddCustomersSheet = (customersSheet: CustomersSheetTypes) => {
    setCustomersSheets([...customersSheets, customersSheet]);
  };

  const handleRemoveCustomersSheet = (fileIndex: number) => {
    setCustomersSheets(customersSheets.filter((_, i) => i !== fileIndex));
  };

  const handleDeleteCustomerFromSheet = () => {
    const updatedCustomersSheets = [...customersSheets];
    updatedCustomersSheets[customerIndex.fileIndex].data = customersSheets[
      customerIndex.fileIndex
    ].data.filter((_, i) => i !== customerIndex.index);
    setCustomersSheets(updatedCustomersSheets);
  };

  const handleEditCustomerInSheet = (customer: CustomerTypes) => {
    if (customerIndex) {
      const newCustomersSheets = [...customersSheets];
      newCustomersSheets[customerIndex.fileIndex].data[customerIndex.index] =
        customer;
      setCustomersSheets(newCustomersSheets);
    } else {
      handleAlert({ msg: "Error Occurs", status: "error" });
    }
  };

  //Companies Sheets
  const [companiesSheets, setCompaniesSheets] = useState<CompaniesSheetTypes[]>(
    []
  );

  const [companyIndex, setCompanyIndex] = useState({ fileIndex: 0, index: 0 });

  const handleAddCompaniesSheet = (companiesSheet: CompaniesSheetTypes) => {
    setCompaniesSheets([...companiesSheets, companiesSheet]);
  };

  const handleRemoveCompaniesSheet = (fileIndex: number) => {
    setCompaniesSheets(companiesSheets.filter((_, i) => i !== fileIndex));
  };

  const handleDeleteCompanyFromSheet = () => {
    const updatedCompaniesSheets = [...companiesSheets];
    updatedCompaniesSheets[companyIndex.fileIndex].data = companiesSheets[
      companyIndex.fileIndex
    ].data.filter((_, i) => i !== companyIndex.index);
    setCompaniesSheets(updatedCompaniesSheets);
  };

  const handleEditCompanyInSheet = (company: CompanyTypes) => {
    if (companyIndex) {
      const newCompaniesSheets = [...companiesSheets];
      newCompaniesSheets[companyIndex.fileIndex].data[companyIndex.index] =
        company;
      setCompaniesSheets(newCompaniesSheets);
    } else {
      handleAlert({ msg: "Error Occurs", status: "error" });
    }
  };

  //Jobs Sheets
  const [jobsSheets, setJobsSheets] = useState<JobsSheetTypes[]>([]);

  const [jobIndex, setJobIndex] = useState({ fileIndex: 0, index: 0 });

  const handleAddJobsSheet = (jobsSheet: JobsSheetTypes) => {
    setJobsSheets([...jobsSheets, jobsSheet]);
  };

  const handleRemoveJobsSheet = (fileIndex: number) => {
    setJobsSheets(jobsSheets.filter((_, i) => i !== fileIndex));
  };

  const handleDeleteJobFromSheet = () => {
    const updatedJobSheets = [...jobsSheets];
    updatedJobSheets[jobIndex.fileIndex].data = jobsSheets[
      jobIndex.fileIndex
    ].data.filter((_, i) => i !== jobIndex.index);
    setJobsSheets(updatedJobSheets);
  };

  const handleEditJobInSheet = (job: JobTypes) => {
    if (jobIndex) {
      const newJobsSheets = [...jobsSheets];
      newJobsSheets[jobIndex.fileIndex].data[jobIndex.index] = job;
      setJobsSheets(newJobsSheets);
    } else {
      handleAlert({ msg: "Error Occurs", status: "error" });
    }
  };

  //Nationalities Sheets
  const [nationalitiesSheets, setNationalitiesSheets] = useState<
    NationalitiesSheetTypes[]
  >([]);

  const [nationalityIndex, setNationalityIndex] = useState({
    fileIndex: 0,
    index: 0,
  });

  const handleAddNationalitiesSheet = (
    nationalitiesSheet: NationalitiesSheetTypes
  ) => {
    setNationalitiesSheets([...nationalitiesSheets, nationalitiesSheet]);
  };

  const handleRemoveNationalitiesSheet = (fileIndex: number) => {
    setNationalitiesSheets(
      nationalitiesSheets.filter((_, i) => i !== fileIndex)
    );
  };

  const handleDeleteNationalityFromSheet = () => {
    const updatedNationalitiesSheets = [...nationalitiesSheets];
    updatedNationalitiesSheets[nationalityIndex.fileIndex].data =
      nationalitiesSheets[nationalityIndex.fileIndex].data.filter(
        (_, i) => i !== nationalityIndex.index
      );
    setNationalitiesSheets(updatedNationalitiesSheets);
  };

  const handleEditNationalityInSheet = (nationality: NationalityTypes) => {
    if (nationalityIndex) {
      const newNationalitiesSheets = [...nationalitiesSheets];
      newNationalitiesSheets[nationalityIndex.fileIndex].data[
        nationalityIndex.index
      ] = nationality;
      setNationalitiesSheets(newNationalitiesSheets);
    } else {
      handleAlert({ msg: "Error Occurs", status: "error" });
    }
  };

  const values = {
    ownersSheets,
    ownerIndex,
    setOwnerIndex,
    handleEditOwnerInSheet,
    handleAddOwnersSheet,
    handleDeleteOwnerFromSheet,
    handleRemoveOwnersSheet,
    employeesSheets,
    employeeIndex,
    setEmployeeIndex,
    handleEditEmployeeInSheet,
    handleAddEmployeesSheet,
    handleDeleteEmployeeFromSheet,
    handleRemoveEmployeesSheet,
    customersSheets,
    customerIndex,
    setCustomerIndex,
    handleEditCustomerInSheet,
    handleAddCustomersSheet,
    handleDeleteCustomerFromSheet,
    handleRemoveCustomersSheet,
    companiesSheets,
    companyIndex,
    setCompanyIndex,
    handleEditCompanyInSheet,
    handleAddCompaniesSheet,
    handleDeleteCompanyFromSheet,
    handleRemoveCompaniesSheet,
    jobsSheets,
    jobIndex,
    setJobIndex,
    handleEditJobInSheet,
    handleAddJobsSheet,
    handleRemoveJobsSheet,
    handleDeleteJobFromSheet,
    nationalitiesSheets,
    nationalityIndex,
    setNationalityIndex,
    handleAddNationalitiesSheet,
    handleDeleteNationalityFromSheet,
    handleRemoveNationalitiesSheet,
    handleEditNationalityInSheet,
    prosSheets,
    proIndex,
    handleEditProInSheet,
    handleDeleteProFromSheet,
    setProIndex,
    handleRemoveProsSheet,
    handleAddProsSheet,
  };

  return (
    <ExcelsContext.Provider value={values}>{children}</ExcelsContext.Provider>
  );
};

export default ExcelsProvider;
