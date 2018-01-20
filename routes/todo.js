var express = require('express');
var router = express.Router();
const Todo = require('../models/Todo');

/* GET todolist listing. */
router.get('/', async (req, res, next) => {
  const todolist = await Todo.find();
  res.json(todolist);
});

router.post('/', async (req, res, next) => {
  const myTodo = new Todo({
    item: 'todo1',
    done: false
  });
  const doc = await myTodo.save();
  res.json(doc.toJSON());
});

/* PATCH todo listing. */
router.patch('/:id', async (req, res, next) => {
  const todoUpdate = await Todo.findById(req.params.id);
  todoUpdate.done = !todoUpdate.done;
  const doc = await todoUpdate.save();
  res.json(doc.toJSON());
});

/* DELETE todo listing. */
router.delete('/:id', async (req, res, next) => {
  const doc = await Todo.remove({ _id: req.params.id });//return{no:0 or 1,ok:0 or 1}
  //const doc = await Todo.findByIdAndRemove(req.params.id);//return找到的todo，找不到不會回傳值
  res.send(doc);
});

// const asyncfunc = (fn) => {
//   return (req, res, next) => {
//     Promise.resolve(fn(req, res, next)).catch(next);
//   }
// }

// /* POST todo listing. */
// router.post('/', function (req, res, next) {
//   const myTodo = new Todo({
//     item: 'todo1',
//     done: false
//   });
//   myTodo.save().then((doc) => {
//     console.log('post');
//     res.json(doc.toJSON());
//   });
// });

// router.post('/', asyncfunc(async (req, res, next) => {
//   const myTodo = new Todo({
//     item: 'todo1',
//     done: false
//   });
//   const doc = await myTodo.save();
//   res.json(doc.toJSON());
// }));

module.exports = router;
