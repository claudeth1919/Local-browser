

const webview = document.querySelector('webview')
//Detect when a link (<a>) is click and catch the event to modify only webview
var homePage = "";
var currentPage = "#";
var homeButton = null;
webview.addEventListener('dom-ready', () => {
    if (homePage == "") homePage = webview.src;
    homeButton = document.getElementById("fixedbutton");
    homeButton.addEventListener('click', function (e) {
        homeButton.style.display="none";
        webview.loadURL(homePage + currentPage);
    });
})

webview.addEventListener('new-window', async (e) => {
    var arr = webview.src.split("#");
    var tempURL = arr[0];
    console.log(arr);
    if (homePage == tempURL) {
        if (arr.length > 1) currentPage = "#" + arr[1];
    }
    homeButton.style.display = "block";
    console.log(homePage);
    webview.loadURL(e.url + currentPage);
})


/*
webview.addEventListener('dom-ready', () => {
    webview.openDevTools()
    var anchors = document.getElementsByTagName("a");
    console.log(anchors);
    for (var a = 0; a < anchors.length; a++) {
        var anchor = anchors[a];
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            console.log(e.srcElement.href);
            webview.loadURL(e.srcElement.href);
        });
    }
})
*/
