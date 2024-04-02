import { CircularProgress } from "@mui/material";
import { AutocompleteRenderInputParams } from "@mui/material/Autocomplete";
import { SyntheticEvent, useEffect } from "react";
import { PrimaryAutoComplete } from "../../mui/autoCompletes/PrimaryAutoComplete";
import { PrimaryTextField } from "../../mui/fields/PrimaryTextField";
import { AutoCompleteSearchTypes } from "../../types/components.types";
import {
  AddCompanyFormikTypes,
  AddOwnerFormikTypes,
} from "../../types/forms.types";
import { NationalityTypes, OwnerTypes } from "../../types/store.types";

export default function AutoCompleteSearch({
  label,
  loading,
  multiple,
  options,
  name,
  formik,
}: AutoCompleteSearchTypes) {
  const handleChange = (_: SyntheticEvent, newValue: unknown) => {
    if (name === "nationality") {
      const nationality = newValue as NationalityTypes;
      (formik as unknown as AddOwnerFormikTypes).values.nationality =
        nationality.nationality;
      (formik as unknown as AddOwnerFormikTypes).values.idNationality =
        nationality._id;
    } else if (name === "ownerId") {
      const owners = newValue as OwnerTypes[];
      (formik as unknown as AddCompanyFormikTypes).values.ownerId = owners.map(
        (owner) => owner._id
      );
    } else if (name === "proCode") {
      const owners = newValue as OwnerTypes[];
      (formik as unknown as AddCompanyFormikTypes).values.ownerId = owners.map(
        (owner) => owner._id
      );
    }
  };

  useEffect(() => {
    if (options) {
      for (let i = 0; i < options.length; i++) {
        if (name === "nationality") {
          if (
            options[i]._id ===
            (formik as unknown as AddOwnerFormikTypes).values.idNationality
          ) {
            break;
          }
        } else if (name === "ownerId") {
          if (
            (
              formik as unknown as AddCompanyFormikTypes
            ).values.ownerId.includes(options[i]._id)
          ) {
            break;
          }
        }
      }
    }
  }, [options]);

  return (
    <PrimaryAutoComplete
      multiple={multiple}
      options={options || []}
      filterSelectedOptions
      getOptionLabel={(option) => {
        if (name === "nationality") {
          const typedOption = option as NationalityTypes;
          return typedOption
            ? `${typedOption.nationality} ( ${typedOption._id} )`
            : "";
        }
        if (name === "ownerId") {
          const typedOption = option as OwnerTypes;
          return typedOption
            ? `${typedOption.name} ( ${typedOption._id} )`
            : "";
        }
        return "";
      }}
      isOptionEqualToValue={(option, value) => option === value}
      onChange={handleChange}
      renderInput={(params: AutocompleteRenderInputParams) => (
        <PrimaryTextField
          {...params}
          type={"text"}
          label={label}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
}
