import { Prisma, UserAchievement } from '@prisma/client';
import prisma from '../database';

class UserAchievementRepository {
  async create(
    data: Prisma.UserAchievementCreateInput,
  ): Promise<UserAchievement> {
    const userAchievement = await prisma.userAchievement.create({ data });
    return userAchievement;
  }

  async findById(id: number): Promise<UserAchievement | null> {
    const userAchievement = await prisma.userAchievement.findUnique({
      where: { id },
    });
    return userAchievement;
  }

  async findByUserId(userId: number): Promise<UserAchievement[]> {
    const userAchievements = await prisma.userAchievement.findMany({
      where: { userId },
    });
    return userAchievements;
  }

  async update(
    id: number,
    data: Prisma.UserAchievementUpdateInput,
  ): Promise<UserAchievement> {
    const userAchievement = await prisma.userAchievement.update({
      where: { id },
      data,
    });
    return userAchievement;
  }

  async delete(id: number): Promise<UserAchievement> {
    const userAchievement = await prisma.userAchievement.delete({
      where: { id },
    });
    return userAchievement;
  }
}

export default new UserAchievementRepository();
