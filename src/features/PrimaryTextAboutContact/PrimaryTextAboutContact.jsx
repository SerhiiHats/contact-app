import {Box, Typography} from "@mui/material";


const PrimaryTextAboutContact = ({
                                   firstName = "",
                                   lastName = "",
                                   email = "",
                                 }) => {

  return (
    <Box>
      <Typography>
        {`${firstName} ${lastName}`}
      </Typography>
      <Typography>
        {email}
      </Typography>
    </Box>
  );
};

export default PrimaryTextAboutContact;