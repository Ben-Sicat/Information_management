import { Request, Response } from 'express';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import bcrypt from 'bcrypt';

const dbPromise = open({
  filename: '/path/to/your/database.sqlite', // Replace with the path to your database file
  driver: sqlite3.Database
});

interface User {
  id?: number;
  username: string;
  password: string;
}

// Login handler
export const handleLogin = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const db = await dbPromise;
    const user: User | undefined = await db.get(`SELECT * FROM users WHERE username = ?`, [username]);

    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // If we reach this point, the user is authenticated
    return res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};


