import { VisibilityOffRounded, VisibilityRounded } from "@mui/icons-material";
import { Box, IconButton, InputAdornment, Typography } from "@mui/material";
import { MouseEvent, useMemo, useState } from "react";
import { handleAcceptArabic } from "../../functions/handleAcceptArabic";
import { handleAcceptEnglish } from "../../functions/handleAcceptEnglish";
import { handleAcceptNumeric } from "../../functions/handleAcceptNumeric";
import { handleAcceptURL } from "../../functions/handleAcceptURL";
import { handleAcceptUsername } from "../../functions/handleAcceptUsername";
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
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const error =
    formik.touched[name as keyof AllFormiksTypes] &&
    Boolean(formik.errors[name as keyof AllFormiksTypes]);
  const helperText = error
    ? (formik.errors[name as keyof AllFormiksTypes] as string)
    : undefined;

  return useMemo(
    () => (
      <Box
        className={`grid justify-stretch w-full items-center gap-2 md:gap-1`}
      >
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
          <Box
            component={"textarea"}
            sx={{
              padding: "8px !important",
              fontSize: "15px",
              minWidth: "300px !important",
              minHeight: "40px !important",
              transition: "ease-in-out all 0.3",
              backgroundColor: (theme) => theme.palette.common.white,
              boxShadow: (theme) => theme.shadows["2"],
              borderRadius: "4px",
              border: "1px solid #ddd",
              "&:placeholder": {
                fontSize: "16px",
                lineHeight: "1 !important",
                backgroundColor: "transparent !important",
              },
            }}
            id={name}
            name={name}
            defaultValue={
              formik.values[name as keyof AllFormiksTypes] as string
            }
            onChange={(e) => {
              const val = (e.target as HTMLTextAreaElement).value;
              if (change) {
                change(val);
              }
              formik.handleChange(e);
            }}
            placeholder={`Enter ${label}`}
          />
        ) : (
          <PrimaryTextField
            fullWidth
            id={name}
            type={
              type
                ? type === "password"
                  ? showPassword
                    ? "text"
                    : "password"
                  : type
                : "text"
            }
            name={name}
            InputProps={
              type === "password"
                ? {
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? (
                            <VisibilityOffRounded />
                          ) : (
                            <VisibilityRounded />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }
                : {}
            }
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
              if (
                !(
                  type === "email" ||
                  label?.toLowerCase() === "username" ||
                  label?.toLowerCase() === "website"
                )
              ) {
                e.target.value = val.toUpperCase();
              }
              if (label?.split(" ")[0].toLowerCase() === "arabic") {
                e.target.value = handleAcceptArabic(e.target.value);
              }
              if (
                label?.split(" ")[0].toLowerCase() === "english" ||
                variant === "english"
              ) {
                e.target.value = handleAcceptEnglish(e.target.value);
              }
              if (variant === "numeric") {
                e.target.value = handleAcceptNumeric(e.target.value);
              }
              if (variant === "url") {
                e.target.value = handleAcceptURL(e.target.value);
              }
              if (
                label?.toLowerCase() === "username" ||
                variant === "username"
              ) {
                e.target.value = handleAcceptUsername(e.target.value);
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
      showPassword,
      textarea,
      type,
      variant,
    ]
  );
};

export default Input;
