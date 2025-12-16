import { Request, Response, NextFunction } from 'express';
import { AgendaRepository } from '../repositories';
import { Agenda, UpdateAgenda } from '../DTOs';

class AgendaController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const agendaData = Agenda.parse(req.body);

      const agenda = await AgendaRepository.create(agendaData);

      res.locals = {
        status: 201,
        message: 'Evento criado com sucesso',
        data: agenda,
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async read(req: Request, res: Response, next: NextFunction) {
    try {
      const eventId = Number(req.params.id);

      if (isNaN(eventId)) {
        return next({
          status: 400,
          message: 'ID do evento inválido',
        });
      }

      const agenda = await AgendaRepository.findById(eventId);
      if (!agenda) {
        return next({
          status: 404,
          message: 'Evento não encontrado',
        });
      }

      res.locals = {
        status: 200,
        data: agenda,
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async list(req: Request, res: Response, next: NextFunction) {
    try {
      const { tag } = req.query;
      const agendas = tag
        ? await AgendaRepository.findByTag(String(tag))
        : await AgendaRepository.findAll();

      res.locals = {
        status: 200,
        data: agendas,
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const eventId = Number(req.params.id);

      if (isNaN(eventId)) {
        return next({
          status: 400,
          message: 'ID do evento inválido',
        });
      }

      const exists = await AgendaRepository.findById(eventId);
      if (!exists) {
        return next({
          status: 404,
          message: 'Evento não encontrado',
        });
      }

      const agendaData = UpdateAgenda.parse(req.body);  
      const agenda = await AgendaRepository.update(
        eventId,
        agendaData,
      );

      res.locals = {
        status: 200,
        data: agenda,
        message: 'Evento atualizado com sucesso',
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const eventId = Number(req.params.id);

      if (isNaN(eventId)) {
        return next({
          status: 400,
          message: 'ID do evento inválido',
        });
      }

      const exists = await AgendaRepository.findById(eventId);
      if (!exists) {
        return next({
          status: 404,
          message: 'Evento não encontrado',
        });
      }

      await AgendaRepository.delete(eventId);
      res.locals = {
        status: 200,
        message: 'Evento deletado com sucesso',
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }
}

export default new AgendaController();
