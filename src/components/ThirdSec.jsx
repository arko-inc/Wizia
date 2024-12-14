import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import { styled } from "@mui/system";

// Styled Box for the root container
const Root = styled(Box)(({ theme }) => ({
  backgroundImage: "url('https://i.imghippo.com/files/UbS9940EQ.png')", // Update with your background image
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh", // Ensures the section takes full viewport height
  color: "white",
  textAlign: "center",
  padding: theme.spacing(4),
  [theme.breakpoints.down("sm")]: {
    alignItems: "flex-start", // Align items to the left on small screens
    textAlign: "left", // Align text to the left on small screens
  },
}));

// Styled Grid for the inner grid layout
const GridContainer = styled(Grid)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: theme.spacing(2), // Reduced gap between grid items
  width: "100%",
  maxWidth: "900px", // Reduced max-width for closer cells
  marginTop: theme.spacing(4),
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr", // Stacks the grid items for smaller screens
    justifyContent: "flex-start", // Align grid items to the left on small screens
  },
}));

// Hover effect for the grid items
const HoverEffect = styled(Box)(({ theme }) => ({
  "&:hover": {
    transform: "scale(1.05)",
    transition: "transform 0.3s ease-in-out",
  },
}));

const Thirdsec = () => {
  return (
    <Root>
      {/* Header Section */}
      <Typography
        variant="h2"
        style={{ 
          fontFamily: "Montserrat", 
          fontWeight: "600", // semibold
          fontSize: "40px", 
          color: "white"
        }}
      >
        Train your aiDR on your...
      </Typography>
      <Typography
        variant="h2"
        style={{
          fontFamily: "Montserrat",
          fontStyle: "italic",
          fontWeight: "500", // medium
          fontSize: "40px",
          color: "#0FF1F6"
        }}
      >
        preferred email st|
      </Typography>
      <Typography
        variant="h4"
        style={{
          fontFamily: "Work Sans",
          fontWeight: "300", // light
          fontSize: "24px",
          color: "white",
          marginTop: "16px"
        }}
      >
        You’re in control. Train your aiDR on
      </Typography>
      <Typography
        variant="h4"
        style={{
          fontFamily: "Work Sans",
          fontWeight: "300", // light
          fontSize: "24px",
          color: "white"
        }}
      >
        elements of your Marketing strategy.
      </Typography>

      {/* 2x2 Grid Layout */}
      <GridContainer container>
        <Grid item>
          <HoverEffect>
            <Box className="flex items-center justify-center sm:justify-start">
              <img
                src="https://i.imghippo.com/files/FnHy2216hI.png"
                alt="Quick to ramp"
                className="w-4 h-4 mr-4" // Adjusts the icon size and margin-right for spacing
              />
              <Typography
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "500", // medium
                  fontSize: "20px",
                  color: "#14BCB2",
                }}
              >
                Quick to ramp
              </Typography>
            </Box>
          </HoverEffect>
        </Grid>

        <Grid item>
          <HoverEffect>
            <Box className="flex items-center justify-center sm:justify-start">
              <img
                src="https://i.imghippo.com/files/FnHy2216hI.png"
                alt="Easy to optimize"
                className="w-4 h-4 mr-4" // Adjusts the icon size and margin-right for spacing
              />
              <Typography
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "500", // medium
                  fontSize: "20px",
                  color: "#14BCB2",
                }}
              >
                Easy to optimize
              </Typography>
            </Box>
          </HoverEffect>
        </Grid>

        <Grid item>
          <HoverEffect>
            <Box className="flex items-center justify-center sm:justify-start">
              <img
                src="https://i.imghippo.com/files/FnHy2216hI.png"
                alt="Quick to scale up"
                className="w-4 h-4 mr-4" // Adjusts the icon size and margin-right for spacing
              />
              <Typography
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "500", // medium
                  fontSize: "20px",
                  color: "#14BCB2",
                }}
              >
                Quick to scale up
              </Typography>
            </Box>
          </HoverEffect>
        </Grid>

        <Grid item>
          <HoverEffect>
            <Box className="flex items-center justify-center sm:justify-start">
              <img
                src="https://i.imghippo.com/files/FnHy2216hI.png"
                alt="Works with all your existing tools"
                className="w-4 h-4 mr-4" // Adjusts the icon size and margin-right for spacing
              />
              <Typography
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "500", // medium
                  fontSize: "20px",
                  color: "#14BCB2",
                }}
              >
                Works with all your existing tools
              </Typography>
            </Box>
          </HoverEffect>
        </Grid>
      </GridContainer>
    </Root>
  );
};

export default Thirdsec;
