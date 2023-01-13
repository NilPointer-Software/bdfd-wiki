const MAP = {
    bdscript: "Functions",
    guides: "Guides",
    resources: "Resources",
    callbacks: "Callbacks",
    premium: "Premium",
    javascript: "JavaScript"
};

const KEYS = Object.keys(MAP);

function getNameFromTitle() {
    let index = document.title.indexOf('-');
    return document.title.substring(0, index-1);
}

let root = "/bdfd-wiki/"
let path = location.pathname.substring(11);

if (path.startsWith("nightly")) {
    path = path.substring(8);
    root += "nightly/"
}
if (path.endsWith(".html"))
    path = path.substring(0, path.length - 5);

document.write(`<a href="${root}">Root</a>`);
path.split('/').forEach((segment, i, segments) => {
    let name = MAP[segment.toLocaleLowerCase()];
    if (!name) {
        name = segments.length == i + 1 ? getNameFromTitle() : segment;
        segment += ".html";
    } else {
        segment = "introduction.html";
    }
    document.write(`<div><a href="${segment}">${name}</a></div>`)
});
