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
            "&:not(:placeholder-shown)": {
              color: (theme) => theme.palette.primary.main,
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

// import { VisibilityOffRounded, VisibilityRounded } from "@mui/icons-material";
// import { Box, IconButton, InputAdornment, Typography } from "@mui/material";
// import { MouseEvent, useMemo, useState } from "react";
// import { handleAcceptArabic } from "../../functions/handleAcceptArabic";
// import { handleAcceptEnglish } from "../../functions/handleAcceptEnglish";
// import { handleAcceptNumeric } from "../../functions/handleAcceptNumeric";
// import { handleAcceptURL } from "../../functions/handleAcceptURL";
// import { handleAcceptUsername } from "../../functions/handleAcceptUsername";
// import { PrimaryTextField } from "../../mui/fields/PrimaryTextField";
// import { InputTypes } from "../../types/components.types";
// import { AllFormiksTypes, FormiksTypes } from "../../types/forms.types";

// const Input = ({
//   formik,
//   name,
//   label,
//   type,
//   select,
//   options,
//   change,
//   ac,
//   textarea,
//   variant,
//   disabled,
// }: InputTypes & FormiksTypes) => {
//   const [showPassword, setShowPassword] = useState(false);

//   const handleClickShowPassword = () => setShowPassword((show) => !show);

//   const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
//     event.preventDefault();
//   };

//   const error =
//     formik.touched[name as keyof AllFormiksTypes] &&
//     Boolean(formik.errors[name as keyof AllFormiksTypes]);
//   const helperText = error
//     ? (formik.errors[name as keyof AllFormiksTypes] as string)
//     : undefined;

//   return useMemo(
//     () => (
//       <Box
//         className={`grid justify-stretch w-full items-center gap-2 md:gap-1`}
//       >
//         <Typography variant="h6" className={`!font-[400]`}>
//           {type === "search" ? "Search" : label}
//         </Typography>
//         {select ? (
//           <PrimaryTextField
//             disabled={disabled}
//             fullWidth
//             id={name}
//             name={name}
//             select
//             SelectProps={{
//               native: true,
//               "aria-label": label,
//             }}
//             sx={{
//               "& input , & select": {
//                 textFillColor: (theme) =>
//                   `${
//                     disabled && formik.values[name as keyof AllFormiksTypes]
//                       ? theme.palette.primary.main
//                       : "#333"
//                   } !important`,
//               },
//             }}
//             value={formik.values[name as keyof AllFormiksTypes]}
//             onChange={(e) => {
//               if (change) {
//                 change(e.target.value);
//               }
//               formik.handleChange(e);
//             }}
//             onBlur={formik.handleBlur}
//             error={error}
//             helperText={helperText}
//           >
//             <option value={""}>{`Select ${label}`}</option>
//             {options &&
//               options.map((option: string, i: number) => (
//                 <option value={option} key={i}>
//                   {option}
//                 </option>
//               ))}
//           </PrimaryTextField>
//         ) : textarea ? (
//           <Box
//             component={"textarea"}
//             sx={{
//               padding: "8px !important",
//               fontSize: "15px",
//               minWidth: "300px !important",
//               minHeight: "40px !important",
//               transition: "ease-in-out all 0.3",
//               backgroundColor: (theme) => theme.palette.common.white,
//               boxShadow: (theme) => theme.shadows["2"],
//               borderRadius: "4px",
//               border: "1px solid #ddd",
//               "&:placeholder": {
//                 fontSize: "16px",
//                 lineHeight: "1 !important",
//                 backgroundColor: "transparent !important",
//               },
//             }}
//             id={name}
//             name={name}
//             defaultValue={
//               formik.values[name as keyof AllFormiksTypes] as string
//             }
//             onChange={(e) => {
//               const val = (e.target as HTMLTextAreaElement).value;
//               if (change) {
//                 change(val);
//               }
//               formik.handleChange(e);
//             }}
//             placeholder={`Enter ${label}`}
//           />
//         ) : (
//           <PrimaryTextField
//             disabled={disabled}
//             fullWidth
//             id={name}
//             sx={{
//               "& input , & select": {
//                 textFillColor: (theme) =>
//                   `${
//                     disabled && formik.values[name as keyof AllFormiksTypes]
//                       ? theme.palette.primary.main
//                       : "#333"
//                   } !important`,
//               },
//             }}
//             type={
//               type
//                 ? type === "password"
//                   ? showPassword
//                     ? "text"
//                     : "password"
//                   : type
//                 : "text"
//             }
//             name={name}
//             InputProps={
//               type === "password"
//                 ? {
//                     endAdornment: (
//                       <InputAdornment position="end">
//                         <IconButton
//                           aria-label="toggle password visibility"
//                           onClick={handleClickShowPassword}
//                           onMouseDown={handleMouseDownPassword}
//                           edge="end"
//                         >
//                           {showPassword ? (
//                             <VisibilityOffRounded />
//                           ) : (
//                             <VisibilityRounded />
//                           )}
//                         </IconButton>
//                       </InputAdornment>
//                     ),
//                   }
//                 : {}
//             }
//             placeholder={
//               type !== "date"
//                 ? type === "search"
//                   ? label
//                   : `Enter ${label}`
//                 : ""
//             }
//             value={formik.values[name as keyof AllFormiksTypes]}
//             onChange={(e) => {
//               const val = e.target.value;
//               if (change) {
//                 change(val);
//               }
//               if (!(type === "text" || type === "password")) {
//                 if (
//                   !(
//                     type === "email" ||
//                     label?.toLowerCase() === "username" ||
//                     label?.toLowerCase() === "website"
//                   )
//                 ) {
//                   e.target.value = val.toUpperCase();
//                 }
//                 if (label?.split(" ")[0].toLowerCase() === "arabic") {
//                   e.target.value = handleAcceptArabic(e.target.value);
//                 }
//                 if (
//                   label?.split(" ")[0].toLowerCase() === "english" ||
//                   variant === "english"
//                 ) {
//                   e.target.value = handleAcceptEnglish(e.target.value);
//                 }
//                 if (variant === "numeric") {
//                   e.target.value = handleAcceptNumeric(e.target.value);
//                 }
//                 if (variant === "url") {
//                   e.target.value = handleAcceptURL(e.target.value);
//                 }
//                 if (
//                   label?.toLowerCase() === "username" ||
//                   variant === "username"
//                 ) {
//                   e.target.value = handleAcceptUsername(e.target.value);
//                 }
//               }
//               formik.handleChange(e);
//             }}
//             onBlur={formik.handleBlur}
//             error={error}
//             helperText={helperText}
//             autoComplete={ac}
//           />
//         )}
//       </Box>
//     ),
//     [
//       ac,
//       change,
//       disabled,
//       error,
//       formik,
//       helperText,
//       label,
//       name,
//       options,
//       select,
//       showPassword,
//       textarea,
//       type,
//       variant,
//     ]
//   );
// };

// export default Input;
