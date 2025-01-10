function getNameFromTitle() {
    let index = document.title.indexOf('-');
    return document.title.substring(0, index-1);
}


let root = '/';
let paths = location.pathname.split('/').slice(1);


const removePath = ["bdfd-wiki", "nightly"];


paths = paths.filter(path => {
    if (removePath.includes(path)) {
        root += `/${path}/`;
        return false;
    }

    return true;
});


document.write(`<a href=${root}>${"Let's go Home?"}</a>`);

paths.forEach((path, index) => {
    let name = path.charAt(0).toUpperCase() + path.slice(1);

    if (index === 0) {
        document.write(`<a href=${root + path + "/introduction.html"}>${name}</a>`)
    } else if (index === paths.length - 1 && path !== "introduction.html") {
        document.write(`<a>${getNameFromTitle()}</a>`);
    }
});