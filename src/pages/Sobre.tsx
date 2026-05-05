import { Link } from 'react-router-dom'
import { historiaDaMarca, contatosDaMarca } from '../data/marca'

const pilaresInstitucionais = [
  {
    titulo: 'Missão',
    texto: historiaDaMarca.missao,
    icone: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4a7c59" strokeWidth="2">
        <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
      </svg>
    ),
  },
  {
    titulo: 'Visão',
    texto: historiaDaMarca.visao,
    icone: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4a7c59" strokeWidth="2">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    titulo: 'Valores',
    texto: historiaDaMarca.valores,
    icone: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4a7c59" strokeWidth="2">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
]

const numerosDeImpacto = [
  { numero: '25mil L', descricao: 'de água preservados por litro de óleo reutilizado' },
  { numero: '100%', descricao: 'dos produtos são biodegradáveis e artesanais' },
  { numero: '0%', descricao: 'de óleo de fritura descartado incorretamente' },
]

const contribuicoes = [
  {
    titulo: 'Redução da poluição',
    texto: 'Redução da poluição hídrica e do solo pelo descarte correto e reutilização do óleo saturado.',
  },
  {
    titulo: 'Educação ambiental',
    texto: 'Educação ambiental nas comunidades parceiras, formando agentes de mudança local.',
  },
  {
    titulo: 'Geração de renda',
    texto: 'Geração de renda local para mulheres em situação de vulnerabilidade social.',
  },
  {
    titulo: 'Economia circular',
    texto: 'Promoção da economia circular, fechando o ciclo do resíduo com responsabilidade.',
  },
]

const Sobre = () => {
  return (
    <div className="bg-[#f7f3ec] text-[#1a2e1f]">
      {/* Hero */}
      <section className="bg-[#2d4f38] pt-28 pb-16 md:pb-20 px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center relative overflow-hidden">
        <div className="absolute top-[-80px] right-[-80px] w-96 h-96 rounded-full bg-white/[0.04]" />
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 bg-white/10 text-white/80 px-4 py-2 rounded-full text-xs font-medium uppercase tracking-widest mb-6 w-fit">
            Nossa história
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-5">
            Mais do que uma saboaria,<br />
            <em className="text-white/50">um movimento</em>
          </h1>
          <p className="text-white/65 font-light leading-relaxed text-base max-w-lg">
            Fundada em 2023 com o propósito de transformar resíduos em soluções sustentáveis, unindo consciência ambiental, empoderamento comunitário e inovação social.
          </p>
        </div>
        <div className="relative z-10 flex flex-col gap-4">
          <div className="bg-white/10 border border-white/15 rounded-2xl p-6">
            <h3 className="font-serif text-2xl text-white mb-2">Fundada em {historiaDaMarca.fundacao}</h3>
            <p className="text-white/60 text-sm font-light leading-relaxed">
              Um negócio social que nasceu da necessidade de transformar óleo saturado de frituras em produtos de limpeza ecológicos e acessíveis.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#4a7c59] border-2 border-white/20 flex items-center justify-center font-serif font-bold text-white shrink-0">
              LN
            </div>
            <div>
              <p className="text-sm font-medium text-white">{historiaDaMarca.ceo}</p>
              <p className="text-xs text-white/50 font-light">CEO e fundador</p>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <div className="grid grid-cols-1 md:grid-cols-3 bg-white border-t border-[#4a7c59]/10">
        {pilaresInstitucionais.map((pilar, i) => (
          <div key={pilar.titulo} className={`p-8 md:p-10 ${i < 2 ? 'border-b md:border-b-0 md:border-r border-[#4a7c59]/10' : ''}`}>
            <div className="w-12 h-12 rounded-xl bg-[#e8f0e9] flex items-center justify-center mb-5">
              {pilar.icone}
            </div>
            <p className="text-xs font-medium tracking-widest uppercase text-[#4a7c59] mb-2">{pilar.titulo}</p>
            <p className="text-sm text-[#5a6b5e] leading-relaxed font-light">{pilar.texto}</p>
          </div>
        ))}
      </div>

      {/* História + Números */}
      <section className="grid grid-cols-1 md:grid-cols-2 border-t border-[#4a7c59]/10">
        <div className="px-6 md:px-20 py-16 md:py-20 bg-[#f7f3ec]">
          <p className="text-xs font-medium tracking-widest uppercase text-[#4a7c59] mb-3">Nossa trajetória</p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#2d4f38] leading-tight mb-6">
            Transformar resíduos em <em className="text-[#4a7c59]">soluções reais</em>
          </h2>
          <div className="flex flex-col gap-4 text-[#5a6b5e] text-sm leading-relaxed font-light">
            <p>
              A Saboaria Ecológica nasceu da observação de um problema cotidiano: o descarte incorreto de óleo de cozinha. Cada litro jogado no esgoto contamina até 25 mil litros de água potável.
            </p>
            <p>
              Com essa consciência, construímos um modelo de negócio que coleta esse resíduo, transforma em produtos de limpeza eficazes e biodegradáveis, e distribui a renda gerada para mulheres de comunidades vulneráveis.
            </p>
            <p>
              Mais do que vender sabão, promovemos educação ambiental, economia circular e dignidade humana em cada barra produzida.
            </p>
          </div>
        </div>
        <div className="bg-[#4a7c59] px-6 md:px-16 py-16 md:py-20 flex flex-col justify-center gap-5">
          {numerosDeImpacto.map((item) => (
            <div key={item.numero} className="bg-white/10 border border-white/15 rounded-2xl p-6">
              <p className="font-serif text-3xl font-bold text-white mb-1">{item.numero}</p>
              <p className="text-white/65 text-sm font-light">{item.descricao}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contribuições */}
      <section className="px-6 md:px-20 py-16 md:py-20 bg-white border-t border-[#4a7c59]/10">
        <p className="text-xs font-medium tracking-widest uppercase text-[#4a7c59] mb-3">Nosso impacto</p>
        <h2 className="font-serif text-3xl md:text-4xl text-[#2d4f38] mb-10">
          Contribuímos para um <em className="text-[#4a7c59]">futuro melhor</em>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {contribuicoes.map((item) => (
            <div
              key={item.titulo}
              className="p-5 rounded-2xl border border-[#4a7c59]/12 hover:border-[#4a7c59] hover:bg-[#e8f0e9] transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-[#e8f0e9] flex items-center justify-center mb-4">
                <span className="w-2 h-2 rounded-full bg-[#4a7c59]" />
              </div>
              <p className="text-sm font-medium text-[#2d4f38] mb-2">{item.titulo}</p>
              <p className="text-xs text-[#5a6b5e] leading-relaxed font-light">{item.texto}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-20 py-16 md:py-20 bg-[#2d4f38] flex flex-col items-center text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-white mb-3">
          Conheça nossos <em className="text-white/50">produtos</em>
        </h2>
        <p className="text-white/60 font-light mb-8 max-w-md leading-relaxed text-sm">
          Cada compra é um ato de consciência. Veja o que produzimos com responsabilidade e cuidado.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link to="/produtos" className="bg-white text-[#2d4f38] px-8 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity text-center">
            Ver produtos
          </Link>
          <a
            href={`https://wa.me/${contatosDaMarca.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="border border-white/30 text-white px-8 py-3 rounded-full text-sm font-light hover:border-white transition-colors text-center"
          >
            Falar pelo WhatsApp
          </a>
        </div>
      </section>
    </div>
  )
}

export default Sobre