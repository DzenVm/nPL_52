import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://nilxavqero.quest'),
  title: {
    default: 'Gra logiczna ze światłem online – darmowa łamigłówka',
    template: '%s – darmowa gra logiczna',
  },
  description: 'Bezpłatna gra logiczna online. Obracaj zwierciadła, prowadź promień światła i rozwiązuj autorskie poziomy bez rejestracji.',
  icons: { icon: '/favicon.png' },
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    title: 'Gra logiczna ze światłem online',
    description: 'Obracaj zwierciadła i rozświetl cel. Trzy autorskie poziomy, bez konta i instalacji.',
    url: 'https://nilxavqero.quest',
    images: ['/images/hero.webp'],
  },
};

const nav = [
  ['/', 'Strona główna'],
  ['/gra', 'Zagraj'],
  ['/jak-grac', 'Jak grać'],
  ['/o-grze', 'O grze'],
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body>
        <div className="site">
          <header className="header">
            <nav aria-label="Nawigacja główna">
              {nav.map(([href, label]) => <Link href={href} key={href}>{label}</Link>)}
            </nav>
            <Link className="header-cta" href="/gra">Rozpocznij grę <span>↗</span></Link>
          </header>
          <main>{children}</main>
          <footer className="footer">
            <div><p>Mała przerwa dla ciekawych umysłów.<br />Graj we własnym tempie, gdziekolwiek jesteś.</p></div>
            <div><h3>Odkrywaj</h3><Link href="/gra">Gra</Link><Link href="/jak-grac">Jak grać</Link><Link href="/o-grze">O grze</Link></div>
            <div><h3>Informacje</h3><Link href="/kontakt">Kontakt</Link><Link href="/polityka-prywatnosci">Prywatność</Link><Link href="/regulamin">Regulamin</Link></div>
            <div className="footer-bottom">© {new Date().getFullYear()} · Gra autorska. Bez logowania i opłat.</div>
          </footer>
        </div>
      </body>
    </html>
  );
}
