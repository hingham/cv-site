import Link from 'next/link';

export default function MainHeader() {
    return <header className="header">
    <nav>
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/work">Work History</Link>
      </nav>
    </header>
}