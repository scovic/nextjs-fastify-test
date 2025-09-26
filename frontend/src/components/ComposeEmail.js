import { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
} from '@mui/material';
import { createEmail } from '@/services/emails';

export default function ComposeEmail({ open, onClose, onEmailSent }) {
  const [email, setEmail] = useState({
    to: '',
    cc: '',
    bcc: '',
    subject: '',
    body: '',
  });

  const handleChange = (field) => (event) => {
    setEmail({ ...email, [field]: event.target.value });
  };

  const handleSubmit = async () => {
    try {
      const createdEmail = await createEmail(email);
      console.log('Email sent:', createdEmail);
      onEmailSent(createdEmail);
      onClose();
      setEmail({ to: '', cc: '', bcc: '', subject: '', body: '' });
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>Compose Email</DialogTitle>
      <DialogContent>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
          <TextField
            label="To"
            fullWidth
            value={email.to}
            onChange={handleChange('to')}
            required
          />
          <TextField
            label="CC"
            fullWidth
            value={email.cc}
            onChange={handleChange('cc')}
          />
          <TextField
            label="BCC"
            fullWidth
            value={email.bcc}
            onChange={handleChange('bcc')}
          />
          <TextField
            label="Subject"
            fullWidth
            value={email.subject}
            onChange={handleChange('subject')}
            required
          />
          <TextField
            label="Body"
            fullWidth
            multiline
            rows={8}
            value={email.body}
            onChange={handleChange('body')}
            required
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          Send
        </Button>
      </DialogActions>
    </Dialog>
  );
}