import { Box, FormControl, Grid, TextField, Typography } from "@mui/material";
import styles from "./styles.module.css";

const SignIn = () => {
  return (
    <Box sx={{ flexGrow: 1, border: "1px solid red" }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography className={styles.mainHead} variant="h1">
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
                placeholder="Enter You Email"
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
            </FormControl>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <img
            src="../assets/signin/signin-side.png"
            alt="A gym builder lifting weights"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SignIn;
