import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateSkillDto {
  @ApiProperty({
    example: 'Протезування',
    description: 'назва навички',
  })
  @IsNotEmpty()
  public title: string;

  @ApiProperty({
    example: 'протезування - це ....',
    description: "Роз'яснення навички",
  })
  @IsNotEmpty()
  public description: string;
}
