/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

/* eslint-disable prettier/prettier */
export class CriaUsuarioDTO {

    @IsNotEmpty({message:'O campo Nome não pode ser vazio'})
    nome: string;

    @IsEmail(undefined, {message : 'o campo email informado está inválido'})
    email:string;

    @MinLength(8, {message:"senha necessita de 8 caracteres"})
    senha :string;

}