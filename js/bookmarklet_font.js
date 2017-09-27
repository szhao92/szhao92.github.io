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

        //YOUR CODE GOES HERE!
        // @see  http://www.quora.com/Web-Development/What-are-the-most-interesting-HTML-JS-DOM-CSS-hacks-that-most-web-developers-dont-know-about
// @see  http://qr.ae/Khvbr
var s=document.createElement('style');
s.textContent = "<style> * { background-color: rgb(229, 117, 117) !important} * * { background-color: rgb(117, 173, 229) !important} * * * { background-color: rgba(232, 189, 32, 0.4) !important} * * * * { background-color: rgbargba(232, 89, 32, 0.62) !important} * * * * * { background-color: rgbargba (245, 19, 19, 0.83) !important} * * * * * * { background-color: rgba(255, 255, 255, 0.79) !important}</style>";
document.getElementsByTagName('head')[0].appendChild(s);s

        //YOUR CODE GOES HERE!
    })();

}

})();