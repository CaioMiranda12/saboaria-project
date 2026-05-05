import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-4 bg-[#f7f3ec]/90 backdrop-blur-sm border-b border-[#4a7c59]/10">
      <Link to="/" className="font-serif text-lg font-bold text-[#2d4f38] tracking-wide">
        SABOARIA <em className="font-normal not-italic text-[#4a7c59]">ecológica</em>
      </Link>
      <div className="flex gap-8">
        {[['/', 'Início'], ['/sobre', 'Sobre'], ['/produtos', 'Produtos'], ['/processo', 'Processo'], ['/contato', 'Contato']].map(
          ([path, label]) => (
            <Link key={path} to={path} className="text-xs font-medium text-[#5a6b5e] uppercase tracking-widest hover:text-[#4a7c59] transition-colors">
              {label}
            </Link>
          )
        )}
      </div>
      <Link to="/contato" className="bg-[#4a7c59] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#2d4f38] transition-colors">
        Fale conosco
      </Link>
    </nav>
  )
}

export default Navbar