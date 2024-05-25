import { Box, Paper } from "@mui/material";
import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AutoCompleteSearch from "../../components/AutoCompleteSearch/AutoCompleteSearch";
import Button from "../../components/Button/Button";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import Title from "../../components/Title/Title";
import { FormsContext } from "../../contexts/FormsContext";
import { getCompanies } from "../../store/companiesSlice";
import { AppDispatch, RootState } from "../../store/store";
import { FormiksTypes } from "../../types/forms.types";

const LinkToCompanyForm = ({ formik }: FormiksTypes) => {
  const { formsLoading, handleCloseLinkToCompanyModal } =
    useContext(FormsContext);
  const { companies } = useSelector((state: RootState) => state.companies);
  const dispatch = useDispatch<AppDispatch>();

  const handleCancel = () => {
    handleCloseLinkToCompanyModal();
  };

  useEffect(() => {
    dispatch(getCompanies({ limit: -1 }));
  }, [dispatch]);

  return (
    <Paper
      className={`grid justify-stretch items-center gap-8 md:gap-6 sm:gap-4 p-6 !rounded-xl transition-all h-full md:p-5 sm:!p-4 xs:!p-3`}
    >
      <Title head={"h4"} align={"left"} title={"Link To Company"} />
      {companies && companies.length > 0 && (
        <AutoCompleteSearch
          label={"Companies"}
          options={companies}
          formik={formik}
          name={"companyId"}
          multiple={true}
        />
      )}

      <Box className={`flex justify-stretch items-center gap-4 m-auto`}>
        <SubmitButton loading={formsLoading}>Link</SubmitButton>
        <Button title={"Cancel"} handling={handleCancel} bg={"!bg-red-500"} />
      </Box>
    </Paper>
  );
};

export default LinkToCompanyForm;
