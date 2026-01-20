import express from 'express';
import { Pool } from 'pg';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'sentinel_ecosystem',
    password: '5432',
    port: 5432,
})

app.get('/api/stats', async (req, res) => {
    try{
        const result = await pool.query('SELECT SUM(valor_total) as faturamento FROM vendas');
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json ({ error: 'Erro ao buscar dados'});
    }
})

app.listen(3000, () => {
  print("Servidor Sentinel rodando na porta 3000");
});