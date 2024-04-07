import { Box, Drawer, useMediaQuery } from "@mui/material";
import { useContext } from "react";
import { SidebarContext } from "../../contexts/SidebarsContext";
import Head from "./Head";
import Items from "./Items";

const MdSidebar = () => {
  const { openSidebar } = useContext(SidebarContext);
  const smScreen = useMediaQuery("(max-width:768px)");

  return (
    <Drawer
      open={openSidebar}
      sx={{
        "& > div": {
          borderRadius: "0 20px 20px 0",
          width: smScreen ? "100%" : "50%",
        },
      }}
      className={`[&>div]:bg-secondary !w-full relative !z-[1300]`}
    >
      <Box
        className={`transition-all grid justify-stretch items-center grid-rows-[auto,1fr] h-full !w-full overflow-hidden`}
      >
        <Head />
        <Items />
      </Box>
    </Drawer>
  );
};

export default MdSidebar;
