import { WhatsApp } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const WhatsappBox = ({ number }: { number: string }) => {
  return number ? (
    <Box
      component={"a"}
      href={`https://api.whatsapp.com/send/?phone=%2B${number}&text&type=phone_number&app_absent=0`}
      className={`flex justify-center items-center transition-all gap-1 py-1 px-2 rounded-md bg-green-400 text-white hover:bg-white hover:text-green-400 border border-green-400 hover:cursor-pointer`}
    >
      <WhatsApp className={`!text-[20px]`} />
      <Typography variant="h6">{number}</Typography>
    </Box>
  ) : (
    <Typography variant="h6">-</Typography>
  );
};

export default WhatsappBox;
