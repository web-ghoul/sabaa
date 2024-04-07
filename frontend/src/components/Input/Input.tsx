import { Box, Typography } from "@mui/material";
import { useMemo } from "react";
import { handleAcceptArabic } from "../../functions/handleAcceptArabic";
import { handleAcceptEnglish } from "../../functions/handleAcceptEnglish";
import { PrimaryTextArea } from "../../mui/fields/PrimaryTextArea";
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
  textarea,
  variant,
}: InputTypes & FormiksTypes) => {
  const error =
    formik.touched[name as keyof AllFormiksTypes] &&
    Boolean(formik.errors[name as keyof AllFormiksTypes]);
  const helperText = error
    ? (formik.errors[name as keyof AllFormiksTypes] as string)
    : undefined;

  return useMemo(
    () => (
      <Box className={`grid justify-start items-center gap-2 md:gap-1`}>
        <Typography variant="h6" className={`!font-[400]`}>
          {type === "search" ? "Search" : label}
        </Typography>
        {select ? (
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
            <option value={""}>{`Select ${label}`}</option>
            {options &&
              options.map((option: string, i: number) => (
                <option value={option} key={i}>
                  {option}
                </option>
              ))}
          </PrimaryTextField>
        ) : textarea ? (
          <PrimaryTextArea
            placeholder={`Enter ${label}`}
            onBlur={formik.handleBlur}
            autoComplete={ac}
          />
        ) : (
          <PrimaryTextField
            fullWidth
            id={name}
            type={type || "text"}
            name={name}
            placeholder={
              type !== "date"
                ? type === "search"
                  ? label
                  : `Enter ${label}`
                : ""
            }
            value={formik.values[name as keyof AllFormiksTypes]}
            onChange={(e) => {
              const val = e.target.value;
              if (change) {
                change(val);
              }
              if (type !== "email") {
                e.target.value = val.toUpperCase();
              }
              if (label?.split(" ")[0].toLowerCase() === "arabic") {
                e.target.value = handleAcceptArabic(val).toUpperCase();
              }
              if (
                label?.split(" ")[0].toLowerCase() === "english" ||
                variant === "english"
              ) {
                console.log(val);

                e.target.value = handleAcceptEnglish(val).toUpperCase();
              }
              formik.handleChange(e);
            }}
            onBlur={formik.handleBlur}
            error={error}
            helperText={helperText}
            autoComplete={ac}
          />
        )}
      </Box>
    ),
    [
      ac,
      change,
      error,
      formik,
      helperText,
      label,
      name,
      options,
      select,
      textarea,
      type,
      variant,
    ]
  );
};

export default Input;
