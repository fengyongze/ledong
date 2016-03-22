define(function () {
    return {
        div: function (time, nextTime, cell) {
            var div1 = document.createElement("div");
            var div2 = document.createElement("div");
            var div3 = document.createElement("div");
            div1.setAttribute("class", "col-xs-3 box");
            div2.setAttribute("class", "col-xs-12 one");
            div3.setAttribute("class", "col-xs-12 two");
            div2.innerText = time + "~" + nextTime;
            div3.innerText = $("thead td")[cell - 1].innerText;
            div1.appendChild(div2);
            div1.appendChild(div3);
            return div1
        }
    }
})
