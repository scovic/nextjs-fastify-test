import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export default function ComposeEmailButton({ onClick }) {
  return (  
    <Fab
      color="primary"
      aria-label="compose-new-email"
      sx={{ position: 'absolute', bottom: 16, right: 16 }}
      onClick={onClick}
    >
      <AddIcon />
    </Fab>
  );
}