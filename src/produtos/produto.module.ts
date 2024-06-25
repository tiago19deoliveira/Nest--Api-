/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { ProdutoController } from "./produto.controller";
import { UsuarioModule } from "src/usuario/usuario.module";
import { produtoRepository } from "./produto.repository";

@Module({
    imports:[UsuarioModule],
    controllers : [ProdutoController],
    providers:[produtoRepository]
})
export class produtoModule{
    
}