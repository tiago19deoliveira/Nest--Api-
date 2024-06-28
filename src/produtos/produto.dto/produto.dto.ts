/* eslint-disable prettier/prettier */
import { Type } from "class-transformer";
import { IsArray, IsNotEmpty, IsNumber, IsString, IsUrl, MaxLength, Min, ValidateNested } from "class-validator";

/* eslint-disable prettier/prettier */
export class produtoDTO {

    @IsNotEmpty({message:'o nome não pode ser vazio'})
    readonly nome:string;

    @IsNumber({ maxDecimalPlaces: 2, allowNaN: false, allowInfinity: false })
    @Min(1, { message: 'O valor precisa ser maior que zero' })
    valor: number;

    @IsNumber()
    @Min(0, {message:'a quantidade informada não pode ser igual a zero'})
    readonly quantidade : number;

    @IsString()
    @IsNotEmpty()
    @MaxLength(1000, {message: ' Descrição não pode conter mais de mil caracteres'})
    readonly descricao: string;


 //validando caracteristicas
    @ValidateNested()
    @IsArray() 
    @Type(() => CaracteristicaProdutoDTO)
    caracteristicas: CaracteristicaProdutoDTO[];

    @IsArray()
    readonly image: ImagemProdutoDTO[];
}

export class CaracteristicaProdutoDTO {
    @IsString()
    @IsNotEmpty({ message: 'Nome da cadasterística não pode ser vazio' })
    nome: string;
    
    @IsString()
    @IsNotEmpty({ message: 'Descrição da característica não pode ser vazio' })
    descricao: string;
    }

  export class ImagemProdutoDTO{

    @IsUrl()
    url: string;
    @IsString()
    @IsNotEmpty({ message: 'Descrição da imagem não pode ser vazia' })
    descricao: string;

};