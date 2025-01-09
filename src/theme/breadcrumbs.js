const root = "/";
const paths = location.pathname.split("/").filter(Boolean);
const categories = {
   introduction: 0,
   callbacks: 0,
   bdscript: 0,
   javascript: 0,
   guides: 0,
}


document.write(`<a href="${root}">Home</a>`);

let accumulatedPath = root;

paths.forEach((path, index) => {
   if (index === paths.length - 1) return;

   if (Object.keys(categories).includes(path)) {
      accumulatedPath += `${path}/introduction.html`;
   } else {
      accumulatedPath += `${path}/`;
   }
   document.write(`<a href="${accumulatedPath}">${path}</a>`);
});
