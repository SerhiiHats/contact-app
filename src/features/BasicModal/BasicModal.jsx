import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CircularIndeterminate from "../CircularIndeterminate/CircularIndeterminate.jsx";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "fit-content",
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  outline: 0,
};


const BasicModal = ({
                      open,
                      children
                    },
) => {

  return (
    <div>
      <Modal open={open}>
        <Box sx={style}>
          {
            children
              ? (children)
              : (< CircularIndeterminate/>)
          }
        </Box>
      </Modal>
    </div>
  );
}

export default BasicModal;