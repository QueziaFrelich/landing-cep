import Image from 'next/image'
import Link from 'next/link'
import InstagramIcon from '../public/images/footer/social-icons/instagram-icon';
import LinkedinIcon from '../public/images/footer/social-icons/linkedin-icon';
import YoutubeIcon from '../public/images/footer/social-icons/youtube-icon';
import FacebookIcon from '../public/images/footer/social-icons/facebook-icon';
import XIcon from '../public/images/footer/social-icons/x-icon';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaUser } from "react-icons/fa";
import LogoCEP from '../public/images/logos/logo-cep-2.png';
import LogoCREA from '../public/images/logos/logo-crea.png';

const Footer = () => {
    return (
        <>
            <footer className="text-white pt-5 pb-3">
                <div className="container">
                    <div className="row justify-content-between align-items-center p-4">
                        <div className="col-12 col-md-7 text-md-left mb-3 mb-md-0">
                            <h3>FIQUE POR DENTRO DE TODAS AS NOTÍCIAS ATRAVÉS DE NOSSAS REDES SOCIAIS</h3>

                        </div>

                        <div className="col-12 col-md-5 text-end text-md-right justify-content-md-end">
                            <Link href={'https://portal.crea-sc.org.br/'} className='btn btn-outline-light m'>Confira as notícias</Link>
                        </div>

                    </div>

                    <hr className='mt-4' />

                    <div className="row justify-content-between align-items-center p-2">
                        <div className="col-12 col-md-8 text-md-left mb-3 mb-md-0">
                            <div className="d-flex flex-column align-items-start">
                                <div className="d-flex align-items-center mb-3"> {/* Espaço entre logos e ícones */}
                                    <Link href={'/'}>
                                        <Image src={LogoCREA} className="d-block me-5" alt="Logo CREA" />
                                    </Link>
                                    <Link href={'/'}>
                                        <Image src={LogoCEP} className="d-block" alt="Logo CEP" />
                                    </Link>
                                </div>
                               
                                <div className="d-flex align-items-center p-2">
                                    <Link className="pe-3" href={'https://www.instagram.com/creascoficial/'}>
                                        <InstagramIcon fill='white' />
                                    </Link>
                                    <Link className='px-3 ' href={'https://www.linkedin.com/company/crea-sc/?originalSubdomain=br'}>
                                        <LinkedinIcon fill='white' />
                                    </Link>
                                    <Link className='px-3' href={'https://www.youtube.com/channel/UCSgs2Xvs4T6EIEjFa4oE4sQ'}>
                                        <YoutubeIcon fill='white' />
                                    </Link>
                                    <Link className='px-3' href={'https://www.facebook.com/creasc/?locale=pt_BR'}>
                                        <FacebookIcon fill='white' />
                                    </Link>
                                    <Link className='px-3' href={'https://x.com/creasc'}>
                                        <XIcon fill='white' />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-4 d ">
                            <ul className="list-unstyled w-100">
                                <li className="d-flex align-items-center text-end"><strong>Contato</strong></li> {/* Alinha o título 'Contato' */}
                                <li className="d-flex align-items-center"><FaUser className="me-2" /> Rhuan Bittencourt - Assessor de Inovação</li>
                                <li className="d-flex align-items-center"><FaPhone className="me-2" /> (48) 98419-7848</li>
                                <li className="d-flex align-items-center"><FaEnvelope className="me-2" />cep@crea-sc.org.br</li>
                                <li className="d-flex align-items-center"><FaMapMarkerAlt className="me-2" /> Florianópolis - SC</li>
                            </ul>
                        </div>
                    </div>



                </div>
            </footer>
        </>
    )
}

export default Footer;