export type Produto = {
  id: string
  nome: string
  descricao: string
  preco: string
  peso: string
  tipo: 'barra' | 'pasta' | 'liquido' | 'po'
}

export const listaDeProdutos: Produto[] = [
  {
    id: 'sabao-barra',
    nome: 'Sabão em Barra Multiuso',
    descricao: 'Limpeza geral com óleo reutilizado. Disponível em tradicional, leite de coco, folha de mamão e juá.',
    preco: 'R$ 5,00',
    peso: '250g',
    tipo: 'barra',
  },
  {
    id: 'pasta-brilho',
    nome: 'Pasta de Brilho',
    descricao: 'Remove gordura pesada de fogões, grelhas e inox. Devolve o brilho natural sem danificar.',
    preco: 'R$ 6,00',
    peso: '500g',
    tipo: 'pasta',
  },
  {
    id: 'sabao-liquido',
    nome: 'Sabão Líquido',
    descricao: 'Ideal para roupas, louças e superfícies. Feito com óleo reutilizado, biodegradável e eficaz.',
    preco: 'R$ 16,00',
    peso: '5L',
    tipo: 'liquido',
  },
  {
    id: 'sabao-po',
    nome: 'Sabão em Pó',
    descricao: 'Biodegradável para lavagem de roupas. Disponível nos tipos tradicional e coco.',
    preco: 'R$ 8,00',
    peso: '400g',
    tipo: 'po',
  },
]