import { Box, Paper } from "@mui/material";
import { useContext, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import AutoCompleteSearch from "../../components/AutoCompleteSearch/AutoCompleteSearch";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import Title from "../../components/Title/Title";
import UploadImage from "../../components/UploadImage/UploadImage";
import { FormsContext } from "../../contexts/FormsContext";
import { getNationalities } from "../../store/nationalitiesSlice";
import { AppDispatch, RootState } from "../../store/store";
import { FormiksTypes } from "../../types/forms.types";

const SponsorForm = ({ formik, type }: FormiksTypes) => {
  const { formsLoading, handleCloseSponsorModal, setSponsorImage } =
    useContext(FormsContext);
  const { nationalities } = useSelector(
    (state: RootState) => state.nationalities
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getNationalities({ limit: -1 }));
  }, [dispatch]);

  useEffect(() => {
    if (type?.startsWith("add")) {
      setSponsorImage("");
    }
  }, [setSponsorImage, type]);

  return (
    <Paper
      className={`grid justify-stretch items-center gap-8 md:gap-6 sm:gap-4 p-6 !rounded-xl`}
    >
      {type === "addSponsor" ? (
        <Title head={"h4"} align={"left"} title={"Add New Sponsor"} />
      ) : (
        type === "editSponsor" && (
          <Title head={"h4"} align={"left"} title={"Edit Sponsor"} />
        )
      )}

      {useMemo(
        () => type && <UploadImage title={"Sponsor Avatar"} variant={type} />,
        [type]
      )}

      <Box className={`grid grid-cols-3 justify-stretch items-start gap-6`}>
        <Input
          formik={formik}
          label={"UID Number"}
          name={"uid"}
          type={"text"}
          variant={"numeric"}
        />
        <Input formik={formik} label={"English Name"} name={"name"} />
        <Input formik={formik} label={"Arabic Name"} name={"nameAr"} />
        {nationalities && nationalities.length > 0 && (
          <AutoCompleteSearch
            label={"Nationality"}
            options={nationalities}
            formik={formik}
            name={"nationality"}
          />
        )}
        <Input
          formik={formik}
          label={"Emirates ID"}
          name={"emiratesId"}
          type={"text"}
          variant={"numeric"}
        />
        <Input
          formik={formik}
          type={"date"}
          name={"dob"}
          label={"Date of Birth"}
        />
        <Input
          formik={formik}
          label={"Phone"}
          type={"text"}
          variant={"numeric"}
          name={"phone"}
        />
        <Input formik={formik} label={"Email"} name={"email"} type={"email"} />
        <Input
          formik={formik}
          label={"State"}
          name={"state"}
          select
          options={["dubai"]}
        />
        <Input formik={formik} label={"Address"} name={"address"} />
        <Input
          formik={formik}
          label={"Relative Relation"}
          name={"relativeRelation"}
          select
          options={[
            "Husband",
            "Wife",
            "Son",
            "Daughter",
            "Father",
            "Mother",
            "GrandPa",
            "GrandMa",
            "Uncle",
          ]}
        />
        <Input
          formik={formik}
          type={"date"}
          name={"residenceExpiryDate"}
          label={"Residence Expire Date"}
        />
        <Input
          formik={formik}
          label={"Status"}
          name={"status"}
          select
          options={["Active", "Pending", "Blocked"]}
        />
        <Input
          formik={formik}
          label={"File Immgiration Number"}
          name={"fileImmgNo"}
        />
        <Input formik={formik} label={"Remarks"} name={"remarks"} textarea />
      </Box>

      <Box className={`flex justify-stretch items-center gap-4 m-auto`}>
        <SubmitButton loading={formsLoading}>
          {type?.startsWith("add") ? "Add" : "Edit"}
        </SubmitButton>
        <Button
          title={"Cancel"}
          handling={handleCloseSponsorModal}
          bg={"!bg-red-500"}
        />
      </Box>
    </Paper>
  );
};

export default SponsorForm;
