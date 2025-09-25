const knex = require('knex')({
  client: 'sqlite3', // or 'better-sqlite3'
  connection: {
    filename: './db.sqlite',
  },
});

class DB {
  static async addEmail(email) {
    return knex('emails').insert(email)
  }

  static async findEmails(searchString) {
    if (!searchString) return [];
    return knex('emails')
      .where(function() {
        this.where('to', 'like', `%${searchString}%`)
          .orWhere('cc', 'like', `%${searchString}%`)
          .orWhere('bcc', 'like', `%${searchString}%`)
          .orWhere('subject', 'like', `%${searchString}%`)
          .orWhere('body', 'like', `%${searchString}%`);
      });
  }
}
