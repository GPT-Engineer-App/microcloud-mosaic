import { Link } from 'react-router-dom';
import { navItems } from '../nav-items';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Microservices App</Link>
        <ul className="flex space-x-4">
          {navItems.map(({ title, to, icon }) => (
            <li key={to}>
              <Link to={to} className="flex items-center hover:text-gray-300">
                {icon}
                <span className="ml-2">{title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
