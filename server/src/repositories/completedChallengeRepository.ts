import { Prisma, CompletedChallenge, Challenge } from '@prisma/client';
import prisma from '../database';

class CompletedChallengeRepository {
  async getChallengeById(challengeId: number): Promise<Challenge | null> {
    const challenge = await prisma.challenge.findUnique({
      where: { id: challengeId },
    });
    return challenge;
  }
  
  async create(
    data: Prisma.CompletedChallengeCreateInput,
  ): Promise<CompletedChallenge> {
    const completedChallenge = await prisma.completedChallenge.create({ data });
    return completedChallenge;
  }

  async findById(id: string): Promise<CompletedChallenge | null> {
    const completedChallenge = await prisma.completedChallenge.findUnique({
      where: { id: Number(id) },
    });
    return completedChallenge;
  }

  async findByUserId(userId: number): Promise<CompletedChallenge[]> {
    const completedChallenges = await prisma.completedChallenge.findMany({
      where: { userId },
    });
    return completedChallenges;
  }

  async update(
    id: string,
    data: Prisma.CompletedChallengeUpdateInput,
  ): Promise<CompletedChallenge> {
    const completedChallenge = await prisma.completedChallenge.update({
      where: { id: Number(id) },
      data,
    });
    return completedChallenge;
  }

  async delete(id: string): Promise<CompletedChallenge> {
    const completedChallenge = await prisma.completedChallenge.delete({
      where: { id: Number(id) },
    });
    return completedChallenge;
  }

  async findAll(): Promise<CompletedChallenge[]> {
    const completedChallenges = await prisma.completedChallenge.findMany();
    return completedChallenges;
  }

  async findByTrailId(trailId: number): Promise<CompletedChallenge[]> {
    const completedChallenges = await prisma.completedChallenge.findMany({
      where: { trailId },
    });
    return completedChallenges;
  }
}

export default new CompletedChallengeRepository();
