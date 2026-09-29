/**
 * O ETERNO FILHO PRÓDIGO — ARQUIVO PESSOAL DE TEXTOS & MANUSCRITOS
 * Textos autorais reais preservados e catalogados.
 */

// ==========================================================================
// 1. BANCO DE DADOS DE TEXTOS & MANUSCRITOS AUTORAIS
// Para adicionar um novo texto, basta duplicar um bloco abaixo e preenchê-lo.
// ==========================================================================
const ARCHIVE_DOCUMENTS = [
  {
    id: "01",
    slug: "no-topo-do-discernimento",
    title: "No Topo do Discernimento",
    subtitle: "Sobre os limites do conhecimento, a desorganização do mundo e a tolerância pela indiferença.",
    date: "22 de setembro de 2026",
    category: "Filosofia",
    readTime: "4 min",
    docRef: "DOC. REG. Nº 001-A",
    folder: "Tomo I — Caderno de Princípios",
    content: `
      <p>Enquanto estive no topo do discernimento, percebi que dificilmente serei um reacionário, exceto diante de causas que considero óbvias. Percebi também que conhecimento não é poder. O conhecimento pode dar-te o poder de compreender, mas não necessariamente o poder de fazer ou de mudar aquilo que julgas errado.</p>

      <p>Por isso, dificilmente apoiarei lados políticos. Em sua maioria, são desorganizados e não oferecem garantia alguma de que aquilo que prometem será realmente realizado.</p>

      <p>Também percebi que o mundo talvez não seja tão maravilhoso e cheio de coisas a descobrir quanto gostamos de imaginar. Essa visão pode ser apenas um atestado de imaturidade. Isso não significa que eu não goste de descobrir coisas. Pelo contrário: um dos meus maiores desejos é sempre ter algo novo para descobrir. Ter algo capaz de nos impressionar é bom. Faz bem. E talvez isso seja, por si só, um bom argumento para nunca sermos soberbos em relação ao conhecimento.</p>

      <p>Nunca se maravilhe com promessas. Ao longo de toda a história da humanidade, quantas promessas extravagantes realmente se cumpriram?</p>

      <p>Seja mais sincero com o mundo: acredite em Deus.</p>

      <p>Se existe algo verdadeiramente bom, então talvez não seja possível encontrá-lo plenamente em um lugar tão desorganizado, contraditório e cheio de mentiras e erros como o nosso mundo. Existimos há tempo suficiente. Se o perfeito bem-viver fosse realmente possível, já o teríamos alcançado. Eu garanto que tempo não nos faltou.</p>

      <p>A ideia de uma sociedade completamente justa e organizada parece depender da imaginação de uma sociedade performática, na qual todos estão unidos em torno de um mesmo objetivo. Mas isso nunca aconteceu de forma duradoura. E, quando talvez tenha acontecido por algum tempo, logo terminou, e cada um voltou a viver a própria vida, como fizeram todos os nossos antigos.</p>

      <p>Além disso, o esforço cansa. E nós não queremos viver cansados.</p>

      <p>Manter uma justiça perfeita exige esforço constante, e não acredito que exista alguém disposto a viver exclusivamente em função de uma engrenagem social. Em algum momento, cada indivíduo deseja voltar para si mesmo, para sua própria vida, para seus próprios interesses.</p>

      <blockquote>
        "Somos tolerantes porque somos indiferentes. Não queremos interromper nossas vidas para avaliar aquilo que nos parece estranho ou incompreensível. Então, na maioria das vezes, simplesmente deixamos de lado e seguimos em frente."
      </blockquote>
    `
  },
  {
    id: "02",
    slug: "o-coliseu",
    title: "O Coliseu",
    subtitle: "A mercantilização do perigo e o retorno do espetáculo do sofrimento humano.",
    date: "22 de setembro de 2026",
    category: "Ensaios",
    readTime: "3 min",
    docRef: "DOC. REG. Nº 002-B",
    folder: "Tomo I — Crítica Social",
    content: `
      <p>Eu lembro do Coliseu como todos lembram. Na verdade, acho que o Coliseu não é mais apenas algo antigo, pertencente a uma sociedade distante. Acho que ele voltou e está entre nós, só que agora de uma forma bem diferente.</p>

      <p>Hoje, ele não é mais tão direto ao ponto, porque isso pode gerar desconforto. E desconforto é dor, e nós não gostamos de sentir dor. Então, tudo acontece de uma forma mais amaciada, mais calculada. O Coliseu moderno tem como uma de suas principais características o equilíbrio entre sofrimento e ganho.</p>

      <p>O comércio de hoje é bem direto ao dizer: o que você vai vender e o que você vai ganhar em troca. Dentro da lei, tudo funciona dentro dos limites do possível. Você é avisado — ou não — sobre os perigos que vai enfrentar ao vender seu trabalho, seu tempo ou, em certos casos, até você mesmo.</p>

      <p>Se você enfrentar um leão, provavelmente vai ganhar muito mais do que alguém que apenas lutou contra outro homem usando socos e pontapés.</p>

      <p>Eu imagino um alto-falante gritando bem alto:</p>

      <blockquote>
        "Este é José! José terá que andar por ruas com perigos mortais e imprevisíveis. Ele não terá garantia de voltar com seus pertences ou até mesmo com a própria vida!"
      </blockquote>

      <p>Existe algo mais cinematográfico e mais parecido com um Coliseu do que isso? Eu desafio alguém a discordar de mim.</p>

      <p>Coisas como o Coliseu eram interessantes porque o ser humano tem uma ânsia de aprender sobre tudo, inclusive sobre como lutar contra leões e qualquer outra coisa que represente uma ameaça em potencial. Ver alguém se dando mal também faz parte da sociedade. Queremos saber os porquês. Queremos saber se foi algo direto ou indireto, se foi um acidente, e, se foi, como aconteceu.</p>

      <p>No fim, tudo isso serve para uma coisa: aprender como não fazer igual.</p>
    `
  },
  {
    id: "03",
    slug: "vivendo-no-fim-do-mundo",
    title: "Vivendo no Fim do Mundo",
    subtitle: "Um cenário hipotético sobre o esgotamento das ideias, a ilusão da meritocracia e as engrenagens da sobrevivência.",
    date: "22 de setembro de 2026",
    category: "Crônicas",
    readTime: "7 min",
    docRef: "DOC. REG. Nº 003-C",
    folder: "Tomo II — Cenários & Distopias",
    content: `
      <p>Este é um cenário hipotético que criei para tentar imaginar como seria o mundo moderno depois de esgotadas todas as suas ideias. Um mundo cansado de inventar. Um lugar onde tudo o que poderia existir já existe, e onde nenhuma novidade é realmente nova.</p>

      <p>As ruas estão cheias de buracos e mal sinalizadas, mas as multas são absurdamente altas. Junte todos os impostos pagos pela população e encontrará arrecadações milionárias. Ainda assim, as periferias continuam praticamente iguais às de cem anos atrás.</p>

      <p>Na verdade, o sistema de impostos acabou se tornando uma espécie de rede de sustentação. Ele mantém diversas pessoas acima da linha vermelha da qualidade de vida, mas não é capaz — ou talvez não tenha interesse — em levá-las muito além disso.</p>

      <p>Os políticos daquela cidade estão sempre ocupados. Alguns tentam parecer importantes, outros demonstram prestatividade. Todos parecem estar fazendo alguma coisa. O problema é que quase ninguém sabe dizer exatamente o quê.</p>

      <p>Na periferia, os principais negócios são casas de apostas e redes de prostituição digital. Naquele lugar, viver uma vida decente exige abrir mão de alguma coisa essencial. Ainda assim, estão sempre atualizados. Conhecem as novas tendências e acompanham as novidades do nicho em que vivem.</p>

      <p>Do outro lado da cidade, vivem os ricos donos das grandes prestadoras de serviços. Eles praticamente não trabalham. Afinal, por que perder tempo administrando os próprios negócios quando é possível delegar tudo a outra pessoa e continuar recebendo dinheiro?</p>

      <p>Essa é a grande vantagem que todos procuram: trabalhar o mínimo possível e ganhar o máximo possível.</p>

      <p>Naquela cidade, as pessoas já aceitam que o valor de um indivíduo pode mudar dependendo de sua riqueza. O respeito também é distribuído dessa maneira. Ser rico ou pobre não determina apenas onde você mora, mas também o quanto sua presença será tolerada.</p>

      <p>Existem lugares onde certas pessoas simplesmente não entram. Pessoas com deficiências, qualquer que seja a natureza delas, são consideradas inadequadas para determinados ambientes.</p>

      <p>E, ao mesmo tempo, são justamente nesses lugares que se encontram os seres humanos mais bonitos, bem-sucedidos e admirados daquela sociedade. São desejados por todos. Respeitados por todos. Observados por todos.</p>

      <p>Existem iniciativas destinadas a ajudar pessoas com problemas psicológicos e outras deficiências. Há campanhas, instituições e projetos voltados ao bem-estar social. Afinal, uma sociedade não pode ser completamente cruel consigo mesma.</p>

      <p>Não porque tenha deixado de ser cruel.</p>

      <p>Contudo, o sono tranquilo torna-se impossível para qualquer um quando a consciência pesa em demasia.</p>

      <p>É preciso ajudar algumas pessoas para que o restante possa continuar vivendo tranquilamente.</p>

      <p>Desse modo, torna-se possível que todos continuem alimentando a ilusão de viver em um mundo plenamente justo.</p>

      <p>No topo dessa sociedade estão os humanos que servem como exemplos de como viver. Eles são apresentados como modelos de comportamento, aparência e sucesso. Nunca devem ser humilhados. Devem possuir dinheiro suficiente para satisfazer qualquer desejo e, naturalmente, relacionar-se com as pessoas mais bonitas e desejadas.</p>

      <p>Esse modelo é constantemente apresentado à população pobre e relativamente feia das classes inferiores. Eles observam aquilo que deveriam ser, mas jamais conseguem alcançar.</p>

      <p>Assim, aprendem a desprezar a própria aparência, a própria condição e, muitas vezes, a própria vida.</p>

      <p>Por isso, vivem infelizes consigo mesmos. Alguns encontram refúgio nas drogas. Outros, nas casas de apostas. Uns procuram esquecer aquilo que são; outros apostam na possibilidade de, algum dia, deixarem de ser.</p>

      <p>Aliás, os próprios pobres concordam com a vida que levam.</p>

      <p>Para eles, não existe necessariamente uma injustiça a ser corrigida. O mundo simplesmente funciona assim. A natureza sempre foi desigual, alguns nascem fortes, outros fracos; alguns são bonitos, outros feios; alguns possuem muito, outros possuem pouco.</p>

      <p>Nas redes sociais, existem pessoas que não são aquilo que gostariam de ser e fazem de tudo para parecer.</p>

      <blockquote>
        "Parecer rico. Parecer bonito. Parecer bem-sucedido. Mudam o próprio rosto, escondem aquilo que consideram imperfeito e passam a viver como uma versão fabricada de si mesmos."
      </blockquote>

      <p>Vestem cópias de produtos ultra caros e exibem aquilo que não possuem. No fim, todos estão dispostos a viver como animais cujo maior objetivo é se exibir diante do outro para conseguir alcançar um objetivo.</p>

      <p>Muitas dessas coisas, no entanto, estão ligadas a acontecimentos pessoais. Decepções, ressentimentos ou simplesmente o desejo de parecer maior e mais influente do que alguém.</p>

      <p>Quem tem mais dinheiro. Quem conquista mais pessoas. Quem consegue ir aonde quiser.</p>

      <p>Todos os que estão afundados nessa sociedade simplesmente não possuem um ponto de júbilo. Não há um lugar para onde possam retornar e sentir que, apesar de tudo, existe alguma coisa genuinamente boa.</p>

      <p>Todos estão inseridos e contribuindo diretamente para essa rede brutal de sobrevivência e status. Mesmo aqueles que sofrem com ela continuam alimentando seu funcionamento, porque precisam sobreviver dentro dela.</p>

      <p>Os julgamentos daquela sociedade não são tão profundos nem tão interessados na verdade quanto deveriam ser. Ninguém parece realmente interessado em compreender o crime, suas causas ou aquilo que levou alguém a cometê-lo.</p>

      <p>O que importa é satisfazer o desejo de punição.</p>

      <p>A gravidade de um crime já não é determinada pelo próprio crime, mas pelo quanto aquela sociedade deseja punir naquele momento. Uma palavra mal colocada pode receber o mesmo peso de um assassinato, enquanto um assassinato pode ser tratado com a mesma indiferença de uma palavra.</p>

      <p>Uma característica curiosa desta sociedade é que os super-ricos vivem espalhando narrativas de superação. À primeira vista, parecem testemunhos sinceros de sucesso. Mas, no fundo, não passam de histórias que eles contam a si mesmos para acreditar que merecem tudo o que possuem. É uma forma de justificar a própria fortuna, de transformá-la em recompensa inevitável pelo próprio mérito, mesmo que, em algum lugar silencioso dentro deles, saibam que a realidade não é tão simples.</p>

      <p>Basta pensar no seguinte: enquanto essa narrativa é repetida, existem pessoas que sofrem — ou ainda sofrerão — o dobro ou o triplo de qualquer sofrimento que um super-rico tenha vivido. No entanto, elas não possuem sequer 1% da riqueza dele.</p>

      <p>As religiões são deixadas de lado conforme a conveniência e a ocasião. Quando surge alguma dor que precisa ser curada, uma crença é perfeitamente aceitável. Não há problema em acreditar em Deus, em alguma força maior ou em qualquer outra coisa que ofereça consolo. Desde que a fé não interfira na busca pelo prazer, ela é tolerada.</p>

      <p>Aliás, nesta sociedade existem religiões para todo tipo de desejo. Algumas prometem riqueza; outras explicam o fracasso por meio de "maldições" ou "amarras" espirituais. Mas, na verdade, tudo é uma questão de interesse e de quem foi deixado para trás, de quem é considerado menos interessante.</p>

      <p>Essa sociedade não se resume em apenas um pensamento sociológico ou filosófico, na verdade é um grande misto, você acredita no que você quer. É uma grande árvore, tem galho para todo tipo de macaco.</p>
    `
  },
  {
    id: "04",
    slug: "a-joia-redentora",
    title: "A Joia Redentora e a Essência da Felicidade",
    subtitle: "Sobre o dever de defender o bem, a clareza moral e a busca pela essência da felicidade.",
    date: "22 de setembro de 2026",
    category: "Reflexões",
    readTime: "3 min",
    docRef: "DOC. REG. Nº 004-D",
    folder: "Tomo I — Caderno de Princípios",
    content: `
      <p>Eu andei pensando: se você vive em um mundo problemático, como você pode viver relativamente bem? Como encontrar conforto? Então concluí: ter certeza de defender o bem é uma joia redentora que pode confortar aqueles que defendem os vulneráveis.</p>

      <p>O que é bom? O bom é o certo, o verdadeiro, que contém justiça, que não tem necessária ligação com o prazer. O bem pode gerar resistência, inteligência e humildade. Pode-se pensar em uma sociedade pacífica, mas não se pode pensar em uma sociedade passiva; o mal existe e deve ser combatido.</p>

      <blockquote>
        "Quem enfrentará o mal? Confiança não é atestado de veracidade: você pode causar um mal defendendo algo que no fim não é bom, sem o saber. Você poderá ser um exemplo de maldade enquanto se enxerga como precursor da paz."
      </blockquote>

      <p>Então, quem pode defender o bem? Aquele que tem certeza do que fala, daquilo que pensa, que sabe que é verdadeiro e que é.</p>

      <p>Não encontrei felicidade na riqueza ou na pobreza. Então, por onde anda esta criança? Talvez a felicidade não seja um acúmulo de realizações, mas sim uma essência delas. Tal como um perfume que não é composto apenas por água, mas por todos os elementos que fazem ele ser fragrante.</p>
    `
  },
  {
    id: "05",
    slug: "a-linguagem-ilumina-nao-fabrica",
    title: "A Linguagem Ilumina, Não Fabrica",
    subtitle: "Por que a existência precede a definição e como a confusão entre ser e dizer enfraquece o debate lógico.",
    date: "22 de setembro de 2026",
    category: "Filosofia",
    readTime: "4 min",
    docRef: "DOC. REG. Nº 005-E",
    folder: "Tomo I — Ontologia & Linguagem",
    content: `
      <p>No início, convém esclarecer ponto simples: existir não depende, por necessidade lógica, de ter sido definido por alguém. Esse esclarecimento orienta todo desenvolvimento seguinte.</p>

      <p>Quando a mente humana observa algo, surge o impulso imediato de descrever. Essa descrição utiliza termos, nomes, propriedades. Contudo, o ato de descrever não produz a coisa descrita. A palavra surge depois do ser, não antes. Confundir esses dois níveis gera erro persistente.</p>

      <p>Muitos raciocínios falham porque tratam a descrição como se fosse a origem. Quando alguém diz “isso possui tal propriedade”, surge a pergunta apressada: <em>quem concedeu?</em> Porém, tal pergunta já embute suposição não demonstrada. Supõe-se que toda propriedade precise de doador, quando pode simplesmente expressar modo próprio de existir.</p>

      <p>Imagine um objeto qualquer: possui forma, relação, limite, comportamento. Nenhum desses aspectos exige decisão prévia consciente. Eles apenas são. O intelecto humano, ao perceber, recorta esses aspectos e organiza em linguagem. A linguagem acompanha a realidade; não funda a realidade.</p>

      <blockquote>
        "Atributo não significa rótulo colado externamente. Significa o modo pelo qual algo se mostra inteligível. Se a mente não existisse, a coisa continuaria sendo aquilo que é, mesmo sem nome, mesmo sem explicação."
      </blockquote>

      <p>Erro comum nasce do hábito moderno de pensar que tudo precisa de intenção anterior. Contudo, intenção só existe onde já existe mente. Exigir mente anterior para todo ser conduz a regressão infinita ou a um salto arbitrário. A lógica não obriga nenhum desses caminhos.</p>

      <p>Portanto, a existência pode ser tomada como dado primário. Atributos surgem como leitura possível desse dado, não como contrato imposto. Definir ajuda a compreender; não ajuda a criar.</p>

      <p>Quando o debate ignora a distinção entre ser e dizer, a crítica perde a força. Um questionamento válido precisa provar que todo ser depende de definição prévia. Sem essa prova, o argumento desmorona.</p>

      <blockquote>
        "Linguagem ilumina; não fabrica. Entender isso encerra a disputa artificial e devolve a discussão para o terreno lógico sólido."
      </blockquote>

      <p>Opiniões contrárias não possuem peso lógico apenas por existirem; exigem demonstração correspondente. Quando alguém sustenta uma posição oposta, a responsabilidade recai sobre quem afirma, não sobre quem nega. A discordância, por si só, não invalida o argumento apresentado, pois o confronto racional ocorre por meio de provas, não por preferência pessoal ou insistência verbal.</p>

      <p>Sem evidência ou encadeamento lógico coerente, a posição divergente permanece como mera afirmação, incapaz de competir com um argumento fundamentado. Debate sério exige critério: quem propõe explicação diferente precisa mostrar por que ela se sustenta melhor, sob o risco de transformar a discussão em simples troca de opiniões sem valor racional.</p>
    `
  },
  {
    id: "06",
    slug: "o-custo-da-inteligencia",
    title: "O Custo da Inteligência e o Refúgio das Ilusões",
    subtitle: "Por que o ser humano recorre a promessas simplistas e como a busca por alívio imediato compromete o autodomínio.",
    date: "22 de setembro de 2026",
    category: "Ensaios",
    readTime: "3 min",
    docRef: "DOC. REG. Nº 006-F",
    folder: "Tomo I — Psicologia & Sociedade",
    content: `
      <p>Por que, em momentos de crise, tantas pessoas passam a acreditar em promessas simplistas ou em soluções políticas ilusórias? A resposta não é complexa: o ser humano tende a exercer sua inteligência apenas até onde lhe é conveniente. Pensar com profundidade exige esforço, tempo e disposição para lidar com incertezas.</p>

      <p>Ser verdadeiramente inteligente tem um custo alto. Exige questionamento, responsabilidade e, muitas vezes, desconforto. Em contrapartida, aderir a ideias prontas e superficiais é mais fácil e menos exigente. A ingenuidade, embora limitada, oferece alívio imediato — e é justamente por isso que tantas vezes prevalece.</p>

      <blockquote>
        "O ser humano tende a exercer sua inteligência apenas até onde lhe é conveniente. Pensar com profundidade exige esforço, tempo e disposição para lidar com incertezas."
      </blockquote>

      <p>Há também outros fatores que agravam essa situação. Algumas pessoas, por diferentes razões, acabam sendo afastadas de grupos que oferecem respostas ou caminhos para lidar com questões existenciais comuns do cotidiano. Sem esse senso de pertencimento ou orientação, tornam-se mais suscetíveis a aderir a ideias simplistas, que prometem soluções rápidas e aparentam preencher esse vazio.</p>

      <p>Esse ponto de vista é relevante porque ajuda a explicar por que, mesmo após milhares de anos, o ser humano ainda não alcançou plena consciência nem domínio de si. Ele também lança luz sobre o fracasso recorrente de grandes projetos e ideias ao longo da história.</p>

      <p>Em muitos casos, essas tentativas se apoiam em promessas de alto conforto e baixa exigência, oferecendo respostas atraentes, porém frágeis. A busca por soluções que minimizem o esforço e maximizem o alívio imediato acaba comprometendo sua eficácia real, tornando-as pouco sustentáveis diante da complexidade da experiência humana.</p>
    `
  },
  {
    id: "07",
    slug: "estrategias-de-poder-e-livre-pensamento",
    title: "Estratégias de Poder e o Falso Livre-Pensamento",
    subtitle: "Sobre a evolução tática do poder estatal e a troca superficial de dogmas sob o rótulo da emancipação.",
    date: "22 de setembro de 2026",
    category: "Ensaios",
    readTime: "3 min",
    docRef: "DOC. REG. Nº 007-G",
    folder: "Tomo I — Política & Filosofia",
    content: `
      <p>Os primeiros regimes comunistas, por não possuírem precedentes históricos consolidados e por operarem sob um forte impulso revolucionário, recorreram com maior frequência à repressão direta e violenta contra as religiões, vistas como obstáculos à construção de uma nova ordem social. Com o passar do tempo, regimes comunistas posteriores aprenderam que a erradicação forçada da fé produzia resistência e instabilidade. Assim, passaram a adotar estratégias mais pragmáticas e sofisticadas, substituindo a força bruta por mecanismos de controle, cooptação e tolerância condicionada, buscando não eliminar a religião, mas subordiná-la aos interesses do Estado. Essa mudança representa menos uma abertura ideológica e mais uma evolução estratégica na forma de exercer o poder.</p>

      <hr class="section-divider">

      <p>O termo “livre-pensador” tornou-se, em muitos contextos, uma etiqueta identitária que descreve mais uma rejeição superficial a instituições tradicionais do que um exercício real de pensamento filosófico livre.</p>

      <blockquote>
        "Pensar de fato exige confrontar fundamentos, assumir responsabilidades intelectuais e reconhecer que abandonar uma crença não equivale a escapar de todas as crenças. Em vez de liberdade, muitos apenas trocam um dogma antigo por outro mais confortável."
      </blockquote>
    `
  }
];

