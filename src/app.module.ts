import { Module } from '@nestjs/common';
import { PlaceModule } from './modules/place/place.module';

@Module({
  imports: [PlaceModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
