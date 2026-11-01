import React from 'react';
import {AbsoluteFill, Composition, Easing, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

const brown = '#502b1c';
const orange = '#ce642f';
const ease = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.bezier(0.22, 1, 0.36, 1)} as const;

const Cookie: React.FC<{size: number; bitten?: boolean}> = ({size, bitten}) => (
  <svg width={size} height={size} viewBox="0 0 240 240" style={{overflow: 'visible', filter: 'drop-shadow(0 16px 12px #71371620)'}}>
    <defs>
      <radialGradient id={`dough-${size}`} cx="35%" cy="28%" r="75%"><stop stopColor="#f9cd83"/><stop offset=".75" stopColor="#e5a452"/><stop offset="1" stopColor="#c58038"/></radialGradient>
      <mask id={`bite-${size}`}><rect width="240" height="240" fill="white"/>{bitten && <><circle cx="217" cy="32" r="39" fill="black"/><circle cx="235" cy="78" r="28" fill="black"/><circle cx="175" cy="10" r="25" fill="black"/></>}</mask>
    </defs>
    <g mask={`url(#bite-${size})`}>
      <path d="M120 10 C146 7 158 19 179 26 C204 33 212 53 222 76 C235 101 230 120 227 144 C225 170 208 190 188 206 C165 226 141 229 115 230 C89 233 62 221 43 203 C22 184 14 164 11 137 C6 111 14 85 26 61 C41 38 59 21 86 16 Z" fill={`url(#dough-${size})`} stroke="#bf803e" strokeWidth="3"/>
      <path d="M33 91 C40 53 75 31 109 29" fill="none" stroke="#ffe0a6" strokeWidth="7" strokeLinecap="round"/>
      {[[65,65,15],[129,49,11],[176,88,14],[110,114,16],[54,139,12],[154,162,16],[95,191,11],[196,141,9],[151,208,8]].map(([x,y,r], i)=><g key={i} transform={`translate(${x} ${y}) rotate(${i*29})`}><path d={`M${-r} -5 L-3 ${-r} L${r} -3 L${r-3} ${r-2} L${-r+2} ${r} Z`} fill="#623b27"/><path d={`M${-r+3} -4 L-3 ${-r+3} L${r-3} -3`} stroke="#8d5835" strokeWidth="3" fill="none"/></g>)}
      {[[86,87],[142,79],[76,167],[180,186],[34,106],[129,147],[191,61]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r="2.6" fill="#bb7e3c" opacity=".55"/>)}
    </g>
  </svg>
);

