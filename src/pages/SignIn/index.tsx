import { Box, FormControl, Stack, TextField, Typography } from "@mui/material";
import styles from "./styles.module.css";
import { siginLayout } from "../../images";

const SignIn = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
        <Box
          className={styles.leftContainer}
          sx={{ width: { xs: "100%", sm: "50%" } }}
        >
          <Typography
            className={styles.mainHead}
            variant="h1"
            sx={{ fontSize: "34px" }}
          >
            Welcome back
          </Typography>
          <Typography className={styles.subHead} variant="body1" component="p">
            Welcome back! Please enter your details.
          </Typography>
          <Box>
            <FormControl fullWidth variant="outlined">
              <Typography variant="body1" component="span">
                Email
              </Typography>
              <TextField
                id="email-input"
                value=""
                placeholder="Enter Your Email"
                variant="outlined"
                fullWidth
                type="email"
                sx={{
                  marginBottom: 2,
                  paddingTop: "18px",
                  "& .MuiOutlinedInput-root": {
                    paddingTop: 0,
                  },
                }}
              />
              <Typography variant="body1" component="span">
                Password
              </Typography>
              <TextField
                id="password"
                value=""
                placeholder="Enter Your Password"
                variant="outlined"
                fullWidth
                type="password"
                sx={{
                  marginBottom: 2,
                  paddingTop: "18px",
                  "& .MuiOutlinedInput-root": {
                    paddingTop: 0,
                  },
                }}
              />
            </FormControl>
          </Box>
        </Box>
        <Box sx={{ width: { xs: "100%", sm: "50%" } }}>
          <img
            src={siginLayout}
            alt="A gym builder lifting weights"
            style={{ width: "100%" }}
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default SignIn;
