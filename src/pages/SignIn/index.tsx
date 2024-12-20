import { Box, TextField, Typography, styled } from "@mui/material";
import styles from "./styles.module.css";
import { siginLayout } from "../../images";

// Create a styled component for the container box
const ContainerBoxStyle = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  border: "1px solid red",
  fontFamily: "Bree Serif, serif",
}));

const InnerBox = styled(Box)(() => ({
  display: "flex",
  margin: "auto",
  border: "1px solid blue",
}));

const SignIn = () => {
  return (
    <ContainerBoxStyle>
      <InnerBox>
        <Box sx={{ flex: 1, border: "1px solid red", padding: 2 }}>
          <Box
            sx={{
              textAlign: "center",
            }}
          >
            <Typography className={styles.mainHead} sx={{ fontSize: "34px" }}>
              Welcome Back
            </Typography>
            <Typography className={styles.subHead}>
              Welcome back! Please enter your details.
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              Email
            </Typography>
            <TextField
              type="email"
              variant="outlined"
              placeholder="Enter your email"
              fullWidth
              required
              margin="normal"
              sx={{
                borderRadius: "12px",
                marginTop: 0,
              }}
            />
          </Box>
          <Box>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              Password
            </Typography>
            <TextField
              type="password"
              variant="outlined"
              placeholder="Enter your password"
              fullWidth
              required
              margin="normal"
              sx={{
                borderRadius: "12px",
                marginTop: 0,
              }}
            />
          </Box>
        </Box>
        <Box sx={{ flex: 1, border: "1px solid red" }}>
          <img src={siginLayout} alt="A gym builder lifting weights" />
        </Box>
      </InnerBox>
    </ContainerBoxStyle>
  );
};

export default SignIn;
