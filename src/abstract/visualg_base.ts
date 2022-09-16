import PromptSync from 'prompt-sync';
export abstract class VisualgBase {
  prompt = PromptSync();

  public escreval(texto: string): void {
    console.log(texto);
  }

  public leia(texto: string = ''): string | number {
    let resposta = this.prompt(texto);
    if (!Number.isNaN(resposta)) {
      return Number(resposta);
    }
    return resposta;
  }
}
