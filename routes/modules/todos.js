const express = require('express')
const router = express.Router()


const db = require('../../models')
const Todo = db.Todo
const User = db.User

//create 
router.get('/new', (req, res) => {
  res.render('new')
})


router.post('/', (req, res) => {
  const UserId = req.user.id
  const { name } = req.body
  return Todo.create(
    {
      name,
      UserId
    })
    .then(() => res.redirect('/'))
    .catch(err => console.log(err))
})

//edit
router.get('/:id/edit', (req, res) => {
  const UserId = req.user.id
  const id = req.params.id
  return Todo.findOne({ where: { id, UserId } })
    .then(todo => {
      res.render('edit', { todo: todo.toJSON() })
    })
    .catch(err => console.log(err))
})

router.put('/:id', (req, res) => {
  const UserId = req.user.id
  const id = req.params.id
  const { name, isDone } = req.body
  return Todo.findOne({ where: { id, UserId } })
    .then(todo => {
      todo.name = name,
        todo.isDone = isDone === 'on'
      todo.save()
    })
    .then(() => res.redirect(`/todos/${id}`))
    .catch(err => console.log(err))
})

//detail
router.get('/:id', (req, res) => {
  const UserId = req.user.id
  const id = req.params.id
  return Todo.findOne({ where: { id, UserId } })
    .then(todo => res.render('detail', { todo: todo.toJSON() }))
    .catch(error = console.log(error))  
})

// delete
router.delete('/:id', (req, res) => {
  const UserId = req.user.id
  const id = req.params.id
  return Todo.findOne({ where: { id, UserId } })
    .then(todo => todo.destroy())      
    .then(() => res.redirect('/'))
    .catch(err => console.log(err))
})




module.exports = router