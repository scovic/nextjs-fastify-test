import DB from '../db/index.js';

export async function getEmails(search) {
  return DB.findEmails(search);
}

export async function addEmail(email) {
  if (!email?.to || !email?.subject || !email?.body) {
    throw new Error('Missing required fields');
  }
  return DB.addEmail(email);
}
