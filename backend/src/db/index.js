import knex from 'knex';

const knexClient = knex({
  client: 'sqlite3', // or 'better-sqlite3'
  connection: {
    filename: './db.sqlite',
  },
});

export default class DB {
  static async addEmail(email) {
    return knexClient('emails').insert(email)
  }

  static async findEmails(searchString) {
    if (!searchString) return [];
    return knexClient('emails')
      .where(function() {
        this.where('to', 'like', `%${searchString}%`)
          .orWhere('cc', 'like', `%${searchString}%`)
          .orWhere('bcc', 'like', `%${searchString}%`)
          .orWhere('subject', 'like', `%${searchString}%`)
          .orWhere('body', 'like', `%${searchString}%`);
      });
  }
}
