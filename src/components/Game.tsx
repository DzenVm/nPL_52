'use client';
import { useEffect, useMemo, useState } from 'react';
import { levels, trace } from '@/lib/levels';
import Link from 'next/link';

type Orientation = '/' | '\\';
const initial = (index:number) => Object.fromEntries(levels[index].mirrors.map(m=>[`${m.x},${m.y}`,m.start])) as Record<string,Orientation>;
export default function Game(){
  const [levelIndex,setLevelIndex]=useState(0);
  const [rotations,setRotations]=useState<Record<string,Orientation>>(()=>initial(0));
  const [moves,setMoves]=useState(0);
  const [completed,setCompleted]=useState<number[]>([]);
  useEffect(()=>{ const timer=window.setTimeout(()=>{ try { const raw=localStorage.getItem('light-puzzle-completed'); if(raw) setCompleted(JSON.parse(raw)); } catch {} },0); return ()=>window.clearTimeout(timer); },[]);
  const level=levels[levelIndex];
  const beam=useMemo(()=>trace(level,rotations),[level,rotations]);
  function choose(index:number){ setLevelIndex(index); setRotations(initial(index)); setMoves(0); }
  function apply(next:Record<string,Orientation>){ setRotations(next); setMoves(m=>m+1); if(trace(level,next).success && !completed.includes(levelIndex)){const updated=[...completed,levelIndex];setCompleted(updated);localStorage.setItem('light-puzzle-completed',JSON.stringify(updated));} }
  function rotate(x:number,y:number){ const key=`${x},${y}`; apply({...rotations,[key]:rotations[key]==='/'?'\\':'/'}); }
  return <div className="game-shell">
    <div className="game-topline"><span className="eyebrow">GRA INTERAKTYWNA · BEZ KONTA I INSTALACJI</span><span className="game-counter">{completed.length} / {levels.length} ukończone</span></div>
    <div className="game-header"><div><h2>{level.title}</h2><p>{level.subtitle}</p></div><div className="moves"><strong>{moves}</strong><span>ruchy</span></div></div>
    <div className="level-tabs" role="tablist" aria-label="Wybierz poziom">{levels.map((item,i)=><button key={item.title} type="button" role="tab" aria-selected={levelIndex===i} className={levelIndex===i?'selected':''} onClick={()=>choose(i)}>{String(i+1).padStart(2,'0')} <span>{completed.includes(i)?'✓':''}</span></button>)}</div>
    <div className="board-wrap"><div className="board" role="grid" aria-label={`Plansza: ${level.title}`}>
      {Array.from({length:36},(_,i)=>{const x=i%6,y=Math.floor(i/6),key=`${x},${y}`;const mirror=level.mirrors.find(m=>m.x===x&&m.y===y);const source=level.source[0]===x&&level.source[1]===y;const target=level.target[0]===x&&level.target[1]===y;const wall=level.walls.some(([wx,wy])=>wx===x&&wy===y);const lit=beam.cells.includes(key);return <div key={key} className={`tile ${lit?'lit':''} ${wall?'wall':''} ${target?'target':''}`} role="gridcell">{mirror?<button className="mirror" type="button" onClick={()=>rotate(x,y)} aria-label={`Obróć zwierciadło w kolumnie ${x+1}, wierszu ${y+1}`} title="Obróć zwierciadło">{rotations[key]}</button>:source?<span className="source" aria-label="Źródło światła">✦</span>:target?<span className="target-icon" aria-label="Cel">✧</span>:wall?<span className="wall-icon" aria-label="Przeszkoda">◆</span>:null}</div>})}
    </div></div>
    <div className="game-bottom"><div className={`game-status ${beam.success?'win':''}`} aria-live="polite"><span className="status-dot"/>{beam.success?'Brawo! Promień dotarł do celu.':'Kliknij zwierciadło, aby zmienić kierunek promienia.'}</div><div className="game-actions"><button type="button" onClick={()=>{setRotations(initial(levelIndex));setMoves(0)}}>↺ Resetuj</button><button type="button" onClick={()=>apply(Object.fromEntries(level.mirrors.map(m=>[`${m.x},${m.y}`,m.solution])) as Record<string,Orientation>)}>Pokaż rozwiązanie</button>{beam.success&&levelIndex<levels.length-1?<button type="button" className="next-level" onClick={()=>choose(levelIndex+1)}>Następny poziom →</button>:null}</div></div>
    <p className="game-footnote">Postęp zapisuje się tylko w tej przeglądarce. <Link href="/jak-grac">Poznaj zasady gry →</Link></p>
  </div>
}
