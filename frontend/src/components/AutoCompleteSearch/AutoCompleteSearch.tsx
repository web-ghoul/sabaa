import { Autocomplete, Box, Chip, Typography } from "@mui/material";
import { SyntheticEvent, useEffect, useState } from "react";
import { FieldErrors, FieldValues, Path } from "react-hook-form";
import { PrimaryTextField } from "../../mui/fields/PrimaryTextField";
import { AutoCompleteSearchTypes } from "../../types/components.types";
import {
  CompanyTypes,
  CustomerTypes,
  JobTypes,
  NationalityTypes,
  OwnerTypes,
  ProTypes,
} from "../../types/store.types";

function getError<T extends FieldValues>(
  errors: FieldErrors<T>,
  name: Path<T>
): string | undefined {
  const error = errors[name];
  if (error && typeof error === "object" && "message" in error) {
    return (error as { message?: string }).message;
  }
  return undefined;
}

export default function AutoCompleteSearch({
  label,
  multiple,
  options,
  name,
  register,
  errors,
  setValue,
  getValues,
  variant,
  flag,
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
  const error = Boolean(getError(errors, name));
  const helperText = getError(errors, name);
  const [val, setVal] = useState<
    | JobTypes
    | NationalityTypes
    | CompanyTypes
    | (CompanyTypes | OwnerTypes | ProTypes | CustomerTypes)[]
    | null
  >(
    name === "companyId" ||
      name === "ownerId" ||
      name === "proCode" ||
      name === "customerId"
      ? []
      : null
  );

  const handleChange = (_: SyntheticEvent, newValue: unknown) => {
    if (name === "nationality") {
      const nationality = newValue as NationalityTypes;
      setValue(name, nationality.nationality);
      setValue("idNationality", nationality.id);
    } else if (name === "ownerId") {
      const owners = newValue as OwnerTypes[];
      const IDs = owners.map((owner: OwnerTypes) => owner._id);
      setValue(name, IDs as string[]);
    } else if (name === "proCode") {
      const pros = newValue as ProTypes[];
      const IDs = pros.map((pro: ProTypes) => pro._id);
      setValue(name, IDs as string[]);
    } else if (name === "customerId") {
      const customers = newValue as CustomerTypes[];
      const IDs = customers.map((customer: CustomerTypes) => customer._id);
      setValue(name, IDs as string[]);
    } else if (name === "companyId") {
      if (variant === "employee") {
        const companies = newValue as CompanyTypes[];
        const IDs = companies.map((company: CompanyTypes) => company._id);
        const names = companies.map((company: CompanyTypes) => company.name);
        setValue(name, (IDs as string[]).slice(IDs.length - 1));
        setValue("companyName", (names as string[]).slice(IDs.length - 1));
      } else if (variant === "transaction") {
        const company = newValue as CompanyTypes;
        setValue(name, company._id || "");
        setValue("companyName", company.name);
        setValue("companyCode", company.molCode);
      } else {
        const companies = newValue as CompanyTypes[];
        const IDs = companies.map((company: CompanyTypes) => company._id);
        setValue(name, IDs as string[]);
      }
    } else if (name === "job") {
      const job = newValue as JobTypes;
      setValue(name, job.jobTitle);
    }
    handleVal();
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
      return `${(option as JobTypes).jobTitle} ( ${
        (option as JobTypes).MOHRE
      } )`;
    }
    return "";
  };

  const handleVal = () => {
    if (name === "nationality") {
      const nationality = (options as NationalityTypes[]).find(
        (option) => option.id === getValues("idNationality")
      );
      setVal(nationality || null);
    } else if (name === "ownerId") {
      const owners = (options as OwnerTypes[]).filter((option) =>
        (getValues("ownerId") as string[]).includes(option._id || "")
      );
      setVal(owners || null);
    } else if (name === "proCode") {
      const pros = (options as ProTypes[]).filter((option) =>
        (getValues("proCode") as string[]).includes(option._id || "")
      );
      setVal(pros || null);
    } else if (name === "customerId") {
      const customers = (options as CustomerTypes[]).filter((option) =>
        (getValues("customerId") as string[]).includes(option._id || "")
      );
      setVal(customers || null);
    } else if (name === "companyId") {
      if (variant === "transaction") {
        const company = (options as CompanyTypes[]).find(
          (option) => option._id === getValues(name)
        );
        setValue(name, company?._id || "");
        setValue("companyName", company?.name || "");
        setValue("companyCode", company?.molCode || "");
        setVal(company || null);
      } else {
        const companies = (options as CompanyTypes[]).filter((option) =>
          (getValues("companyId") as string[]).includes(option._id || "")
        );
        setVal(companies || null);
      }
    } else if (name === "job") {
      const job = (options as JobTypes[]).find(
        (option) => option.jobTitle === getValues("job")
      );
      setVal(job || null);
    }
  };

  useEffect(() => {
    handleVal();
  }, [setValue, flag]);

  return (
    <Box className={`grid justify-stretch items-center gap-2`}>
      <Typography variant="h6">{label}</Typography>
      <Autocomplete
        sx={style}
        disablePortal
        id="combo-box-demo"
        multiple={multiple}
        value={val}
        isOptionEqualToValue={(option, value) => option?._id === value?._id}
        filterSelectedOptions
        options={options}
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
                />
              );
            }
          })
        }
        getOptionLabel={handleOptionLabel}
        renderInput={(params) => (
          <PrimaryTextField
            error={error}
            {...register}
            helperText={helperText}
            {...params}
            placeholder={label}
          />
        )}
      />
    </Box>
  );
}
