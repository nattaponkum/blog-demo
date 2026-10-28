import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => c.text('Hello Blog'))
app.get('/about', (c) => c.text('About this blog'))

export default app