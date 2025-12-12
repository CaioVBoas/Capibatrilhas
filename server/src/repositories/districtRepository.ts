import { Prisma, HighlightedDistrict } from '@prisma/client';
import prisma from '@database';

class DistrictRepository {
  async create(data: Prisma.HighlightedDistrictCreateInput): Promise<HighlightedDistrict> {
    const district = await prisma.highlightedDistrict.create({ data });
    return district;
  }

  async findById(id: number): Promise<HighlightedDistrict | null> {
    const district = await prisma.highlightedDistrict.findUnique({ where: { id } });
    return district;
  }

  async findByTag(tag: string): Promise<HighlightedDistrict[]> {
    const districts = await prisma.highlightedDistrict.findMany({
        where: {
            tags: {
                has: tag
            }
        }
    });
    return districts;
  }    

  async update(id: number, data: Prisma.HighlightedDistrictUpdateInput): Promise<HighlightedDistrict> {
    const district = await prisma.highlightedDistrict.update({ where: { id }, data });
    return district;
  }

  async delete(id: number): Promise<HighlightedDistrict> {
    const district = await prisma.highlightedDistrict.delete({ where: { id } });
    return district;
  }

  async findAll(): Promise<HighlightedDistrict[]> {
    const districts = await prisma.highlightedDistrict.findMany();
    return districts;
  }
}

export default new DistrictRepository();