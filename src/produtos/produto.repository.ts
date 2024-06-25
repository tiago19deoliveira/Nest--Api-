/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */

import { Injectable } from "@nestjs/common"

@Injectable()
export class produtoRepository{
 private produtos = [];
 
  listarProdutos (){
    this.produtos;
 } 
  salvar (produtos){
    this.produtos.push(produtos)
 }
 
 
}