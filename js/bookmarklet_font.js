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
        
factor % 3 DMath.sqrt(2) % 3 B
if (!window.scale) % 7 B scale % 3 D1 % 3 B zW % 3 D % 5 B % 5 D % 3 B zH % 3 D % 5 B % 5 D % 3 B unitless % 3 D / % 5E % 5 B0 - 9. % 5 D % 2 B % 24 / % 3 B
function r(N) % 7 B w % 3 DN.width % 3 B h % 3 DN.height % 3 B
if (unitless.test(w)) zW.push( % 5 BN, w % 5 D) % 3 B
if (unitless.test(h)) zH.push( % 5 BN, h % 5 D) % 3 B
var C % 3 DN.childNodes, i % 3 B
for (i % 3 D0 % 3 Bi < C.length % 3 B % 2 B % 2 Bi) r(C % 5 Bi % 5 D) % 3 B % 7 D r(document.body) % 3 B % 7 D scale * % 3 Dfactor % 3 B
for (i in zW) zW % 5 Bi % 5 D % 5 B0 % 5 D.width % 3 DzW % 5 Bi % 5 D % 5 B1 % 5 D * scale % 3 B
for (i in zH) zH % 5 Bi % 5 D % 5 B0 % 5 D.height % 3 D zH % 5 Bi % 5 D % 5 B1 % 5 D * scale % 3 B % 5 B % 5 D.v
        //YOUR CODE GOES HERE!
    })();

}

})();