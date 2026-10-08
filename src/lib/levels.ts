export type Mirror = { x: number; y: number; start: '/' | '\\'; solution: '/' | '\\' };
export type Level = { title: string; subtitle: string; source: [number, number]; target: [number, number]; mirrors: Mirror[]; walls: [number, number][] };
export const levels: Level[] = [
  { title: 'Pierwszy promień', subtitle: 'Dwa odbicia wystarczą, by rozświetlić cel.', source: [0,5], target: [5,1], mirrors: [{x:2,y:5,start:'\\',solution:'/'},{x:2,y:1,start:'/',solution:'/'}], walls:[[4,3],[0,2]] },
  { title: 'Cichy zakręt', subtitle: 'Zaplanuj drogę przez cztery zwierciadła.', source:[0,4], target:[5,3], mirrors:[{x:1,y:4,start:'\\',solution:'/'},{x:1,y:1,start:'/',solution:'/'},{x:4,y:1,start:'/',solution:'\\'},{x:4,y:3,start:'\\',solution:'\\'}], walls:[[3,4],[2,3],[5,5]] },
  { title: 'Świetlny labirynt', subtitle: 'Omiń przeszkody i wróć na właściwy tor.', source:[0,5], target:[5,4], mirrors:[{x:3,y:5,start:'/',solution:'/'},{x:3,y:2,start:'/',solution:'\\'},{x:1,y:2,start:'\\',solution:'/'},{x:1,y:4,start:'/',solution:'\\'}], walls:[[2,3],[4,2],[5,1],[0,1]] },
];
export type Trace = { cells: string[]; success: boolean };
export function trace(level: Level, rotations: Record<string, '/' | '\\'>): Trace {
  const cells: string[] = [];
  let [x,y] = level.source;
  let dx=1, dy=0;
  const seen = new Set<string>();
  for(let i=0;i<80;i++){
    const key=`${x},${y},${dx},${dy}`;
    if(seen.has(key)) return {cells,success:false};
    seen.add(key);
    cells.push(`${x},${y}`);
    if(x===level.target[0] && y===level.target[1]) return {cells,success:true};
    if(level.walls.some(([wx,wy])=>wx===x&&wy===y)) return {cells,success:false};
    const mirror=level.mirrors.find(m=>m.x===x&&m.y===y);
    if(mirror){ const orientation=rotations[`${x},${y}`] ?? mirror.start; [dx,dy]=orientation==='/' ? [-dy,-dx] : [dy,dx]; }
    x+=dx; y+=dy;
    if(x<0||x>5||y<0||y>5) return {cells,success:false};
  }
  return {cells,success:false};
}
