var clicks = 0;
function onClick() {
    clicks += 1;
    document.getElementById("next-btn").innerHTML = clicks;
};

function agario() {
    if (clicks == "5") {
        var xcan = "600"
        var ycan = "600"
    }
    if (clicks == "6") {
        var xcan = "0"
        var ycan = "0"
    }

}