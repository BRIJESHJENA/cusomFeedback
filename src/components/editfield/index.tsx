import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Switch,
  FormControlLabel,
} from "@mui/material";

const EditFieldModal: React.FC<{
  field: any;
  open: boolean;
  onSave: (field: any) => void;
  onClose: () => void;
}> = ({ field, open, onSave, onClose }) => {
  const [label, setLabel] = useState(field.label);
  const [required, setRequired] = useState(field.required);
  const [errorMessage, setErrorMessage] = useState(field.errorMessage);

  const handleSave = () => {
    onSave({
      ...field,
      label,
      required,
      errorMessage: required ? errorMessage : "",
    });
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit Field</DialogTitle>
      <DialogContent>
        {/* <TextField
          label="Label"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          fullWidth
          margin="normal"
        /> */}
        <FormControlLabel
          control={
            <Switch
              checked={required}
              onChange={() => setRequired(!required)}
            />
          }
          label="Required"
        />
        {required && (
          <TextField
            label="Error Message"
            value={errorMessage}
            onChange={(e) => setErrorMessage(e.target.value)}
            fullWidth
            margin="normal"
          />
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSave} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditFieldModal;
