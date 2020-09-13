/* eslint-disable camelcase */
import { startOfHour } from 'date-fns';
import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Appointment from '../infra/typeorm/entities/Appointment';
import IAppointmentsRepository from '../repositories/IAppointmentsRepository';

interface Request {
  provider_id: string;
  data: Date;
}
@injectable()
class CreateAppointmentService {
  constructor(
    @inject('AppoinmentsRepository')
    private appointmentsRepository: IAppointmentsRepository,
  ) { }

  public async execute({ data, provider_id }: Request): Promise<Appointment> {
    const appointmentDate = startOfHour(data);

    const findAppointmentInSameDate = await this.appointmentsRepository.findByDate(
      appointmentDate,
    );

    if (findAppointmentInSameDate) {
      throw new AppError('This appointment is already booked');
    }

    const appointment = await this.appointmentsRepository.create({
      provider_id,
      date: appointmentDate,
    });

    return appointment;
  }
}

export default CreateAppointmentService;
