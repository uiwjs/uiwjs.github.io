(window.webpackJsonp=window.webpackJsonp||[]).push([[249],{392:function(e,t){Prism.languages["markup-templating"]={},Object.defineProperties(Prism.languages["markup-templating"],{buildPlaceholders:{value:function(e,t,n,a){e.language===t&&(e.tokenStack=[],e.code=e.code.replace(n,function(n){if("function"==typeof a&&!a(n))return n;for(var r=e.tokenStack.length;-1!==e.code.indexOf("___"+t.toUpperCase()+r+"___");)++r;return e.tokenStack[r]=n,"___"+t.toUpperCase()+r+"___"}),e.grammar=Prism.languages.markup)}},tokenizePlaceholders:{value:function(e,t){if(e.language===t&&e.tokenStack){e.grammar=Prism.languages[t];var n=0,a=Object.keys(e.tokenStack),r=function(o){if(!(n>=a.length))for(var i=0;i<o.length;i++){var c=o[i];if("string"==typeof c||c.content&&"string"==typeof c.content){var s=a[n],g=e.tokenStack[s],p="string"==typeof c?c:c.content,l=p.indexOf("___"+t.toUpperCase()+s+"___");if(l>-1){++n;var u,f=p.substring(0,l),_=new Prism.Token(t,Prism.tokenize(g,e.grammar,t),"language-"+t,g),k=p.substring(l+("___"+t.toUpperCase()+s+"___").length);if(f||k?(u=[f,_,k].filter(function(e){return!!e}),r(u)):u=_,"string"==typeof c?Array.prototype.splice.apply(o,[i,1].concat(u)):c.content=u,n>=a.length)break}}else c.content&&"string"!=typeof c.content&&r(c.content)}};r(e.tokens)}}}})}}]);