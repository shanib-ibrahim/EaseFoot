import {
  Box,
  Card,
  Button,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";

const SignIn = () => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ color: "text.primary", fontSize: 24 }}>
          SignIn
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Typography sx={{ color: "text.primary", fontSize: 20 }}>
            Username
          </Typography>
          <TextField
            id="standard-basic"
            placeholder="Type your Username"
            variant="standard"
          />
          <Typography sx={{ color: "text.primary", fontSize: 20 }}>
            Password
          </Typography>
          <TextField
            id="standard-basic"
            placeholder="Type your Password"
            variant="standard"
          />
          <Button>Login</Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default SignIn;
