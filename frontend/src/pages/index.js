import { useState, useEffect, useCallback } from 'react';
import { Box, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import debounce from 'lodash/debounce';
import EmailList from '@/components/EmailList/EmailList';
import EmailDetail from '@/components/EmailDetail';
import ComposeEmail from '@/components/ComposeEmail';
import ComposeEmailButton from '@/components/ComposeEmailButton';
import { getEmails } from '@/services/emails';

export default function Home() {
  const [emails, setEmails] = useState([]);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isComposeOpen, setIsComposeOpen] = useState(false);

  const fetchEmails = useCallback(async (term) => {
    const emails = await getEmails(term)
    setEmails(emails);
  }, []);

  const debouncedSearch = useCallback(
    debounce(
      async (term) => { fetchEmails(term)},
      500
    ),
    []
  );

  const handleEmailSent = (email) => {
    setEmails((prevEmails) => [email, ...prevEmails]);
  }

  useEffect(() => {
    fetchEmails();
  }, []);

  useEffect(() => {
    debouncedSearch(searchTerm);
  }, [searchTerm, debouncedSearch]);

  return (
    <Box sx={{ display: 'flex', height: '100vh', position: 'relative' }}>
      <EmailList
        emails={emails}
        onSelectEmail={setSelectedEmail}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />
      
      <EmailDetail email={selectedEmail} />

      <ComposeEmailButton onClick={() => setIsComposeOpen(true)} />

      <ComposeEmail
        open={isComposeOpen}
        onClose={() => setIsComposeOpen(false)}
        onEmailSent={handleEmailSent}
      />
    </Box>
  )
}
