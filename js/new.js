
console.log('Loaded Random Rotate Bookmarklet!!!');


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
      
      var ds = document.getElementsByTagName('*');
      var d = ds[Math.round(Math.random()*ds.length)];
      function rotateHeaders(r) {
        d.style['WebkitTransform'] = d.style['MozTransform'] = 'rotate(' + r + 'deg)';
        setTimeout(function() {rotateHeaders(++r % 360);}, 100);
        /*var p=document.getElementsByTagName('*');
        for(i=0;i<p.length;i++){
            if(p[i].style.fontSize){
                var s=parseInt(p[i].style.fontSize.replace("px",""));
            } else {
                var s=12;}s+=2;p[i].style.fontSize=s+"px"}
      */
    }
      rotateHeaders(1);
       
       //YOUR CODE GOES HERE!
        // @see  http://www.quora.com/Web-Development/What-are-the-most-interesting-HTML-JS-DOM-CSS-hacks-that-most-web-developers-dont-know-about
// @see  http://qr.ae/Khvbr
var s=document.createElement('style');
s.textContent = "<style> * { background-color: rgb(229, 117, 117) !important} * * { background-color: rgb(117, 173, 229) !important} * * * { background-color: rgba(232, 189, 32, 0.4) !important} * * * * { background-color: rgbargba(232, 89, 32, 0.62) !important} * * * * * { background-color: rgba(0,255,255,.2) !important} * * * * * * { background-color: rgba(255,255,0,.2) !important}</style>";
document.getElementsByTagName('head')[0].appendChild(s);s

      })();



    }


})();
