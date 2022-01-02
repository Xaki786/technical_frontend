import { Card, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import DropZoneIcon from "./DropZoneIcon";
type ImageUploadProps = {
  handleImageChange: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => void;
};
const ImageUpload = ({ handleImageChange }: ImageUploadProps) => {
  const [file, setfile] = useState<Blob>();
  const onDrop = (acceptedFiles: File[]) => {
    handleImageChange("picture", acceptedFiles[0]);
    setfile(acceptedFiles[0]);
    // Do something with the files
  };
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <>
      <Card
        variant="outlined"
        {...getRootProps()}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 200,
        }}
      >
        <CardContent>
          <input {...getInputProps()} />
          <Box>
            {isDragActive ? (
              <>
                <Typography variant="h6">Drop the files here ...</Typography>
                <DropZoneIcon />
              </>
            ) : (
              <>
                <Typography>
                  Drag 'n' drop some files here, or click to select files
                </Typography>
                <DropZoneIcon />{" "}
              </>
            )}
          </Box>
        </CardContent>
      </Card>
      {file && (
        <Card sx={{ height: 200, mt: 2, textAlign: "center" }}>
          <Typography variant="h6">Image Preview</Typography>
          <img
            src={URL.createObjectURL(file)}
            style={{ width: "100%" }}
            alt="Thumb"
          />
        </Card>
      )}
    </>
  );
};

export default ImageUpload;
