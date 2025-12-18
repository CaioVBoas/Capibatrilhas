import { Prisma, Achievement } from '@prisma/client';
import prisma from '../database';

class AchievementRepository {
  async create(data: Prisma.AchievementCreateInput): Promise<Achievement> {
    const achievement = await prisma.achievement.create({ data });
    return achievement;
  }

  async findById(id: number): Promise<Achievement | null> {
    const achievement = await prisma.achievement.findUnique({
      where: { id },
    });
    return achievement;
  }

  async findAll(): Promise<Achievement[]> {
    const achievements = await prisma.achievement.findMany();
    return achievements;
  }

  async update(
    id: number,
    data: Prisma.AchievementUpdateInput,
  ): Promise<Achievement> {
    const achievement = await prisma.achievement.update({
      where: { id },
      data,
    });
    return achievement;
  }

  async delete(id: number): Promise<Achievement> {
    const achievement = await prisma.achievement.delete({
      where: { id },
    });
    return achievement;
  }
}

export default new AchievementRepository();
