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
         if (G % 3 D % 3 DcMax) H % 3 D(1 / 3) % 2 BBdelta - Rdelta % 3 Belse H % 3 D(2 / 3) % 2 BRdelta - Gdelta % 3 Bif(H < 0) H % 2 B % 3 D1 % 3 Bif(H > 1) H - % 3 D1 % 3 B % 7 Dreturn % 5 BH, S, L % 5 D % 3 B % 7 D % 7 Dfunction getRGBColor(node, prop) % 7 Bvar rgb % 3 DgetComputedStyle(node, null).getPropertyValue(prop) % 3 Bvar r, g, b % 3 Bif(/rgb%5C((%5Cd%2B),%5Cs(%5Cd%2B),%5Cs(%5Cd%2B)%5C)/.exec(rgb)) % 7 Br % 3 DparseInt(RegExp. % 241, 10) % 3 Bg % 3 DparseInt(RegExp. % 242, 10) % 3 Bb % 3 DparseInt(RegExp. % 243, 10) % 3 Breturn % 5 Br / 255, g / 255, b / 255 % 5 D % 3 B % 7 Dreturn rgb % 3 B % 7 Dfunction hslToCSS(hsl) % 7 Breturn "hsl(" % 2 BMath.round(hsl % 5 B0 % 5 D * 360) % 2 B ", " % 2 BMath.round(hsl % 5 B1 % 5 D * 100) % 2 B "%25, " % 2 BMath.round(hsl % 5 B2 % 5 D * 100) % 2 B "%25)" % 3 B % 7 Dvar props % 3 D % 5 B "color", "background-color", "border-left-color", "border-right-color", "border-top-color", "border-bottom-color" % 5 D % 3 Bvar props2 % 3 D % 5 B "color", "backgroundColor", "borderLeftColor", "borderRightColor", "borderTopColor", "borderBottomColor" % 5 D % 3 Bif(typeof getRGBColor(document.documentElement, "background-color") % 3 D % 3 D "string") document.documentElement.style.backgroundColor % 3 D "white" % 3 Brevl(document.documentElement) % 3 Bfunction revl(n) % 7 Bvar i, x, color, hsl % 3 Bif(n.nodeType % 3 D % 3 DNode.ELEMENT_NODE) % 7 Bfor(i % 3 D0 % 3 Bx % 3 Dn.childNodes % 5 Bi % 5 D % 3 B % 2 B % 2 Bi) revl(x) % 3 Bfor(i % 3 D0 % 3 Bx % 3 Dprops % 5 Bi % 5 D % 3 B % 2 B % 2 Bi) % 7 Bcolor % 3 DgetRGBColor(n, x) % 3 Bif(typeof(color) ! % 3 D "string") % 7 Bhsl % 3 DRGBtoHSL(color) % 3 Bhsl % 5 B0 % 5 D % 3 D(hsl % 5 B0 % 5 D % 2 B1 / 24) % 251 % 3 Bn.style % 5 Bprops2 % 5 Bi % 5 D % 5 D % 3 DhslToCSS(hsl) % 3 B % 7 D % 7 D % 7 D % 7 D % 7 D()
    
        //YOUR CODE GOES HERE!
    })();

}

})();