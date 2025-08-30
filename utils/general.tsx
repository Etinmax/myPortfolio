import { Links } from "./static"
import Link from "next/link";
export default function Navbar() {
  return (
    <header className="bg-black flex justify-between items-center px-6 py-6 md:px20">
        <h1 className="text-white">Etinosa Maxwell Ese</h1>
        {/* Navigation links: hidden on small screens, visible on md+ */}
        <nav className="hidden md:flex space-x-4">
            {Links.map((link, index) => (
                <Link href={link.href} key={index}>{link.name}</Link>
            ))}
        </nav>
        {/* Menu button: visible on small screens, hidden on md+ */}
        <button className="flex md:hidden">⇶</button>
    </header>
  )
}
 function Footer() {
  return (
    <footer>
      <p>&copy; 2023 Etinosa Maxwell Ese. All rights reserved.</p>
    </footer>
  );
}
export { Navbar, Footer } ;