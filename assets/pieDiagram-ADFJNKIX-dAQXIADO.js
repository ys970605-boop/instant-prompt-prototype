import{_ as u,g as j,s as q,a as H,b as K,t as Q,q as Y,l as _,c as Z,F as J,K as X,Q as ee,e as te,z as ae,H as re}from"./mermaid.core-ChKil5nP.js";import{p as ne}from"./chunk-4BX2VUAB-RmhPfLAw.js";import{p as ie}from"./treemap-75Q7IDZK-ZynYtL8O.js";import{d as L}from"./arc-BrHsOENn.js";import{o as oe}from"./ordinal-BS1rXJoG.js";import{a as v,t as M,n as se}from"./step-D8El2c93.js";import"./index-BTeuFEw0.js";import"./purify.es-BU5qkGuM.js";import"./index-CAtvICq6.js";import"./immer-Df8essIW.js";import"./_baseUniq-SL1YOfi2.js";import"./_basePickBy-C4IdeanF.js";import"./clone-jukrtMHg.js";import"./init-Df_Vixk-.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"568c831b65eb007b73c5f6506d506fd0e43494b1"}}catch{}})();try{(function(){var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},a=new e.Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="3b2a967f-d9d1-4a0b-81e0-4fba79bd1318",e._sentryDebugIdIdentifier="sentry-dbid-3b2a967f-d9d1-4a0b-81e0-4fba79bd1318")})()}catch{}function le(e,a){return a<e?-1:a>e?1:a>=e?0:NaN}function ce(e){return e}function de(){var e=ce,a=le,g=null,b=v(0),o=v(M),l=v(0);function s(t){var n,c=(t=se(t)).length,p,w,h=0,d=new Array(c),i=new Array(c),y=+b.apply(this,arguments),S=Math.min(M,Math.max(-M,o.apply(this,arguments)-y)),m,D=Math.min(Math.abs(S)/c,l.apply(this,arguments)),T=D*(S<0?-1:1),f;for(n=0;n<c;++n)(f=i[d[n]=n]=+e(t[n],n,t))>0&&(h+=f);for(a!=null?d.sort(function(x,A){return a(i[x],i[A])}):g!=null&&d.sort(function(x,A){return g(t[x],t[A])}),n=0,w=h?(S-c*T)/h:0;n<c;++n,y=m)p=d[n],f=i[p],m=y+(f>0?f*w:0)+T,i[p]={data:t[p],index:n,value:f,startAngle:y,endAngle:m,padAngle:D};return i}return s.value=function(t){return arguments.length?(e=typeof t=="function"?t:v(+t),s):e},s.sortValues=function(t){return arguments.length?(a=t,g=null,s):a},s.sort=function(t){return arguments.length?(g=t,a=null,s):g},s.startAngle=function(t){return arguments.length?(b=typeof t=="function"?t:v(+t),s):b},s.endAngle=function(t){return arguments.length?(o=typeof t=="function"?t:v(+t),s):o},s.padAngle=function(t){return arguments.length?(l=typeof t=="function"?t:v(+t),s):l},s}var ue=re.pie,z={sections:new Map,showData:!1},C=z.sections,F=z.showData,pe=structuredClone(ue),fe=u(()=>structuredClone(pe),"getConfig"),ge=u(()=>{C=new Map,F=z.showData,ae()},"clear"),me=u(({label:e,value:a})=>{if(a<0)throw new Error(`"${e}" has invalid value: ${a}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);C.has(e)||(C.set(e,a),_.debug(`added new section: ${e}, with value: ${a}`))},"addSection"),he=u(()=>C,"getSections"),ye=u(e=>{F=e},"setShowData"),ve=u(()=>F,"getShowData"),O={getConfig:fe,clear:ge,setDiagramTitle:Y,getDiagramTitle:Q,setAccTitle:K,getAccTitle:H,setAccDescription:q,getAccDescription:j,addSection:me,getSections:he,setShowData:ye,getShowData:ve},be=u((e,a)=>{ne(e,a),a.setShowData(e.showData),e.sections.map(a.addSection)},"populateDb"),we={parse:u(async e=>{const a=await ie("pie",e);_.debug(a),be(a,O)},"parse")},Se=u(e=>`
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
`,"getStyles"),xe=Se,Ae=u(e=>{const a=[...e.values()].reduce((o,l)=>o+l,0),g=[...e.entries()].map(([o,l])=>({label:o,value:l})).filter(o=>o.value/a*100>=1).sort((o,l)=>l.value-o.value);return de().value(o=>o.value)(g)},"createPieArcs"),De=u((e,a,g,b)=>{_.debug(`rendering pie chart
`+e);const o=b.db,l=Z(),s=J(o.getConfig(),l.pie),t=40,n=18,c=4,p=450,w=p,h=X(a),d=h.append("g");d.attr("transform","translate("+w/2+","+p/2+")");const{themeVariables:i}=l;let[y]=ee(i.pieOuterStrokeWidth);y??=2;const S=s.textPosition,m=Math.min(w,p)/2-t,D=L().innerRadius(0).outerRadius(m),T=L().innerRadius(m*S).outerRadius(m*S);d.append("circle").attr("cx",0).attr("cy",0).attr("r",m+y/2).attr("class","pieOuterCircle");const f=o.getSections(),x=Ae(f),A=[i.pie1,i.pie2,i.pie3,i.pie4,i.pie5,i.pie6,i.pie7,i.pie8,i.pie9,i.pie10,i.pie11,i.pie12];let $=0;f.forEach(r=>{$+=r});const N=x.filter(r=>(r.data.value/$*100).toFixed(0)!=="0"),E=oe(A);d.selectAll("mySlices").data(N).enter().append("path").attr("d",D).attr("fill",r=>E(r.data.label)).attr("class","pieCircle"),d.selectAll("mySlices").data(N).enter().append("text").text(r=>(r.data.value/$*100).toFixed(0)+"%").attr("transform",r=>"translate("+T.centroid(r)+")").style("text-anchor","middle").attr("class","slice"),d.append("text").text(o.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText");const R=[...f.entries()].map(([r,I])=>({label:r,value:I})),k=d.selectAll(".legend").data(R).enter().append("g").attr("class","legend").attr("transform",(r,I)=>{const W=n+c,B=W*R.length/2,V=12*n,U=I*W-B;return"translate("+V+","+U+")"});k.append("rect").attr("width",n).attr("height",n).style("fill",r=>E(r.label)).style("stroke",r=>E(r.label)),k.append("text").attr("x",n+c).attr("y",n-c).text(r=>o.getShowData()?`${r.label} [${r.value}]`:r.label);const P=Math.max(...k.selectAll("text").nodes().map(r=>r?.getBoundingClientRect().width??0)),G=w+t+n+c+P;h.attr("viewBox",`0 0 ${G} ${p}`),te(h,p,G,s.useMaxWidth)},"draw"),Te={draw:De},Oe={parser:we,db:O,renderer:Te,styles:xe};export{Oe as diagram};
