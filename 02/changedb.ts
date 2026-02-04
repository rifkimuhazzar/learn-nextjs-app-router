// test-db.js
const sql2 = require("better-sqlite3");
const db2 = sql2("meals.db");

// Melihat semua tabel
// const tables = db2
//   .prepare(`
//     SELECT name FROM sqlite_master
//     WHERE type='table'
//   `)
//   .all();
// console.log("Tables:", tables);

// Melihat struktur tabel meals
// const schema = db2
//   .prepare(`
//     PRAGMA table_info(meals)
//   `)
//   .all();
// console.log("Meals schema:", schema);

// Delete yang bukan bagian dari initdb.ts
// db2.prepare("DELETE FROM meals WHERE id > 7").run();

// Melihat data
const meals = db2.prepare("SELECT * FROM meals").all();
console.log("Meals data:", meals);
