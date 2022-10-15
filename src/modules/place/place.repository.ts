import { Injectable } from '@nestjs/common';
import { Place } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { PlaceDTO } from './place.dto';

@Injectable()
export class PlaceRepository {
  constructor(private prisma: PrismaService) {}

  getAll(): Promise<Place[]> {
    return this.prisma.place.findMany({});
  }

  filterByName(name: string): Promise<Place[]> {
    return this.prisma.place.findMany({
      where: {
        name: {
          contains: name,
        },
      },
    });
  }

  getOneById(id: string): Promise<Place> {
    return this.prisma.place.findUnique({ where: { id } });
  }

  create(place: PlaceDTO): Promise<Place> {
    return this.prisma.place.create({
      data: place,
    });
  }

  deleteById(id: string): Promise<Place> {
    return this.prisma.place.delete({
      where: { id },
    });
  }

  updateById(place: PlaceDTO): Promise<Place> {
    return this.prisma.place.update({
      where: { id: place.id },
      data: place,
    });
  }
}
