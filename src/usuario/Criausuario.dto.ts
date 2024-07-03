/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { EmailEhUnico } from "src/validacao/email-e-one-valitador";

/* eslint-disable prettier/prettier */
export class CriaUsuarioDTO {

    @IsNotEmpty({message:'O campo Nome não pode ser vazio'})
    nome: string;
// ...

@IsEmail(undefined, { message: 'O e-mail informado é inválido' })
@EmailEhUnico({ message: 'Já existe um usuário com este e-mail' })
email: string;

    @MinLength(8, {message:"senha necessita de 8 caracteres"})
    senha :string;

}