import { Prisma, TrailChallenge } from '@prisma/client';
import prisma from '../database';

class TrailChallengeRepository {
  async create(
    data: Prisma.TrailChallengeCreateInput,
  ): Promise<TrailChallenge> {
    const trailChallenge = await prisma.trailChallenge.create({ data });
    return trailChallenge;
  }

  async findById(id: string): Promise<TrailChallenge | null> {
    const trailChallenge = await prisma.trailChallenge.findUnique({
      where: { id: Number(id) },
      include: {
        trail: true,
        challenge: true,
      },
    });
    return trailChallenge;
  }

  async findByTrailId(trailId: string): Promise<TrailChallenge[]> {
    const trailChallenges = await prisma.trailChallenge.findMany({
      where: { trailId: Number(trailId) },
      include: {
        challenge: true,
      },
      orderBy: {
        challengeOrder: 'asc',
      },
    });
    return trailChallenges;
  }

  async update(
    id: string,
    data: Prisma.TrailChallengeUpdateInput,
  ): Promise<TrailChallenge> {
    const trailChallenge = await prisma.trailChallenge.update({
      where: { id: Number(id) },
      data,
    });
    return trailChallenge;
  }

  async delete(id: string): Promise<TrailChallenge> {
    const trailChallenge = await prisma.trailChallenge.delete({
      where: { id: Number(id) },
    });
    return trailChallenge;
  }

  async findAll(): Promise<TrailChallenge[]> {
    const trailChallenges = await prisma.trailChallenge.findMany({
      include: {
        trail: true,
        challenge: true,
      },
      orderBy: {
        challengeOrder: 'asc',
      },
    });
    return trailChallenges;
  }
}

export default new TrailChallengeRepository();
