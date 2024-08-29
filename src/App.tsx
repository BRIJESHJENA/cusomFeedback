import { Box } from "@mui/material";
import Landing from "./components/landing/index.tsx";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";

import { Routes, Route } from "react-router-dom";
import Aftercreatingnew from "./components/aftercreatingnew/index.tsx";
import { JSXElementConstructor, Key, ReactElement } from "react";

const routes = [
  {
    name: "landing",
    key: "landing",
    route: "/",
    component: <Landing />,
    noCollapse: true,
  },
  {
    name: "creating_feed",
    key: "creating",
    route: "/creating",
    component: <Aftercreatingnew />,
    noCollapse: true,
  },
];
function App() {
  const getRoutes = (allRoutes: any[]): any =>
    allRoutes.map(
      (route: {
        collapse: any;
        route: string;
        role: string;
        component: ReactElement<any, string | JSXElementConstructor<any>>;
        key: Key;
      }): object => {
        // if (route.collapse) {
        // return getRoutes(route.collapse);
        // }
        if (route.route) {
          // if (route.route === "/" || route.route === "/chat") {
          //   return (
          //     <>
          //       <Route
          //         path={route.route}
          //         element={route.component}
          //         key={route.key}
          //       />
          //       <Route
          //         path={route.route + "/tauth"}
          //         element={route.component}
          //         key={route.key}
          //       />
          //     </>
          //   );
          // }
          return (
            <Route
              path={route.route}
              element={route.component}
              key={route.key}
            />
          );
        }

        return null;
      }
    );

  return (
    <Card sx={{ width: "100vw", minHeight: "100vh" }}>
      <CardHeader title="User Feedback" />
      <Box display="flex" justifyContent="center" alignItems="center">
        <Routes>
          <Route path="/" element={<Landing />} />
          {getRoutes(routes)}
        </Routes>
        {/* <Landing /> */}
      </Box>
    </Card>
  );
}

export default App;
