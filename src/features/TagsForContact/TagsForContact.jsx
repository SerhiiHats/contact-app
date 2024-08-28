import {Button, Stack} from "@mui/material";


const TagsForContact = ({
                          tags = []
                        }) => {

  return (
    <Stack direction="row" spacing={1} sx={{mt: 2, mb: 1, border: '1px dashed grey'}}>
      {tags.map((tag) => (
        <Button
          key={tag.id}
          size="small"
          color="secondary"
          variant="contained"
          sx={{textTransform: "capitalize", pt: "1px", pb: 0, pl: "7px", pr: "7px"}}
        >
          {tag.tag}
        </Button>
      ))}
    </Stack>
  );
};

export default TagsForContact;