// ==========================================================================
// 2. ESTADO DA APLICAÇÃO & CONTROLES
// ==========================================================================
const AppState = {
  currentArticleIndex: 0,
  activeCategory: "ALL",
  searchQuery: "",
  fontSizeStep: 0, // -1 (menor), 0 (normal), 1 (maior), 2 (muito grande)
};

// ==========================================================================
// 3. ELEMENTOS DO DOM
// ==========================================================================
const DOM = {
  // Sidebar & Navigation
  sidebar: document.getElementById("sidebarArchive"),
  sidebarBackdrop: document.getElementById("sidebarBackdrop"),
  menuToggleBtn: document.getElementById("menuToggleBtn"),
  sidebarCloseBtn: document.getElementById("sidebarCloseBtn"),
  manuscriptList: document.getElementById("manuscriptList"),
  categoryFilters: document.getElementById("categoryFilters"),
  catalogCount: document.getElementById("catalogCount"),
  searchInput: document.getElementById("searchInput"),
  clearSearchBtn: document.getElementById("clearSearchBtn"),
  currentYear: document.getElementById("currentYear"),

  // Reading Chamber
  readingChamber: document.getElementById("readingChamber"),
  manuscriptPage: document.getElementById("manuscriptPage"),
  docCatalogRef: document.getElementById("docCatalogRef"),
  articleDocNumber: document.getElementById("articleDocNumber"),
  articleCategoryBadge: document.getElementById("articleCategoryBadge"),
  articleTitle: document.getElementById("articleTitle"),
  articleSubtitle: document.getElementById("articleSubtitle"),
  articleDate: document.getElementById("articleDate"),
  articleReadTime: document.getElementById("articleReadTime"),
  articleFolder: document.getElementById("articleFolder"),
  articleBody: document.getElementById("articleBody"),
  footerStampDate: document.getElementById("footerStampDate"),

  // Tools & Pagination
  fontSizeDecBtn: document.getElementById("fontSizeDecBtn"),
  fontSizeIncBtn: document.getElementById("fontSizeIncBtn"),
  printBtn: document.getElementById("printBtn"),
  prevArticleBtn: document.getElementById("prevArticleBtn"),
  nextArticleBtn: document.getElementById("nextArticleBtn"),
  prevArticleTitle: document.getElementById("prevArticleTitle"),
  nextArticleTitle: document.getElementById("nextArticleTitle"),

  // Author Dossier Modal
  authorModalBackdrop: document.getElementById("authorModalBackdrop"),
  authorModalTriggerSeal: document.getElementById("authorModalTriggerSeal"),
  closeAuthorModalBtn: document.getElementById("closeAuthorModalBtn"),
};

