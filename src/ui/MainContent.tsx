import Box from "@mui/joy/Box";

import Typography from "@mui/joy/Typography";
import { ReactNode } from "react";

interface MainContentProps {
  children?: ReactNode;
  title?: string;
}

const MainContent = (props: MainContentProps) => {
  return (
    <Box
      component="main"
      className="MainContent"
      sx={{
        px: { xs: 2, md: 6 },
        pt: {
          xs: "calc(12px + var(--Header-height))",
          sm: "calc(12px + var(--Header-height))",
          md: 3,
        },
        pb: { xs: 2, sm: 2, md: 3 },
        flex: 1,
        display: "flex",
        flexDirection: "column",
        minWidth: 0,
        gap: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          mb: 1,
          gap: 1,
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "start", sm: "center" },
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <Typography level="h2" component="h1">
          {props.title}
        </Typography>
      </Box>
      {props.children}
    </Box>
  );
};
export default MainContent;
