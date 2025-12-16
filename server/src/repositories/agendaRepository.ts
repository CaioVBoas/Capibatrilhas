import { Prisma, EventAgenda } from '@prisma/client';
import prisma from '@database';

class AgendaRepository {
  async create(data: Prisma.EventAgendaCreateInput): Promise<EventAgenda> {
    const agenda = await prisma.eventAgenda.create({ data });
    return agenda;
  }

  async findById(id: number): Promise<EventAgenda | null> {
    const agenda = await prisma.eventAgenda.findUnique({ where: { id } });
    return agenda;
  }

  async findByTag(tag: string): Promise<EventAgenda[]> {
    const agendas = await prisma.eventAgenda.findMany({
        where: {
            tags: {
                has: tag
            }
        }
    });
    return agendas;
  }
  
  async findByCategory(category: string): Promise<EventAgenda[]> {
    const agendas = await prisma.eventAgenda.findMany({
        where: {
            category: {
                has: category
            }
        }
    });
    return agendas;
  }

  async update(id: number, data: Prisma.EventAgendaUpdateInput): Promise<EventAgenda> {
    const agenda = await prisma.eventAgenda.update({ where: { id }, data });
    return agenda;
  }

  async delete(id: number): Promise<EventAgenda> {
    const agenda = await prisma.eventAgenda.delete({ where: { id } });
    return agenda;
  }

  async findAll(): Promise<EventAgenda[]> {
    const agendas = await prisma.eventAgenda.findMany();
    return agendas;
  }
}

export default new AgendaRepository();