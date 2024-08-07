import { Button, Typography } from "@mui/material";

const PermissionTab = ({
  title,
  current,
  handling,
}: {
  title: string;
  current: boolean;
  handling: () => void;
}) => {
  return (
    <Button
      className={`transition-all !text-zinc-700 hover:!text-primary !p-3 md:!p-2 ${
        current && "!shadow-lg !bg-primary"
      }`}
      onClick={handling}
    >
      <Typography
        variant="button"
        className={`${current && "!text-white !font-[700]"} capitalize`}
      >
        {title}
      </Typography>
    </Button>
  );
};

export default PermissionTab;
