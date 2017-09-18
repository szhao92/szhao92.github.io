javascript: function Gosling(i, g) {
    this.ratio = i, this.imageurl = g
}

function Randomize(i) {
    return Math.floor(Math.random() * i.length)
}

function imageRatio(i) {
    var g = i.height / i.width;
    return g > 1 ? "vertical" : 1 === g ? "square" : 1 > g ? "horizontal" : void 0
}
var getGosling = {
        init: function(i) {
            this.myGosling = i
        },
        horizontal: function() {
            return this.myGosling.filter(function(i) {
                return "horizontal" === i.ratio
            })
        },
        vertical: function() {
            return this.myGosling.filter(function(i) {
                return "vertical" === i.ratio
            })
        },
        square: function() {
            return this.myGosling.filter(function(i) {
                return "square" === i.ratio
            })
        }
    },
    var myGosling = [ 
                      new Gosling("horizontal", "http://heygirl-master/cats/1.jpg"), 
                      new Gosling("horizontal", "http://heygirl-master/cats/3.jpg"), 
                      new Gosling("horizontal", "http://heygirl.io/img/gosling-horiz-3.jpg"),
                      new Gosling("horizontal", "http://heygirl.io/img/gosling-horiz-4.gif"), 
                      new Gosling("vertical", "http://heygirl-master/cats/2.jpg"), 
                      new Gosling("vertical", "http://heygirl-master/cats/4.jpg"), 
                      new Gosling("vertical", "http://heygirl.io/img/gosling-vert-4.jpg"),
                      new Gosling("vertical", "http://heygirl.io/img/gosling-vert-5.gif"),
                      new Gosling("vertical", "http://heygirl.io/img/gosling-vert-6.jpg"),
                      new Gosling("vertical", "http://heygirl.io/img/gosling-vert-7.jpg"),
                      new Gosling("vertical", "http://heygirl.io/img/gosling-vert-8.jpg"),
                      new Gosling("vertical", "http://heygirl.io/img/gosling-vert-9.jpg"),
                      new Gosling("square", "http://heygirl-master/cats/5.jpg"),
                      new Gosling("square", "http://heygirl-master/cats/6.jpg"),
                      new Gosling("square", "http://heygirl.io/img/gosling-square-3.jpg")
]

! function(i) {
    getGosling.init(myGosling);
    for (var g = i.getElementsByTagName("img"), o = g.length, n = 0; o > n; n++) {
        var l = imageRatio(g[n]),
            t = Randomize(getGosling[l]()),
            e = getGosling[l]()[t];
        g[n].src = e.imageurl
    }
}(document);