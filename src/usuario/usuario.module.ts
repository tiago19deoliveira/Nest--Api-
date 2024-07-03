/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { UsuarioController } from "./usuario.controller";
import { usuarioRepository } from "./usuario.repository";
import { EmailEValidador } from "src/validacao/email-e-one-valitador";

@Module({
    controllers :[UsuarioController],
    providers :[usuarioRepository, EmailEValidador]
})
export class UsuarioModule {

}