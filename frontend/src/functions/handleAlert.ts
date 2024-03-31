import toast, { Toast } from "react-hot-toast";
import { AlertFunTypes } from "../types/app.types";

export const handleAlert = ({ msg, status, pos, icon, dur }: AlertFunTypes) => {
  const options: Partial<
    Pick<
      Toast,
      | "icon"
      | "id"
      | "duration"
      | "ariaProps"
      | "className"
      | "style"
      | "position"
      | "iconTheme"
    >
  > = {
    duration: dur,
    position: pos,
  };
  if (icon) {
    options.icon = icon;
  }
  if (status === "success") {
    toast.success(msg, options);
  } else if (status === "error") {
    toast.error(msg, options);
  } else {
    toast(msg, options);
  }
};
