"use strict";function shuffle(o){var t=o,f=void 0,a=void 0,i=void 0;for(i=t.length;i;i-=1)f=Math.floor(Math.random()*i),a=t[i-1],t[i-1]=t[f],t[f]=a}$(".down-arrow").click(function(){$("html, body").animate({scrollTop:$("#team").offset().top},500)}),$("#team ul").each(function(o,t){var f=$(t).find("li");shuffle(f),$(t).html(f)});