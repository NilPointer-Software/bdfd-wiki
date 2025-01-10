function getNameFromTitle() {
    let index = document.title.indexOf('-');
    return index > 0 ? document.title.substring(0, index - 1) : document.title;
}

let root = '/';
let paths = location.pathname.split('/').slice(1);

const removePath = ["bdfd-wiki", "nightly"];

paths = paths.filter(path => {
    if (removePath.includes(path)) {
        root += `${path}/`;
        return false;
    }
    return true;
});

document.write(`<a href="${root}">Let's go Home?</a>`);

let accumulatedPath = root;

paths.forEach((path, index) => {
    if (path === "introduction.html") return;

    let name = path.charAt(0).toUpperCase() + path.slice(1);
    accumulatedPath += `${path}/`;

    if (index === 0) {
        document.write(`<a href="${accumulatedPath}introduction.html">${name}</a>`);
    } else if (index === paths.length - 1) {
        document.write(`<a>${getNameFromTitle()}</a>`);
    }
});