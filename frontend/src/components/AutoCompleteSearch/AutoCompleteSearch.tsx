import { CircularProgress } from "@mui/material";
import { AutocompleteRenderInputParams } from "@mui/material/Autocomplete";
import { PrimaryAutoComplete } from "../../mui/autoCompletes/PrimaryAutoComplete";
import { PrimaryTextField } from "../../mui/fields/PrimaryTextField";
import { AutoCompleteSearchTypes } from "../../types/components.types";
<<<<<<< HEAD
import { AllFormiksTypes, FormiksTypes } from "../../types/forms.types";
import { NationalityTypes, OwnerTypes } from "../../types/store.types";
=======
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949

export default function AutoCompleteSearch({
  label,
  loading,
  multiple,
<<<<<<< HEAD
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
=======
}: AutoCompleteSearchTypes) {
  return (
    <PrimaryAutoComplete
      multiple={multiple}
      options={data}
      getOptionLabel={(option) => {
        const typedOption = option as OptionTypes;
        return typedOption ? typedOption.nationality : "";
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
      }}
      renderInput={(params: AutocompleteRenderInputParams) => (
        <PrimaryTextField
          {...params}
<<<<<<< HEAD
          id={name}
          type={"text"}
          name={name}
          value={formik.values[name as keyof AllFormiksTypes]}
          label={label}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={error}
          helperText={helperText}
=======
          onChange={(e) => console.log(e.target.value)}
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
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
<<<<<<< HEAD
=======
          label={label}
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
        />
      )}
    />
  );
}
<<<<<<< HEAD
=======

interface OptionTypes {
  nationality: string;
  ID: string;
}

const data: readonly OptionTypes[] = [
  { nationality: "UAE", ID: "1564753624645" },
  { nationality: "USA", ID: "2324235364637547" },
  { nationality: "EGP", ID: "3675425345357" },
  { nationality: "AS", ID: "4657475362645234626" },
];
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
