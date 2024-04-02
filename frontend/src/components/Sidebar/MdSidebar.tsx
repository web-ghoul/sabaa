import { Box, Drawer } from "@mui/material";
import { useContext } from "react";
import { SidebarContext } from "../../contexts/SidebarsContext";
import Head from "./Head";
import Items from "./Items";

const MdSidebar = () => {
  const { openSidebar } = useContext(SidebarContext);
  return (
    <Drawer
      open={openSidebar}
      sx={{
        "& > div": { borderRadius: "0 20px 20px 0", width: "100%" },
        zIndex: "1300",
      }}
      className={`[&>div]:bg-secondary !w-full`}
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
