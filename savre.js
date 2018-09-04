 function showLucky(e){var t=e.feed;
      var n=t.entry||[];
      var r=t.entry[0];
      for(var i=0;
      i<r.link.length;
      ++i){if(r.link[i].rel=="alternate"){window.location=r.link[i].href}}}function fetchLuck(e){script=document.createElement("script");
      script.src="/feeds/posts/summary?start-index="+e+"&max-results=1&alt=json-in-script&callback=showLucky";
      script.type="text/javascript";
      document.getElementsByTagName("head")[0].appendChild(script)}function feelingLucky(e){var t=e.feed;
      var n=parseInt(t.openSearch$totalResults.$t,10);
      var r=Math.floor(Math.random()*n);
      r++;
      a=document.createElement("a");
      a.href="#random";
      a.rel=r;
      a.onclick=function(){fetchLuck(this.rel)};
      a.innerHTML="<i class="fas fa-random"></i>

";
      document.getElementById("myLuckyPost").appendChild(a)}
