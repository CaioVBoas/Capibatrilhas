import { Prisma, TrailParticipation } from '@prisma/client';
import prisma from '../database';

class TrailParticipationRepository {
  async create(
    data: Prisma.TrailParticipationCreateInput,
  ): Promise<TrailParticipation> {
    const trailParticipation = await prisma.trailParticipation.create({ data });
    return trailParticipation;
  }

  async findById(id: string): Promise<TrailParticipation | null> {
    const trailParticipation = await prisma.trailParticipation.findUnique({
      where: { id: Number(id) },
      include: {
        user: true,
        trail: true,
      },
    });
    return trailParticipation;
  }

  async update(
    id: string,
    data: Prisma.TrailParticipationUpdateInput,
  ): Promise<TrailParticipation> {
    const trailParticipation = await prisma.trailParticipation.update({
      where: { id: Number(id) },
      data,
    });
    return trailParticipation;
  }

  async delete(id: string): Promise<TrailParticipation> {
    const trailParticipation = await prisma.trailParticipation.delete({
      where: { id: Number(id) },
    });
    return trailParticipation;
  }

  async findAll(): Promise<TrailParticipation[]> {
    const trailParticipations = await prisma.trailParticipation.findMany({
      include: {
        user: true,
        trail: true,
      },
    });
    return trailParticipations;
  }
}

export default new TrailParticipationRepository();
