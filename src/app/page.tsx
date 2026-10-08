import Image from 'next/image';
import Link from 'next/link';

const levelCards = [
  {
    number: '01',
    title: 'Pierwszy promień',
    detail: 'Pierwsze odbicie',
    copy: 'Zacznij od krótkiej trasy z dwoma zwierciadłami. Zobacz, jak zmiana ustawienia jednej płytki kieruje promień w górę i pozwala mu dotrzeć do celu. To dobry moment, by oswoić się z planszą.',
  },
  {
    number: '02',
    title: 'Cichy zakręt',
    detail: 'Więcej możliwości',
    copy: 'Cztery zwierciadła tworzą kilka możliwych dróg. Sprawdź, które odbicia prowadzą dalej, a które wyprowadzają światło poza planszę. Kolejne ruchy warto planować na podstawie widocznej trasy.',
  },
  {
    number: '03',
    title: 'Świetlny labirynt',
    detail: 'Małe wyzwanie',
    copy: 'Promień musi ominąć przeszkody, skręcić i wrócić na właściwy tor. Tu przydaje się spojrzenie na układ z dwóch stron: od źródła oraz od celu, który chcesz rozświetlić.',
  },
];

const frequentlyAsked = [
  {
    question: 'Czy gra jest naprawdę bezpłatna?',
    answer: 'Tak. Wszystkie trzy poziomy są dostępne bez opłat. Nie ma zakupów w grze ani funkcji, które trzeba odblokować.',
  },
  {
    question: 'Czy potrzebuję konta lub instalacji?',
    answer: 'Nie. Gra uruchamia się bezpośrednio w przeglądarce. Możesz wejść na planszę od razu, bez rejestracji i pobierania aplikacji.',
  },
  {
    question: 'Co zrobić, gdy promień zniknie?',
    answer: 'Światło mogło trafić na przeszkodę albo wyjść poza krawędź planszy. Sprawdź ostatnie podświetlone pola i obróć zwierciadło, przy którym trasa zmieniła kierunek.',
  },
  {
    question: 'Czy mogę wrócić do ukończonego poziomu?',
    answer: 'Tak. Poziomy możesz wybierać i rozwiązywać ponownie. Informacja o ukończeniu zapisuje się lokalnie w tej przeglądarce; po wyczyszczeniu danych strony zniknie.',
  },
  {
    question: 'Czy gra działa na telefonie?',
    answer: 'Tak. Plansza dopasowuje się do mniejszych ekranów, a zwierciadła obracasz dotknięciem. Na komputerze działa tak samo po kliknięciu lub użyciu klawiatury.',
  },
];

