import knex from 'knex';

export default class DB {
  static knexClient = knex({
    client: 'sqlite3', // or 'better-sqlite3'
    connection: {
      filename: './dev.sqlite3',
    },
  });;

  static async addEmail(email) {
    const [insertedEmail] = await this.knexClient('emails')
      .insert(email)
      .returning('*');

    return insertedEmail;
  }

  static async findEmails(searchString) {
    const query = this.knexClient('emails').orderBy('created_at', 'desc');

    if (!searchString) {
      return query;
    }

    return query.where(function() {
        this.where('to', 'like', `%${searchString}%`)
          .orWhere('cc', 'like', `%${searchString}%`)
          .orWhere('bcc', 'like', `%${searchString}%`)
          .orWhere('subject', 'like', `%${searchString}%`)
          .orWhere('body', 'like', `%${searchString}%`);
      });
  }
}
