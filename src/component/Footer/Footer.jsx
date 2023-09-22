import { TiSocialFacebook } from 'react-icons/Ti';
import { FaTwitter } from 'react-icons/Fa';
import { BsInstagram } from 'react-icons/Bs';

const Footer = () => {
    return (
        <div>
            <footer className="footer lg:px-[120px] p-10 bg-neutral text-neutral-content lg:flex justify-between gap-[50px]">
                <aside className='flex-1'>
                    <h3 className='text-3xl font-bold'>Career Hub</h3>
                    <p>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                    <div className='flex gap-2'>
                        <a href=""><TiSocialFacebook className='px-[10px] rounded-[50px] bg-blue-600 hover:bg-blue-700 text-5xl' /></a>
                        <a href=""><FaTwitter className='px-[10px] rounded-[50px] bg-white text-cyan-400 text-5xl' /></a>
                        <a href=""><BsInstagram className='px-[10px] rounded-[50px] bg-white text-fuchsia-700 text-5xl' /></a>
                    </div>
                </aside>
                <nav className='flex-1'>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav className='flex-1'>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav className='flex-1'>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;