export default function Home() {
  return <>
    <section className="hero">
      <Image src="/images/hero.webp" alt="Szklane płytki i zwierciadła oświetlone ciepłym promieniem" fill priority className="hero-image" sizes="100vw" />
      <div className="hero-shade" />
      <div className="hero-content">
        <div className="eyebrow light">GRA LOGICZNA ONLINE · ZA DARMO</div>
        <h1>Zobacz, dokąd<br /><em>prowadzi światło.</em></h1>
        <p>Obracaj zwierciadła. Znajdź drogę dla promienia. Rozwiązuj krótkie zagadki, które nagradzają spostrzegawczość.</p>
        <div className="hero-buttons"><Link href="/gra" className="btn primary">Zagraj teraz <span>↗</span></Link><Link href="/jak-grac" className="btn ghost">Poznaj zasady</Link></div>
        <div className="hero-caption"><span>✦</span> 3 autorskie poziomy <i /> Bez konta <i /> Na telefonie i komputerze</div>
      </div>
    </section>

    <section className="intro section">
      <div className="section-heading"><span className="eyebrow">PROSTA ZASADA. WIELE MOŻLIWOŚCI.</span><h2>Jedno kliknięcie<br />zmienia cały bieg gry.</h2></div>
      <div className="intro-copy"><p>Każde zwierciadło odbija promień pod innym kątem. Obróć je, obserwuj nową trasę światła i krok po kroku doprowadź je do celu. Widzisz skutek każdego ruchu od razu, więc możesz spokojnie sprawdzać własne pomysły.</p><Link className="text-link" href="/gra">Wejdź na planszę <span>→</span></Link></div>
    </section>

    <section className="feature-grid section">
      <div className="feature-card image-card"><Image src="/images/mirrors.webp" alt="Układ zwierciadeł i świetlnej ścieżki na granatowej planszy" fill sizes="(max-width: 800px) 100vw, 50vw" /></div>
      <div className="feature-card content-card"><span className="eyebrow">TWOJA CHWILA SKUPIENIA</span><h2>Gra, która pozwala myśleć po swojemu.</h2><p>Nie ma zegara ani presji. Testuj pomysły, wróć do początku jednym przyciskiem albo podejrzyj rozwiązanie, gdy potrzebujesz wskazówki.</p><div className="mini-features"><div><strong>01</strong><span>Obserwuj promień</span></div><div><strong>02</strong><span>Obracaj zwierciadła</span></div><div><strong>03</strong><span>Rozświetl cel</span></div></div><Link className="btn dark" href="/gra">Wybierz poziom <span>↗</span></Link></div>
    </section>

    <section className="levels-section section">
      <div className="wide-heading"><div><span className="eyebrow">OD PIERWSZEGO ODBICIA DO LABIRYNTU</span><h2>Trzy plansze, trzy nowe odkrycia.</h2></div><p>Poziomy rozwijają tę samą prostą zasadę. Każdy dodaje nowy układ zwierciadeł i daje okazję do innego sposobu myślenia o drodze światła.</p></div>
      <div className="level-cards">{levelCards.map((level) => <article className="level-card" key={level.number}><div className="level-card-top"><span>{level.number}</span><span className="level-spark" aria-hidden="true">✧</span></div><span className="level-detail">{level.detail}</span><h3>{level.title}</h3><p>{level.copy}</p><Link href="/gra">Przejdź do gry <span aria-hidden="true">→</span></Link></article>)}</div>
    </section>

    <section className="mechanics-section">
      <div className="section mechanics-inner"><div className="mechanics-intro"><span className="eyebrow light">CO WIDZISZ NA PLANSZY?</span><h2>Cztery elementy.<br />Jedna świetlna droga.</h2><p>Plansza ma sześć kolumn i sześć rzędów. Promień startuje ze źródła, przechodzi przez kolejne pola i zmienia kierunek po spotkaniu ze zwierciadłem. Układ zostaje rozwiązany wtedy, gdy światło trafi do celu.</p></div><div className="mechanic-list"><article><span>✦</span><div><h3>Źródło światła</h3><p>Stąd promień wyrusza w prawo. Podświetlone pola pokazują jego aktualną trasę.</p></div></article><article><span>/ \</span><div><h3>Zwierciadła</h3><p>Kliknięcie obraca płytkę między dwoma ustawieniami. Każde z nich odbija światło w inną stronę.</p></div></article><article><span>◆</span><div><h3>Przeszkody</h3><p>Jeśli promień trafi na ciemny blok, zatrzyma się. Znajdź drogę, która go ominie.</p></div></article><article><span>✧</span><div><h3>Cel</h3><p>Rozświetl symbol celu, aby ukończyć poziom. Potem możesz przejść do następnej planszy.</p></div></article></div></div>
    </section>

    <section className="strategy-section section"><div><span className="eyebrow">POMYSŁ NA ROZWIĄZANIE</span><h2>Gdy utkniesz,<br />zmień punkt widzenia.</h2><p>Nie musisz obracać wszystkich zwierciadeł naraz. W tej grze najlepiej działa spokojna obserwacja jednej zmiany i jej skutków.</p><Link className="text-link" href="/jak-grac">Pełne zasady gry <span>→</span></Link></div><ol className="strategy-steps"><li><span>01</span><div><h3>Śledź ostatnie podświetlone pole</h3><p>To miejsce pokazuje, gdzie promień zakończył drogę. Jeśli wyszedł poza planszę, zacznij od zwierciadła, przez które przeszedł tuż wcześniej.</p></div></li><li><span>02</span><div><h3>Spójrz od strony celu</h3><p>Zastanów się, z której strony światło może dotrzeć do końcowego pola. Czasem łatwiej najpierw ułożyć ostatni zakręt, a dopiero potem początek trasy.</p></div></li><li><span>03</span><div><h3>Sprawdzaj po jednym ruchu</h3><p>Każdy obrót od razu aktualizuje drogę promienia. Dzięki temu wiesz, która decyzja pomogła, a którą warto cofnąć.</p></div></li></ol></section>

    <section className="benefits section"><div><span className="eyebrow">DLACZEGO WARTO SPRÓBOWAĆ?</span><h2>Krótka gra.<br />Dużo satysfakcji.</h2></div><div className="benefit-list"><article><span>✧</span><div><h3>Od razu do gry</h3><p>Otwórz stronę i zacznij. Nie potrzebujesz konta, pobierania ani instrukcji na kilka stron.</p></div></article><article><span>◇</span><div><h3>Autorskie układy</h3><p>Trzy plansze prowadzą od pierwszego odbicia do prawdziwego świetlnego labiryntu.</p></div></article><article><span>↗</span><div><h3>Twój rytm</h3><p>Bez limitu czasu. Graj na komputerze lub telefonie i wracaj do ukończonych plansz.</p></div></article></div></section>

    <section className="faq-section section"><div className="faq-intro"><span className="eyebrow">PRZED PIERWSZĄ GRĄ</span><h2>Najczęstsze pytania</h2><p>Wszystko, co warto wiedzieć, zanim obrócisz pierwsze zwierciadło.</p></div><div className="faq-list">{frequentlyAsked.map((item) => <details key={item.question}><summary>{item.question}<span aria-hidden="true">+</span></summary><p>{item.answer}</p></details>)}</div></section>

    <section className="last-cta section"><Image src="/images/prism.webp" alt="Szklany pryzmat rozszczepiający światło" fill sizes="100vw" /><div className="last-overlay" /><div className="last-content"><span className="eyebrow light">GOTOWY NA PIERWSZE ODBICIE?</span><h2>Znajdź drogę<br />dla światła.</h2><Link className="btn primary" href="/gra">Przejdź do gry <span>↗</span></Link></div></section>
  </>;
}
