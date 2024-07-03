/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { ValidateByOptions, ValidationArguments, ValidatorConstraint, registerDecorator } from "class-validator";
import { ValidatorConstraintInterface } from "class-validator/types/validation/ValidatorConstraintInterface";
import { usuarioRepository } from "src/usuario/usuario.repository";

@Injectable()
@ValidatorConstraint({async:true})
export class EmailEValidador implements ValidatorConstraintInterface 
{
    constructor (private usuarioRepository : usuarioRepository){}

   async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
       const usuarioEmailExiste = await this.usuarioRepository.existeComEmail(value);
       return usuarioEmailExiste;
    }
   
}

export const EmailEhUnico = (opcoesDeValidacao:ValidateByOptions) =>{
 return (objeto:object, propriedade:string)  => {
  registerDecorator({
    target: objeto.constructor,
    propertyName: propriedade,
    options: opcoesDeValidacao,
    constraints:[],
    validator:EmailEhUnico
  })
 }
}