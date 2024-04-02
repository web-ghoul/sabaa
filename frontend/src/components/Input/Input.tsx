import { PrimaryTextField } from "../../mui/fields/PrimaryTextField";
import { InputTypes } from "../../types/components.types";
import { AllFormiksTypes, FormiksTypes } from "../../types/forms.types";

const Input = ({
  formik,
  name,
  label,
  type,
  select,
  options,
  change,
  ac,
}: InputTypes & FormiksTypes) => {
  const error =
    formik.touched[name as keyof AllFormiksTypes] &&
    Boolean(formik.errors[name as keyof AllFormiksTypes]);
  const helperText = error
    ? (formik.errors[name as keyof AllFormiksTypes] as string)
    : undefined;

  return select ? (
    <PrimaryTextField
      fullWidth
      id={name}
      name={name}
      select
      SelectProps={{
        native: true,
        "aria-label": label,
      }}
      value={formik.values[name as keyof AllFormiksTypes]}
      onChange={(e) => {
        if (change) {
          change(e.target.value);
        }
        formik.handleChange(e);
      }}
      onBlur={formik.handleBlur}
      error={error}
      helperText={helperText}
    >
      <option value={""}>{label}</option>
      {options &&
        options.map((option: string, i: number) => (
          <option value={option} key={i}>
            {option}
          </option>
        ))}
    </PrimaryTextField>
  ) : (
    <PrimaryTextField
      fullWidth
      id={name}
      type={type || "text"}
      name={name}
      label={label}
      value={formik.values[name as keyof AllFormiksTypes]}
      onChange={(e) => {
        if (change) {
          change(e.target.value);
        }
        formik.handleChange(e);
      }}
      onBlur={formik.handleBlur}
      error={error}
      helperText={helperText}
      autoComplete={ac}
    />
  );
};

export default Input;
