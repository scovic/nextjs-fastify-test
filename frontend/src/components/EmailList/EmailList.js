import { Box } from '@mui/material';
import SearchBox from './SearchBox';

export default function EmailList({ emails, onSelectEmail, searchTerm, onSearchChange }) {
  return (
    <Box sx={{ width: 300, borderRight: 1, borderColor: 'divider', display: 'flex', flexDirection: 'column' }}>
      <SearchBox searchTerm={searchTerm} onSearchChange={onSearchChange} />
      
      <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>
        {emails.map((email) => (
          <Box
            key={email.id}
            sx={{
              p: 2,
              borderBottom: 1,
              borderColor: 'divider',
              cursor: 'pointer',
              '&:hover': { bgcolor: 'action.hover' },
            }}
            onClick={() => onSelectEmail(email)}
          >
            <Box sx={{ fontWeight: 'bold' }}>{email.subject}</Box>
            <Box sx={{ color: 'text.secondary' }}>To: {email.to}</Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}