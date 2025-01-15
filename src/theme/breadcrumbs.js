function getNameFromTitle() {
	let index = document.title.indexOf("-");
	return index > 0 ? document.title.substring(0, index - 1) : document.title;
}

let root = "/";
let paths = location.pathname.split("/").slice(1);

const removePath = ["bdfd-wiki", "nightly"];

paths = paths.filter((path) => {
	if (removePath.includes(path)) {
		root += `${path}/`;
		return false;
	}
	return true;
});

const breadcrumbConfig = {
	bdscript: "Functions",
	guides: "Guides",
	resources: "Resources",
	callbacks: "Callbacks",
	premium: "Premium",
	javascript: "JavaScript",
	flowchart: "Flowcharts",
	general: null, // Don't touch!
};

let accumulatedPath = root;
let breadcrumbLinks = [];
let numLinks = 0;

// Iterate with normal for loop for early exits
for (let i = 0; i < paths.length; i++) {
	let path = paths[i];
	accumulatedPath += `${path}/`;

	if (path.endsWith(".html")) {
		// Handle ending file names
		if (i === paths.length - 1) {
			// Only include the last html if it's last
			breadcrumbLinks.push({
				href: null,
				name: getNameFromTitle(),
			});
			numLinks++;
		}
		continue; // Skip breadcrumb name
	}

	if (numLinks < 2) {
		if (breadcrumbConfig[path] == null) continue; // Skip if config is null
		let name =
			breadcrumbConfig[path] ||
			path.charAt(0).toUpperCase() + path.slice(1);
		let href = accumulatedPath + "introduction.html"; // Default to introduction page

		breadcrumbLinks.push({
			href: href,
			name: name,
		});
		numLinks++;
	}
}

document.write(`<a href="${root}">Home</a><p>/</p>`);
breadcrumbLinks.forEach((link, index) => {
	if (link.href) {
		document.write(`<a href="${link.href}">${link.name}</a>`);
		if (index < breadcrumbLinks.length - 1) {
			// Add separator if not last
			document.write(`<p>/</p>`);
		}
	} else if (link.name !== "Introduction") {
		document.write(`<a>${link.name}</a>`);
	}
});
