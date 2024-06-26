import { MenuOpenRounded } from "@mui/icons-material";
import { Box, IconButton, useMediaQuery } from "@mui/material";
import { useContext } from "react";
import { SidebarContext } from "../../contexts/SidebarsContext";
import Logo from "../Logo/Logo";

const Head = () => {
  const { openSidebar, handleCloseSidebar, handleOpenSidebar } =
    useContext(SidebarContext);
  const lgClasses = `h-[70px] md:h-[60px] sm:!h-[50px] w-full bg-secondaryLight flex ${
    openSidebar ? "justify-between px-4" : "justify-center"
  }  items-center`;
  const mdClasses = `h-[70px] md:h-[60px] sm:!h-[50px] !w-full bg-secondaryLight flex justify-between px-4"
  items-center `;

  const mdScreen = useMediaQuery("(max-width:992px)");
  return (
    <Box className={mdScreen ? mdClasses : lgClasses}>
      {mdScreen ? (
        <>
          <Logo color={"light"} />
          <IconButton onClick={handleCloseSidebar}>
            <MenuOpenRounded className={`text-primary`} />
          </IconButton>
        </>
      ) : openSidebar ? (
        <>
          <Logo color={"light"} />
          <IconButton onClick={handleCloseSidebar}>
            <MenuOpenRounded className={`text-primary`} />
          </IconButton>
        </>
      ) : (
        <Logo color={"light"} noTitle={true} handling={handleOpenSidebar} />
      )}
    </Box>
  );
};

export default Head;
