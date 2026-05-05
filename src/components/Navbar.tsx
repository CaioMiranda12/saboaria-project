import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const links = [
  ['/', 'Início'],
  ['/sobre', 'Sobre'],
  ['/produtos', 'Produtos'],
  ['/processo', 'Processo'],
  ['/contato', 'Contato'],
]

const Navbar = () => {
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f7f3ec]/90 backdrop-blur-sm border-b border-[#4a7c59]/10">
      <div className="flex items-center justify-between px-6 md:px-10 py-4">
        <Link to="/" className="font-serif text-lg font-bold text-[#2d4f38] tracking-wide">
          SABOARIA <em className="font-normal not-italic text-[#4a7c59]">ecológica</em>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex gap-8">
          {links.map(([path, label]) => (
            <Link key={path} to={path} className="text-xs font-medium text-[#5a6b5e] uppercase tracking-widest hover:text-[#4a7c59] transition-colors">
              {label}
            </Link>
          ))}
        </div>

        <Link to="/contato" className="hidden md:block bg-[#4a7c59] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#2d4f38] transition-colors">
          Fale conosco
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuAberto((prev) => !prev)}
          className="md:hidden text-[#2d4f38] p-1"
          aria-label="Abrir menu"
        >
          {menuAberto ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuAberto && (
        <div className="md:hidden flex flex-col px-6 pb-6 gap-4 border-t border-[#4a7c59]/10 bg-[#f7f3ec]">
          {links.map(([path, label]) => (
            <Link
              key={path}
              to={path}
              onClick={() => setMenuAberto(false)}
              className="text-sm font-medium text-[#5a6b5e] uppercase tracking-widest hover:text-[#4a7c59] transition-colors py-1"
            >
              {label}
            </Link>
          ))}
          <Link
            to="/contato"
            onClick={() => setMenuAberto(false)}
            className="bg-[#4a7c59] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#2d4f38] transition-colors text-center mt-2"
          >
            Fale conosco
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar