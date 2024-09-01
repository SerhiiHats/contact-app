import {Box, CircularProgress} from "@mui/material";


const CircularIndeterminate = () => {
  return (
    <Box sx={{display: 'flex', justifyContent: "center"}}>
      <CircularProgress color="success"/>
    </Box>
  );
};

export default CircularIndeterminate;