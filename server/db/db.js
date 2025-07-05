const Database = require('better-sqlite3');
const db = new Database('./data/todo.db');

db.prepare(`
    CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    completed BOOLEAN NOT NULL DEFAULT 0)
    `).run();

    module.exports = db;