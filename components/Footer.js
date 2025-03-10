import Image from 'next/image'
import Link from 'next/link'
import InstagramIcon from '../public/images/footer/social-icons/instagram-icon';
import LinkedinIcon from '../public/images/footer/social-icons/linkedin-icon';
import YoutubeIcon from '../public/images/footer/social-icons/youtube-icon';
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
                            <div className="d-flex align-items-center">
                                <Link href={'https://www.instagram.com/tahvago/?utm_source=ig_web_button_share_sheet'} >
                                    <InstagramIcon fill='white'></InstagramIcon>
                                </Link>
                                <Link className='px-3' href={'https://www.linkedin.com/company/tahvago'}>
                                    <LinkedinIcon fill='white'></LinkedinIcon>
                                </Link>
                            </div>
                        </div>

                        <div className="col-12 col-md-5 text-end text-md-right justify-content-md-end">
                            <Link href={' '} className='btn btn-outline-light m'>Confira as notícias</Link>
                        </div>

                    </div>
                    
                    <hr className='mt-4' />

                    <div className="row justify-content-between align-items-center p-2">
                        <div className="col-12 col-md-6 text-md-left mb-3 mb-md-0">

                            <div className="d-flex align-items-center">
                                <Link href={'/'}>
                                    <Image src={LogoCREA} className=" d-block me-5" alt="Logo CREA" />
                                </Link>
                                <Link href={'/'}>
                                    <Image src={LogoCEP} className=" d-block" alt="Logo CEP" />
                                </Link>
                            </div>
                            <div className="d-flex align-items-center pt-3 p-3">
                                <Link href={'https://www.instagram.com/tahvago/?utm_source=ig_web_button_share_sheet'} >
                                    <InstagramIcon fill='white'></InstagramIcon>
                                </Link>
                                <Link className='px-3' href={'https://www.linkedin.com/company/tahvago'}>
                                    <LinkedinIcon fill='white'></LinkedinIcon>
                                </Link>
                                <Link className='px-2' href={'https://www.linkedin.com/company/tahvago'}>
                                    <YoutubeIcon fill='white'></YoutubeIcon>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;