import Link from 'next/link';
import Image from 'next/image';
import Logo from '../public/images/header/logo-cep.svg';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Ícones para o menu mobile

export default function Header() {
    const router = useRouter();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar navbar-expand-lg fixed-top header">
            <div className="container d-flex justify-content-between align-items-center">
                
                {/* Logo */}
                <Link href={'/'}>
                    <Image src={Logo} className='logo' alt="Logo" />
                </Link>

                {/* Botão de menu para mobile */}
                <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>

                {/* Menu principal */}
                <div className={`nav-menu ${menuOpen ? 'open' : ''}`}>
                    <ul className="navbar-nav ms-auto me-auto d-flex flex-column flex-lg-row align-items-center">
                        <li className="nav-item">
                            <Link href={'/#'} className="px-3" onClick={() => setMenuOpen(false)}>Início</Link>
                        </li>
                        <li className="nav-item">
                            <Link href={'/#tema'} className="px-3" onClick={() => setMenuOpen(false)}>Tema 2025</Link>
                        </li>
                        <li className="nav-item">
                            <Link href={'/#programacao'} className="px-3" onClick={() => setMenuOpen(false)}>Programação</Link>
                        </li>
                        
                        {/* Dropdown */}
                        <li className="nav-item dropdown"
                            onMouseEnter={() => setDropdownOpen(true)}
                            onMouseLeave={() => setDropdownOpen(false)}>
                            <a className="px-3 dropdown-toggle" style={{ cursor: 'pointer' }}>Propostas</a>
                            {dropdownOpen && (
                                <ul className="dropdown-menu show">
                                    <li><a className="dropdown-item" href="http://propostas.crea-sc.org.br/" target="_blank" rel="noopener noreferrer">Edição 15º CEP (2025)</a></li>
                                </ul>
                            )}
                        </li>

                        <li className="nav-item">
                            <Link href="https://ipsbrasil.org.br/pt/explore/scorecard/4200051" 
                                  className="px-3" target="_blank" rel="noopener noreferrer"
                                  onClick={() => setMenuOpen(false)}>
                                Indicadores
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
