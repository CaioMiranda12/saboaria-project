import type { Produto } from "../data/produtos"

const corPorTipo: Record<Produto['tipo'], string> = {
  barra: 'from-[#7aab7a] to-[#4a7c59]',
  pasta: 'from-[#c4994a] to-[#8c6830]',
  liquido: 'from-[#5a8a7a] to-[#2d5a4a]',
  po: 'from-[#6b8a4a] to-[#3d5a2a]',
}

type Props = { produto: Produto }

const CardProduto = ({ produto }: Props) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-[#4a7c59]/10 hover:-translate-y-1 hover:shadow-lg hover:border-[#4a7c59] transition-all duration-200 cursor-pointer">
      <div className={`h-40 bg-gradient-to-br ${corPorTipo[produto.tipo]} flex items-center justify-center`}>
        <span className="text-white/70 text-xs tracking-widest uppercase">{produto.nome}</span>
      </div>
      <div className="p-5">
        <h3 className="text-sm font-medium text-[#2d4f38] mb-1">{produto.nome}</h3>
        <p className="text-xs text-[#5a6b5e] leading-relaxed font-light mb-4">{produto.descricao}</p>
        <div className="flex justify-between items-center">
          <span className="font-serif text-lg font-bold text-[#4a7c59]">{produto.preco}</span>
          <span className="text-xs font-medium bg-[#e8f0e9] text-[#2d4f38] px-3 py-1 rounded-full">
            {produto.peso}
          </span>
        </div>
      </div>
    </div>
  )
}

export default CardProduto