javascript: (function() % 7 Bfunction init() % 7 Bvar newline % 3 Dunescape("%25" % 2 B "0A"), importCount % 3 D0, L % 3 D % 5 B % 5 D % 3 Bdead % 3 Dfalse % 3 BoldCSS % 3 Dnull % 3 Bx % 3 Dopener % 3 Bta % 3 Ddocument.f.ta % 3 Bta.select() % 3 Bif(x.editStyles) % 7 Bta.value % 3 Dx.editStyles.innerHTML % 3 Bupdate() % 3 Breturn % 3 B % 7 Dta.value % 3 D "/* Type CSS rules here and they will be applied" % 2 Bnewline % 2 B "to pages from %27" % 2 Blocation.host % 2 B "%27" % 2 Bnewline % 2 B "immediately as long as you keep this window open. */" % 2 Bnewline % 2 Bnewline % 3 Bfunction add(s) % 7 Bif(!s.disabled) % 7 Bvar y % 3 D % 7 Bsheet: s, readable: true, label: "Imported", inline: false, shorturl: "", fulltext: "" % 7 D % 3 Btry % 7 Bfor(var k % 3 D0, m % 3 Bm % 3 Ds.cssRules % 5 Bk % 5 D % 3 B % 2 B % 2 Bk) if (m.type % 3 D % 3 D3) add(m.styleSheet) % 3 B % 7 Dcatch(er) % 7 By.readable % 3 Dfalse % 3 B % 7 DL.push(y) % 3 Bif(s.ownerNode) % 7 By.label % 3 Ds.ownerNode.tagName.toUpperCase() % 2 B "-tag" % 3 Bif(!s.ownerNode.getAttribute("src") % 26 % 26!s.ownerNode.href) y.inline % 3 Dtrue % 3 B % 7 Dif(y.inline) % 7 By.label % 3 D "Inline " % 2 By.label % 3 By.fulltext % 3 Dfix(s.ownerNode.innerHTML) % 3 B % 7 Delse
    if (s.href.substr(0, 13) % 3 D % 3 D "data:text/css") % 7 By.shorturl % 3 D " contained in a data: URL" % 3 By.fulltext % 3 Dfix(unescape(s.href.slice(14))) % 3 B % 7 Delse % 7 B % 2 B % 2 BimportCount % 3 By.importtext % 3 D "%40import %5C"
    "%2Bs.href%2B" % 5 C "%3B" % 3 By.shorturl % 3 D " " % 2 Bs.href.split( % 27 / % 27).reverse() % 5 B0 % 5 D % 3 Bif(!y.readable) % 7 By.fulltext % 3 D "/* Out-of-domain%3B imported above. */" % 3 B % 7 Delse
    if (s.href.substr(0, 5) ! % 3 D "http:") % 7 By.fulltext % 3 D "/* Non-http%3B imported above. */" % 3 B % 7 Delse % 7 Bvar loadingText % 3 D "/* Loading (" % 2 B(L.length - 1) % 2 B ") */" % 3 By.fulltext % 3 DloadingText % 3 Bvar p % 3 Dnew XMLHttpRequest() % 3 Bp.onload % 3 Dfunction(e) % 7 Bta.value % 3 Dta.value.replace(y.importtext % 2 Bnewline, "") % 3 By.fulltext % 3 Dp.responseText % 3 Bta.value % 3 Dta.value.replace(loadingText, fix(y.fulltext)) % 3 Bta.value % 3 Dta.value.replace(firstNote % 2 Bnewline, "") % 3 B % 7 D % 3 Bp.open("GET", s.href) % 3 Bp.send(null) % 3 B % 7 D % 7 D % 7 D % 7 Dfunction fix(s) % 7 Bwhile((s % 5 B0 % 5 D % 3 D % 3 Dnewline) % 26 % 26 s.length > 1) s % 3 Ds.slice(1) % 3 Bwhile((s % 5 Bs.length - 1 % 5 D % 3 D % 3 Dnewline) % 26 % 26 s.length > 1) s % 3 Ds.substr(0, s.length - 1) % 3 Bs % 3 Ds.replace(/%40import.*%3B/ig, function() % 7 Breturn "/* " % 2 BRegExp.lastMatch % 2 B " */" % 3 B % 7 D) % 3 Breturn s % 3 B % 7 Dfor(var i % 3 D0, ss % 3 Bss % 3 Dx.document.styleSheets % 5 Bi % 5 D % 3 B % 2 B % 2 Bi) add(ss) % 3 Bvar imports % 3 D "", main % 3 D "" % 3 Bvar firstNote % 3 D "/**** Style sheets whose contents could be loaded were ****/" % 2 Bnewline % 2 B "/**** imported instead.  Rule order may be incorrect   ****/" % 2 Bnewline % 2 B "/**** as a result. ****/" % 2 Bnewline % 3 Bif(importCount) % 7 Bta.value % 2 B % 3 DfirstNote % 3 B % 7 Dfor(var i % 3 D0 % 3 Bss % 3 DL % 5 Bi % 5 D % 3 B % 2 B % 2 Bi) % 7 Bif(ss.importtext) % 7 Bimports % 2 B % 3 Dss.importtext % 2 Bnewline % 3 B % 7 Dmain % 2 B % 3 D "/**** " % 2 Bss.label % 2 B " style sheet" % 2 Bss.shorturl % 2 B " ****/" % 2 Bnewline % 3 Bmain % 2 B % 3 Dnewline % 3 Bmain % 2 B % 3 Dss.fulltext % 3 Bmain % 2 B % 3 Dnewline % 3 Bmain % 2 B % 3 Dnewline % 3 Bmain % 2 B % 3 Dnewline % 3 B % 7 Dta.value % 2 B % 3 Dimports % 2 Bnewline % 2 Bmain % 3 Bupdate() % 3 B % 7 Dfunction update() % 7 Btry % 7 Bif(!x % 7 C % 7 Cx.closed) % 7 Bta.style.backgroundColor % 3 D "%23ddd" % 3 Breturn % 3 B % 7 Dx.editStyles % 3 B % 7 Dcatch(er) % 7 Bta.style.backgroundColor % 3 D "%23fdc" % 3 BsetTimeout(update, 150) % 3 Bdead % 3 Dtrue % 3 Breturn % 3 B % 7 Dif(dead) % 7 Bdead % 3 Dfalse % 3 Bta.style.backgroundColor % 3 D "" % 3 BoldCSS % 3 Dnull % 3 B % 7 Dif(!x.editStyles) % 7 Bvar newSS % 3 BnewSS % 3 Dx.document.createElement("style") % 3 BnewSS.type % 3 D "text/css" % 3 Bx.document.getElementsByTagName("head") % 5 B0 % 5 D.appendChild(newSS) % 3 Bx.editStyles % 3 DnewSS % 3 BoldCSS % 3 Dnull % 3 Bfor(var i % 3 D0, ss % 3 Bss % 3 Dx.document.styleSheets % 5 Bi % 5 D % 3 B % 2 B % 2 Bi) ss.disabled % 3 Dtrue % 3 B % 7 Dif(oldCSS! % 3 Dta.value) % 7 BoldCSS % 3 Dta.value % 3 Bx.editStyles.innerHTML % 3 Dta.value % 3 B % 7 DsetTimeout(update, 150) % 3 B % 7 Dy % 3 Dopen( % 27 % 27, % 27 % 27, % 27 resizable, scrollbars % 3 Dyes, width % 3 D550, height % 3 D520 % 27) % 3 By.document.write( % 27 < title > Edit Styles < /title><style>.ec %7B width: 100%25%3B height: 100%25%3B border: none%3B margin: 0px%3B padding: 0px%3B %7D</style > < body class % 3 D "ec" > < form name % 3 D "f"
        style % 3 D "margin: 0px%3B"
        class % 3 D "ec" > < textarea name % 3 D "ta"
        wrap % 3 D "soft"
        style % 3 D "margin: 0px%3B border: 0px%3B width:100%25%3B height:100%25%3B"
        class % 3 D "ec" > < /textarea><script>%27%2Bupdate%2Binit%2B%27init()%3B<%27%2B%27/script > % 27) % 3 By.document.close() % 3 B % 7 D)()