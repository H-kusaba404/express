var express = require('express');
var router = express.Router();

// 接続情報を設定
const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://2691000083we_db_user:password2691000083@kusabadb.1djv6c1.mongodb.net/?appName=kusabaDB";
const client = new MongoClient(uri);

router.get('/', async (req, res) => {
// データベース、コレクションを指定
const database = client.db('notes');
const notes = database.collection('notes');

// idが１のドキュメントを取得
const query = { id: 2 };
const note = await notes.findOne(query);

res.json(note);
})

module.exports = router;