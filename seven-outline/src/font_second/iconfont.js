(function(window){var svgSprite="<svg>"+""+'<symbol id="icon-star" viewBox="0 0 1024 1024">'+""+'<path d="M768 937.6c-6.4 0-9.6 0-16-3.2l-243.2-128-243.2 128c-9.6 6.4-22.4 3.2-35.2-3.2-9.6-6.4-16-19.2-12.8-32l44.8-268.8-195.2-192c-9.6-9.6-12.8-22.4-9.6-32s12.8-19.2 25.6-22.4l268.8-38.4 121.6-246.4c9.6-22.4 48-22.4 57.6 0l121.6 246.4 268.8 38.4c12.8 3.2 22.4 9.6 25.6 22.4s0 25.6-9.6 32l-195.2 192 44.8 268.8c3.2 12.8-3.2 25.6-12.8 32 6.4 6.4 0 6.4-6.4 6.4z"  ></path>'+""+"</symbol>"+""+'<symbol id="icon-zan2" viewBox="0 0 1024 1024">'+""+'<path d="M861.577 428.695h-223.037c86.425-319.186-59.547-335.487-59.547-335.487-61.867 0-49.042 48.918-53.716 57.076 0 156.096-165.796 278.407-165.796 278.407v442.661c0 43.695 59.547 59.433 82.908 59.433h335.111c31.537 0 57.221-82.709 57.221-82.709 82.903-281.911 82.903-365.789 82.903-365.789 0.001-58.247-56.046-53.591-56.046-53.591v0 0zM861.577 428.695z" fill="#c3c3c3" ></path>'+""+'<path d="M267.943 428.841h-133.553c-27.581 0-28.006 27.090-28.006 27.090l27.581 446.441c0 28.416 28.464 28.416 28.464 28.416h115.593c24.081 0 23.865-18.798 23.865-18.798v-449.296c0-34.287-33.945-33.854-33.945-33.854v0 0zM267.943 428.841z" fill="#c3c3c3" ></path>'+""+"</symbol>"+""+'<symbol id="icon-star1" viewBox="0 0 1024 1024">'+""+'<path d="M987.428571 369.714286q0 12.571429-14.857142 27.428571l-207.428572 202.285714 49.142857 285.714286q0.571429 4 0.571429 11.428572 0 12-6 20.285714T791.428571 925.142857q-10.857143 0-22.857142-6.857143l-256.571429-134.857143-256.571429 134.857143q-12.571429 6.857143-22.857142 6.857143-12 0-18-8.285714T208.571429 896.571429q0-3.428571 1.142857-11.428572l49.142857-285.714286L50.857143 397.142857q-14.285714-15.428571-14.285714-27.428571 0-21.142857 32-26.285715l286.857142-41.714285L484 41.714286q10.857143-23.428571 28-23.428572t28 23.428572l128.571429 260 286.857142 41.714285q32 5.142857 32 26.285715z" fill="#FDD835" ></path>'+""+"</symbol>"+""+'<symbol id="icon-zan21" viewBox="0 0 1024 1024">'+""+'<path d="M162.4230000000003 595.3050000000004l223.03699999999998-3.694822225952521e-13c-86.42499999999961 319.1859999999999 59.54700000000037 335.48699999999997 59.54700000000037 335.48699999999997 61.867-9.947598300641403e-14 49.041999999999916-48.91800000000007 53.715999999999894-57.076000000000086-1.9895196601282805e-13-156.096 165.79599999999945-278.40700000000015 165.79599999999945-278.40700000000015l-1.1368683772161603e-13-442.66099999999994c-6.394884621840902e-14-43.69499999999999-59.54700000000008-59.432999999999915-82.90800000000013-59.432999999999836l-335.111 3.694822225952521e-13c-31.537 5.1514348342607263e-14-57.22099999999986 82.7090000000001-57.22099999999986 82.7090000000001-82.90299999999955 281.91100000000006-82.90299999999934 365.789-82.90299999999934 365.789-0.0009999999998981934 58.247 56.04600000000006 53.59099999999993 56.04600000000006 53.59099999999993v0 0zM162.4230000000003 595.3050000000004z" fill="#c3c3c3" ></path>'+""+'<path d="M756.057 595.159l133.553-2.842170943040401e-14c27.580999999999996-4.973799150320701e-14 28.00599999999996-27.090000000000032 28.00599999999996-27.090000000000032l-27.581000000000785-446.44099999999986c-4.618527782440651e-14-28.415999999999997-28.46400000000006-28.415999999999936-28.46400000000006-28.415999999999936l-115.593 1.9895196601282805e-13c-24.081 4.973799150320701e-14-23.864999999999966 18.798000000000027-23.864999999999966 18.798000000000027l1.1368683772161603e-13 449.29599999999994c4.973799150320701e-14 34.28699999999999 33.94500000000007 33.85399999999993 33.94500000000007 33.85399999999993v0 0zM756.057 595.159z" fill="#c3c3c3" ></path>'+""+"</symbol>"+""+"</svg>";var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)