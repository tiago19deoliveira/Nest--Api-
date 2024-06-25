/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */
export class produtoRepository{
 private produtos =[]
 
 async salvar (produtos){
    this.produtos.push(produtos)
 }
 async listar (){
    this.produtos
 }
 
 
}