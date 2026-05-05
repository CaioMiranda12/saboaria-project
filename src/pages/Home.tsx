import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import CardProduto from '../components/CardProduto'
import { listaDeProdutos } from '../data/produtos'
import { historiaDaMarca, contatosDaMarca } from '../data/marca'

const pilaresInstitucionais = [
  { titulo: 'Missão', texto: historiaDaMarca.missao },
  { titulo: 'Visão', texto: historiaDaMarca.visao },
  { titulo: 'Valores', texto: historiaDaMarca.valores },
]

const etapasDoProcesso = [
  { numero: '1', titulo: 'Coleta do óleo', texto: 'Óleo saturado de frituras é coletado de residências e estabelecimentos locais.' },
  { numero: '2', titulo: 'Processamento', texto: 'O óleo passa por filtragem e tratamento artesanal com ingredientes naturais.' },
  { numero: '3', titulo: 'Produção artesanal', texto: 'Fabricação manual com cuidado, em embalagens sustentáveis e biodegradáveis.' },
  { numero: '4', titulo: 'Impacto social', texto: 'Geração de renda local e educação ambiental nas comunidades parceiras.' },
]

const Home = () => {
  return (
    <div className="bg-[#f7f3ec] text-[#1a2e1f]">
      <Navbar />

      {/* Hero */}
      <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 pt-20">
        <div className="flex flex-col justify-center px-6 md:px-20 py-16 md:py-20">
          <span className="inline-flex items-center gap-2 bg-[#e8f0e9] text-[#2d4f38] px-4 py-2 rounded-full text-xs font-medium uppercase tracking-widest mb-8 w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4a7c59]" />
            Negócio social sustentável
          </span>
          <h1 className="font-serif text-4xl md:text-6xl leading-tight text-[#2d4f38] mb-6">
            Limpeza que<br />
            <em className="text-[#4a7c59]">cuida do planeta</em>
          </h1>
          <p className="text-[#5a6b5e] text-base md:text-lg leading-relaxed font-light max-w-md mb-10">
            Transformamos óleo de fritura em produtos de limpeza biodegradáveis, gerando renda em comunidades e preservando o meio ambiente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <Link to="/produtos" className="bg-[#4a7c59] text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-[#2d4f38] transition-all hover:-translate-y-0.5 text-center">
              Ver produtos
            </Link>
            <Link to="/sobre" className="text-[#4a7c59] text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
              Nossa história →
            </Link>
          </div>
        </div>
        <div className="relative bg-[#4a7c59] flex items-center justify-center overflow-hidden min-h-64 md:min-h-0">
          <div className="absolute inset-0 opacity-5 bg-[repeating-linear-gradient(45deg,#fff,#fff_1px,transparent_1px,transparent_30px)]" />
          <div className="relative z-10 w-64 md:w-80 h-80 md:h-96 bg-white/10 rounded-3xl border border-white/20 flex items-center justify-center flex-col gap-4">
            <div className="w-28 h-20 bg-white/90 rounded-2xl flex items-center justify-center">
              <div className="w-16 h-10 bg-[#4a7c59] rounded-xl" />
            </div>
            <span className="text-white/60 text-xs tracking-widest uppercase">Artesanal · Biodegradável</span>
          </div>
          <div className="absolute bottom-8 left-8 bg-white/95 rounded-2xl px-4 py-3 flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#4a7c59]" />
            <div>
              <p className="text-xs font-medium text-[#2d4f38]">100% Biodegradável</p>
              <p className="text-xs text-[#5a6b5e] font-light">Feito com óleo reutilizado</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="grid grid-cols-3 border-y border-[#4a7c59]/15">
        {[
          { num: '2023', label: 'Fundada com propósito social' },
          { num: '4+', label: 'Produtos biodegradáveis' },
          { num: '0%', label: 'Óleo de fritura no esgoto' },
        ].map((stat, i) => (
          <div key={i} className={`py-8 md:py-10 text-center ${i < 2 ? 'border-r border-[#4a7c59]/15' : ''}`}>
            <p className="font-serif text-2xl md:text-4xl font-bold text-[#4a7c59] mb-1">{stat.num}</p>
            <p className="text-[10px] md:text-xs text-[#5a6b5e] font-light px-1 leading-relaxed">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Sobre */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-24 px-6 md:px-20 py-16 md:py-24 bg-white border-t border-[#4a7c59]/10">
        <div>
          <p className="text-xs font-medium tracking-widest uppercase text-[#4a7c59] mb-3">Quem somos</p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#2d4f38] leading-tight mb-5">
            Um movimento de <em className="text-[#4a7c59]">consciência ambiental</em>
          </h2>
          <p className="text-[#5a6b5e] leading-relaxed font-light mb-8">
            Mais do que uma saboaria, representamos o empoderamento de mulheres em comunidades vulneráveis através da economia circular e da produção artesanal responsável.
          </p>
          <div className="flex flex-col gap-4">
            {pilaresInstitucionais.map((pilar) => (
              <div key={pilar.titulo} className="flex gap-4 items-start p-4 rounded-xl border border-[#4a7c59]/10 hover:border-[#4a7c59] hover:bg-[#e8f0e9] transition-all">
                <div className="w-10 h-10 rounded-lg bg-[#e8f0e9] flex items-center justify-center flex-shrink-0">
                  <span className="w-2 h-2 rounded-full bg-[#4a7c59]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#2d4f38] mb-1">{pilar.titulo}</p>
                  <p className="text-xs text-[#5a6b5e] leading-relaxed font-light">{pilar.texto}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#4a7c59] rounded-3xl flex items-center justify-center p-10 md:p-12 min-h-64 md:min-h-96">
          <div className="text-center text-white">
            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-3">Economia Circular</h3>
            <p className="text-white/70 text-sm font-light leading-relaxed">
              Cada litro de óleo reutilizado evita<br />a contaminação de 25 mil litros<br />de água potável.
            </p>
          </div>
        </div>
      </section>

      {/* Produtos */}
      <section className="px-6 md:px-20 py-16 md:py-24 bg-[#f7f3ec]">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10 md:mb-12">
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-[#4a7c59] mb-3">Nossos produtos</p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#2d4f38]">
              Limpeza <em className="text-[#4a7c59]">natural</em> para cada necessidade
            </h2>
          </div>
          <Link to="/produtos" className="text-[#4a7c59] text-sm font-medium hover:gap-2 flex items-center gap-1 transition-all shrink-0">
            Ver todos →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {listaDeProdutos.map((produto) => (
            <CardProduto key={produto.id} produto={produto} />
          ))}
        </div>
      </section>

      {/* Processo */}
      <section className="px-6 md:px-20 py-16 md:py-24 bg-white border-t border-[#4a7c59]/10">
        <p className="text-xs font-medium tracking-widest uppercase text-[#4a7c59] mb-3">Como fazemos</p>
        <h2 className="font-serif text-3xl md:text-4xl text-[#2d4f38] mb-10 md:mb-12">
          Do resíduo ao produto <em className="text-[#4a7c59]">sustentável</em>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {etapasDoProcesso.map((etapa, i) => (
            <div key={i} className="text-center">
              <div className="w-14 h-14 rounded-full bg-[#e8f0e9] border-2 border-[#4a7c59]/20 flex items-center justify-center mx-auto mb-4">
                <span className="font-serif text-xl font-bold text-[#2d4f38]">{etapa.numero}</span>
              </div>
              <h3 className="text-sm font-medium text-[#2d4f38] mb-2">{etapa.titulo}</h3>
              <p className="text-xs text-[#5a6b5e] leading-relaxed font-light">{etapa.texto}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-20 py-16 md:py-24 bg-[#2d4f38] text-center flex flex-col items-center">
        <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">
          Faça parte <em className="text-white/50">desse movimento</em>
        </h2>
        <p className="text-white/60 font-light mb-10 max-w-md leading-relaxed">
          Entre em contato e saiba como adquirir nossos produtos ou como contribuir com a nossa causa.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a
            href={`https://wa.me/${contatosDaMarca.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="bg-white text-[#2d4f38] px-8 py-3.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity text-center"
          >
            Pedir pelo WhatsApp
          </a>
          <a
            href={`https://instagram.com/${contatosDaMarca.instagram}`}
            target="_blank"
            rel="noreferrer"
            className="border border-white/30 text-white px-8 py-3.5 rounded-full text-sm font-light hover:border-white transition-colors text-center"
          >
            @saboariaecologica
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-20 py-6 flex flex-col sm:flex-row justify-between items-center gap-2 border-t border-[#4a7c59]/15 bg-[#f7f3ec]">
        <span className="font-serif text-base font-bold text-[#2d4f38]">
          SABOARIA <em className="font-normal not-italic text-[#4a7c59]">ecológica</em>
        </span>
        <span className="text-xs text-[#5a6b5e] font-light">© 2025 Saboaria Ecológica · Iparana, Ceará</span>
      </footer>
    </div>
  )
}

export default Home