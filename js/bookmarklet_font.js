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
        vfunction RGBtoHSL(RGBColor) {
        with(Math) {
            var R, G, B;
            var cMax, cMin;
            var sum, diff;
            var Rdelta, Gdelta, Bdelta;
            var H, L, S;
            R = RGBColor[0];
            G = RGBColor[1];
            B = RGBColor[2];
            cMax = max(max(R, G), B);
            cMin = min(min(R, G), B);
            sum = cMax + cMin;
            diff = cMax - cMin;
            L = sum / 2;
            if (cMax == cMin) {
                S = 0;
                H = 0;
            } else {
                if (L <= (1 / 2)) S = diff / sum;
                else S = diff / (2 - sum);
                Rdelta = R / 6 / diff;
                Gdelta = G / 6 / diff;
                Bdelta = B / 6 / diff;
                if (R == cMax) H = Gdelta - Bdelta;
                else if (G == cMax) H = (1 / 3) + Bdelta - Rdelta;
                else H = (2 / 3) + Rdelta - Gdelta;
                if (H < 0) H += 1;
                if (H > 1) H -= 1;
            }
            return [H, S, L];
        }
    }

    function getRGBColor(node, prop) {
        var rgb = getComputedStyle(node, null).getPropertyValue(prop);
        var r, g, b;
        if (/rgb\((\d+),\s(\d+),\s(\d+)\)/.exec(rgb)) {
            r = parseInt(RegExp.$1, 10);
            g = parseInt(RegExp.$2, 10);
            b = parseInt(RegExp.$3, 10);
            return [r / 255, g / 255, b / 255];
        }
        return rgb;
    }

    function hslToCSS(hsl) {
        return "hsl(" + Math.round(hsl[0] * 360) + ", " + Math.round(hsl[1] * 100) + "%, " + Math.round(hsl[2] * 100) + "%)";
    }
    var props = ["color", "background-color", "border-left-color", "border-right-color", "border-top-color", "border-bottom-color"];
    var props2 = ["color", "backgroundColor", "borderLeftColor", "borderRightColor", "borderTopColor", "borderBottomColor"];
    if (typeof getRGBColor(document.documentElement, "background-color") == "string") document.documentElement.style.backgroundColor = "white";
    revl(document.documentElement);

    function revl(n) {
        var i, x, color, hsl;
        if (n.nodeType == Node.ELEMENT_NODE) {
            for (i = 0; x = n.childNodes[i]; ++i) revl(x);
            for (i = 0; x = props[i]; ++i) {
                color = getRGBColor(n, x);
                if (typeof(color) != "string") {
                    hsl = RGBtoHSL(color);
                    hsl[0] = (hsl[0] + 1 / 24) % 1;
                    n.style[props2[i]] = hslToCSS(hsl);
                }
            }
        }
    }

        //YOUR CODE GOES HERE!
    })();

}

})();