/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from "@nestjs/common";
import { usuarioRepository } from "./usuario.repository";

@Controller('/usuarios')
export class UsuarioController{

    private  usuarioRepository = new usuarioRepository;

   @Post() 
   async criaUsuario(@Body() dadosDoUsuario){
    this.usuarioRepository.salvar(dadosDoUsuario)
    return dadosDoUsuario;
   }

   @Get()
   async listUser (){
  return this.usuarioRepository.listar();
   }
   
}