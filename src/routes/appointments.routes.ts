import { Router } from 'express';
import { uuid } from 'uuidv4';

const appointmentsRouter = Router();

const appointments = [];

appointmentsRouter.post('/', (req, res) => {
  const { provider, date } = req.body;

  const appoitment = {
    id: uuid(),
    provider,
    date,
  };

  appointments.push(appoitment);

  return res.json({ message: 'Hello World' });
});

export default appointmentsRouter;
