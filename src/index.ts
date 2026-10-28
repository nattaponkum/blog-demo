import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => c.text('Hello Blog'))
app.get('/about', (c) => c.text('About this blog'))
app.get('/health', (c) => c.json({ status: 'ok' }))

export default app