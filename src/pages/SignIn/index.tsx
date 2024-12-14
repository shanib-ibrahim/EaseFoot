import { Box, Grid, Typography } from "@mui/material";
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
        </Grid>
        <Grid item xs={6}>
          <img src="/assets/signin/signin-side.png" alt="" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SignIn;
