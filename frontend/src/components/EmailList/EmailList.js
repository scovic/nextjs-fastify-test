import { Box, Typography } from '@mui/material';
import SearchBox from './SearchBox';
import { truncateText } from '@/utils/string';

export default function EmailList({ emails, onSelectEmail, searchTerm, onSearchChange, selectedEmail }) {
  return (
    <Box 
      sx={{ 
        width: 300, 
        borderRight: 1, 
        borderColor: 'divider', 
        display: 'flex', 
        flexDirection: 'column',
        bgcolor: '#f5f5f7', // Light gray background like Apple Mail
      }}
    >
      <SearchBox searchTerm={searchTerm} onSearchChange={onSearchChange} />
      
      <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>
        {emails.map((email) => (
          <Box
            key={email.id}
            onClick={() => onSelectEmail(email)}
            sx={{
              px: 2,
              py: 1.5,
              borderBottom: 1,
              borderColor: 'divider',
              cursor: 'pointer',
              bgcolor: selectedEmail?.id === email.id ? '#0b84ff14' : 'transparent',
              '&:hover': {
                bgcolor: selectedEmail?.id === email.id ? '#0b84ff21' : '#f0f0f0',
              },
              transition: 'background-color 0.1s ease',
            }}
          >
            <Typography
              sx={{
                fontSize: '14px',
                fontWeight: 'medium',
                color: 'text.primary',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                mb: 0.5,
              }}
            >
              {email.to}
            </Typography>

            <Typography
              sx={{
                fontSize: '14px',
                fontWeight: 'medium',
                color: 'text.primary',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                mb: 0.5,
              }}
            >
              {email.subject}
            </Typography>

            <Typography
              sx={{
                fontSize: '13px',
                color: 'text.secondary',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {truncateText(email.body)}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}