// ==========================================================================
// 4. INICIALIZAÇÃO & CONFIGURAÇÕES
// ==========================================================================
function initApp() {
  if (DOM.currentYear) {
    DOM.currentYear.textContent = new Date().getFullYear();
  }

  // Carregar preferências salvas de fonte
  loadUserPreferences();

  // Renderizar categorias no filtro
  renderCategoryFilters();

  // Escutar eventos de hash na URL (para navegação direta e botões avançar/voltar)
  window.addEventListener("hashchange", handleHashChange);

  // Determinar artigo inicial a partir do hash ou usar o primeiro
  const initialIndex = getArticleIndexFromHash();
  AppState.currentArticleIndex = initialIndex !== -1 ? initialIndex : 0;

  // Renderizar lista do catálogo e o texto atual
  renderCatalogList();
  displayCurrentArticle();

  // Vincular eventos de interface
  bindEventListeners();
}

// ==========================================================================
// 5. RENDERIZAÇÃO DO CATÁLOGO & FILTROS
// ==========================================================================
function renderCategoryFilters() {
  const categories = ["ALL", ...new Set(ARCHIVE_DOCUMENTS.map(doc => doc.category))];
  
  DOM.categoryFilters.innerHTML = "";
  categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `cat-filter-btn ${cat === AppState.activeCategory ? "active" : ""}`;
    btn.textContent = cat === "ALL" ? "TODOS" : cat.toUpperCase();
    btn.addEventListener("click", () => {
      AppState.activeCategory = cat;
      document.querySelectorAll(".cat-filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderCatalogList();
    });
    DOM.categoryFilters.appendChild(btn);
  });
}

