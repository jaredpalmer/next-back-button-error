
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const pathMatch = require('path-match')

const app = next({ dev: true })
const handle = app.getRequestHandler()
const route = pathMatch()
const matchPeople = route('/people/:id')

app.prepare()
.then(() => {
  createServer((req, res) => {
    const { pathname } = parse(req.url)

    const pplParams = matchPeople(pathname)

    if (!pplParams) {
      handle(req, res)
      return
    }

    if (pplParams) {
      console.log(pplParams)
      app.render(req, res, '/person', pplParams)
    }

  })
  .listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
