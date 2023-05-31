const mongoose = require('mongoose');
const {config}=require("../config/secret")

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(`mongodb+srv://${config.USER_DB}:${config.PASS_DB}@cluster0.czouct4.mongodb.net/nodejs_project

  `);
  console.log("mongo connect middle_project local");
}