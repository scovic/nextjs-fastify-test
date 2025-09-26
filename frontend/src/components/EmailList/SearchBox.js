import { Box, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBox({ searchTerm, onSearchChange }) {
  return (
    <Box sx={{ p: 1, bgcolor: '#fff', borderBottom: 1, borderColor: 'divider' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          bgcolor: '#f0f0f0',
          borderRadius: 1,
          p: '2px 8px',
          width: 'auto',
        }}
      >
        <SearchIcon sx={{ color: 'text.secondary', mr: 1 }} />
        <TextField
          placeholder="Search emails..."
          variant="standard"
          fullWidth
          onChange={(e) => onSearchChange(e.target.value)}
          value={searchTerm}
          InputProps={{
            disableUnderline: true,
            style: { fontSize: '14px' }
          }}
        />
      </Box>
    </Box>
  );
}