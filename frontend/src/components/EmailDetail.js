import { Box, Typography, Divider } from '@mui/material';

export default function EmailDetail({ email }) {
  if (!email) {
    return (
      <Box sx={{ p: 3, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <Typography variant="h6" color="text.secondary">
          Select an email to view
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6">{email.subject}</Typography>
      <Divider sx={{ my: 2 }} />
      
      <Box sx={{ mb: 2 }}>
        <Typography component="span" sx={{ fontWeight: 'bold' }}>To: </Typography>
        <Typography component="span">{email.to}</Typography>
      </Box>
      
      {email.cc && (
        <Box sx={{ mb: 2 }}>
          <Typography component="span" sx={{ fontWeight: 'bold' }}>CC: </Typography>
          <Typography component="span">{email.cc}</Typography>
        </Box>
      )}
      
      {email.bcc && (
        <Box sx={{ mb: 2 }}>
          <Typography component="span" sx={{ fontWeight: 'bold' }}>BCC: </Typography>
          <Typography component="span">{email.bcc}</Typography>
        </Box>
      )}
      
      <Divider sx={{ my: 2 }} />
      
      <Typography sx={{ whiteSpace: 'pre-wrap' }}>{email.body}</Typography>
    </Box>
  );
}