function getFilteredDocuments() {
  return ARCHIVE_DOCUMENTS.filter(doc => {
    const matchesCategory = AppState.activeCategory === "ALL" || doc.category === AppState.activeCategory;
    const query = AppState.searchQuery.toLowerCase().trim();
    const matchesSearch = !query || 
      doc.title.toLowerCase().includes(query) || 
      (doc.subtitle && doc.subtitle.toLowerCase().includes(query)) ||
      doc.content.toLowerCase().includes(query) ||
      doc.category.toLowerCase().includes(query);
    
    return matchesCategory && matchesSearch;
  });
}

function renderCatalogList() {
  const filtered = getFilteredDocuments();
  DOM.manuscriptList.innerHTML = "";

  if (DOM.catalogCount) {
    const countStr = filtered.length < 10 ? `0${filtered.length}` : `${filtered.length}`;
    DOM.catalogCount.textContent = `${countStr} ${filtered.length === 1 ? "TEXTO" : "TEXTOS"}`;
  }

  if (filtered.length === 0) {
    const emptyItem = document.createElement("li");
    emptyItem.style.padding = "1.5rem 0.5rem";
    emptyItem.style.textAlign = "center";
    emptyItem.style.fontFamily = "var(--font-typewriter)";
    emptyItem.style.fontSize = "0.78rem";
    emptyItem.style.color = "var(--ink-muted)";
    emptyItem.textContent = "Nenhum manuscrito catalogado com este termo.";
    DOM.manuscriptList.appendChild(emptyItem);
    return;
  }

  filtered.forEach(doc => {
    const originalIndex = ARCHIVE_DOCUMENTS.findIndex(d => d.id === doc.id);
    const isActive = originalIndex === AppState.currentArticleIndex;

    const li = document.createElement("li");
    li.className = `manuscript-item ${isActive ? "active" : ""}`;
    li.dataset.index = originalIndex;

    li.innerHTML = `
      <a href="#${doc.slug}" class="manuscript-link" aria-label="${doc.id} — ${doc.title}">
        <div class="item-top-row">
          <span class="item-number">${doc.id}</span>
          <span class="item-title">${doc.title}</span>
        </div>
        <div class="item-meta">
          <span>${doc.date.split(" de ")[0]} ${doc.date.split(" de ")[1].substring(0, 3).toUpperCase()}</span>
          <span class="item-bullet">•</span>
          <span>${doc.category}</span>
        </div>
      </a>
    `;

    li.querySelector(".manuscript-link").addEventListener("click", (e) => {
      e.preventDefault();
      navigateToArticle(originalIndex);
      if (window.innerWidth <= 980) {
        closeSidebar();
      }
    });

    DOM.manuscriptList.appendChild(li);
  });
}

