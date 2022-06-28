import { Button, Typography } from "@mui/material";
import "./aboutUs.scss";

const AboutUs = () => {
  return (
    <div className="aboutWidget">
      <div className="left">
        <Typography className="title" variant="h4">
          Reactron Technologies
        </Typography>
        <Button variant="contained">Explore</Button>
      </div>
      <div className="right">
        <img
          src="https://images.unsplash.com/photo-1560762484-813fc97650a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2874&q=80"
          alt="keyboard"
        />
      </div>
    </div>
  );
};

export default AboutUs;
