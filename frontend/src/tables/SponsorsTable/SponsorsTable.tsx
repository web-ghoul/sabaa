import { MoreVertRounded } from "@mui/icons-material";
import {
  Box,
  IconButton,
  TableBody,
  TableHead,
  TableRow,
  useMediaQuery,
} from "@mui/material";
import { MouseEvent, useContext } from "react";
import NationalityBox from "../../components/NationalityBox/NationalityBox";
import UserBox from "../../components/UserBox/UserBox";
import { AppContext } from "../../contexts/AppContext";
import { FormsContext } from "../../contexts/FormsContext";
import { ModalsContext } from "../../contexts/ModalsContext";
import { handleDate } from "../../functions/handleDate";
import { handleRandomNumber } from "../../functions/handleRandomNumber";
import { SponsorsTableTypes } from "../../types/tables.types";
import PrimaryTable from "../PrimaryTable";
import { PrimaryTableCell } from "../PrimaryTableCell";
import { PrimaryTableRow } from "../PrimaryTableRow";
import LoadingSponsorsRow from "./LoadingSponsorsRow";
import ProsTableMenu from "./SponsorsTableMenu";

const SponsorsTable = ({ data, count, isLoading }: SponsorsTableTypes) => {
  const { handleOpenTableMenu } = useContext(AppContext);
  const { setEditableSponsorData } = useContext(FormsContext);
  const { handleOpenViewSponsorModal } = useContext(ModalsContext);
  const smScreen = useMediaQuery("(max-width:768px)");
  const mdScreen = useMediaQuery("(max-width:992px)");
  const lgScreen = useMediaQuery("(max-width:1200px)");

  const handleOpenMenu = (
    event: MouseEvent<HTMLButtonElement>,
    index: number
  ) => {
    if (data) {
      setEditableSponsorData(data[index]);
    }
    handleOpenTableMenu(event);
  };

  const handleView = (index: number) => {
    handleOpenViewSponsorModal();
    if (data) {
      setEditableSponsorData(data[index]);
    }
  };

  return (
    <PrimaryTable
      count={count}
      variant={"customers"}
      noPagination={true}
      loading={isLoading}
    >
      <TableHead>
        <TableRow>
          <PrimaryTableCell className={`!flex gap-2`}>Name</PrimaryTableCell>
          {!mdScreen && (
            <PrimaryTableCell align="center">
              Residence Expire Date
            </PrimaryTableCell>
          )}
          {!smScreen && <PrimaryTableCell align="center">UID</PrimaryTableCell>}
          {!lgScreen && (
            <PrimaryTableCell align="center">Nationality</PrimaryTableCell>
          )}
          <PrimaryTableCell align="center">Relative Relation</PrimaryTableCell>
          <PrimaryTableCell align="right">Actions</PrimaryTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {!isLoading
          ? data &&
            data.map((row, i) => {
              return (
                <PrimaryTableRow key={i}>
                  <PrimaryTableCell onClick={() => handleView(i)}>
                    <UserBox
                      username={row.name}
                      head={"subtitle1"}
                      size={"small"}
                      avatar={row.avatar}
                    />
                  </PrimaryTableCell>
                  {!mdScreen && (
                    <PrimaryTableCell align="center">
                      {handleDate(row.residenceExpiryDate)}
                    </PrimaryTableCell>
                  )}
                  {!smScreen && (
                    <PrimaryTableCell align="center">
                      {row.uid}
                    </PrimaryTableCell>
                  )}
                  {!lgScreen && (
                    <PrimaryTableCell align="center">
                      <Box className={`flex justify-center items-center`}>
                        <NationalityBox nationality={row.nationality} />
                      </Box>
                    </PrimaryTableCell>
                  )}
                  <PrimaryTableCell align="center">
                    {row.relativeRelation}
                  </PrimaryTableCell>
                  <PrimaryTableCell align="right">
                    <IconButton onClick={(e) => handleOpenMenu(e, i)}>
                      <MoreVertRounded />
                    </IconButton>
                  </PrimaryTableCell>
                </PrimaryTableRow>
              );
            })
          : new Array(handleRandomNumber())
              .fill(0)
              .map((_, i) => <LoadingSponsorsRow key={i} />)}
        <ProsTableMenu />
      </TableBody>
    </PrimaryTable>
  );
};

export default SponsorsTable;
