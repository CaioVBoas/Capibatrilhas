import { Request, Response, NextFunction } from 'express';
import { CreateTrailInvitation, UpdateTrailInvitation } from '../DTOs';
import TrailInvitationRepository from '../repositories/trailInvitationRepository';

class TrailInvitationController {
    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const { inviteeId, trailId, senderId } = CreateTrailInvitation.parse(req.body);

            const trailInvitation = await TrailInvitationRepository.create({
                trail: { connect: { id: trailId } },
                sender: { connect: { id: senderId } },
                invitee: { connect: { id: inviteeId } },
            });

            res.locals = {
                status: 201,
                message: 'Convite para trilha criado com sucesso',
                data: trailInvitation,
            };

            return next();
        } catch (error) {
            return next(error);
        }
    }

    async read(req: Request, res: Response, next: NextFunction) {
        try {
            const { trailInvitationId } = req.params;

            const trailInvitation = await TrailInvitationRepository.findById(trailInvitationId);

            if (!trailInvitation) {
                return next({
                    status: 404,
                    message: 'Convite para trilha não encontrado',
                });
            }

            res.locals = {
                status: 200,
                data: trailInvitation,
            };

            return next();
        } catch (error) {
            return next(error);
        }
    }
    
    async update(req: Request, res: Response, next: NextFunction) {
        try {
            const { trailInvitationId } = req.params;
            const { status } = UpdateTrailInvitation.parse(req.body);
            const trailInvitation = await TrailInvitationRepository.update(trailInvitationId, {
                status,
            });

            res.locals = {
                status: 200,
                message: 'Convite para trilha atualizado com sucesso',
                data: trailInvitation,
            };

            return next();
        } catch (error) {
            return next(error);
        }
    }

    async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const { trailInvitationId } = req.params;

            await TrailInvitationRepository.delete(trailInvitationId);

            res.locals = {
                status: 200,
                message: 'Convite para trilha deletado com sucesso',
            };

            return next();
        } catch (error) {
            return next(error);
        }
    }
}

export default new TrailInvitationController();