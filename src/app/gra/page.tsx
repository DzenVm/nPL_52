import type { Metadata } from 'next';
import Game from '@/components/Game';
export const metadata:Metadata={title:'Graj online',description:'Zagraj w bezpłatną układankę światła. Obracaj zwierciadła i poprowadź promień do celu na trzech autorskich planszach.'};
export default function Page(){return <><section className="subhero"><span className="eyebrow">INTERAKTYWNA GRA LOGICZNA</span><h1>Zagraj ze światłem.</h1><p>Obracaj zwierciadła, zmieniaj bieg promienia i rozświetl cel.</p></section><section className="game-section section"><Game/></section></>}
