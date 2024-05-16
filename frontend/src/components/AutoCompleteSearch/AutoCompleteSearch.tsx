import { Autocomplete, Box, Chip, Typography } from "@mui/material";
import { SyntheticEvent, useEffect, useState } from "react";
import { PrimaryTextField } from "../../mui/fields/PrimaryTextField";
import { AutoCompleteSearchTypes } from "../../types/components.types";
import {
  AllFormiksTypes,
  CompanyFormikTypes,
  EmployeeFormikTypes,
  LinkToCompanyFormikTypes,
  OwnerFormikTypes,
} from "../../types/forms.types";
import {
  CompanyTypes,
  CustomerTypes,
  JobTypes,
  NationalityTypes,
  OwnerTypes,
  ProTypes,
} from "../../types/store.types";

export default function AutoCompleteSearch({
  label,
  multiple,
  options,
  name,
  formik,
}: AutoCompleteSearchTypes) {
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
    } else if (name === "ownerId") {
      const owners = newValue as OwnerTypes[];
      const IDs = owners.map((owner: OwnerTypes) => owner._id);
      formik.setFieldValue(name, IDs);
    } else if (name === "proCode") {
      const pros = newValue as ProTypes[];
      const IDs = pros.map((pro: ProTypes) => pro._id);
      formik.setFieldValue(name, IDs);
    } else if (name === "customerId") {
      const customers = newValue as CustomerTypes[];
      const IDs = customers.map((customer: CustomerTypes) => customer._id);
      formik.setFieldValue(name, IDs);
    } else if (name === "companyId") {
      const company = newValue as CompanyTypes;
      formik.setFieldValue(name, company._id);
    } else if (name === "job") {
      const job = newValue as JobTypes;
      formik.setFieldValue(name, job.jobTitle);
    }
  };

  const handleOptionLabel = (
    option:
      | NationalityTypes
      | OwnerTypes
      | CompanyTypes
      | JobTypes
      | ProTypes
      | CustomerTypes
  ) => {
    if (name === "nationality") {
      return `${(option as NationalityTypes).nationality} ( ${
        (option as NationalityTypes).id
      } )`;
    } else if (name === "ownerId") {
      return `${(option as OwnerTypes).name} ( ${
        (option as OwnerTypes).personCode
      } )`;
    } else if (name === "proCode") {
      return `${(option as ProTypes).name} ( ${
        (option as ProTypes).personCode
      } )`;
    } else if (name === "customerId") {
      return `${(option as CustomerTypes).name} ( ${
        (option as CustomerTypes).personCode
      } )`;
    } else if (name === "companyId") {
      return `${(option as CompanyTypes).name} ( ${
        (option as CompanyTypes).molCode
      } )`;
    } else if (name === "job") {
      return `${(option as unknown as JobTypes).jobTitle} ( ${
        (option as JobTypes).MOHRE
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
      : name === "ownerId"
      ? values.filter((option) =>
          (
            (formik as unknown as CompanyFormikTypes).values.ownerId as string[]
          ).includes(option._id || "")
        )
      : name === "proCode"
      ? values.filter((option) =>
          (
            (formik as unknown as CompanyFormikTypes).values.proCode as string[]
          ).includes(option._id || "")
        )
      : name === "customerId"
      ? values.filter((option) =>
          (
            (formik as unknown as CompanyFormikTypes).values
              .customerId as string[]
          ).includes(option._id || "")
        )
      : name === "companyId"
      ? (values as CompanyTypes[]).find(
          (option) =>
            option._id ===
            (formik as unknown as LinkToCompanyFormikTypes).values.companyId
        )
      : (name === "job" &&
          (values as JobTypes[]).find(
            (option) =>
              option.jobTitle ===
              (formik as unknown as EmployeeFormikTypes).values.job
          )) ||
        null;

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
        renderTags={(tagValue, getTagProps) =>
          tagValue.map((option, index) => {
            if (name === "ownerId") {
              return (
                <Chip
                  label={(option as OwnerTypes).name}
                  {...getTagProps({ index })}
                />
              );
            } else if (name === "proCode") {
              return (
                <Chip
                  label={(option as ProTypes).name}
                  {...getTagProps({ index })}
                />
              );
            } else if (name === "customerId") {
              return (
                <Chip
                  label={(option as CustomerTypes).name}
                  {...getTagProps({ index })}
                />
              );
            } else if (name === "companyId") {
              return (
                <Chip
                  label={(option as CompanyTypes).name}
                  {...getTagProps({ index })}
                />
              );
            } else if (name === "job") {
              return (
                <Chip
                  label={(option as unknown as JobTypes).jobTitle}
                  {...getTagProps({ index })}
                />
              );
            } else if (name === "nationality") {
              return (
                <Chip
                  label={(option as NationalityTypes).nationality}
                  {...getTagProps({ index })}
                  disabled={
                    (values as NationalityTypes[]).indexOf(
                      option as NationalityTypes
                    ) !== -1
                  }
                />
              );
            }
          })
        }
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
