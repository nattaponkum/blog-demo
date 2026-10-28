import { Hono } from 'hono'

const app = new Hono()

<<<<<<< HEAD
app.get('/', (c) => c.text('Hello SSP Blog'))
=======
app.get('/', (c) => c.text('Welcome to my blog'))
>>>>>>> feature/greeting
app.get('/about', (c) => c.text('About this blog'))
app.get('/health', (c) => c.json({ status: 'ok' }))

export default app