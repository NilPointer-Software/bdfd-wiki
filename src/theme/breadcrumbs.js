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

let accumulatedPath = root;
let breadcrumbLinks = [];

paths.forEach((path, index) => {
    if (path === "introduction.html") return;

    let name = path.charAt(0).toUpperCase() + path.slice(1);
    accumulatedPath += `${path}/`;

    if (path.split(".")[1] === "html") {
        return;
    }

    if (index === 0) {
        let href = path === "settings"
            ? accumulatedPath + "/" + "settings.html"
            : accumulatedPath + "introduction.html"
        breadcrumbLinks.push({
            href: href,
            name: name,
        });
    } else if (index === paths.length - 1) {
        breadcrumbLinks.push({
            href: null,
            name: getNameFromTitle(),
        });
    }
});

document.write(`<a href="${root}">Home</a><p>/</p>`);
breadcrumbLinks.forEach(link => {
    if (link.href) {
        document.write(`<a href="${link.href}">${link.name}</a><p>/</p>`);
    } else {
        document.write(`<a>${link.name}</a>`);
    }
});
