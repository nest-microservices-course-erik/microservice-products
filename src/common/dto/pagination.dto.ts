import { Type } from "class-transformer";
import { IsNumber, IsOptional, IsPositive, min } from "class-validator";

export class PaginationDto {

    @IsNumber()
    @IsPositive()
    @IsOptional()
    @Type(() => Number)
    limit?: number = 10;

    @IsNumber()
    @IsPositive()
    @IsOptional()
    @Type(() => Number)
    page?: number = 1;
}