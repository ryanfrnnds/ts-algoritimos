import { VisualgBase } from '../../abstract/visualg_base';
import { IAlgoritimo } from '../../interface/algoritimo';

export class ExemploAlgoritimo extends VisualgBase implements IAlgoritimo {
  // Declaração de variáveis
  numero: any = 0;
  sucessor: any = 0;
  antecessor: any = 0;

  // Fim declaração de variáveis

  titulo(): string {
    return 'Exemplo de algoritimo';
  }

  entradaDeDados(): void {
    // Informe aqui as entradas de dados do algoritimo.
    this.escreval('Informe um número');
    this.numero = this.leia();
  }
  processamentoDosDados() {
    // Informe aqui o seu processamento do algoritimo.
    this.antecessor = this.numero - 1;
    this.sucessor = this.numero + 1;
  }
  saidaDosDados() {
    // Informe aqui a saída de dado do algoritimo
    this.escreval(`O antecessor é: ${this.antecessor}`);
    this.escreval(`O sucessor é: ${this.sucessor}`);
  }
}
