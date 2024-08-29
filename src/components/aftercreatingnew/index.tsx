import { useState } from "react";
import {
  Box,
  IconButton,
  Paper,
  TextField,
  Divider,
  Typography,
  Button,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Sidebar from "../sidebar/index.tsx";
import EditFieldModal from "../editfield/index.tsx";
import Comment from "../textAreas/comment.tsx";
import NumberRating from "../textAreas/numberRating.tsx";
import StarRating from "../textAreas/starRating.tsx";
import ExpressionRating from "../textAreas/expressionRating.tsx";
import { JSX } from "react/jsx-runtime";
import Singleline from "../textAreas/singleline.tsx";
import Categories from "../textAreas/categories.tsx";
import RadioButton from "../textAreas/radio.tsx";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../common/api/index.tsx";
// import { useNavigate  } from "react-router-dom";

function Aftercreatingnew() {
  const [fields, setFields] = useState<any[]>([]);
  const [editingField, setEditingField] = useState<any | null>(null);
  const [formTitle, setFormTitle] = useState("valueName");
  const [isModalOpen, setIsModalOpen] = useState(false);
  //   const navigate = useNavigate();

  const addField = (type: string) => {
    if (fields.length >= 7) return; // Limit to 7 fields
    const newField = {
      id: fields.length + 1,
      type,
      //   label: `New ${type} field`,
      required: false,
      //   errorMessage: "",
      options: type === "radio" || type === "categories" ? ["Option 1"] : [],
    };
    setFields([...fields, newField]);
  };

  const deleteField = (id: number) => {
    setFields(fields.filter((field) => field.id !== id));
  };

  const editField = (field: any) => {
    setEditingField(field);
    setIsModalOpen(true);
  };

  const addFeedbacksToFirestore = async () => {
    const newFeedback = [
      {
        Name: "Delivery",
        Submitted: 10,
        Viewed: 55,
        DatePublished: "2024-08-08",
      },
      {
        Name: "Product Quality",
        Submitted: 100,
        Viewed: 300,
        DatePublished: "2024-08-07",
      },
      {
        Name: formTitle,
        DatePublished: Timestamp.now(), // This sets the current date and time
        Submitted: 0,
        Viewed: 0,
        feedTextType: [
          {
            id: 1,
            type: "textarea",
            required: false,
            options: [],
          },
          {
            id: 2,
            type: "numeric",
            required: false,
            options: [],
          },
        ],
      },
    ];

    const feedbacksCollectionRef = collection(db, "feedbacks");

    try {
      // Get all documents in the collection
      const querySnapshot = await getDocs(feedbacksCollectionRef);

      // Iterate over each document
      querySnapshot.forEach(async (docSnapshot) => {
        // Document ID
        const docId = docSnapshot.id;

        // Reference to the document
        const docRef = doc(db, "feedbacks", docId);

        // console.log(docRef);

        // Update document with new field
        await updateDoc(docRef, "data", newFeedback);

        console.log(`Document ${docId} updated successfully.`);
      });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const saveField = () => {
    addFeedbacksToFirestore();
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormTitle(e.target.value);
  };

  // Function to handle saving the edited field
  const handleSaveField = (updatedField: any) => {
    setFields(
      fields.map((field) =>
        field.id === updatedField.id ? updatedField : field
      )
    );
    setIsModalOpen(false);
    setEditingField(null);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingField(null);
  };

  const listoftextarea = (label: { type: string; label: any }) => {
    let result: JSX.Element;
    switch (label.type) {
      case "textarea":
        result = <Comment />;
        break;
      case "numeric":
        result = <NumberRating />;
        break;
      case "star":
        result = <StarRating />;
        break;
      case "smiley":
        result = <ExpressionRating />;
        break;
      case "single-line":
        result = <Singleline />;
        break;
      case "radio":
        result = <RadioButton />;
        break;
      case "categories":
        result = <Categories />;
        break;
    }
    return result;
  };

  const [changing, setChanging] = useState(false);
  return (
    <Box>
      <Box flex={1} p={3} display="flex">
        <Paper
          style={{ minWidth: "40vw", maxHeight: "100vh", overflowY: "auto" }}
          elevation={3}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            mb={2}
            p={2}
            sx={{ backgroundColor: "#5578F4" }}
          >
            {changing ? (
              <>
                <TextField
                  value={formTitle}
                  onChange={handleTitleChange}
                  variant="outlined"
                  fullWidth
                />
                <IconButton onClick={() => setChanging(!changing)}>
                  <EditIcon />
                </IconButton>
              </>
            ) : (
              <>
                <Typography>{formTitle}</Typography>
                <IconButton onClick={() => setChanging(!changing)}>
                  <EditIcon />
                </IconButton>
              </>
            )}
          </Box>
          <Divider />

          <Box p={3}>
            {fields.map((field, i) => (
              <Box key={i} display="flex" flexDirection="column">
                {listoftextarea(field)}
                <Box display="flex" justifyContent="flex-end">
                  <IconButton onClick={() => editField(field)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => deleteField(field.id)}>
                    <DeleteIcon />
                  </IconButton>
                </Box>
                <Divider />
              </Box>
            ))}
          </Box>
        </Paper>
        {editingField && (
          <EditFieldModal
            field={editingField}
            open={isModalOpen}
            onSave={handleSaveField}
            onClose={handleCloseModal}
          />
        )}
        <Sidebar addField={addField} />
      </Box>
      <Button onClick={saveField}>Save</Button>
    </Box>
  );
}

export default Aftercreatingnew;
