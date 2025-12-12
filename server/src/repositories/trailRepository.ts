import { Prisma, Trail } from '@prisma/client';
import prisma from '@database';
import { truncate } from 'fs';

class TrailRepository {
  async create(data: Prisma.TrailCreateInput): Promise<Trail> {
    const trail = await prisma.trail.create({ data, include: { challenges: { include: { challenge: true} } } });
    return trail;
  }

  async findById(id: number): Promise<Trail | null> {
    const trail = await prisma.trail.findUnique({ where: { id } });
    return trail;
  }

  async update(id: number, data: Prisma.TrailUpdateInput): Promise<Trail> {
    const trail = await prisma.trail.update({ where: { id }, data });
    return trail;
  }

  async delete(id: number): Promise<Trail> {
    const trail = await prisma.trail.delete({ where: { id } });
    return trail;
  }

  async findAll(): Promise<Trail[]> {
    const trails = await prisma.trail.findMany({orderBy : { createdAt: 'desc' }});
    return trails;
  }
}

export default new TrailRepository();