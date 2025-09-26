import { BACKEND_URL } from '../constants';

const EMAILS_ENDPOINT = `${BACKEND_URL}/emails`;

export async function getEmails(searchTerm) {
  const url = searchTerm
    ? `${EMAILS_ENDPOINT}?search=${encodeURIComponent(searchTerm)}`
    : EMAILS_ENDPOINT;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Failed to fetch emails');
  }

  return response.json();
}

export async function createEmail(email) {
  const response = await fetch(EMAILS_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(email),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Failed to send email');
  }

  return response.json();
} 