(()=>{
const $=s=>document.querySelector(s);let cat="all",q="",selected=null;
const map=L.map("leaflet",{center:[22.5,79],zoom:5,minZoom:4});
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:18,attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'})
 .on("tileerror",()=>$("#mapnote").textContent="Some map tiles failed to load. Check your internet connection.").addTo(map);
const layer=L.layerGroup().addTo(map);let markers={};
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const BY=Object.fromEntries(ART.map(a=>[a.id,a]));
const color=a=>CATS[a.cat].color;
const ph=a=>`<div class="ph" style="--c:${color(a)}">${esc(a.name)}</div>`;
function pic(a){if(!a.img)return ph(a);
 return `<img src="${esc(a.img)}" alt="${esc(a.name)} artwork" loading="lazy" data-id="${a.id}">`}
document.addEventListener("error",e=>{const t=e.target;if(t.tagName==="IMG"&&t.dataset.id)t.outerHTML=ph(BY[t.dataset.id])},true);
const match=a=>(cat==="all"||a.cat===cat)&&(a.name+a.state+a.who+a.short+CATS[a.cat].label).toLowerCase().includes(q);
const fit=list=>map.fitBounds(L.latLngBounds(list.flatMap(a=>a.pts.map(p=>[p[0],p[1]]))),{padding:[50,50],maxZoom:8});
function render(){const list=ART.filter(match);layer.clearLayers();markers={};
 list.forEach(a=>{markers[a.id]=a.pts.map(([la,lo,lab])=>L.marker([la,lo],{title:a.name,alt:a.name,
  icon:L.divIcon({className:"",html:`<span class="pin" style="background:${color(a)}"></span>`,iconSize:[20,20],iconAnchor:[10,10]})})
  .bindTooltip(`${a.name} — ${lab}`).on("click",()=>openPanel(a.id,false)).addTo(layer))});
 $("#gallery").innerHTML=list.map(a=>`<article class="card">${pic(a)}<div class="bd"><span class="badge" style="background:${color(a)}">${CATS[a.cat].label}</span><h3>${esc(a.name)}</h3><small>${esc(a.state)}</small><p>${esc(a.short)}</p><button class="btn sm" data-id="${a.id}">Explore Art</button></div></article>`).join("");
 $("#empty").hidden=list.length>0;$("#s1").textContent=ART.length;$("#s2").textContent=new Set(ART.map(a=>a.state)).size;
 if(list.length&&(q||cat!=="all"))fit(list)}
function clearAll(){cat="all";q="";$("#search").value="";sync();render()}
function sync(){document.querySelectorAll(".chip[data-cat]").forEach(c=>c.setAttribute("aria-pressed",c.dataset.cat===cat))}
function openPanel(id,fly=true){const a=BY[id];if(!a)return;if(!markers[id])clearAll();selected=id;
 if(fly)map.flyTo(a.pts[0].slice(0,2),8,{duration:.8});
 const s=(t,x)=>`<h4>${t}</h4><p>${esc(x)}</p>`;
 $("#pBody").innerHTML=pic(a)+`<div class="in"><span class="badge" style="background:${color(a)}">${CATS[a.cat].label}</span><h3 id="pTitle">${esc(a.name)}</h3><small>${esc(a.state)} · ${a.pts.map(p=>esc(p[2])).join(" & ")}</small>`+
  s("Historical background",a.hist)+s("Distinctive elements",a.look)+s("Materials & techniques",a.mat)+s("Cultural meaning",a.sig)+s("Artists & communities",a.who)+
  `<h4>Related art forms</h4><p>${a.rel.map(r=>`<button class="chip" data-rel="${r}">${esc(BY[r].name)}</button>`).join(" ")}</p><p style="margin-top:1rem"><button class="btn sm" id="loc">Locate on Map</button></p></div>`;
 $("#panel").classList.add("open");$("#panel").setAttribute("aria-hidden","false");$("#scrim").hidden=false;$("#close").focus()}
function closePanel(){$("#panel").classList.remove("open");$("#panel").setAttribute("aria-hidden","true");$("#scrim").hidden=true}
function locate(){const a=BY[selected];if(!a)return;closePanel();document.getElementById("map").scrollIntoView();
 setTimeout(()=>{map.invalidateSize();map.flyTo(a.pts[0].slice(0,2),9);markers[a.id][0].openTooltip()},350)}
$("#filters").innerHTML=[["all","All"],...Object.entries(CATS).map(([k,v])=>[k,v.label])].map(([k,l])=>`<button class="chip" data-cat="${k}" aria-pressed="${k==="all"}">${l}</button>`).join("");
$("#legend").innerHTML=Object.values(CATS).map(c=>`<span><i style="background:${c.color}"></i>${c.label}</span>`).join("");
$("#filters").addEventListener("click",e=>{const b=e.target.closest("[data-cat]");if(b){cat=b.dataset.cat;sync();render()}});
$("#search").addEventListener("input",e=>{q=e.target.value.trim().toLowerCase();render()});
$("#gallery").addEventListener("click",e=>{const b=e.target.closest("button[data-id]");if(b){document.getElementById("map").scrollIntoView();setTimeout(()=>{map.invalidateSize();openPanel(b.dataset.id)},350)}});
$("#pBody").addEventListener("click",e=>{if(e.target.id==="loc")return locate();const r=e.target.closest("[data-rel]");if(r)openPanel(r.dataset.rel)});
$("#close").onclick=$("#scrim").onclick=closePanel;
document.addEventListener("keydown",e=>{if(e.key==="Escape")closePanel()});
$("#reset").onclick=()=>{clearAll();closePanel();map.flyTo([22.5,79],5)};
$("#viewAll").onclick=()=>{clearAll();fit(ART)};
window.addEventListener("resize",()=>map.invalidateSize());
render();
})();
