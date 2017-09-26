
console.log('Loaded font changing bookmarklet!!!');


javascript:(function(){


var v ="2.2.4"; // version of jquery we want to use

if (window.jQuery== undefined || window.jQuery.fn.jquery < v){

    var done = false;
    var script = document.createElement("script");
    script.src="http://ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js"; // load version of jQuery we specify
    script.onload = script.onreadystatechange = function(){

        if (!done && (!this.readyState || this.readyState=="loaded" || this.readyState =="complete")){

        done = true;
        initMyBookmarklet(); //If jquery is loaded now run my script

        }
    };
document.getElementsByTagName("head")[0].appendChild(script);


}else{
    initMyBookmarklet();
}

function initMyBookmarklet(){
    (window.myBookmarklet = function (){
      
    /*var ds = document.getElementsByTagName('*');
      var d = ds[Math.round(Math.random()*ds.length)];

      function rotateHeaders(r) {
        d.style['WebkitTransform'] = d.style['MozTransform'] = 'rotate(' + r + 'deg)';
        setTimeout(function() {rotateHeaders(++r % 360);}, 100);

        // var p=document.getElementsByTagName('*');
        // for(i=0;i<p.length;i++){
        //     if(p[i].style.fontSize){
        //         var s=parseInt(p[i].style.fontSize.replace("px",""));
        //     } else {
        //         var s=12;}s+=2;p[i].style.fontSize=s+"px"}
      }
      rotateHeaders(1);*/
      !function(){___rotate=window.___rotate||0,___rotate++,___rotate>3&&(___rotate=0);var t=document.documentElement,o=t.clientWidth,e=t.clientHeight,r=document.body,i=r.style;0===___rotate?(i.transform="",i.position="",i.width="",i.height="",i.left="",i.top=""):1===___rotate?(i.transform="rotate(90deg)",i.transformOrigin="top left",i.position="absolute",i.width=e+"px",i.height=o+"px",i.left="100%",i.top="0"):2===___rotate?(i.transform="rotate(180deg)",i.transformOrigin="top left",i.position="absolute",i.width=o+"px",i.height=e+"px",i.left="100%",i.top="100%"):3===___rotate&&(i.transform="rotate(270deg)",i.transformOrigin="top left",i.position="absolute",i.width=e+"px",i.height=o+"px",i.left="0",i.top="100%")}();

      var colors = ["#FFE90A", "#30FF91", "#A9F4F9", "#DDA9F9", "#FF00E0", "#FF6CB1"];

  function kraken() {
      var rand = colors[Math.floor(Math.random() * colors.length)];
      document.body.style.backgroundColor= rand;
      window.setTimeout(kraken,100);}

      })();



    }


})();
