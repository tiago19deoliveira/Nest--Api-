/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { produtoModule } from './produtos/produto.module';

@Module({
  imports: [UsuarioModule, produtoModule],
  
})
export class AppModule {}
