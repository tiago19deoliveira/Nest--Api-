/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from "@nestjs/common";
import { usuarioRepository } from "./usuario.repository";
import { CriaUsuarioDTO } from "./Criausuario.dto";

@Controller('/usuarios')
export class UsuarioController{

    private  usuarioRepository = new usuarioRepository;

   @Post() 
   async criaUsuario(@Body() dadosDoUsuario : CriaUsuarioDTO){
    this.usuarioRepository.salvar(dadosDoUsuario)
    return dadosDoUsuario;
   }

   @Get()
   async listUser (){
  return this.usuarioRepository.listar();
   }
   
}