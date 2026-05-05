import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'react-toastify'
import { contatosDaMarca } from '../data/marca'

const schemaFormularioContato = z.object({
  nomeCompleto: z.string().min(3, 'Informe seu nome completo'),
  email: z.string().email('E-mail inválido'),
  telefone: z.string().min(10, 'Informe um telefone válido'),
  assunto: z.string().min(1, 'Selecione um assunto'),
  mensagem: z.string().min(20, 'Mensagem deve ter pelo menos 20 caracteres'),
})

type DadosDoFormulario = z.infer<typeof schemaFormularioContato>

const opcoesDeAssunto = [
  'Pedido de produtos',
  'Dúvida sobre produtos',
  'Parceria comercial',
  'Doação de óleo',
  'Outro',
]

const canaisDeContato = [
  {
    nome: 'WhatsApp',
    valor: '(85) 98705-2241',
    href: `https://wa.me/${contatosDaMarca.whatsapp}`,
    icone: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4a7c59" strokeWidth="2">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    nome: 'Instagram',
    valor: '@saboariaecologica',
    href: `https://instagram.com/${contatosDaMarca.instagram}`,
    icone: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4a7c59" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="#4a7c59" />
      </svg>
    ),
  },
  {
    nome: 'E-mail',
    valor: contatosDaMarca.email,
    href: `mailto:${contatosDaMarca.email}`,
    icone: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4a7c59" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    nome: 'Endereço',
    valor: contatosDaMarca.endereco,
    href: 'https://maps.google.com/?q=Av.+Ulisses+Guimarães,+3132,+Iparana',
    icone: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4a7c59" strokeWidth="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
]

const horarioDeAtendimento = [
  { dia: 'Segunda a sexta', hora: '08h às 17h' },
  { dia: 'Sábado', hora: '08h às 12h' },
  { dia: 'Domingo', hora: 'Fechado' },
]

const campoBaseClasse =
  'w-full bg-white border border-[#4a7c59]/20 rounded-xl px-4 py-3 text-sm text-[#1a2e1f] font-light outline-none focus:border-[#4a7c59] transition-colors'

