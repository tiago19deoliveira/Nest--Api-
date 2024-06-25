/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post, Put } from "@nestjs/common";
import { produtoRepository } from "./produto.repository";

@Controller('/produtos')
    export class ProdutoController{
        private produtoRepository = new produtoRepository;

        @Post ()
        async cadastrarProduto(@Body()dadosDoProduto){
            this.produtoRepository.salvar(dadosDoProduto)
            return dadosDoProduto
        }

        @Get ()
        async listarProduto (){
            return this.produtoRepository.listar();
        }

        @Put ()
        async adicionarDescrição(){
         
        }
    }
