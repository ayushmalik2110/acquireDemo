((function(){
       var load=function(){
         var script="https://s.acquire.io/a-d3d93/init.js?full";
         var x=document.createElement('script'); x.src=script;
         x.async=true;
         var sx=document.getElementsByTagName('script')[0];
         sx.parentNode.insertBefore(x, sx);
       };
       if(document.readyState === "complete") load();
        else if (window.addEventListener) window.addEventListener('load',load,false);
        else if (window.attachEvent) { window.attachEvent("onload", load); }
})());
function test(){
  console.log("test");
  var elements = document.getElementsByClassName('ace_features'), i, len;

  console.log(elements.length);
  /*for (i = 0, len = elements.length; i < len; i++) {
    elements[i].style.color = '#2C81B7';
  }*/
  console.log("working");
}
test();