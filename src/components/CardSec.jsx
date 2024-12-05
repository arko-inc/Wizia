import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/system";
import wandImage from "../assets/wand.png"; // Adjust the path if necessary
import graphImage from "../assets/graph.png";
import arrowImage from "../assets/arrow.png";

// Styled Card for hover effect
const HoverCard = styled(Card)(() => ({
  backgroundColor: "#002228",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
  },
  padding: "16px",
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
        <Grid item xs={12} sm={6} md={4} key="card-1">
          <HoverCard>
            <div className="flex flex-col items-start">
              <img
                src={wandImage} // Imported image
                alt="Image 1"
                className="w-[50px] h-auto mb-2"
              />
              <CardContent className="p-0">
                <Typography variant="h6" className="font-montserrat font-semibold text-white text-2xl">
                  You’re in Control
                </Typography>
                <Typography variant="body2" className="font-work-sans font-light text-white text-xl mt-2">
                  aiDRs operate based on your rules. You guide the machine, the aiDRs execute the work.
                </Typography>
              </CardContent>
            </div>
          </HoverCard>
        </Grid>

        {/* Card 2 */}
        <Grid item xs={12} sm={6} md={4} key="card-2">
          <HoverCard>
            <div className="flex flex-col items-start">
              <img
                src={graphImage} // Imported image
                alt="Image 2"
                className="w-[50px] h-auto mb-2"
              />
              <CardContent className="p-0">
                <Typography variant="h6" className="font-montserrat font-semibold text-white text-2xl">
                  Infinitely Scalable
                </Typography>
                <Typography variant="body2" className="font-work-sans font-light text-white text-xl mt-2">
                  Train an aiDR on a patch. When you are happy with the results, scale it effortlessly.
                </Typography>
              </CardContent>
            </div>
          </HoverCard>
        </Grid>

        {/* Card 3 */}
        <Grid item xs={12} sm={6} md={4} key="card-3">
          <HoverCard>
            <div className="flex flex-col items-start">
              <img
                src={arrowImage} // Imported image
                alt="Image 3"
                className="w-[50px] h-auto mb-2"
              />
              <CardContent className="p-0">
                <Typography variant="h6" className="font-montserrat font-semibold text-white text-2xl">
                  Incredibly Flexible
                </Typography>
                <Typography variant="body2" className="font-work-sans font-light text-white text-xl mt-2">
                  Train an aiDR on an outbound patch, to nurture inbound leads, or to reach out to your long tail of SMB customers at renewal time.
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
