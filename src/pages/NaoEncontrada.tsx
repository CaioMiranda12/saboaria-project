import { Link } from 'react-router-dom'

const NaoEncontrada = () => {
  return (
    <div className="min-h-screen bg-[#f7f3ec] flex flex-col items-center justify-center text-center px-6">
      <span className="font-serif text-8xl font-bold text-[#4a7c59]/20 mb-4">404</span>
      <h1 className="font-serif text-3xl text-[#2d4f38] mb-3">Página não encontrada</h1>
      <p className="text-sm text-[#5a6b5e] font-light max-w-sm leading-relaxed mb-8">
        A página que você tentou acessar não existe ou foi movida.
      </p>
      <Link
        to="/"
        className="bg-[#4a7c59] text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-[#2d4f38] transition-colors"
      >
        Voltar para o início
      </Link>
    </div>
  )
}

export default NaoEncontrada