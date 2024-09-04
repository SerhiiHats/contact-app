import {Button, Chip, Stack} from "@mui/material";


const TagsContact = ({
                       tags = []
                     }) => {

  return (
    <Stack direction="row" gap={1} sx={{mt: 2, mb: 1, pr:2, flexWrap: "wrap"}}>
      {tags.map((tag) => (
        <Chip key={tag.id} label={tag.tag} size="small" color="secondary" sx={{textTransform: "capitalize", borderRadius: "4px"}}/>
      ))}
    </Stack>
  );
};

export default TagsContact;