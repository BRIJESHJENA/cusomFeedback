import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import { Box, Button, CardHeader, Typography } from "@mui/material";
import SimpleDialog from "../../common/api/dialog/index.tsx";
// import Aftercreatingnew from "../aftercreatingnew/index.tsx";
// import "../../common/api/index.tsx";
import { getFirestore, addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../common/api/index.tsx";

function Landing() {
  const [feedBackDatas, setFeedBackDatas] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState([]);
  // const [numselectedValue, setNumselectedValue] = useState(0);

  useEffect(() => {
    const fetchForms = async () => {
      try {
        // Reference to the Firestore collection
        const formsCollection = collection(db, "feedbacks");

        // Fetch all documents from the collection
        const formsSnapshot = await getDocs(formsCollection);

        // Map through each document to extract data
        const formsList: any = formsSnapshot.docs.map((doc) => ({
          id: doc.id, // Get the document ID
          ...doc.data(), // Spread the document data
        }));
        // console.log(formsList[0].data);

        // Update the state with the fetched data
        setFeedBackDatas(formsList[1].data);
        // setLoading(false);
      } catch (error) {
        console.error("Error fetching forms: ", error);
        // setLoading(false);
      }
    };

    fetchForms();
  }, []);

  useEffect(() => {
    if (selectedValue.length === 0) {
      const tempArr = [];
      feedBackDatas.forEach((e) => tempArr.push(e.Name));
      // setNumselectedValue(tempArr.length);
      setSelectedValue(tempArr);
    }
  }, [selectedValue.length]);

  const handleClickOpen = () => {
    setOpen(!open);
  };
  const handleClickClose = (value: any) => {
    const tempArr = [];
    tempArr.push(...value);
    setOpen(!open);
    setSelectedValue(tempArr);
  };

  const ChangeTime = (timestamp: any) => {
    let result: any = "0";
    if (timestamp) {
      result = new Date(
        timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000
      ).toLocaleDateString();
    }

    return result;
  };

  // selectedValue[numselectedValue]

  // <>

  /* {selectedValue.length > numselectedValue ? ( */

  /* <Box display="flex">
        <Aftercreatingnew />
      </Box> */

  /* // ) : ( */

  /* )}
    </> */

  return (
    <>
      <SimpleDialog
        valuesAvail={selectedValue}
        open={open}
        onClose={handleClickClose}
      />
      <Box
        sx={{
          display: "flex",
        }}
        gap={3}
      >
        <Card
          sx={{
            width: 345,
            minHeight: "10vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button onClick={handleClickOpen}>
            <svg
              width="91"
              height="91"
              viewBox="0 0 91 91"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="91" height="91" fill="white" />
              <path
                d="M15.1665 45.5H75.8332M45.4998 15.1667V75.8333"
                stroke="#2F4ED7"
                strokeWidth="7.58333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
          <Typography>New Form</Typography>
        </Card>
        {feedBackDatas.map((e, i: number) => (
          <Card
            key={i}
            sx={{
              width: 345,
              minHeight: "10vw",
              display: "flex",
            }}
          >
            <Box width="100%">
              <Box
                display="flex"
                justifyContent="center"
                style={{ backgroundColor: "#F5D563" }}
                padding="10px 10px"
              >
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_2_3269)">
                    <path
                      d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z"
                      fill="#F7F7F7"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M47.9312 25.8305C47.9768 25.2263 48 24.6158 48 24C48 23.6093 47.9907 23.2208 47.9722 22.8345L34.7619 12.0952L13.0476 38.8571L26.0019 47.9177C35.8116 47.1076 43.9482 40.3979 46.8552 31.345L46.8571 31.3333L47.2381 30L47.6158 28.3C47.6181 28.2876 47.6204 28.275 47.6227 28.2627L47.8025 27.0931C47.8065 27.0627 47.8103 27.032 47.8141 27.0013L47.9312 25.8305Z"
                      fill="black"
                      fillOpacity="0.1"
                    />
                    <path
                      d="M34.8572 12H12.9524V38.8571H34.8572V12Z"
                      fill="#54698E"
                    />
                    <path
                      d="M33.1429 13.7143H14.6667V37.1429H33.1429V13.7143Z"
                      fill="#F0F0FB"
                    />
                    <path
                      d="M24 10.2857H19.8096V13.7143H24V10.2857Z"
                      fill="#28B3E6"
                    />
                    <path
                      d="M28.1905 10.2857H24V13.7143H28.1905V10.2857Z"
                      fill="#0090FA"
                    />
                    <path
                      d="M21.3332 16.9524H16.3809V21.9048H21.3332V16.9524Z"
                      fill="#28B3E6"
                    />
                    <path
                      d="M21.3332 25.3333H16.3809V30.2857H21.3332V25.3333Z"
                      fill="#28B3E6"
                    />
                    <path
                      d="M19.6191 18.6667H17.9048V20.3809H19.6191V18.6667Z"
                      fill="#F0F0FB"
                    />
                    <path
                      d="M19.6191 27.0476H17.9048V28.7619H19.6191V27.0476Z"
                      fill="#F0F0FB"
                    />
                    <path
                      d="M21.3334 33.9048H17.9048V36.381H21.3334V33.9048Z"
                      fill="#D2D4F9"
                    />
                    <path
                      d="M21.3334 36.381H17.9048V38.8571H21.3334V36.381Z"
                      fill="#989BC8"
                    />
                    <path
                      d="M24.7618 33.9048H21.3333V36.381H24.7618V33.9048Z"
                      fill="#54698E"
                    />
                    <path
                      d="M24.7618 36.381H21.3333V38.8571H24.7618V36.381Z"
                      fill="#3C4F7E"
                    />
                    <path
                      d="M36.5715 33.9048H24.762V36.381H36.5715V33.9048Z"
                      fill="#FF5620"
                    />
                    <path
                      d="M36.5715 36.381H24.762V38.8571H36.5715V36.381Z"
                      fill="#F92E0B"
                    />
                    <path
                      d="M36.5715 34.0952L41.3334 36.381H36.5715V34.0952Z"
                      fill="#FFC6B8"
                    />
                    <path
                      d="M36.5715 38.6667L41.3334 36.381H36.5715V38.6667Z"
                      fill="#FFAF93"
                    />
                    <path
                      d="M33.1429 13.7143H24V33.9048H33.1429V13.7143Z"
                      fill="#E8E8E8"
                    />
                    <path
                      d="M28.1904 12H34.8571V33.9048H33.619H33.1428V13.7143H28.1904V12Z"
                      fill="#3C4F7E"
                    />
                    <path
                      d="M31.4286 16.9524H23.0476V18.6667H31.4286V16.9524Z"
                      fill="#989BC8"
                    />
                    <path
                      d="M31.4286 25.3333H23.0476V27.0476H31.4286V25.3333Z"
                      fill="#989BC8"
                    />
                    <path
                      d="M31.4286 20.1905H23.0476V21.9048H31.4286V20.1905Z"
                      fill="#989BC8"
                    />
                    <path
                      d="M31.4286 28.5714H23.0476V30.2857H31.4286V28.5714Z"
                      fill="#989BC8"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2_3269">
                      <rect width="48" height="48" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Box>
              <Box padding={2}>
                <CardHeader title={e.Name} />
                <Box padding={2}>
                  <Box display="flex" justifyContent="space-between">
                    <Typography variant="caption" color="GrayText">
                      Submited
                    </Typography>
                    <Typography>{e.Submitted}</Typography>
                  </Box>
                  <Box display="flex" justifyContent="space-between">
                    <Typography variant="caption" color="GrayText">
                      Viewed
                    </Typography>
                    <Typography>{e.Viewed}</Typography>
                  </Box>
                  <Box display="flex" justifyContent="space-between">
                    <Typography variant="caption" color="GrayText">
                      Date Of Published
                    </Typography>
                    <Typography>{ChangeTime(e?.DatePublished)}</Typography>
                  </Box>
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  gap={2}
                >
                  <Button variant="contained" color="secondary" size="large">
                    View Submission
                  </Button>
                  <Box display="flex" justifyContent="center" gap={2}>
                    <Button variant="contained" color="success">
                      Edit
                    </Button>
                    <Button variant="contained" color="primary">
                      Delete
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Card>
        ))}
      </Box>
    </>
  );
}

export default Landing;
