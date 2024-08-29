// import * as React from "react";
// import Button from "@mui/material/Button";
// import Avatar from "@mui/material/Avatar";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemAvatar from "@mui/material/ListItemAvatar";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { Button, DialogActions, DialogContent, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// import Typography from "@mui/material/Typography";
// import { blue } from "@mui/material/colors";

// const emails = ["username@gmail.com", "user02@gmail.com"];

export interface SimpleDialogProps {
  open: boolean;
  valuesAvail: any[];
  onClose: (value: any[]) => void;
}
function SimpleDialog(props: Readonly<SimpleDialogProps>) {
  const navigate = useNavigate();
  const { onClose, valuesAvail, open } = props;

  const [value, setValue] = useState("");

  const handleClose = () => {
    const tempArr = [];
    if (value !== "") {
      valuesAvail.forEach((e) => tempArr.push(e));
      tempArr.push(value);
    } else {
      valuesAvail.forEach((e) => tempArr.push(e));
    }

    onClose(tempArr);
    navigate("/creating");
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Create Feedback Form</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          required
          margin="dense"
          id="name"
          fullWidth
          variant="standard"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Create </Button>
        <Button onClick={handleClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
}

export default SimpleDialog;
