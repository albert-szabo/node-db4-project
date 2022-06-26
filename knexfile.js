const sharedConfiguration = {
    client: 'sqlite3',
    migrations: {
        directory: './data/migrations'
    },
    seeds: {
        directory: './data/seeds'
    },
    useNullAsDefault: true,
    pool: {
        afterCreate: (conn, done) => conn.run('PRAGMA foreign_keys = ON', done)
    }
};

module.exports = {
    development: {
        ...sharedConfiguration,
        connection: { filename: './data/cookbook.db3' }
    }
}