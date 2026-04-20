import{b4 as v,a$ as M,en as j,ak as u,am as Y,al as Z,an as q,ao as H,aG as J,aF as K,ar as F,ap as Q,aS as X,aW as ee,bi as te,eo as ae,as as ne,aL as re,aU as ie}from"./index-mixGcFiE.js";import{p as se}from"./chunk-4BX2VUAB-CvsfVnEM.js";import{p as le}from"./treemap-75Q7IDZK-BGiqd-i0.js";import{d as L}from"./arc-BQKrsvY6.js";import"./_baseUniq-Dv3l4j1J.js";import"./_basePickBy-O5WKjuNr.js";import"./clone-BL9TyFWl.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"ca7cdcedcc9ef438a80c651342f8286b932ff351"}}catch{}})();try{(function(){var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},a=new e.Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="52b45f0e-4d98-4fe6-985f-5af8b6ab0a8b",e._sentryDebugIdIdentifier="sentry-dbid-52b45f0e-4d98-4fe6-985f-5af8b6ab0a8b")})()}catch{}function oe(e,a){return a<e?-1:a>e?1:a>=e?0:NaN}function ce(e){return e}function de(){var e=ce,a=oe,g=null,w=v(0),s=v(M),o=v(0);function l(t){var r,c=(t=j(t)).length,f,S,m=0,d=new Array(c),i=new Array(c),y=+w.apply(this,arguments),b=Math.min(M,Math.max(-M,s.apply(this,arguments)-y)),h,D=Math.min(Math.abs(b)/c,o.apply(this,arguments)),T=D*(b<0?-1:1),p;for(r=0;r<c;++r)(p=i[d[r]=r]=+e(t[r],r,t))>0&&(m+=p);for(a!=null?d.sort(function(x,A){return a(i[x],i[A])}):g!=null&&d.sort(function(x,A){return g(t[x],t[A])}),r=0,S=m?(b-c*T)/m:0;r<c;++r,y=h)f=d[r],p=i[f],h=y+(p>0?p*S:0)+T,i[f]={data:t[f],index:r,value:p,startAngle:y,endAngle:h,padAngle:D};return i}return l.value=function(t){return arguments.length?(e=typeof t=="function"?t:v(+t),l):e},l.sortValues=function(t){return arguments.length?(a=t,g=null,l):a},l.sort=function(t){return arguments.length?(g=t,a=null,l):g},l.startAngle=function(t){return arguments.length?(w=typeof t=="function"?t:v(+t),l):w},l.endAngle=function(t){return arguments.length?(s=typeof t=="function"?t:v(+t),l):s},l.padAngle=function(t){return arguments.length?(o=typeof t=="function"?t:v(+t),l):o},l}var ue=ie.pie,_={sections:new Map,showData:!1},C=_.sections,z=_.showData,fe=structuredClone(ue),pe=u(()=>structuredClone(fe),"getConfig"),ge=u(()=>{C=new Map,z=_.showData,re()},"clear"),he=u(({label:e,value:a})=>{if(a<0)throw new Error(`"${e}" has invalid value: ${a}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);C.has(e)||(C.set(e,a),F.debug(`added new section: ${e}, with value: ${a}`))},"addSection"),me=u(()=>C,"getSections"),ye=u(e=>{z=e},"setShowData"),ve=u(()=>z,"getShowData"),O={getConfig:pe,clear:ge,setDiagramTitle:K,getDiagramTitle:J,setAccTitle:H,getAccTitle:q,setAccDescription:Z,getAccDescription:Y,addSection:he,getSections:me,setShowData:ye,getShowData:ve},we=u((e,a)=>{se(e,a),a.setShowData(e.showData),e.sections.map(a.addSection)},"populateDb"),Se={parse:u(async e=>{const a=await le("pie",e);F.debug(a),we(a,O)},"parse")},be=u(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,"getStyles"),xe=be,Ae=u(e=>{const a=[...e.values()].reduce((s,o)=>s+o,0),g=[...e.entries()].map(([s,o])=>({label:s,value:o})).filter(s=>s.value/a*100>=1).sort((s,o)=>o.value-s.value);return de().value(s=>s.value)(g)},"createPieArcs"),De=u((e,a,g,w)=>{F.debug(`rendering pie chart
`+e);const s=w.db,o=Q(),l=X(s.getConfig(),o.pie),t=40,r=18,c=4,f=450,S=f,m=ee(a),d=m.append("g");d.attr("transform","translate("+S/2+","+f/2+")");const{themeVariables:i}=o;let[y]=te(i.pieOuterStrokeWidth);y??=2;const b=l.textPosition,h=Math.min(S,f)/2-t,D=L().innerRadius(0).outerRadius(h),T=L().innerRadius(h*b).outerRadius(h*b);d.append("circle").attr("cx",0).attr("cy",0).attr("r",h+y/2).attr("class","pieOuterCircle");const p=s.getSections(),x=Ae(p),A=[i.pie1,i.pie2,i.pie3,i.pie4,i.pie5,i.pie6,i.pie7,i.pie8,i.pie9,i.pie10,i.pie11,i.pie12];let $=0;p.forEach(n=>{$+=n});const G=x.filter(n=>(n.data.value/$*100).toFixed(0)!=="0"),E=ae(A);d.selectAll("mySlices").data(G).enter().append("path").attr("d",D).attr("fill",n=>E(n.data.label)).attr("class","pieCircle"),d.selectAll("mySlices").data(G).enter().append("text").text(n=>(n.data.value/$*100).toFixed(0)+"%").attr("transform",n=>"translate("+T.centroid(n)+")").style("text-anchor","middle").attr("class","slice"),d.append("text").text(s.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText");const N=[...p.entries()].map(([n,I])=>({label:n,value:I})),k=d.selectAll(".legend").data(N).enter().append("g").attr("class","legend").attr("transform",(n,I)=>{const W=r+c,B=W*N.length/2,U=12*r,V=I*W-B;return"translate("+U+","+V+")"});k.append("rect").attr("width",r).attr("height",r).style("fill",n=>E(n.label)).style("stroke",n=>E(n.label)),k.append("text").attr("x",r+c).attr("y",r-c).text(n=>s.getShowData()?`${n.label} [${n.value}]`:n.label);const P=Math.max(...k.selectAll("text").nodes().map(n=>n?.getBoundingClientRect().width??0)),R=S+t+r+c+P;m.attr("viewBox",`0 0 ${R} ${f}`),ne(m,f,R,l.useMaxWidth)},"draw"),Te={draw:De},_e={parser:Se,db:O,renderer:Te,styles:xe};export{_e as diagram};
