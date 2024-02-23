import { IAlgoritimo } from './interface/algoritimo';

export class GerenciadorDeAlgoritimo {
  constructor(private algoritimos: Array<IAlgoritimo>) {}

  public executar() {
    if (this.algoritimos.length > 0) {
      this.entradaDeDados();

      this.processamentoDosDados();

      this.saidaDosDados();
      return;
    }
    console.log();
    console.log();
    console.log('Nenhum algoritimo foi adicionado ao gerenciador!!!!');
    console.log();
    console.log();
  }

  private entradaDeDados = () => {
    console.log('------------------ ENTRADA DE DADOS ------------------');

    this.algoritimos.forEach((questao) => {
      questao.entradaDeDados();
    });
    console.log();
  };

  private processamentoDosDados = () => {
    console.log('---------------- PROCESSANDO OS DADOS ----------------');

    this.algoritimos.forEach((questao) => {
      questao.processamentoDosDados();
    });
    const cincoSegundosAFrente = new Date();
    cincoSegundosAFrente.setSeconds(cincoSegundosAFrente.getSeconds() + 1);
    console.log(' Carregando...');
    while (cincoSegundosAFrente > new Date()) {}
    console.log(' Dados processados!!!');
  };

  private saidaDosDados = () => {
    console.log('--------------------- RESULTADOS ---------------------');

    this.algoritimos.forEach((questao) => {
      console.log();
      questao.saidaDosDados();
    });
    console.log('------------------------------------------------------');
  };
}
