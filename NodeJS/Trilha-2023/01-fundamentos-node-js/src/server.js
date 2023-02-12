import http from 'node:http'
import { json } from './middlewares/json.js'
import { routes } from './routes.js'
import { extractQueryParams } from './utils/extract-query-params.js'
//Modulo 1
// {
// // Common JS => require
// // ESModule => import

// // - Criação
// // - Listagem
// // - Edição 
// // - Remoção

// // - HTTP
// //     - Método HTTP
// //     - URL

// //GET, POST, PUT, PATCH, DELETE

// //Stateful - Stateless
// }


//Modulo 5
// {
// // Query Parameters: URL Stateful => Filtros, Paginação, opcionais => exemplo (http://localhost:3333/users?userId=1&name=Matheus)
// // Route Parameters: Identificação de recursos => exemplo (http://localhost:3333/users/1)
// // Request Body: Envio de informações de um formulário (HTTPs)
// }
const users =[]

const server = http.createServer(async (req, res) => {
  const { method, url } = req

  await json(req, res)

  const route = routes.find(route => {
    return route.method === method && route.path.test(url)
  })

  if(route){
    const routeParams = req.url.match(route.path)
    // console.log(extractQueryParams(routeParams.groups.query));

    const { query, ...params } = routeParams.groups
    req.params = params
    req.query = query ? extractQueryParams(query) : {}
    return route.handler(req, res)
  }

  return res.writeHead(404).end('Not found')
})

//localhost:3333
server.listen(3333)