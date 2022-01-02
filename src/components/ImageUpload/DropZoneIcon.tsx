import { memo } from "react";
import BackupIcon from "@mui/icons-material/Backup";
import { Box } from "@mui/system";
const DropZoneIcon = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: 2,
      }}
    >
      <BackupIcon sx={{ fontSize: 60 }} color="primary" />
    </Box>
  );
};

export default memo(DropZoneIcon);
