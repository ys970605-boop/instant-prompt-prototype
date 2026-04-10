import{Q as v,T as M,aG as j,_ as u,g as q,s as H,a as K,b as Q,t as Y,q as Z,l as _,c as J,F as X,K as ee,a6 as te,e as ae,z as re,H as ne}from"./mermaid.core-SiYDCCBM.js";import{p as ie}from"./chunk-4BX2VUAB-DLT4pRwg.js";import{p as se}from"./treemap-75Q7IDZK-CEsq7mzv.js";import{d as L}from"./arc-oksKv5AN.js";import{o as oe}from"./ordinal-D_BROIQ2.js";import"./index-CNaPGiTW.js";import"./purify.es-pmGA19-D.js";import"./index-CWee9CJo.js";import"./_baseUniq-D4uHEa_J.js";import"./_basePickBy-CBScmEqs.js";import"./clone-DVnR_1VX.js";import"./init-C97F1PsM.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"7043deca6ca30bd906eb11195e69ea510e2210c5"}}catch{}})();try{(function(){var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},a=new e.Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="8cd2e3be-54e4-4c2d-b693-c217705367a0",e._sentryDebugIdIdentifier="sentry-dbid-8cd2e3be-54e4-4c2d-b693-c217705367a0")})()}catch{}function le(e,a){return a<e?-1:a>e?1:a>=e?0:NaN}function ce(e){return e}function de(){var e=ce,a=le,g=null,w=v(0),s=v(M),l=v(0);function o(t){var n,c=(t=j(t)).length,p,S,m=0,d=new Array(c),i=new Array(c),y=+w.apply(this,arguments),x=Math.min(M,Math.max(-M,s.apply(this,arguments)-y)),h,D=Math.min(Math.abs(x)/c,l.apply(this,arguments)),T=D*(x<0?-1:1),f;for(n=0;n<c;++n)(f=i[d[n]=n]=+e(t[n],n,t))>0&&(m+=f);for(a!=null?d.sort(function(b,A){return a(i[b],i[A])}):g!=null&&d.sort(function(b,A){return g(t[b],t[A])}),n=0,S=m?(x-c*T)/m:0;n<c;++n,y=h)p=d[n],f=i[p],h=y+(f>0?f*S:0)+T,i[p]={data:t[p],index:n,value:f,startAngle:y,endAngle:h,padAngle:D};return i}return o.value=function(t){return arguments.length?(e=typeof t=="function"?t:v(+t),o):e},o.sortValues=function(t){return arguments.length?(a=t,g=null,o):a},o.sort=function(t){return arguments.length?(g=t,a=null,o):g},o.startAngle=function(t){return arguments.length?(w=typeof t=="function"?t:v(+t),o):w},o.endAngle=function(t){return arguments.length?(s=typeof t=="function"?t:v(+t),o):s},o.padAngle=function(t){return arguments.length?(l=typeof t=="function"?t:v(+t),o):l},o}var ue=ne.pie,z={sections:new Map,showData:!1},C=z.sections,F=z.showData,pe=structuredClone(ue),fe=u(()=>structuredClone(pe),"getConfig"),ge=u(()=>{C=new Map,F=z.showData,re()},"clear"),he=u(({label:e,value:a})=>{if(a<0)throw new Error(`"${e}" has invalid value: ${a}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);C.has(e)||(C.set(e,a),_.debug(`added new section: ${e}, with value: ${a}`))},"addSection"),me=u(()=>C,"getSections"),ye=u(e=>{F=e},"setShowData"),ve=u(()=>F,"getShowData"),O={getConfig:fe,clear:ge,setDiagramTitle:Z,getDiagramTitle:Y,setAccTitle:Q,getAccTitle:K,setAccDescription:H,getAccDescription:q,addSection:he,getSections:me,setShowData:ye,getShowData:ve},we=u((e,a)=>{ie(e,a),a.setShowData(e.showData),e.sections.map(a.addSection)},"populateDb"),Se={parse:u(async e=>{const a=await se("pie",e);_.debug(a),we(a,O)},"parse")},xe=u(e=>`
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
`,"getStyles"),be=xe,Ae=u(e=>{const a=[...e.values()].reduce((s,l)=>s+l,0),g=[...e.entries()].map(([s,l])=>({label:s,value:l})).filter(s=>s.value/a*100>=1).sort((s,l)=>l.value-s.value);return de().value(s=>s.value)(g)},"createPieArcs"),De=u((e,a,g,w)=>{_.debug(`rendering pie chart
`+e);const s=w.db,l=J(),o=X(s.getConfig(),l.pie),t=40,n=18,c=4,p=450,S=p,m=ee(a),d=m.append("g");d.attr("transform","translate("+S/2+","+p/2+")");const{themeVariables:i}=l;let[y]=te(i.pieOuterStrokeWidth);y??=2;const x=o.textPosition,h=Math.min(S,p)/2-t,D=L().innerRadius(0).outerRadius(h),T=L().innerRadius(h*x).outerRadius(h*x);d.append("circle").attr("cx",0).attr("cy",0).attr("r",h+y/2).attr("class","pieOuterCircle");const f=s.getSections(),b=Ae(f),A=[i.pie1,i.pie2,i.pie3,i.pie4,i.pie5,i.pie6,i.pie7,i.pie8,i.pie9,i.pie10,i.pie11,i.pie12];let $=0;f.forEach(r=>{$+=r});const G=b.filter(r=>(r.data.value/$*100).toFixed(0)!=="0"),E=oe(A);d.selectAll("mySlices").data(G).enter().append("path").attr("d",D).attr("fill",r=>E(r.data.label)).attr("class","pieCircle"),d.selectAll("mySlices").data(G).enter().append("text").text(r=>(r.data.value/$*100).toFixed(0)+"%").attr("transform",r=>"translate("+T.centroid(r)+")").style("text-anchor","middle").attr("class","slice"),d.append("text").text(s.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText");const N=[...f.entries()].map(([r,I])=>({label:r,value:I})),k=d.selectAll(".legend").data(N).enter().append("g").attr("class","legend").attr("transform",(r,I)=>{const W=n+c,B=W*N.length/2,V=12*n,U=I*W-B;return"translate("+V+","+U+")"});k.append("rect").attr("width",n).attr("height",n).style("fill",r=>E(r.label)).style("stroke",r=>E(r.label)),k.append("text").attr("x",n+c).attr("y",n-c).text(r=>s.getShowData()?`${r.label} [${r.value}]`:r.label);const P=Math.max(...k.selectAll("text").nodes().map(r=>r?.getBoundingClientRect().width??0)),R=S+t+n+c+P;m.attr("viewBox",`0 0 ${R} ${p}`),ae(m,p,R,o.useMaxWidth)},"draw"),Te={draw:De},We={parser:Se,db:O,renderer:Te,styles:be};export{We as diagram};
