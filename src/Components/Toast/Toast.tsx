import React, { useState } from "react";
import {  Snackbar } from "@mui/material";
import { ButtonVariant } from "../Button/Button.types.tsx"; // Make sure to import your dependencies correctly
import { ToastProps } from "./Toast.types.tsx";
import { twMerge } from "tailwind-merge";
import { Check } from "@mui/icons-material";
import {Button} from "../Button";
import {Alert} from "../Alert/Alert.tsx"; // Import the Check icon from Material-UI

const Toast: React.FC<ToastProps> = ({
                                       variant = ButtonVariant.Clean,
                                       className,
                                       ...props
                                     }) => {
  const [open, setOpen] = useState(false);

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Button  onClick={handleOpen}>
        Show Toast
      </Button>
      <Snackbar
        open={open}
        autoHideDuration={6000} // Duration in milliseconds
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Alert
          variant={ButtonVariant.Clean }
          className={twMerge("border shadow-lg rounded", className)}
          onClose={handleClose}
          icon={<Check />} // Use the Check icon in the Alert
          {...props}
        >
          {props.title}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Toast;
