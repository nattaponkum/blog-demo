import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => c.text('Welcome to my blog'))
app.get('/about', (c) => c.text('About this blog'))
app.get('/health', (c) => c.json({ status: 'ok' }))

export default app