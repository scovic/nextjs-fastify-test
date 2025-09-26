import { TextField } from '@mui/material';

export default function SearchBox({ searchTerm, onSearchChange }) {
  return (
    <TextField
      placeholder="Search emails..."
      variant="outlined"
      size="small"
      fullWidth
      sx={{ m: 1 }}
      onChange={(e) => onSearchChange(e.target.value)}
      value={searchTerm}
    />
  );
}