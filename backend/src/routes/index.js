import { getEmails, addEmail } from '../services/index.js';

export default async function routes(fastify, options) {
  fastify.get('/ping', async (request, reply) => {
    return 'pong\n';
  });

  // GET /emails?search=string
  fastify.get('/emails', async (request, reply) => {
    const { search } = request.query;
    try {
      const emails = await getEmails(search);
      reply.send(emails);
    } catch (err) {
      reply.status(500).send({ error: 'Failed to fetch emails' });
    }
  });

  // POST /emails
  fastify.post('/emails', async (request, reply) => {
    try {
      const email = request.body;
      const result = await addEmail(email);
      reply.send(result);
    } catch (err) {
      reply.status(400).send({ error: err.message || 'Failed to add email' });
    }
  });
}
