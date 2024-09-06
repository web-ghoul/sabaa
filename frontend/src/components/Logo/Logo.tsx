import { Box, Button, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store/store";
import { LogoTypes } from "../../types/components.types";

const Logo = ({ color, noTitle, handling }: LogoTypes) => {
  const { customizes } = useSelector((state: RootState) => state.customizes);
  const navigate = useNavigate();

  const handleClicked = () => {
    if (handling) {
      handling();
    } else {
      navigate(`${import.meta.env.VITE_DASHBOARD_ROUTE}`);
    }
  };

  return (
    <Button
      className={`flex justify-start items-center gap-2 w-fit !p-0`}
      onClick={handleClicked}
    >
      <Box
        className={`rounded-full overflow-hidden w-[40px] h-[40px] md:w-[35px] md:h-[35px] sm:!w-[35px] sm:!h-[35px] bg-no-repeat bg-cover bg-center`}
        sx={{
          backgroundImage: `url("${
            customizes
              ? `${
                  import.meta.env.VITE_SERVER_URL
                }/${customizes.logo.replaceAll("\\", "/")}`
              : "/images/icon_fit.png"
          }")`,
        }}
      />
      {!noTitle && (
        <Typography
          variant="h5"
          className={`!font-[700] ${
            color === "light" ? "text-white" : "text-secondary"
          }`}
        >
          {customizes && (customizes.companyName || "SABAA")}
        </Typography>
      )}
    </Button>
  );
};

export default Logo;
