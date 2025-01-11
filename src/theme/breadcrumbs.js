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

const breadcrumbConfig = {
    "bdscript": "Functions",
    "guides": "Guides",
    "resources": "Resources",
    "callbacks": "Callbacks",
    "premium": "Premium",
    "javascript": "JavaScript",
    "flowchart": "Flowcharts"
};

let accumulatedPath = root;
let breadcrumbLinks = [];

paths.forEach((path, index) => {
    
    let name = breadcrumbConfig[path] || path.charAt(0).toUpperCase() + path.slice(1); // Apply config or capitalize
    accumulatedPath += `${path}/`;

     if(path.endsWith(".html")) {
          if (index === paths.length - 1) { // Only include the last html if it's last
               breadcrumbLinks.push({
                   href: null,
                   name: getNameFromTitle(),
               });
          }
          return
     } else if (index === 0) {
          let href = path === "settings"
            ? accumulatedPath + "settings.html"
            : accumulatedPath + "introduction.html"
            breadcrumbLinks.push({
                href: href,
                name: name,
             });
    } else {
        breadcrumbLinks.push({
            href: accumulatedPath,
            name: name,
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
