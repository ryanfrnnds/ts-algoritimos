# Configurando

Oi pessoal tudo bom? Eu sou o Ryan Fernandes e esse aqui é um modelo em TypeScript para treinar algoritimos.

Bom aqui eu utilizei o **node** então pra **rodar** o projeto vai ser necessário instalar ai o **node** na versão **16.16.0** que foi a versão que eu utilizei.
Mas não se preocupem que é bem simples. E não quero que vocês percam tempo focando em algo que não é necessário no momento.

Bora lá é rapidinho. Eu estou utilizando aqui o **node** no **windows** então eu preciso que você instala o **node** ai no teu **windwons**.
Mas sinta-se a vontade pra instalar o node como e onde você quiser...

- - https://nodejs.org/dist/v16.16.0/
    - Acessa essa página e instala ai o arquivo **MSI**
    - Ele será um executável então é só instalar como de prache no windowns.
      ![Alt text](./assets/nodeInstall.png?raw=true 'Extensões')
  - https://gitforwindows.org/
    - E clica no botão de download
    - Ele será um executável então é só instalar como de prache no windowns.
  - Baixa o VSCode (https://code.visualstudio.com/download)
    - um editor de texto que vamos utilizar para desenvolver o algoritimo
    - Ele será um executável então é só instalar como de prache no windowns.
- Agora baixa o projeto aqui do GitHub
  - Clica no botão **_verde_** escrito "_code_" logo a cima.
  - Depois em **Download ZIP**
    ![Alt text](./assets/donwloadProject.png?raw=true 'Extensões')
- Descompacta a pasta no local que você se sentir confortável e entra na pasta
  - Clica com o botão direito do mouse dentro da pasta
  - e escolhe a opção Git Bash Here
    - isso abrirá um terminal dentro do seu projeto
    - Dentro do terminal roda esses comandos!
      - Primeiro esse
      ```
        npm i
      ```
      - agora esse
      ```
        code .
      ```
      - deve ter aberto o VSCode na pasta do projeto.

# Com o VSCode Aberto

- Baixar as extensões recomendads no vsCode
  - Clicando no icone de extensões a direita. Verifique imagem a baixo
    ![Alt text](./assets/extensoesVsCode.png?raw=true 'Extensões')
  - Em seguida procure pelas extensões do workspace e instale todas. Verifique imagem a baixo
    ![Alt text](./assets/extensoesVsCodeInstal.png?raw=true 'Extensões')
- Projeto está pronto para desenvolvimento.

- _Agora dá uma lida rápida aqui em baixo para criar seu primeiro algoritimo._
  **BOA SORTE**

# Criando os algoritimos.

- Comandos para entrada e saide de dados

  - Saida de dados

  ```js
  console.log('O texto que você quiser colocar...');
  ```

  - Entrada de dados

  ```js
  import PromptSync from 'prompt-sync'; // Esse import deve ser adicionado na primeira linha da classe criada.
  prompt = PromptSync(); // Variável que deve ser criada em seu algoritimo para fazer uso do comando de entrada de dados.
  this.prompt(''); // Comando que aguardara a entrada do dado do TECLADO. Sempre retornando uma string.
  ```

- Dentro da pasta **src** crie uma pasta como o _nome do arquivo_
  ```
    mkdir src/[nome_da_pasta]
  ```
- Dentro da pasta criei o arquivo **.ts**

  ```
      type nul > src/[nome_da_pasta]/[nome_do_arquivo].ts
  ```

  - O arquivo **.ts** deve ser criado com o contéudo abaixo:

    ```js
    import { VisualgBase } from '../../abstract/visualg_base';
    import { IAlgoritimo } from '../../interface/algoritimo';

    export class NomeDoArquivo extends VisualgBase implements IAlgoritimo {
      // Declaração de variáveis

      // Fim declaração de variáveis

      titulo(): string {
        return 'Nomde do arquivo';
      }

      entradaDeDados(): void {
        // Informe aqui as entradas de dados do algoritimo.
      }
      processamentoDosDados() {
        // Informe aqui o seu processamento do algoritimo.
      }
      saidaDosDados() {
        // Informe aqui a saída de dado do algoritimo
      }
    }
    ```

  - **Então desenvolva seu algoritimo**
    - Existem um exemplo feito em **src/exemplo/algoritimo/algoritimo.ts**

# Para executar/debugar.

- abra o arquivo main.ts localizado na raiz da pasta **src/** do seu projeto. O modelo **cru** deve estar como abaixo:

  - Nele já está existindo um ExemploAlgoritimo() que está em **src/exemplo/algoritimo/algoritimo.ts**
  - **Apague esse exemplo quando construir o primeiro algoritimo.**

  ```js
  import { ExemploAlgoritimo } from './exemplo/algoritimo/exemplo_algoritimo';
  import { GerenciadorDeAlgoritimo } from './gerenciador_de_algoritimo';
  import { IAlgoritimo } from './interface/algoritimo';

  const algoritimos: Array<IAlgoritimo> = [new ExemploAlgoritimo()];

  const gerenciadorDosAlgoritimos: GerenciadorDeAlgoritimo =
    new GerenciadorDeAlgoritimo(algoritimos);

  gerenciadorDosAlgoritimos.executar();
  ```

- para cada _novo algoritimo criado_ adicione-o no arquivo **main.ts** na lina 5 onde está declarado a lista de algoritimos Exemplo abaixo:

  - const algoritimos: Array<IAlgoritimo> = [**new NomeArquivoCriado(), new Nome2ArquivoCriado(), new Nome3ArquivoCriado()**];
    - Apague o ExemploAlgoritimo se quiser.

  ```js
  .
  .
  .
  const algoritimos: Array<IAlgoritimo> = [
    new ExemploAlgoritimo(),
    new NomeArquivoCriado()
  ];
  .
  .
  .
  ```

- E com o arquivo **main.ts** aberto execute o f5 no vsCode.
