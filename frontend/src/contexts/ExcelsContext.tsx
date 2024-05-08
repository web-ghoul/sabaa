import { createContext, useState } from "react";
import { handleAlert } from "../functions/handleAlert";
import {
  CompaniesSheetTypes,
  ExcelsContextProps,
  JobsSheetTypes,
  NationalitiesSheetTypes,
  OwnersSheetTypes,
  ProsSheetTypes,
} from "../types/contexts.types";
import {
  CompanyTypes,
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
    if (companyIndex) {
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
    setOwnerIndex,
    ownerIndex,
    handleAddOwnersSheet,
    handleRemoveOwnersSheet,
    companiesSheets,
    setCompanyIndex,
    companyIndex,
    handleAddCompaniesSheet,
    handleDeleteNationalityFromSheet,
    handleRemoveCompaniesSheet,
    jobsSheets,
    jobIndex,
    setJobIndex,
    handleEditJobInSheet,
    handleAddJobsSheet,
    handleDeleteOwnerFromSheet,
    handleRemoveJobsSheet,
    handleDeleteJobFromSheet,
    nationalitiesSheets,
    nationalityIndex,
    setNationalityIndex,
    handleEditOwnerInSheet,
    handleDeleteCompanyFromSheet,
    handleAddNationalitiesSheet,
    handleEditCompanyInSheet,
    handleRemoveNationalitiesSheet,
    handleEditNationalityInSheet,
    prosSheets,
    handleEditProInSheet,
    handleDeleteProFromSheet,
    setProIndex,
    proIndex,
    handleRemoveProsSheet,
    handleAddProsSheet,
  };

  return (
    <ExcelsContext.Provider value={values}>{children}</ExcelsContext.Provider>
  );
};

export default ExcelsProvider;
