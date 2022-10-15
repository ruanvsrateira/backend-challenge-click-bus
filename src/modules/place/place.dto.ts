import { IsString } from 'class-validator';

export class PlaceDTO {
  id?: string;

  @IsString()
  name: string;

  @IsString()
  city: string;

  @IsString()
  state: string;
}
