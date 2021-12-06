import { IsNotEmpty, MaxLength } from 'class-validator';

export class CreateClinicDto {
  @IsNotEmpty()
  @MaxLength(200)
  title: string;

  @IsNotEmpty()
  about: string;

  logo?: Express.Multer.File;
  background?: Express.Multer.File;
}
