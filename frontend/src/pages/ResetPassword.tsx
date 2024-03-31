import { Box } from "@mui/material";
import Logo from "../components/Logo/Logo";
import Forms from "../forms/Forms";
import { PrimaryBox } from "../mui/boxes&containers/PrimaryBox";
import { PrimaryContainer } from "../mui/boxes&containers/PrimaryContainer";

const ResetPassword = () => {
  return (
    <PrimaryBox>
      <PrimaryContainer
        className={`!grid justify-stretch items-start grid-cols-2 gap-10 h-full`}
      >
        <Box
          className={`bg-no-repeat bg-center bg-cover w-full h-full`}
          sx={{ backgroundImage: `url(${`/images/reset_password.jpg`})` }}
        />
        <Box className={`grid justify-stretch items-start gap-8 h-full`}>
          <Logo />
          <Forms type="resetPassword" />
        </Box>
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default ResetPassword;
