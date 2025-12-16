import { Prisma, TrailInvitation } from '@prisma/client';
import prisma from '../database';

class TrailInvitationRepository {
  async create(
    data: Prisma.TrailInvitationCreateInput,
  ): Promise<TrailInvitation> {
    const trailInvitation = await prisma.trailInvitation.create({ data });
    return trailInvitation;
  }

  async findById(id: string): Promise<TrailInvitation | null> {
    const trailInvitation = await prisma.trailInvitation.findUnique({
      where: { id: Number(id) },
    });
    return trailInvitation;
  }

  async findByInviteeId(inviteeId: number): Promise<TrailInvitation[]> {
    const trailInvitations = await prisma.trailInvitation.findMany({
      where: { inviteeId },
    });
    return trailInvitations;
  }

  async findBySenderId(senderId: number): Promise<TrailInvitation[]> {
    const trailInvitations = await prisma.trailInvitation.findMany({
      where: { senderId },
    });
    return trailInvitations;
  }

  async update(
    id: string,
    data: Prisma.TrailInvitationUpdateInput,
  ): Promise<TrailInvitation> {
    const trailInvitation = await prisma.trailInvitation.update({
      where: { id: Number(id) },
      data,
    });
    return trailInvitation;
  }

  async delete(id: string): Promise<TrailInvitation> {
    const trailInvitation = await prisma.trailInvitation.delete({
      where: { id: Number(id) },
    });
    return trailInvitation;
  }

  async findAll(): Promise<TrailInvitation[]> {
    const trailInvitations = await prisma.trailInvitation.findMany();
    return trailInvitations;
  }
}

export default new TrailInvitationRepository();