const Contato = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<DadosDoFormulario>({
    resolver: zodResolver(schemaFormularioContato),
  })

  const aoEnviarFormulario = async (dados: DadosDoFormulario) => {
    // Aqui você conecta ao backend ou serviço de e-mail futuramente
    console.log(dados)
    await new Promise((resolve) => setTimeout(resolve, 800))
    toast.success('Mensagem enviada com sucesso! Retornaremos em breve.')
    reset()
  }

  return (
    <div className="bg-[#f7f3ec] text-[#1a2e1f]">
      {/* Hero */}
      <section className="bg-[#2d4f38] pt-24 md:pt-28 pb-16 md:pb-20 px-5 md:px-20 relative overflow-hidden">
        <div className="absolute top-[-80px] right-[-80px] w-72 md:w-96 h-72 md:h-96 rounded-full bg-white/[0.04]" />
        <div className="relative z-10 max-w-xl">
          <span className="inline-flex items-center gap-2 bg-white/10 text-white/80 px-4 py-2 rounded-full text-xs font-medium uppercase tracking-widest mb-5 w-fit">
            Fale com a gente
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-4">
            Entre em <em className="text-white/50">contato</em>
          </h1>
          <p className="text-white/65 font-light leading-relaxed text-sm md:text-base">
            Tire suas dúvidas, faça seu pedido ou saiba como contribuir com a nossa causa. Estamos prontos para te atender pelos canais abaixo.
          </p>
        </div>
      </section>

      {/* Canais rápidos */}
      <div className="grid grid-cols-2 md:grid-cols-4 bg-white border-b border-[#4a7c59]/10">
        {canaisDeContato.map((canal, i) => (
          <a
            key={canal.nome}
            href={canal.href}
            target="_blank"
            rel="noreferrer"
            className={`flex flex-col items-center text-center px-4 py-6 md:py-8 hover:bg-[#e8f0e9] transition-colors no-underline
              ${i % 2 === 0 ? 'border-r border-[#4a7c59]/10' : ''}
              ${i < 2 ? 'border-b md:border-b-0 border-[#4a7c59]/10' : ''}
              md:border-r md:last:border-r-0 md:border-b-0`}
          >
            <div className="w-12 h-12 rounded-full bg-[#e8f0e9] flex items-center justify-center mb-3">
              {canal.icone}
            </div>
            <p className="text-xs font-medium text-[#2d4f38] mb-1">{canal.nome}</p>
            <p className="text-xs text-[#5a6b5e] font-light">{canal.valor}</p>
          </a>
        ))}
      </div>

      {/* Formulário + Info lateral */}
      <div className="grid grid-cols-1 md:grid-cols-2 border-t border-[#4a7c59]/10">

        {/* Formulário */}
        <div className="px-5 md:px-16 py-14 md:py-20 bg-[#f7f3ec]">
          <p className="text-xs font-medium tracking-widest uppercase text-[#4a7c59] mb-2">Formulário</p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#2d4f38] mb-2 leading-tight">
            Envie uma <em className="text-[#4a7c59]">mensagem</em>
          </h2>
          <p className="text-sm text-[#5a6b5e] font-light leading-relaxed mb-8">
            Preencha o formulário e retornaremos em breve pelo canal de sua preferência.
          </p>

          <form onSubmit={handleSubmit(aoEnviarFormulario)} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-[#2d4f38] mb-1.5">Nome completo</label>
                <input
                  {...register('nomeCompleto')}
                  type="text"
                  placeholder="Seu nome"
                  className={campoBaseClasse}
                />
                {errors.nomeCompleto && (
                  <p className="text-xs text-red-500 mt-1">{errors.nomeCompleto.message}</p>
                )}
              </div>
              <div>
                <label className="block text-xs font-medium text-[#2d4f38] mb-1.5">E-mail</label>
                <input
                  {...register('email')}
                  type="email"
                  placeholder="seu@email.com"
                  className={campoBaseClasse}
                />
                {errors.email && (
                  <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#2d4f38] mb-1.5">Telefone / WhatsApp</label>
              <input
                {...register('telefone')}
                type="tel"
                placeholder="(85) 99999-9999"
                className={campoBaseClasse}
              />
              {errors.telefone && (
                <p className="text-xs text-red-500 mt-1">{errors.telefone.message}</p>
              )}
            </div>

            <div>
              <label className="block text-xs font-medium text-[#2d4f38] mb-1.5">Assunto</label>
              <select {...register('assunto')} className={campoBaseClasse}>
                <option value="">Selecione um assunto</option>
                {opcoesDeAssunto.map((opcao) => (
                  <option key={opcao} value={opcao}>{opcao}</option>
                ))}
              </select>
              {errors.assunto && (
                <p className="text-xs text-red-500 mt-1">{errors.assunto.message}</p>
              )}
            </div>

            <div>
              <label className="block text-xs font-medium text-[#2d4f38] mb-1.5">Mensagem</label>
              <textarea
                {...register('mensagem')}
                placeholder="Escreva sua mensagem aqui..."
                rows={5}
                className={campoBaseClasse}
              />
              {errors.mensagem && (
                <p className="text-xs text-red-500 mt-1">{errors.mensagem.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#4a7c59] text-white rounded-full py-3.5 text-sm font-medium hover:bg-[#2d4f38] transition-colors disabled:opacity-60 disabled:cursor-not-allowed mt-1"
            >
              {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
            </button>
          </form>
        </div>

        {/* Info lateral */}
        <div className="bg-[#2d4f38] px-5 md:px-14 py-14 md:py-20 flex flex-col gap-6">
          <div>
            <h3 className="font-serif text-2xl text-white mb-2">Canais de atendimento</h3>
            <p className="text-white/60 text-sm font-light leading-relaxed mb-5">
              Prefere um contato direto? Escolha o canal mais conveniente para você.
            </p>
            <div className="flex flex-col gap-3">
              {canaisDeContato.map((canal) => (
                <a
                  key={canal.nome}
                  href={canal.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 bg-white/[0.08] border border-white/10 rounded-xl px-4 py-3 hover:bg-white/[0.14] transition-colors no-underline"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <div className="[&_svg]:stroke-white/80">{canal.icone}</div>
                  </div>
                  <div>
                    <p className="text-xs text-white/55 font-light mb-0.5">{canal.nome}</p>
                    <p className="text-sm text-white font-medium">{canal.valor}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Mapa */}
          <a
            href="https://maps.google.com/?q=Av.+Ulisses+Guimarães,+3132,+Iparana"
            target="_blank"
            rel="noreferrer"
            className="block bg-white/[0.06] border border-white/10 rounded-2xl overflow-hidden hover:bg-white/[0.1] transition-colors no-underline"
          >
            <div className="h-32 flex flex-col items-center justify-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <p className="text-sm text-white/80 font-medium text-center leading-snug">
                Av. Ulisses Guimarães, 3132<br />
                <span className="text-white/55 text-xs font-light">Iparana · Caucaia, CE</span>
              </p>
              <p className="text-xs text-white/40 font-light">Clique para abrir no mapa</p>
            </div>
          </a>

          {/* Horário */}
          <div className="bg-white/[0.06] rounded-2xl px-5 py-4">
            <p className="text-xs text-white/55 font-light uppercase tracking-widest mb-3">
              Horário de atendimento
            </p>
            <div className="flex flex-col divide-y divide-white/[0.06]">
              {horarioDeAtendimento.map((item) => (
                <div key={item.dia} className="flex justify-between items-center py-2.5">
                  <span className="text-sm text-white/70 font-light">{item.dia}</span>
                  <span className="text-sm text-white font-medium">{item.hora}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contato