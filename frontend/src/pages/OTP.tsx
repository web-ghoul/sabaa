import { Box, Skeleton } from "@mui/material";
import Logo from "../components/Logo/Logo";
import Forms from "../forms/Forms";
import { PrimaryBox } from "../mui/boxes&containers/PrimaryBox";
import { PrimaryContainer } from "../mui/boxes&containers/PrimaryContainer";

const OTP = () => {
  return (
    <PrimaryBox>
      <PrimaryContainer
        className={`!grid justify-stretch items-start grid-cols-2 gap-10 h-full sm:grid-cols-1`}
      >
        <Box
          className={`bg-no-repeat bg-center bg-cover w-full h-full sm:hidden rounded-2xl`}
          sx={{ backgroundImage: `url(${`/images/otp.jpg`})` }}
        />
        <Box className={`grid justify-stretch items-start gap-8 h-full`}>
          <Logo />
          <Forms type="otp" />
        </Box>
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export const LoadingOTP = () => (
  <PrimaryBox>
    <PrimaryContainer className="!grid justify-stretch items-start grid-cols-2 gap-10 h-full sm:grid-cols-1">
      <Skeleton
        variant="rounded"
        height="100%"
        sx={{ borderRadius: "1rem" }}
        className="sm:hidden"
      />
      <Box className="grid justify-stretch items-start gap-8 h-full">
        <Skeleton variant="circular" width={80} height={80} />
        <Box className="grid gap-4">
          <Skeleton variant="text" width="60%" height={40} />
          {[...Array(2)].map((_, i) => (
            <Skeleton key={i} variant="rounded" height={56} />
          ))}
          <Skeleton variant="rounded" height={48} width="100%" />
        </Box>
      </Box>
    </PrimaryContainer>
  </PrimaryBox>
);

export default OTP;
