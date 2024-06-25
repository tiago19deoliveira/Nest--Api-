/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post, Put } from "@nestjs/common";
import { produtoRepository } from "./produto.repository";

@Controller('produtos')
    export class ProdutoController{
        constructor( private produtoRepository: produtoRepository){

        }

        @Post ()
         cadastrarProduto(@Body()dadosDoProduto){
         const produtoCadastrado = this.produtoRepository.salvar(dadosDoProduto)
            return produtoCadastrado 
        }

        @Get ()
         listarProduto (){
            return this.produtoRepository.listarProdutos();
        }

        @Put ()
        async adicionarDescrição(){
         
        }
    }
