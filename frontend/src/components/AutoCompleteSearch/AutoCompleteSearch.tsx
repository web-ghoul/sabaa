import { CircularProgress } from "@mui/material";
import { AutocompleteRenderInputParams } from "@mui/material/Autocomplete";
import { PrimaryAutoComplete } from "../../mui/autoCompletes/PrimaryAutoComplete";
import { PrimaryTextField } from "../../mui/fields/PrimaryTextField";
import { AutoCompleteSearchTypes } from "../../types/components.types";
import { AllFormiksTypes, FormiksTypes } from "../../types/forms.types";
import { NationalityTypes, OwnerTypes } from "../../types/store.types";

export default function AutoCompleteSearch({
  label,
  loading,
  multiple,
  options,
  formik,
  name,
}: AutoCompleteSearchTypes & FormiksTypes) {
  const error =
    formik.touched[name as keyof AllFormiksTypes] &&
    Boolean(formik.errors[name as keyof AllFormiksTypes]);
  const helperText = error
    ? (formik.errors[name as keyof AllFormiksTypes] as string)
    : undefined;

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
      renderInput={(params: AutocompleteRenderInputParams) => (
        <PrimaryTextField
          {...params}
          id={name}
          type={"text"}
          name={name}
          value={formik.values[name as keyof AllFormiksTypes]}
          label={label}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={error}
          helperText={helperText}
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
