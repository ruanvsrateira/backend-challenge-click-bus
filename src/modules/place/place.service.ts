import { Injectable } from '@nestjs/common';
import { Place } from '@prisma/client';
import { PlaceDTO } from './place.dto';
import { PlaceRepository } from './place.repository';

@Injectable()
export class PlaceService {
  constructor(private placeRepository: PlaceRepository) {}

  getAll(): Promise<Place[]> {
    return this.placeRepository.getAll();
  }

  filterByName(name: string): Promise<Place[]> {
    return this.placeRepository.filterByName(name);
  }

  getOneById(id: string): Promise<Place> {
    return this.placeRepository.getOneById(id);
  }

  create(place: PlaceDTO): Promise<Place> {
    return this.placeRepository.create(place);
  }

  deleteById(id: string): Promise<Place> {
    return this.placeRepository.deleteById(id);
  }

  updateById(place: PlaceDTO): Promise<Place> {
    return this.placeRepository.updateById(place);
  }
}
