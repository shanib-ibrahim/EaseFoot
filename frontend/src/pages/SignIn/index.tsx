import { Box, Button, TextField, Typography, styled } from "@mui/material";
import styles from "./styles.module.css";
import { siginLayout } from "../../images";

// Styled components
const ContainerBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  fontFamily: "Bree Serif, serif",
}));

const InnerBox = styled(Box)(() => ({
  display: "flex",
  margin: "auto",
  height: "80%",
  width: "60%",
  background: "#F8F8F8",
}));

const FormBox = styled(Box)(() => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  gap: 2,
  padding: "2rem",
}));

const InputField = styled(TextField)(() => ({
  borderRadius: "12px",
  marginTop: 0,
}));

const SignIn = () => {
  return (
    <ContainerBox>
      <InnerBox>
        {/* Form Section */}
        <FormBox>
          <Box sx={{ textAlign: "center" }}>
            <Typography className={styles.mainHead} sx={{ fontSize: "34px" }}>
              Welcome Back
            </Typography>
            <Typography className={styles.subHead}>
              Welcome back! Please enter your details.
            </Typography>
          </Box>

          {/* Email Input */}
          <Box>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontSize: "14px", fontWeight: "bold" }}
            >
              Email
            </Typography>
            <InputField
              type="email"
              variant="outlined"
              placeholder="Enter your email"
              fullWidth
              required
              margin="normal"
            />
          </Box>

          {/* Password Input */}
          <Box>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontSize: "14px", fontWeight: "bold" }}
            >
              Password
            </Typography>
            <InputField
              type="password"
              variant="outlined"
              placeholder="Enter your password"
              fullWidth
              required
              margin="normal"
            />
          </Box>

          {/* Sign-in Button */}
          <Button variant="contained" fullWidth sx={{ marginTop: 2 }}>
            Sign in
          </Button>
        </FormBox>

        {/* Image Section */}
        <Box sx={{ flex: 1 }}>
          <img
            src={siginLayout}
            alt="A gym builder lifting weights"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
      </InnerBox>
    </ContainerBox>
  );
};

export default SignIn;
