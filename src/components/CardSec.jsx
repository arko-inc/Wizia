import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/system";

// Styled Card for hover effect
const HoverCard = styled(Card)(() => ({
  backgroundColor: "#002228", // Card color
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
  },
  padding: "16px", // Add padding to the card
}));

const CardSec = () => {
  return (
    <div className="w-full px-4 py-8 bg-[#002228]">
      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="center"
        className="max-w-6xl mx-auto"
      >
        {/* Card 1 */}
        <Grid item xs={12} sm={6} md={4}>
          <HoverCard>
            <div className="flex flex-col items-start">
              {/* Image */}
              <img
                src="src/assets/wand.png" // Replace with actual image path
                alt="Image 1"
                className="w-[50px] h-auto mb-2"
              />
              {/* Text Content */}
              <CardContent className="p-0">
                <Typography
                  variant="h6"
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: 600,
                    fontSize: "28px",
                    color: "white",
                  }}
                >
                  You’re in Control
                </Typography>
                <Typography
                  variant="body2"
                  style={{
                    fontFamily: "Work Sans",
                    fontWeight: 300,
                    fontSize: "22px",
                    color: "white",
                    marginTop: "8px",
                  }}
                >
                  aiDRs operate based on your rules. You guide the machine, the
                  aiDRs execute the work.
                </Typography>
              </CardContent>
            </div>
          </HoverCard>
        </Grid>

        {/* Card 2 */}
        <Grid item xs={12} sm={6} md={4}>
          <HoverCard>
            <div className="flex flex-col items-start">
              {/* Image */}
              <img
                src="src/assets/graph.png" // Replace with actual image path
                alt="Image 2"
                className="w-[50px] h-auto mb-2"
              />
              {/* Text Content */}
              <CardContent className="p-0">
                <Typography
                  variant="h6"
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: 600,
                    fontSize: "28px",
                    color: "white",
                  }}
                >
                  Infinitely Scalable
                </Typography>
                <Typography
                  variant="body2"
                  style={{
                    fontFamily: "Work Sans",
                    fontWeight: 300,
                    fontSize: "22px",
                    color: "white",
                    marginTop: "8px",
                  }}
                >
                  Train an aiDR on a patch. When you are happy with the results,
                  scale it effortlessly.
                </Typography>
              </CardContent>
            </div>
          </HoverCard>
        </Grid>

        {/* Card 3 */}
        <Grid item xs={12} sm={6} md={4}>
          <HoverCard>
            <div className="flex flex-col items-start">
              {/* Image */}
              <img
                src="src/assets/arrow.png" // Replace with actual image path
                alt="Image 3"
                className="w-[50px] h-auto mb-2"
              />
              {/* Text Content */}
              <CardContent className="p-0">
                <Typography
                  variant="h6"
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: 600,
                    fontSize: "28px",
                    color: "white",
                  }}
                >
                  Incredibly Flexible
                </Typography>
                <Typography
                  variant="body2"
                  style={{
                    fontFamily: "Work Sans",
                    fontWeight: 300,
                    fontSize: "22px",
                    color: "white",
                    marginTop: "8px",
                  }}
                >
                  Train an aiDR on an outbound patch, to nurture inbound leads,
                  or to reach out to your long tail of SMB customers at renewal
                  time.
                </Typography>
              </CardContent>
            </div>
          </HoverCard>
        </Grid>
      </Grid>
    </div>
  );
};

export default CardSec;
