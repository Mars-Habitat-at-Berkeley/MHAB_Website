import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header className="fixed top-0 left-0 right-0 bg-transparent z-50">
            <nav className="container mx-auto p-4 flex items-center justify-between"> 
                <div className="flex items-center ml-[-40px]">
                    <img src="../images/icon.png" alt="Logo" className="h-12 w-auto" />
                </div>
                <ul className="flex justify-end space-x-8 mt-3">
                    <li>
                        <Link href="/" className="text-white-700 hover:text-white-900 visited:text-white-700 no-underline">Home</Link>
                    </li>
                    <li>
                        <Link href="#about" className="text-white-700 hover:text-white-900 visited:text-white-700 no-underline">About</Link>
                    </li>
                    <li>
                        <Link href="#team" className="text-white-700 hover:text-white-900 visited:text-white-700 no-underline">Team</Link>
                    </li>
                    <li>
                        <Link href="#contact" className="text-white-700 hover:text-white-900 visited:text-white-700 no-underline">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;