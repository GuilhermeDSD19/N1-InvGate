# Extensão de Atualização Automática do Portal Invgate

## Descrição

Esta extensão para Google Chrome foi projetada para atualizar automaticamente a página do portal Invgate em um intervalo definido. A extensão permite configurar o intervalo de atualização e iniciar ou parar o loop de atualizações.

**Nota:** Esta é uma versão antiga da extensão. A versão mais recente, que inclui um novo botão para gerar relatórios com dados dos analistas (como chamados solucionados por dia e chamados atribuídos por cada analista), está atualmente indisponível, pois o desenvolvimento foi interrompido devido à minha mudança de emprego. A versão mais recente foi deixada no PC da empresa anterior, e portanto não possuo mais acesso ao portal para continuar o desenvolvimento.

## Funcionalidades

- **Atualização Automática:** Atualiza a página do portal Invgate automaticamente no intervalo definido.
- **Configuração do Intervalo:** Permite definir o intervalo de atualização em milissegundos.
- **Iniciar e Parar Loop:** Botões para iniciar e parar o loop de atualizações.

## Como Usar

1. **Instalação:**
   - Clone o repositório do GitHub:
     ```bash
     git clone https://github.com/GuilhermeDSD19/N1-InvGate
     ```
   - Abra o Google Chrome e acesse `chrome://extensions/`.
   - Ative o "Modo de desenvolvedor" no canto superior direito da página de extensões.
   - Clique em "Carregar sem compactação" e selecione a pasta onde você clonou o repositório.
   - A extensão será carregada e estará disponível para uso.

2. **Configuração e Uso:**
   - Após instalar, clique no ícone da extensão no canto superior direito do navegador.
   - Insira o intervalo desejado em milissegundos no campo "Intervalo de Loop (MS)".
   - Clique no botão "Executar Script" para iniciar o loop de atualizações.
   - Clique no botão "Parar Looping" para interromper o loop de atualizações.

## Arquivos

- `popup.html`: Interface do usuário para a configuração e controle da extensão.
- `popup.js`: Código JavaScript responsável pela interação com a interface do usuário e envio de mensagens.
- `content.js`: Código JavaScript responsável pela lógica de atualização automática da página.

## Observações

- A extensão foi desenvolvida para um uso específico com o portal Invgate e pode não funcionar com outras páginas.
- A versão mais recente da extensão incluía funcionalidades adicionais, como geração de relatórios detalhados. Esta versão foi descontinuada devido a mudanças de emprego e não está disponível no momento.

## Contribuição

Se você deseja contribuir para o desenvolvimento ou melhorar esta extensão, sinta-se à vontade para clonar o repositório e fazer pull requests com suas alterações.
