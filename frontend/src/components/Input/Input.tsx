import { VisibilityOffRounded, VisibilityRounded } from "@mui/icons-material";
import { Box, IconButton, InputAdornment, Typography } from "@mui/material";
import { ChangeEvent, MouseEvent, useState } from "react";
import { FieldErrors, FieldValues, Path } from "react-hook-form";
import { PrimaryTextField } from "../../mui/fields/PrimaryTextField";
import { InputTypes } from "../../types/components.types";

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

const Input = ({
  register,
  name,
  errors,
  label,
  type,
  select,
  options,
  change,
  ac,
  textarea,
  disabled,
  value,
}: InputTypes) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  const error = Boolean(getError(errors, name));
  const helperText = getError(errors, name);

  return (
    <Box className={`grid justify-stretch w-full items-center gap-2 md:gap-1`}>
      <Typography variant="h6" className={`!font-[400]`}>
        {type === "search" ? "Search" : label}
      </Typography>
      {select ? (
        <PrimaryTextField
          disabled={disabled}
          fullWidth
          select
          SelectProps={{
            native: true,
            "aria-label": label,
          }}
          {...register(name)}
          onChange={(
            e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
          ) => {
            if (change) {
              change(e.target.value);
            }
          }}
          error={error}
          helperText={helperText}
        >
          <option value={""}>{`Select ${label}`}</option>
          {options &&
            options.map((option: string, i: number) => (
              <option value={option} key={i} selected={option === value}>
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
            "&:not(:placeholder-shown)": {
              fontWeight: "600",
            },
          }}
          {...register(name)}
          onChange={(
            e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
          ) => {
            if (change) {
              change(e.target.value);
            }
          }}
          placeholder={`Enter ${label}`}
        />
      ) : (
        <PrimaryTextField
          disabled={disabled}
          fullWidth
          value={value}
          {...register(name)}
          type={
            type
              ? type === "password"
                ? showPassword
                  ? "text"
                  : "password"
                : type
              : "text"
          }
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
          onChange={(
            e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
          ) => {
            if (change) {
              change(e.target.value);
            }
          }}
          error={error}
          helperText={helperText}
          autoComplete={ac}
        />
      )}
    </Box>
  );
};

export default Input;
