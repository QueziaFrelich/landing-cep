import Link from 'next/link';
import Image from 'next/image';
import Logo from '../public/images/header/logo-cep.svg';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Header() {
    const router = useRouter();

    

    return (
        <nav className={`navbar navbar-expand-lg fixed-top header`}>
            <div className="container d-flex justify-content-between align-items-center">
                <Link href={'/'}>
                    <Image src={Logo} className='logo' alt="Logo" />
                </Link>
                <div id="navbarNav" className="d-flex">
                    <ul className="navbar-nav ms-auto me-auto d-flex flex-row align-items-center">
                        <li className="nav-item">
                            <Link href={'/#'} className="px-3">Início</Link>
                        </li>
                        <li className="nav-item">
                            <Link href={'/#tema'} className="px-3">Tema 2025</Link>
                        </li>
                        <li className="nav-item">
                            <Link href={'/#programacao'} className="px-3">Programação</Link>
                        </li>
                        <li className="nav-item">
                            <Link href={'/#propostas'} className="px-3">Propostas</Link>
                        </li>
                        <li className="nav-item">
                            <Link href={'/#indicadores'} className="px-3">Indicadores</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
    
}
