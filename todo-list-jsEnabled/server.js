const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(
    '/',
    express.static(__dirname + '/public')
)


let todos = []
app.get(
    '/todos',
    (req, res) => {
            res.send(todos)
        }
)

app.get(
    '/todoserver',
    (req, res) => {
        res.send(`
        <form action='/todoserver' method='POST'>
            <input type='text' name='taskInput'>
            <input type='submit' val='ADD'>
            <ul>
                ${todos.map(todo => '<li>' + todo + '</li>').join('')}
            </ul>
        </form>
        `)
    }
)

app.post(
    '/todoserver',
    (req, res) => {
        todos.push(req.body.taskInput)
        res.redirect('/todoserver')
    }
)

app.post(
    '/todos',
    (req, res) => {
            todos.push(req.body.todo)
        res.send(todos)
    }
)

app.listen(4050)