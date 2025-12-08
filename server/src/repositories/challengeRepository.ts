import { Prisma, Challenge } from "@prisma/client";
import prisma from "../database";

class ChallengeRepository {
  async create(data: Prisma.ChallengeCreateInput): Promise<Challenge> {
    const challenge = await prisma.challenge.create({ data });
    return challenge;
  }

  async findById(id: string): Promise<Challenge | null> {
    const challenge = await prisma.challenge.findUnique({ where: { id:Number(id) } });
    return challenge;
  }

  async update(id: string, data: Prisma.ChallengeUpdateInput): Promise<Challenge> {
    const challenge = await prisma.challenge.update({ where: { id:Number(id) }, data });
    return challenge;
  }

  async delete(id: string): Promise<Challenge> {
    const challenge = await prisma.challenge.delete({ where: { id:Number(id) } });
    return challenge;
  }

  async findAll(): Promise<Challenge[]> {
    const challenges = await prisma.challenge.findMany();
    return challenges;
  }
}

export default new ChallengeRepository();