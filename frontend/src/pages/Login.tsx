import { Box } from "@mui/material";
import Logo from "../components/Logo/Logo";
import Forms from "../forms/Forms";
import { PrimaryBox } from "../mui/boxes&containers/PrimaryBox";
import { PrimaryContainer } from "../mui/boxes&containers/PrimaryContainer";

const Login = () => {
  return (
    <PrimaryBox>
      <PrimaryContainer
        className={`!grid justify-stretch items-start grid-cols-2 gap-10 h-full sm:grid-cols-1`}
      >
        <Box
          className={`bg-no-repeat bg-center bg-cover w-full h-full sm:hidden rounded-2xl`}
          sx={{ backgroundImage: `url(${`/images/login.jpg`})` }}
        />
        <Box className={`grid justify-stretch items-start gap-8 h-full`}>
          <Logo />
          <Forms type="login" />
        </Box>
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default Login;
