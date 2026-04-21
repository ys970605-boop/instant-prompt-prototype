import{aC as v,ax as M,d2 as Q,_ as u,T as Y,Q as Z,U as j,V as q,ac as H,ab as J,Y as _,W as K,ao as X,as as ee,aQ as te,d3 as ae,Z as ne,ah as re,aq as ie}from"./index-D5RrfQU2.js";import{p as se}from"./chunk-4BX2VUAB-BUJAt2H0.js";import{p as le}from"./treemap-75Q7IDZK-9aRNHrr1.js";import{d as L}from"./arc-C-n1aeQV.js";import"./_baseUniq-BWyQoBBO.js";import"./_basePickBy-CzpSCbYH.js";import"./clone-Bfdkzg3P.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"c93bbe8308a9a5385a9d3bc83187e53be6e544f5"}}catch{}})();try{(function(){var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},a=new e.Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="d9bb9e3e-9d79-48ba-abb2-962016a0fcc1",e._sentryDebugIdIdentifier="sentry-dbid-d9bb9e3e-9d79-48ba-abb2-962016a0fcc1")})()}catch{}function oe(e,a){return a<e?-1:a>e?1:a>=e?0:NaN}function ce(e){return e}function de(){var e=ce,a=oe,g=null,b=v(0),s=v(M),o=v(0);function l(t){var r,c=(t=Q(t)).length,p,w,m=0,d=new Array(c),i=new Array(c),y=+b.apply(this,arguments),S=Math.min(M,Math.max(-M,s.apply(this,arguments)-y)),h,D=Math.min(Math.abs(S)/c,o.apply(this,arguments)),T=D*(S<0?-1:1),f;for(r=0;r<c;++r)(f=i[d[r]=r]=+e(t[r],r,t))>0&&(m+=f);for(a!=null?d.sort(function(x,A){return a(i[x],i[A])}):g!=null&&d.sort(function(x,A){return g(t[x],t[A])}),r=0,w=m?(S-c*T)/m:0;r<c;++r,y=h)p=d[r],f=i[p],h=y+(f>0?f*w:0)+T,i[p]={data:t[p],index:r,value:f,startAngle:y,endAngle:h,padAngle:D};return i}return l.value=function(t){return arguments.length?(e=typeof t=="function"?t:v(+t),l):e},l.sortValues=function(t){return arguments.length?(a=t,g=null,l):a},l.sort=function(t){return arguments.length?(g=t,a=null,l):g},l.startAngle=function(t){return arguments.length?(b=typeof t=="function"?t:v(+t),l):b},l.endAngle=function(t){return arguments.length?(s=typeof t=="function"?t:v(+t),l):s},l.padAngle=function(t){return arguments.length?(o=typeof t=="function"?t:v(+t),l):o},l}var ue=ie.pie,z={sections:new Map,showData:!1},C=z.sections,F=z.showData,pe=structuredClone(ue),fe=u(()=>structuredClone(pe),"getConfig"),ge=u(()=>{C=new Map,F=z.showData,re()},"clear"),he=u(({label:e,value:a})=>{if(a<0)throw new Error(`"${e}" has invalid value: ${a}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);C.has(e)||(C.set(e,a),_.debug(`added new section: ${e}, with value: ${a}`))},"addSection"),me=u(()=>C,"getSections"),ye=u(e=>{F=e},"setShowData"),ve=u(()=>F,"getShowData"),O={getConfig:fe,clear:ge,setDiagramTitle:J,getDiagramTitle:H,setAccTitle:q,getAccTitle:j,setAccDescription:Z,getAccDescription:Y,addSection:he,getSections:me,setShowData:ye,getShowData:ve},be=u((e,a)=>{se(e,a),a.setShowData(e.showData),e.sections.map(a.addSection)},"populateDb"),we={parse:u(async e=>{const a=await le("pie",e);_.debug(a),be(a,O)},"parse")},Se=u(e=>`
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
`,"getStyles"),xe=Se,Ae=u(e=>{const a=[...e.values()].reduce((s,o)=>s+o,0),g=[...e.entries()].map(([s,o])=>({label:s,value:o})).filter(s=>s.value/a*100>=1).sort((s,o)=>o.value-s.value);return de().value(s=>s.value)(g)},"createPieArcs"),De=u((e,a,g,b)=>{_.debug(`rendering pie chart
`+e);const s=b.db,o=K(),l=X(s.getConfig(),o.pie),t=40,r=18,c=4,p=450,w=p,m=ee(a),d=m.append("g");d.attr("transform","translate("+w/2+","+p/2+")");const{themeVariables:i}=o;let[y]=te(i.pieOuterStrokeWidth);y??=2;const S=l.textPosition,h=Math.min(w,p)/2-t,D=L().innerRadius(0).outerRadius(h),T=L().innerRadius(h*S).outerRadius(h*S);d.append("circle").attr("cx",0).attr("cy",0).attr("r",h+y/2).attr("class","pieOuterCircle");const f=s.getSections(),x=Ae(f),A=[i.pie1,i.pie2,i.pie3,i.pie4,i.pie5,i.pie6,i.pie7,i.pie8,i.pie9,i.pie10,i.pie11,i.pie12];let $=0;f.forEach(n=>{$+=n});const N=x.filter(n=>(n.data.value/$*100).toFixed(0)!=="0"),E=ae(A);d.selectAll("mySlices").data(N).enter().append("path").attr("d",D).attr("fill",n=>E(n.data.label)).attr("class","pieCircle"),d.selectAll("mySlices").data(N).enter().append("text").text(n=>(n.data.value/$*100).toFixed(0)+"%").attr("transform",n=>"translate("+T.centroid(n)+")").style("text-anchor","middle").attr("class","slice"),d.append("text").text(s.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText");const R=[...f.entries()].map(([n,I])=>({label:n,value:I})),k=d.selectAll(".legend").data(R).enter().append("g").attr("class","legend").attr("transform",(n,I)=>{const G=r+c,V=G*R.length/2,B=12*r,U=I*G-V;return"translate("+B+","+U+")"});k.append("rect").attr("width",r).attr("height",r).style("fill",n=>E(n.label)).style("stroke",n=>E(n.label)),k.append("text").attr("x",r+c).attr("y",r-c).text(n=>s.getShowData()?`${n.label} [${n.value}]`:n.label);const P=Math.max(...k.selectAll("text").nodes().map(n=>n?.getBoundingClientRect().width??0)),W=w+t+r+c+P;m.attr("viewBox",`0 0 ${W} ${p}`),ne(m,p,W,l.useMaxWidth)},"draw"),Te={draw:De},ze={parser:we,db:O,renderer:Te,styles:xe};export{ze as diagram};
