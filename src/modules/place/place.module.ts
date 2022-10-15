import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { PlaceController } from './place.controller';
import { PlaceExistMiddleware } from './place.middleware';
import { PlaceRepository } from './place.repository';
import { PlaceService } from './place.service';

@Module({
  controllers: [PlaceController],
  providers: [
    PlaceService,
    PrismaService,
    PlaceRepository,
    PlaceExistMiddleware,
  ],
})
export class PlaceModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(PlaceExistMiddleware)
      .exclude(
        {
          path: 'place/',
          method: RequestMethod.POST,
        },
        {
          path: 'place/',
          method: RequestMethod.GET,
        },
        {
          path: 'place/filter/:name',
          method: RequestMethod.GET,
        },
      )
      .forRoutes(PlaceController);
  }
}
