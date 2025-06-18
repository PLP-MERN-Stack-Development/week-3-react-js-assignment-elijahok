import React, { useState, useEffect } from 'react';
import Card from './Card';
import Button from './Button';

export default function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([...tasks, { text: input, completed: false }]);
    setInput('');
  };

  const toggleTask = index => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = index => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <Card title="📝 Task Manager">
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          className="border rounded px-3 py-2 flex-grow dark:bg-gray-700"
          placeholder="Enter a task"
        />
        <Button onClick={addTask}>Add</Button>
      </div>
      <ul className="space-y-2">
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`flex justify-between items-center p-2 rounded ${
              task.completed ? 'line-through text-gray-400' : ''
            } bg-gray-200 dark:bg-gray-800`}
          >
            <span onClick={() => toggleTask(index)} className="cursor-pointer flex-grow">
              {task.text}
            </span>
            <Button className="bg-red-600 ml-2" onClick={() => deleteTask(index)}>
              ❌
            </Button>
          </li>
        ))}
      </ul>
    </Card>
  );
}
