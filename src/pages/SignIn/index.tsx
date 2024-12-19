import { Box, Typography, styled } from "@mui/material";
import styles from "./styles.module.css";
import { siginLayout } from "../../images";

// Create a styled component for the container box
const ContainerBoxStyle = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  border: "1px solid red",
}));

const InnerBox = styled(Box)(({ theme }) => ({
  display: "flex",
  margin: "auto",
  border: "1px solid blue",
}));

const SignIn = () => {
  return (
    <ContainerBoxStyle>
      <InnerBox>
        <Box sx={{ flex: 1, border: "1px solid red", padding: 2 }}>
          <Typography>Left Information</Typography>
        </Box>
        <Box sx={{ flex: 1, border: "1px solid red" }}>
          <img src={siginLayout} alt="A gym builder lifting weights" />
        </Box>
      </InnerBox>
    </ContainerBoxStyle>
  );
};

export default SignIn;
