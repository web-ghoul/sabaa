import { Box, Modal } from "@mui/material";
import { useContext } from "react";
import ProfileDetails from "../components/ProfileDetails/ProfileDetails";
import { FormsContext } from "../contexts/FormsContext";
import { ModalsContext } from "../contexts/ModalsContext";
import { SponsorTypes } from "../types/store.types";

const ViewSponsorModal = () => {
  const { openViewSponsorModal, handleCloseViewSponsorModal } =
    useContext(ModalsContext);
  const { editableSponsorData } = useContext(FormsContext);
  return (
    <Modal
      open={openViewSponsorModal}
      onClose={handleCloseViewSponsorModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={`modal`}>
        <ProfileDetails
          title={"Sponsor Details"}
          variant="sponsor"
          data={editableSponsorData || ({} as SponsorTypes)}
          isLoading={editableSponsorData ? false : true}
        />
      </Box>
    </Modal>
  );
};

export default ViewSponsorModal;
