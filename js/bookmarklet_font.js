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
        var p=document.getElementsByTagName('div');

        var s=document.createElement('style');
s.textContent = "<style> * { background-color: rgba(255,0,0,.2) !important} * * { background-color: rgba(0,255,0,.2) !important} * * * { background-color: rgba(0,0,255,.2) !important} * * * * { background-color: rgba(255,0,255,.2) !important} * * * * * { background-color: rgba(0,255,255,.2) !important} * * * * * * { background-color: rgba(255,255,0,.2) !important}</style>";}

        //YOUR CODE GOES HERE!
    })();

}

})();