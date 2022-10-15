import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Place } from '@prisma/client';
import { PlaceDTO } from './place.dto';
import { PlaceService } from './place.service';

@Controller('place')
export class PlaceController {
  constructor(private placeService: PlaceService) {}

  @Get('')
  getAllPlaces(): Promise<Place[]> {
    return this.placeService.getAll();
  }

  @Get(':id')
  getOnePlace(@Param('id') id: string): Promise<Place> {
    return this.placeService.getOneById(id);
  }

  @Get('/filter/:name')
  filterByName(@Param('name') name: string): Promise<Place[]> {
    return this.placeService.filterByName(name);
  }

  @Post('')
  createNewPlace(@Body() place: PlaceDTO): Promise<Place> {
    return this.placeService.create(place);
  }

  @Delete(':id')
  deletePlaceById(@Param('id') id: string): Promise<Place> {
    return this.placeService.deleteById(id);
  }

  @Put(':id')
  updateById(@Param('id') id: string, @Body() place: PlaceDTO): Promise<Place> {
    place.id = id;
    return this.placeService.updateById(place);
  }
}
