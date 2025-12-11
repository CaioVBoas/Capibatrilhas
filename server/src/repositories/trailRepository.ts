import { Prisma, Trail } from '@prisma/client';
import prisma from '@database';

class TrailRepository {
  async create(data: Prisma.TrailCreateInput, ownerId: number): Promise<Trail> {
    const trail = await prisma.trail.create({ data });
    return trail;
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({ where: { email } });
    return user;
  }

  async findById(id: string): Promise<Trail | null> {
    const trail = await prisma.trail.findUnique({ where: { id } });
    return trail;
  }

  async findByCpf(cpf: string): Promise<User | null> {
    const user = await prisma.user.findUnique({ where: { cpf } });
    return user;
  }

  async update(id: string, data: Prisma.UserUpdateInput): Promise<User> {
    const user = await prisma.user.update({ where: { id }, data });
    return user;
  }

  async delete(id: string): Promise<User> {
    const user = await prisma.user.delete({ where: { id } });
    return user;
  }

  async findAll(): Promise<User[]> {
    const users = await prisma.user.findMany();
    return users;
  }
}

export default new UserRepository();
