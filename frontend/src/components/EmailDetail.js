import { Box, Typography, Divider } from '@mui/material';

export default function EmailDetail({ email }) {
  if (!email) {
    return (
      <Box sx={{ flexGrow: 1, height: '100vh' }}>
        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '100%',
            width: '100%'
          }}
        >
          <Typography 
            variant="h6" 
            color="text.secondary"
            sx={{ 
              userSelect: 'none'
            }}
          >
            Select an email to view
          </Typography>
        </Box>
      </Box>
    );
  }

  return (
    <Box sx={{ flexGrow: 1, height: '100vh' }}>
      <Box sx={{ p: 1, maxWidth: '800px' }}>
        <Typography sx={{ fontWeight: 'bold' }} variant="h6">{email.subject}</Typography>
      </Box>
      <Divider sx={{ mb: 1 }} />
      
      <Box sx={{ px: 1 }}>
        <Typography component="span" sx={{ fontSize: '0.8rem', color: '#86868b' }}>to: </Typography>
        <Typography component="span" sx={{ fontSize: '0.8rem' }}>{email.to}</Typography>
      </Box>
      
      {email.cc && (
        <Box sx={{ px: 1 }}>
          <Typography component="span" sx={{ fontSize: '0.8rem', color: '#86868b' }}>cc: </Typography> 
          <Typography component="span" sx={{ fontSize: '0.8rem' }}>{email.cc}</Typography>
        </Box>
      )}
      
      {email.bcc && (
        <Box sx={{ px: 1 }}>
          <Typography component="span" sx={{ fontSize: '0.8rem', color: '#86868b' }}>bcc: </Typography>
          <Typography component="span" sx={{ fontSize: '0.8rem' }}>{email.bcc}</Typography>
        </Box>
      )}
      
      <Divider sx={{ my: 1 }} />
      
      <Typography 
        sx={{ 
          p: 1, 
          whiteSpace: 'pre-wrap',
          fontSize: '0.9rem',
          color: '#1d1d1f',
          lineHeight: 1.5,
          letterSpacing: '0.01em'
        }}
      >
        {email.body}
      </Typography>
    </Box>
  );
}