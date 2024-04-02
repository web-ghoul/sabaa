import { CircularProgress } from "@mui/material";
import { AutocompleteRenderInputParams } from "@mui/material/Autocomplete";
import { SyntheticEvent } from "react";
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

  return (
    <PrimaryAutoComplete
      multiple={multiple}
      options={options || []}
      isOptionEqualToValue={(option, value) => option === value}
      filterSelectedOptions
      getOptionLabel={(option) => {
        if (name === "nationality") {
          const typedOption = option as NationalityTypes;
          return typedOption
            ? `${typedOption.nationality} ( ${typedOption._id} )`
            : "";
        }
        const typedOption = option as OwnerTypes;
        return typedOption ? `${typedOption.name} ( ${typedOption._id} )` : "";
      }}
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
