import { NextApiRequest, NextApiResponse } from 'next';
import { getConnection } from '../../lib/db';
import { School, ApiResponse } from '../../lib/types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<School[] | School>>
) {
  try {
    const connection = await getConnection();

    if (req.method === 'GET') {
      const [rows] = await connection.execute('SELECT * FROM schools ORDER BY created_at DESC');
      await connection.end();
      
      res.status(200).json({
        success: true,
        data: rows as School[]
      });
    } else if (req.method === 'POST') {
      const { name, address, city, state, contact, image, email_id } = req.body;
      
      const insertQuery = `
        INSERT INTO schools (name, address, city, state, contact, image, email_id)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `;
      
      const [result] = await connection.execute(insertQuery, [
        name, address, city, state, contact, image, email_id
      ]);
      
      await connection.end();
      
      res.status(201).json({
        success: true,
        data: { id: (result as any).insertId, ...req.body } as School
      });
    } else {
      res.status(405).json({
        success: false,
        error: 'Method not allowed'
      });
    }
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
}