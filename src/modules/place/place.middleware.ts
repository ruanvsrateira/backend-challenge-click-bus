import {
  BadRequestException,
  Injectable,
  NestMiddleware,
  NotFoundException,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { PlaceService } from './place.service';

@Injectable()
export class PlaceExistMiddleware implements NestMiddleware {
  constructor(private placeService: PlaceService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;

    if (!id) throw new BadRequestException();

    const exist = await this.placeService.getOneById(id);

    if (exist) {
      next();
    } else {
      throw new NotFoundException('User not founded');
    }
  }
}