// ==========================================================================
// 6. EXIBIÇÃO & NAVEGAÇÃO ENTRE ARTIGOS
// ==========================================================================
function displayCurrentArticle() {
  const currentDoc = ARCHIVE_DOCUMENTS[AppState.currentArticleIndex];
  if (!currentDoc) return;

  // Suave transição de fade
  DOM.manuscriptPage.style.opacity = "0";

  setTimeout(() => {
    // Atualizar Metadados
    DOM.docCatalogRef.textContent = currentDoc.docRef || `DOC. REG. Nº 00${currentDoc.id}-A`;
    DOM.articleDocNumber.textContent = `MANUSCRITO Nº ${currentDoc.id}`;
    DOM.articleCategoryBadge.textContent = currentDoc.category;
    DOM.articleTitle.textContent = currentDoc.title;
    
    if (currentDoc.subtitle) {
      DOM.articleSubtitle.textContent = currentDoc.subtitle;
      DOM.articleSubtitle.style.display = "block";
    } else {
      DOM.articleSubtitle.style.display = "none";
    }

    DOM.articleDate.textContent = currentDoc.date;
    DOM.articleReadTime.textContent = currentDoc.readTime || "5 min";
    DOM.articleFolder.textContent = currentDoc.folder || "Arquivo Geral";
    DOM.articleBody.innerHTML = currentDoc.content;
    
    if (DOM.footerStampDate) {
      DOM.footerStampDate.textContent = `REGISTRADO EM ${currentDoc.date.toUpperCase()}`;
    }

    // Atualizar Navegação Anterior / Próximo
    updatePaginationControls();

    // Re-destacar item ativo na barra lateral
    document.querySelectorAll(".manuscript-item").forEach(item => {
      const idx = parseInt(item.dataset.index, 10);
      item.classList.toggle("active", idx === AppState.currentArticleIndex);
    });

    // Atualizar Título da Página no Navegador
    document.title = `${currentDoc.title} — O Eterno Filho Pródigo`;

    // Atualizar Hash na URL silenciosamente se necessário
    if (window.location.hash !== `#${currentDoc.slug}`) {
      history.replaceState(null, "", `#${currentDoc.slug}`);
    }

    // Retornar opacidade e rolar ao topo da leitura
    DOM.manuscriptPage.style.opacity = "1";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 120);
}

function updatePaginationControls() {
  const currentIndex = AppState.currentArticleIndex;
  const total = ARCHIVE_DOCUMENTS.length;

  // Botão Anterior
  if (currentIndex > 0) {
    const prevDoc = ARCHIVE_DOCUMENTS[currentIndex - 1];
    DOM.prevArticleBtn.disabled = false;
    DOM.prevArticleTitle.textContent = `${prevDoc.id} — ${prevDoc.title}`;
  } else {
    DOM.prevArticleBtn.disabled = true;
    DOM.prevArticleTitle.textContent = "Início do Acervo";
  }

  // Botão Próximo
  if (currentIndex < total - 1) {
    const nextDoc = ARCHIVE_DOCUMENTS[currentIndex + 1];
    DOM.nextArticleBtn.disabled = false;
    DOM.nextArticleTitle.textContent = `${nextDoc.id} — ${nextDoc.title}`;
  } else {
    DOM.nextArticleBtn.disabled = true;
    DOM.nextArticleTitle.textContent = "Fim do Acervo";
  }
}

function navigateToArticle(index) {
  if (index >= 0 && index < ARCHIVE_DOCUMENTS.length) {
    AppState.currentArticleIndex = index;
    displayCurrentArticle();
  }
}

// ==========================================================================
// 7. ROTEAMENTO POR HASH NA URL
// ==========================================================================
function getArticleIndexFromHash() {
  const hash = window.location.hash.replace("#", "").trim();
  if (!hash) return -1;
  return ARCHIVE_DOCUMENTS.findIndex(d => d.slug === hash || d.id === hash);
}

function handleHashChange() {
  const index = getArticleIndexFromHash();
  if (index !== -1 && index !== AppState.currentArticleIndex) {
    AppState.currentArticleIndex = index;
    displayCurrentArticle();
  }
}

// ==========================================================================
// 8. BARRA LATERAL MOBILE, MODAL DO AUTOR & EVENTOS
// ==========================================================================
function openSidebar() {
  DOM.sidebar.classList.add("open");
  DOM.sidebarBackdrop.classList.add("active");
  DOM.menuToggleBtn.setAttribute("aria-expanded", "true");
}

function closeSidebar() {
  DOM.sidebar.classList.remove("open");
  DOM.sidebarBackdrop.classList.remove("active");
  DOM.menuToggleBtn.setAttribute("aria-expanded", "false");
}

function openAuthorModal() {
  if (DOM.authorModalBackdrop) {
    DOM.authorModalBackdrop.classList.add("active");
    DOM.authorModalBackdrop.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
}

function closeAuthorModal() {
  if (DOM.authorModalBackdrop) {
    DOM.authorModalBackdrop.classList.remove("active");
    DOM.authorModalBackdrop.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
}

function bindEventListeners() {
  // Toggle Mobile Menu
  if (DOM.menuToggleBtn) {
    DOM.menuToggleBtn.addEventListener("click", () => {
      const isOpen = DOM.sidebar.classList.contains("open");
      if (isOpen) {
        closeSidebar();
      } else {
        openSidebar();
      }
    });
  }

  // Backdrop e botão fechar menu no mobile
  if (DOM.sidebarBackdrop) {
    DOM.sidebarBackdrop.addEventListener("click", closeSidebar);
  }

  if (DOM.sidebarCloseBtn) {
    DOM.sidebarCloseBtn.addEventListener("click", closeSidebar);
  }

  // Modal do Autor (Abertura no Ex Libris e Fechamento)
  if (DOM.authorModalTriggerSeal) {
    DOM.authorModalTriggerSeal.addEventListener("click", openAuthorModal);
  }

  if (DOM.closeAuthorModalBtn) {
    DOM.closeAuthorModalBtn.addEventListener("click", closeAuthorModal);
  }

  if (DOM.authorModalBackdrop) {
    DOM.authorModalBackdrop.addEventListener("click", (e) => {
      if (e.target === DOM.authorModalBackdrop) {
        closeAuthorModal();
      }
    });
  }

  // Busca em tempo real
  if (DOM.searchInput) {
    DOM.searchInput.addEventListener("input", (e) => {
      AppState.searchQuery = e.target.value;
      DOM.clearSearchBtn.style.display = AppState.searchQuery ? "block" : "none";
      renderCatalogList();
    });
  }

  if (DOM.clearSearchBtn) {
    DOM.clearSearchBtn.addEventListener("click", () => {
      DOM.searchInput.value = "";
      AppState.searchQuery = "";
      DOM.clearSearchBtn.style.display = "none";
      renderCatalogList();
      DOM.searchInput.focus();
    });
  }

  // Paginação Anterior / Próximo
  if (DOM.prevArticleBtn) {
    DOM.prevArticleBtn.addEventListener("click", () => {
      if (AppState.currentArticleIndex > 0) {
        navigateToArticle(AppState.currentArticleIndex - 1);
      }
    });
  }

  if (DOM.nextArticleBtn) {
    DOM.nextArticleBtn.addEventListener("click", () => {
      if (AppState.currentArticleIndex < ARCHIVE_DOCUMENTS.length - 1) {
        navigateToArticle(AppState.currentArticleIndex + 1);
      }
    });
  }

  // Ajuste de Tamanho da Fonte
  if (DOM.fontSizeDecBtn) {
    DOM.fontSizeDecBtn.addEventListener("click", () => changeFontSize(-1));
  }
  if (DOM.fontSizeIncBtn) {
    DOM.fontSizeIncBtn.addEventListener("click", () => changeFontSize(1));
  }

  // Botão Imprimir
  if (DOM.printBtn) {
    DOM.printBtn.addEventListener("click", () => {
      window.print();
    });
  }

  // Atalhos de teclado (setas esquerda e direita para mudar de texto, ESC para fechar modal/menu)
  window.addEventListener("keydown", (e) => {
    // Fechar modal ou drawer no ESC
    if (e.key === "Escape") {
      closeAuthorModal();
      closeSidebar();
      return;
    }

    // Não disparar navegação se o usuário estiver digitando na busca
    if (document.activeElement === DOM.searchInput) return;

    if (e.key === "ArrowLeft" && AppState.currentArticleIndex > 0) {
      navigateToArticle(AppState.currentArticleIndex - 1);
    } else if (e.key === "ArrowRight" && AppState.currentArticleIndex < ARCHIVE_DOCUMENTS.length - 1) {
      navigateToArticle(AppState.currentArticleIndex + 1);
    }
  });
}

// ==========================================================================
// 9. PREFERÊNCIAS DO USUÁRIO (Tamanho da Fonte)
// ==========================================================================
const FONT_SCALES = ["1rem", "1.1875rem", "1.325rem", "1.45rem"];

function changeFontSize(delta) {
  const newStep = Math.min(Math.max(AppState.fontSizeStep + delta, -1), 2);
  AppState.fontSizeStep = newStep;
  applyFontSize(newStep);
  try {
    localStorage.setItem("archive_font_step", newStep);
  } catch (e) {
    // Silencioso se localStorage estiver desabilitado
  }
}

function applyFontSize(step) {
  const index = step + 1; // mapeia -1, 0, 1, 2 para 0, 1, 2, 3
  if (FONT_SCALES[index]) {
    document.documentElement.style.setProperty("--base-font-size", FONT_SCALES[index]);
  }
}

function loadUserPreferences() {
  try {
    const savedStep = localStorage.getItem("archive_font_step");
    if (savedStep !== null) {
      const step = parseInt(savedStep, 10);
      if (!isNaN(step) && step >= -1 && step <= 2) {
        AppState.fontSizeStep = step;
        applyFontSize(step);
      }
    }
  } catch (e) {
    // Silencioso
  }
}

// Inicializar quando o DOM estiver pronto
document.addEventListener("DOMContentLoaded", initApp);
