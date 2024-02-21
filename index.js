require('dotenv').config({ path: `.env.local` })
const express = require('express');
const app = express();

app.get('/api/workload', async (req, res) => {
    const studios = req.query.studios;
    if (!studios) {
        return res.status(400).json({ error: 'Studio ids missing' });
    }

    const studioIds = studios.split(',');
    const fetchPromises = studioIds.map(async (id) => {
        const url = `${process.env.URL}${id}/workload`;
        try {
            const response = await fetch(url);
            const body = await response.json();
            const workload = await JSON.parse(body)

            return {
                studioId: id,
                name: workload.name,
                term: workload.workload.term,
                percentage: workload.workload.percentage
            };
        } catch (error) {
            console.error(`Error studio id ${id}: `, error);
            return null;
        }
    });

    try {
        const results = (await Promise.all(fetchPromises)).filter(result => result !== null);
        res.json(results);
    } catch (error) {
        console.error('Error ', error);
        res.status(500).json({ error: 'Internal error' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
module.exports = app;
