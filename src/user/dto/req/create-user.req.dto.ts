import { Transform, Type } from 'class-transformer';
import {
  IsInt,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  Length,
  Matches,
  Max,
  MaxLength,
  Min,
  ValidateIf,
  ValidateNested,
} from 'class-validator';

import { TransformHelper } from '../../../common/helpers/transform.helper';

class CarReqDto {
  @IsString()
  @MaxLength(255)
  producer: string;

  @IsString()
  model: string;
}

export class CreateUserReqDto {
  @IsString()
  @Length(3, 30)
  @Transform(({ value }) => value.trim())
  public readonly name: string;

  @Matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, {
    message: 'Invalid email',
  })
  @IsString()
  @Transform(TransformHelper.trim)
  @Transform(TransformHelper.toLowerCase)
  public readonly email: string;

  @Matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, {
    message: 'Invalid password',
  })
  @IsString()
  public readonly password: string;

  @IsOptional()
  @IsString()
  @ValidateIf((object) => object.age > 25)
  @MaxLength(255)
  public readonly avatar?: string;

  @IsInt()
  @IsNumber()
  @Min(18)
  @Max(25)
  @IsOptional()
  @Type(() => Number)
  public readonly age?: number;

  @IsOptional()
  @IsObject()
  @Type(() => CarReqDto)
  @ValidateNested({ each: true })
  car: CarReqDto;
}
