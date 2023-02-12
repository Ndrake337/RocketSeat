import { randomUUID } from 'node:crypto' // UUID => Unique Universal ID
import { Database } from './database.js'
import { buildRoutePath } from './utils/build-route-path.js'

const database = new Database()

export const routes = [
  //Listagem de usuários
  {
    method: 'GET',
    path: buildRoutePath('/users'),
    handler: (req,res) => {    
      const { search } = req.query

      const users = database.select('users',{
        name: search,
        email: search,
      })
      return res.end(JSON.stringify(users))
    }
  },
  
  //Criação de usuários
  {
    method: 'POST',
    path: buildRoutePath('/users'),
    handler: (req,res) => {    
      const {name, email} = req.body
    
      const user ={
        id: randomUUID(),
        name,
        email,
      }

      database.insert('users', user)
      return res.writeHead(201).end()
    }
  },
  
  //Atualização de usuários
  {
    method: 'PUT',
    path: buildRoutePath('/users/:id'),
    handler: (req, res) => {
      const {id} = req.params
      const { name, email } = req.body
      database.update('users', id, { name, email })

      return res.writeHead(204).end()
    },
  },

  //Deleção de usuários
  {
    method: 'DELETE',
    path: buildRoutePath('/users/:id'),
    handler: (req, res) => {
      const {id} = req.params

      database.delete('users', id)

      return res.writeHead(204).end()
    },
  }
]