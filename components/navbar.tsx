import Link from 'next/link';
import { CompassIcon, GlobeIcon, MenuIcon, UserCircleIcon } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/" className="navbar-logo flex items-center">
        <CompassIcon className="w-8 h-8 mr-2 text-primary" />
        Piériple
      </Link>
      <div className="navbar-links">
        <Link href="/questionnaire" className="navbar-link">
          Trouver un voyage
        </Link>
        <Link href="#" className="navbar-link">
          Mes voyages
        </Link>
        <button className="btn-secondary flex items-center space-x-2">
          <GlobeIcon className="w-5 h-5" />
          <MenuIcon className="w-5 h-5" />
          <UserCircleIcon className="w-5 h-5" />
        </button>
      </div>
    </nav>
  );
}