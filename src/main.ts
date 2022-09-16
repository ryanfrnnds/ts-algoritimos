import { ExemploAlgoritimo } from './exemplo/algoritimo/exemplo_algoritimo';
import { GerenciadorDeAlgoritimo } from './gerenciador_de_algoritimo';
import { IAlgoritimo } from './interface/algoritimo';

const algoritimos: Array<IAlgoritimo> = [new ExemploAlgoritimo()];

const gerenciadorDosAlgoritimos: GerenciadorDeAlgoritimo =
  new GerenciadorDeAlgoritimo(algoritimos);

gerenciadorDosAlgoritimos.executar();
