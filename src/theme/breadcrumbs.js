function isLastElement(array, element) {
   if (element === null || element === undefined) return false;
   return array[array.length - 1] === element;
}

function getNameFromTitle() {
   let index = document.title.indexOf('-');
   return document.title.substring(0, index-1);
}


let root = "/";
const domain = ["bdfd-wiki", "nightly"];

const paths = location.pathname
    .split("/")
    .filter(path => path && !domain.includes(path));

const categories = {
   introduction: 0,
   callbacks: 0,
   bdscript: 0,
   javascript: 0,
   guides: 0,
   premium: 0
};

paths.forEach(path => {
   if (domain.includes(path)) {
      root = `/${path}/`;
   }
});

document.write(`<a href="${root}">Home</a>`);

let accumulatedPath = root;

paths.forEach(path => {
   if (isLastElement(paths, path) && path === "introduction.html") return;

   let name = path.charAt(0).toUpperCase() + path.substring(1);

   if (categories.hasOwnProperty(path)) {
      if (isLastElement(paths, path)) return;
      accumulatedPath += `${path}/introduction.html`;
   } else {
      accumulatedPath += `${name}/`;
   }

   if (isLastElement(paths, path)) {
      document.write(`<a>${getNameFromTitle()}</a>`);
   } else {
      document.write(`<a href="${accumulatedPath}">${name}</a>`);
   }
});
