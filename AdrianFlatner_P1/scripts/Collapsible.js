$(".collapsible").attr('data-content', '\u2795');

function showDocumentation() {
    var col = $(".collapsible").get(0);
    var x = $(".content").get(0);
    if (x.style.display === "block") {
        $(col).attr('data-content', '\u2795')
        $(col).css('background-color', '#17252a')
        x.style.display = "none";
    } else {
        x.style.display = "block";
        $(col).attr('data-content', "\u2796")
        $(col).css('background-color', '#2b7a78')
    }
}

function showInfo() {
    var x = $("#info").get(0);
    showFunction(x);
}

function showTutorial() {
    var x = $("#instruction").get(0);
    showFunction(x);
}

function showFunction(x) {
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