const Intro = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const pop = (seconds: number) => spring({frame: frame-seconds*fps, fps, config:{damping:16, stiffness:95, mass:1.1}});
  return <AbsoluteFill style={{background:'#fff5e5', color:brown, overflow:'hidden'}}>
    <AbsoluteFill style={{background:'radial-gradient(ellipse at 50% 38%, #fffaf0 0%, #fff5e5 60%, #f3e2c8 100%)'}}/>
    <svg width="1920" height="1080" style={{position:'absolute', opacity:.22}}><filter id="grain"><feTurbulence type="fractalNoise" baseFrequency=".75" numOctaves="3" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/><feComponentTransfer><feFuncA type="linear" slope=".15"/></feComponentTransfer></filter><rect width="1920" height="1080" filter="url(#grain)" opacity=".5"/></svg>
    <div style={{position:'absolute', inset:45, border:'1px solid #bf825b45', borderRadius:30}}/>
    <div style={{position:'absolute', top:94, width:'100%', textAlign:'center', fontFamily:'Arial, sans-serif', fontSize:20, letterSpacing:7, color:'#9b684a', opacity:interpolate(frame,[.7*fps,1.5*fps],[0,1],ease)}}>A LITTLE JOY, FRESH FROM THE OVEN</div>

    <div style={{position:'absolute', top:230, width:'100%', textAlign:'center'}}>
      <div style={{fontFamily:'Georgia, serif', fontSize:169, fontWeight:700, letterSpacing:-8, lineHeight:1.06, opacity:interpolate(frame,[0,.6*fps],[0,1],ease), translate:`0 ${interpolate(frame,[0,1.3*fps],[90,0],ease)}px`}}>Kevin Cookie</div>
      <div style={{fontFamily:'Georgia, serif', fontStyle:'italic', fontSize:137, letterSpacing:-5, lineHeight:1.12, color:orange, opacity:interpolate(frame,[.4*fps,1.2*fps],[0,1],ease), translate:`0 ${interpolate(frame,[.4*fps,1.7*fps],[70,0],ease)}px`}}>Company</div>
      <svg width="610" height="32" viewBox="0 0 610 32" style={{marginTop:18}}><path d="M10 20 Q300 -7 600 19" stroke={orange} strokeWidth="5" strokeLinecap="round" fill="none" pathLength="1" strokeDasharray="1" strokeDashoffset={interpolate(frame,[1.5*fps,2.4*fps],[1,0],ease)}/></svg>
      <div style={{marginTop:37, fontFamily:'Arial, sans-serif', fontSize:48, fontWeight:400, letterSpacing:1, opacity:interpolate(frame,[2.2*fps,3*fps],[0,1],ease), translate:`0 ${interpolate(frame,[2.2*fps,3.2*fps],[26,0],ease)}px`}}>Freshly Baked Happiness.</div>
    </div>

    <div style={{position:'absolute', left:-65, top:565, scale:pop(.65), rotate:`${interpolate(frame,[.65*fps,3*fps],[-35,-13],ease)}deg`, translate:`0 ${Math.sin(frame/fps*1.5)*8}px`}}><Cookie size={410}/></div>
    <div style={{position:'absolute', right:-35, top:190, scale:pop(1.05), rotate:`${interpolate(frame,[1.05*fps,3.1*fps],[40,17],ease)}deg`, translate:`0 ${Math.sin(frame/fps*1.4+1)*9}px`}}><Cookie size={345} bitten/></div>
    <div style={{position:'absolute', left:1370, top:815, scale:pop(1.6), rotate:`${interpolate(frame,[1.6*fps,3.5*fps],[-35,12],ease)}deg`}}><Cookie size={150}/></div>

    <svg width="1920" height="1080" style={{position:'absolute', pointerEvents:'none'}}>
      <g fill={orange} opacity={interpolate(frame,[1.3*fps,2.1*fps],[0,1],ease)}>
        <path d="M354 247 Q354 274 329 274 Q354 274 354 301 Q354 274 379 274 Q354 274 354 247"/>
        <path d="M1517 625 Q1517 644 1499 644 Q1517 644 1517 663 Q1517 644 1535 644 Q1517 644 1517 625"/>
        <circle cx="415" cy="774" r="5"/><circle cx="1535" cy="751" r="5"/>
      </g>
      <g fill="#b77a42" opacity={interpolate(frame,[1.6*fps,2.6*fps],[0,1],ease)}><ellipse cx="315" cy="512" rx="7" ry="11" transform="rotate(-30 315 512)"/><ellipse cx="1630" cy="592" rx="6" ry="9" transform="rotate(35 1630 592)"/><circle cx="1325" cy="886" r="5"/><circle cx="346" cy="477" r="4"/></g>
    </svg>
    <div style={{position:'absolute', bottom:101, width:'100%', display:'flex', justifyContent:'center', alignItems:'center', gap:20, opacity:interpolate(frame,[3*fps,3.8*fps],[0,1],ease), fontFamily:'Arial, sans-serif', fontSize:19, letterSpacing:5, color:'#9b684a'}}><span style={{width:52,height:1,background:'#bd9476'}}/>BAKED WITH LOVE<span style={{width:52,height:1,background:'#bd9476'}}/></div>
  </AbsoluteFill>;
};

export const Root = () => <Composition id="KevinCookieCompany" component={Intro} durationInFrames={180} fps={30} width={1920} height={1080}/>;
