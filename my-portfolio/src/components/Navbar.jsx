import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-white shadow sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="#" className="text-2xl font-bold text-blue-600">
                    Nisreen Sabir
                </Link>
                <div className="space-x-6">
                    <Link href="/about" className="text-blue-600">
                        About
                    </Link>
                    <Link href="/projects" className="text-blue-600">
                        Skills
                    </Link>
                    <Link href="/projects" className="text-blue-600">
                        Projects
                    </Link>
                    <Link href="/contact" className="text-blue-600">
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
}
