import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import RequiterList from "./RequiterPage/RequiterInnerList";
import RequiterDetails from "./RequiterPage/RequiterDetails";

const RequiterListPage = () => {
  const [selectedRequiter, setSelectedRequiter] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box p={isMobile ? 1 : 3}>
      <Grid container spacing={3}>
        <Grid
          size={{
            xs: 12,
            md: selectedRequiter && !isMobile ? 5 : 12,
          }}
        >
          <Paper elevation={3} sx={{ borderRadius: 4, overflow: "hidden" }}>
            <RequiterList onSelect={setSelectedRequiter} />
          </Paper>
        </Grid>

        {selectedRequiter && (
          <Grid size={{xs:12, md:7}}>
            <Paper
              elevation={3}
              sx={{
                borderRadius: 4,
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <RequiterDetails
                requiter={selectedRequiter}
                onClose={() => isMobile && setSelectedRequiter(null)}
              />
            </Paper>
          </Grid>
        )}

        {!selectedRequiter && !isMobile && (
          <Grid size={{xs:12, md:7}}>
            <Paper
              elevation={3}
              sx={{
                borderRadius: 4,
                height: "calc(100vh - 180px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background:
                  theme.palette.mode === "light"
                    ? "linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%)"
                    : "linear-gradient(135deg, #2a3a4a 0%, #1a2733 100%)",
              }}
            >
              <Box textAlign="center" p={4}>
                <img
                  src="/static/images/illustrations/select-recruiter.svg"
                  alt="Select recruiter"
                  style={{ width: "60%", maxWidth: 300, opacity: 0.7 }}
                />
                <Typography
                  variant="h6"
                  color="text.secondary"
                  sx={{ mt: 3, fontWeight: 500 }}
                >
                  Select a recruiter to view details
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 1 }}
                >
                  Click on any recruiter from the list to see their full profile
                  and information
                </Typography>
              </Box>
            </Paper>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default RequiterListPage;
