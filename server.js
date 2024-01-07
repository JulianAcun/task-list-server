const express = require('express');
const app = express();
const port = 3000;

app.get('/tasks', (req, res) => {
  const taskList = [
    {
      id: '123456',
      isCompleted: false,
      description: 'Walk the dog',
    },
    // Puedes agregar más tareas aquí
  ];

  res.json(taskList);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
