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
        
    if (image.initialHeight % 3 D % 3 D null) % 7 B /* avoid accumulating integer-rounding error */ image.initialHeight % 3 Dimage.height % 3 B image.initialWidth % 3 Dimage.width % 3 B image.scalingFactor % 3 D1 % 3 B % 7 D image.scalingFactor * % 3 Damt % 3 B image.width % 3 Dimage.scalingFactor * image.initialWidth % 3 B image.height % 3 Dimage.scalingFactor * image.initialHeight % 3 B % 7 D
    var i, L % 3 Ddocument.images.length % 3 B
    for (i % 3 D0 % 3 Bi < L % 3 B % 2 B % 2 Bi) zoomImage(document.images % 5 Bi % 5 D, 2) % 3 B
    if (!L) alert("This page contains no images.") % 3 B % 7 D() % 3 B
        //YOUR CODE GOES HERE!
    })();

}

})();