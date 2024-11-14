import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

// Middleware untuk parsing JSON
app.use(express.json());

// Route sederhana untuk endpoint GET
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

// Route untuk endpoint GET users
app.get('/users', (req: Request, res: Response) => {
  res.json([
    { id: 1, name: 'Tegar' },
    { id: 2, name: 'Firmansyah' },
    { id: 3, name: 'Thariq' },
    { id: 4, name: 'Dayat' },
    { id: 5, name: 'Yudha' }
  ]);
});

// Route untuk endpoint POST users
app.post('/users', (req: Request, res: Response) => {
  const user = req.body;
  res.status(201).json(user);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
