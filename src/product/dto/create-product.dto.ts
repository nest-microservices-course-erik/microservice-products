import { IsNotEmpty, isNotEmpty, IsNumber, IsPositive, IsString, Min } from "class-validator";

export class CreateProductDto {

    @IsString()
    //@Min(3)
    @IsNotEmpty()
    name: string

    @IsNumber({
        maxDecimalPlaces: 2
    })
    @IsPositive()
    @Min(0)
    price: number

}
