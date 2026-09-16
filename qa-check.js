const fs=require('fs'),path=require('path');
const OUT='out';
let fail=0;
const pages=fs.readdirSync(OUT).filter(f=>f.endsWith('.html'));
// gather every local asset reference, handling escaped quotes in Next's JSON payloads
const refs=new Set();
for(const p of pages){
  const h=fs.readFileSync(path.join(OUT,p),'utf8');
  for(const m of h.matchAll(/(?:src|href)=\\?"(\/[^"\\?#]+\.(?:jpg|jpeg|png|svg|webp|pdf|css|js|ico))/g)) refs.add(m[1]);
  for(const m of h.matchAll(/\\?"(\/(?:images|community|certificates)\/[^"\\?#]+\.[a-z0-9]+)/gi)) refs.add(m[1]);
}
console.log('=== 1. ASSET INTEGRITY ===');
const missing=[...refs].filter(r=>!fs.existsSync(path.join(OUT,r.replace(/^\//,''))));
if(missing.length===0) console.log(`  PASS  ${refs.size} referenced assets all resolve`);
else { fail=1; console.log(`  FAIL  ${missing.length} missing:`); missing.forEach(m=>console.log('        '+m)); }

console.log('\n=== 2. ORPHANED ASSETS ===');
const walk=d=>fs.existsSync(d)?fs.readdirSync(d,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(d,e.name)):[path.join(d,e.name)]):[];
const orphans=[...walk(path.join(OUT,'community')),...walk(path.join(OUT,'images'))]
  .map(f=>'/'+path.relative(OUT,f).replace(/\\/g,'/'))
  .filter(r=>!refs.has(r));
orphans.length? orphans.forEach(o=>console.log('  unused: '+o)) : console.log('  PASS  none');

console.log('\n=== 3. CONTENT CORRECTNESS ===');
const idx=fs.readFileSync(path.join(OUT,'index.html'),'utf8');
const banned=[
 ['Shop Manager','wrong job title'],
 ['Available for work','stale availability'],
 ['Open to entry','stale job-seeking'],
 ['submitted to InCIT','understates accepted paper'],
 ['submitted to INCIT','understates accepted paper'],
 ['&gt;15+&lt;','unverifiable metric'],
 ['Digital Innovation and Artificial Intelligence','wrong degree name'],
 ['GPA 3.8.','wrong GPA'],
 ['early in my career','self-deprecating'],
];
let clean=true;
for(const [s,why] of banned) if(idx.includes(s)){ console.log(`  FAIL  "${s}" — ${why}`); clean=false; fail=1; }
if(clean) console.log('  PASS  no stale or inaccurate strings on homepage');

console.log('\n=== 4. REQUIRED CONTENT ===');
const required=[['InCIT 2026','accepted paper'],['Snoopbees','current role'],['First Class','degree honors'],['SQLi','offensive work']];
for(const [s,what] of required){ if(idx.includes(s)) console.log(`  PASS  ${what}`); else { console.log(`  FAIL  missing ${what} ("${s}")`); fail=1; } }

console.log('\n=== 5. HEADINGS / A11Y ===');
for(const p of ['index.html','certs.html','hub.html','resume.html']){
  if(!fs.existsSync(path.join(OUT,p))) continue;
  const h=fs.readFileSync(path.join(OUT,p),'utf8');
  const h1=(h.match(/<h1[\s>]/g)||[]).length;
  const main=/id=\\?"main-content\\?"/.test(h);
  const ok=h1===1&&main;
  if(!ok) fail=1;
  console.log(`  ${ok?'PASS':'FAIL'}  ${p.padEnd(12)} h1=${h1} skip-target=${main?'yes':'NO'}`);
}

console.log('\n=== 6. SEO / SHARE ===');
const chk=[[/og-card\.jpg/,'OG card'],[/apple-touch-icon/,'apple icon'],[/name="description"/,'meta description']];
for(const [re,what] of chk){ const ok=re.test(idx); if(!ok)fail=1; console.log(`  ${ok?'PASS':'FAIL'}  ${what}`); }
const certs=fs.existsSync(path.join(OUT,'certs.html'))?fs.readFileSync(path.join(OUT,'certs.html'),'utf8'):'';
console.log(`  ${/noindex/.test(certs)?'PASS':'FAIL'}  /certs noindex`);
console.log(`  ${fs.existsSync(path.join(OUT,'.nojekyll'))?'PASS':'FAIL'}  .nojekyll present`);

console.log('\n=== 7. PAYLOAD ===');
const sz=d=>walk(d).reduce((a,f)=>a+fs.statSync(f).size,0);
const img=sz(path.join(OUT,'community'))+sz(path.join(OUT,'images'));
console.log(`  images: ${(img/1048576).toFixed(2)} MB ${img<5e6?'(PASS)':'(FAIL >5MB)'}`);
if(img>=5e6) fail=1;
const fonts=walk(path.join(OUT,'_next','static','media')).filter(f=>f.endsWith('.woff2'));
console.log(`  fonts: ${fonts.length} woff2`);

console.log('\n'+(fail? '### QA FAILED ###':'### QA PASSED ###'));
process.exit(fail);
