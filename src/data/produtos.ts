// export type Produto = {
//   id: string
//   nome: string
//   descricao: string
//   preco: string
//   peso: string
//   tipo: 'barra' | 'pasta' | 'liquido' | 'po'
// }

// export const listaDeProdutos: Produto[] = [
//   {
//     id: 'sabao-barra',
//     nome: 'Sabão em Barra Multiuso',
//     descricao: 'Limpeza geral com óleo reutilizado. Disponível em tradicional, leite de coco, folha de mamão e juá.',
//     preco: 'R$ 5,00',
//     peso: '250g',
//     tipo: 'barra',
//   },
//   {
//     id: 'pasta-brilho',
//     nome: 'Pasta de Brilho',
//     descricao: 'Remove gordura pesada de fogões, grelhas e inox. Devolve o brilho natural sem danificar.',
//     preco: 'R$ 6,00',
//     peso: '500g',
//     tipo: 'pasta',
//   },
//   {
//     id: 'sabao-liquido',
//     nome: 'Sabão Líquido',
//     descricao: 'Ideal para roupas, louças e superfícies. Feito com óleo reutilizado, biodegradável e eficaz.',
//     preco: 'R$ 16,00',
//     peso: '5L',
//     tipo: 'liquido',
//   },
//   {
//     id: 'sabao-po',
//     nome: 'Sabão em Pó',
//     descricao: 'Biodegradável para lavagem de roupas. Disponível nos tipos tradicional e coco.',
//     preco: 'R$ 8,00',
//     peso: '400g',
//     tipo: 'po',
//   },
// ]

export type Produto = {
  id: string
  nome: string
  nomeItalico: string
  descricao: string
  descricaoCompleta: string
  preco: number
  peso: string
  tipo: 'barra' | 'pasta' | 'liquido' | 'po'
  ingredientes: string[]
  tipos: string[]
  modoDeUso: string
  badge: string
  destaque?: boolean
}

export const listaDeProdutos: Produto[] = [
  {
    id: 'sabao-barra-tradicional',
    nome: 'Sabão em Barra',
    nomeItalico: 'multiuso',
    descricao: 'Limpeza geral eficaz feita com óleo reutilizado e ingredientes naturais.',
    descricaoCompleta:
      'Ideal para limpeza geral de superfícies, roupas e utensílios domésticos. Feito com óleo de fritura reutilizado, limpa com eficiência sem agredir o meio ambiente. Disponível em quatro fragrâncias.',
    preco: 5.0,
    peso: '250g',
    tipo: 'barra',
    ingredientes: ['Óleo vegetal saturado', 'Hidróxido de sódio', 'Água', 'Essência natural e/ou química'],
    tipos: ['Tradicional', 'Leite de coco', 'Folha de mamão', 'Juá'],
    modoDeUso: 'Aplique diretamente na superfície ou em uma esponja úmida. Esfregue suavemente e enxágue.',
    badge: 'Biodegradável',
    destaque: true,
  },
  {
    id: 'pasta-brilho',
    nome: 'Pasta de',
    nomeItalico: 'brilho',
    descricao: 'Remove gordura pesada e devolve o brilho natural de fogões, grelhas e inox.',
    descricaoCompleta:
      'Excelente para remover gordura pesada de fogões, grelhas, formas e assadeiras. Pode ser usada também em azulejos, pias e superfícies de inox. Retira manchas difíceis sem danificar.',
    preco: 6.0,
    peso: '500g',
    tipo: 'pasta',
    ingredientes: ['Óleo vegetal saturado', 'Hidróxido de sódio', 'Água', 'Essência natural e/ou química'],
    tipos: ['Tradicional'],
    modoDeUso: 'Aplique uma pequena quantidade com esponja úmida. Esfregue suavemente e enxágue.',
    badge: 'Biodegradável',
  },
  {
    id: 'sabao-liquido',
    nome: 'Sabão',
    nomeItalico: 'líquido',
    descricao: 'Para roupas, louças e superfícies. Biodegradável e feito com óleo reutilizado.',
    descricaoCompleta:
      'Produto de limpeza ecológico, ideal para roupas, louças e superfícies diversas. Feito com óleo reutilizado, é biodegradável e eficaz. Disponível nas fragrâncias talco, limão e eucalipto.',
    preco: 16.0,
    peso: '5L',
    tipo: 'liquido',
    ingredientes: [
      'Óleo vegetal saturado',
      'Hidróxido de sódio',
      'Água',
      'Essência natural e/ou química',
      'Bicarbonato de sódio',
      'Álcool',
    ],
    tipos: ['Talco', 'Limão', 'Eucalipto'],
    modoDeUso: 'Aplique diretamente sobre a superfície ou dilua em água. Enxágue após o uso.',
    badge: 'Biodegradável',
    destaque: true,
  },
  {
    id: 'sabao-po',
    nome: 'Sabão',
    nomeItalico: 'em pó',
    descricao: 'Para lavagem de roupas à mão ou na máquina. Fórmula segura para o meio ambiente.',
    descricaoCompleta:
      'Sabão em pó biodegradável ideal para lavagem de roupas e limpeza geral. Fórmula eficaz e segura para o meio ambiente, compatível com máquinas de lavar. Disponível nos tipos tradicional e coco.',
    preco: 8.0,
    peso: '400g',
    tipo: 'po',
    ingredientes: [
      'Óleo vegetal saturado',
      'Hidróxido de sódio',
      'Água',
      'Essência natural e/ou química',
      'Bicarbonato de sódio',
    ],
    tipos: ['Tradicional', 'Coco'],
    modoDeUso:
      'Dissolva 2 colheres em 5L de água para lavagem manual. Para máquina, use a dosagem recomendada pelo fabricante.',
    badge: 'Biodegradável',
  },
  {
    id: 'sabao-barra-coco',
    nome: 'Sabão de',
    nomeItalico: 'leite de coco',
    descricao: 'Versão especial com leite de coco, ideal para peles sensíveis e uso no banheiro.',
    descricaoCompleta:
      'Variação do sabão em barra com leite de coco, que confere suavidade extra e aroma agradável. Indicado para uso no banheiro e em peles mais sensíveis, mantendo a eficácia da limpeza.',
    preco: 6.0,
    peso: '250g',
    tipo: 'barra',
    ingredientes: ['Óleo vegetal saturado', 'Hidróxido de sódio', 'Água', 'Leite de coco', 'Essência natural'],
    tipos: ['Leite de coco'],
    modoDeUso: 'Aplique diretamente na superfície ou em uma esponja úmida. Esfregue suavemente e enxágue.',
    badge: 'Pele sensível',
  },
  {
    id: 'sabao-barra-mamao',
    nome: 'Sabão de',
    nomeItalico: 'folha de mamão',
    descricao: 'Com extrato de folha de mamão, potente na remoção de manchas difíceis em tecidos.',
    descricaoCompleta:
      'Sabão artesanal com extrato natural de folha de mamão, conhecido por suas propriedades enzimáticas que ajudam a remover manchas orgânicas de tecidos com mais eficiência.',
    preco: 6.0,
    peso: '250g',
    tipo: 'barra',
    ingredientes: ['Óleo vegetal saturado', 'Hidróxido de sódio', 'Água', 'Extrato de folha de mamão'],
    tipos: ['Folha de mamão'],
    modoDeUso: 'Aplique diretamente na mancha do tecido, esfregue levemente e enxágue com água.',
    badge: 'Remove manchas',
    destaque: true,
  },
]