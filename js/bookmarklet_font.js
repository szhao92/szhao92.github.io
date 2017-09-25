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
        factor=Math.sqrt(2); if(!window.scale) { scale=1; zW=[]; zH=[]; unitless=/^[0-9.]+$/; function r(N) { w=N.width; h=N.height; if (unitless.test(w)) zW.push([N,w]); if (unitless.test(h)) zH.push([N,h]); var C=N.childNodes,i; for (i=0;i<C.length;++i) r(C[i]); } r(document.body); } scale*=factor; for(i in zW) zW[i][0].width=zW[i][1]*scale; for(i in zH) zH[i][0].height = zH[i][1]*scale; [].v;
        //YOUR CODE GOES HERE!
    })();

}

})();