import { Prisma, Trail } from '@prisma/client';
import prisma from '../database';

class TrailRepository {
  async create(data: Prisma.TrailCreateInput): Promise<Trail> {
    const trail = await prisma.trail.create({
      data,
      include: { challenges: { include: { challenge: true } } },
    });
    return trail;
  }

  async findById(id: number): Promise<Trail | null> {
    const trail = await prisma.trail.findUnique({
      where: { id },
      include: {
        challenges: { include: { challenge: true }, orderBy: { challengeOrder: 'asc' } },
        participants: { include: { user: { select: { id: true, name: true, urlImage: true } } } },
        completedChallenges: {
          include: {
            user: { select: { id: true, name: true } },
            challenge: { select: { id: true, title: true } },
          },
        },
        owner: { select: { id: true, name: true, urlImage: true } },
      },
    });
    return trail;
  }

  async findByUserId(userId: number): Promise<Trail[]> {
    const trails = await prisma.trail.findMany({
      where: {
        participants: {
          some: {
            userId: userId,
          },
        },
      },
    });
    return trails;
  }

  async update(id: number, data: Prisma.TrailUpdateInput): Promise<Trail> {
    const trail = await prisma.trail.update({
      where: { id },
      data,
      include: { challenges: { include: { challenge: true }, orderBy: { challengeOrder: 'asc' } } },
    });
    return trail;
  }

  async delete(id: number): Promise<Trail> {
    const trail = await prisma.trail.delete({ where: { id } });
    return trail;
  }

  async findAll(): Promise<Trail[]> {
    const trails = await prisma.trail.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        challenges: { include: { challenge: true }, orderBy: { challengeOrder: 'asc' } },
        owner: { select: { id: true, name: true, urlImage: true } },
        _count: {
          select: { participants: true, completedChallenges: true },
        },
      },
    });
    return trails;
  }
}

export default new TrailRepository();
