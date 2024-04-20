import { Autocomplete, Box, Typography } from "@mui/material";
import { SyntheticEvent, useEffect, useState } from "react";
import { PrimaryTextField } from "../../mui/fields/PrimaryTextField";
import { AutoCompleteSearchTypes } from "../../types/components.types";
import {
  AllFormiksTypes,
  CompanyFormikTypes,
  OwnerFormikTypes,
} from "../../types/forms.types";
import { NationalityTypes, OwnerTypes } from "../../types/store.types";

export default function AutoCompleteSearch({
  label,
  multiple,
  options,
  name,
  formik,
}: AutoCompleteSearchTypes) {
  const error =
    formik.touched[name as keyof AllFormiksTypes] &&
    Boolean(formik.errors[name as keyof AllFormiksTypes]);
  const helperText = error
    ? (formik.errors[name as keyof AllFormiksTypes] as string)
    : undefined;
  const [values, setValues] = useState(options);

  const handleChange = (_: SyntheticEvent, newValue: unknown) => {
    if (name === "nationality") {
      const nationality = newValue as NationalityTypes;
      formik.setFieldValue(name, nationality.nationality);
      formik.setFieldValue("idNationality", nationality.id);
    } else {
      const owners = newValue as OwnerTypes[];
      const IDs = owners.map((owner: OwnerTypes) => owner._id);
      formik.setFieldValue(name, IDs);
    }
  };

  const handleOptionLabel = (option: NationalityTypes | OwnerTypes) => {
    if (name === "nationality") {
      return `${(option as NationalityTypes).nationality} ( ${
        (option as NationalityTypes).id
      } )`;
    } else if (name === "ownerId") {
      return `${(option as OwnerTypes).name} ( ${
        (option as OwnerTypes).personCode
      } )`;
    }
    return "";
  };

  const value =
    name === "nationality"
      ? (values as NationalityTypes[]).find(
          (option) =>
            option.id ===
            (formik as unknown as OwnerFormikTypes).values.idNationality
        ) || null
      : (name === "ownerId" &&
          values.filter((option) =>
            (formik as unknown as CompanyFormikTypes).values.ownerId.includes(
              option._id || ""
            )
          )) ||
        [];

  const style = {
    "& > div > div": {
      padding: "0px !important",
    },
    "& span.MuiCircularProgress-root": {
      position: "absolute",
      right: "9px",
    },
    "& svg": {
      fontSize: "20px",
    },
  };

  useEffect(() => {
    setValues(options);
  }, [options]);

  return (
    <Box className={`grid justify-stretch items-center gap-2`}>
      <Typography variant="h6">{label}</Typography>
      <Autocomplete
        sx={style}
        disablePortal
        id="combo-box-demo"
        multiple={multiple}
        value={value}
        isOptionEqualToValue={(option, value) => option?._id === value?._id}
        options={values}
        onChange={handleChange}
        getOptionLabel={handleOptionLabel}
        renderInput={(params) => (
          <PrimaryTextField
            onBlur={formik.handleBlur}
            error={error}
            helperText={helperText}
            {...params}
            placeholder={label}
          />
        )}
      />
    </Box>
  );
}
