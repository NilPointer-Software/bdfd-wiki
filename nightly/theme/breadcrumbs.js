if ($('#wikiBreadcrumb ol.breadcrumb')) {
    var here = location.href.replace(/(\?.*)$/,'').split('/').slice(3);

    var parts = [{
        text: "Foreword",
        link: "/"
    }];

    const map = {
        bdscript: "Functions",
        guides: "Guides",
        resources: "Resources",
        callbacks: "Callbacks",
        premium: "Premium",
        javascript: "JavaScript"
    };
    
    const names = Object.keys(map);

    here.forEach((part, j) => {

        // Set the correct page names
        let pageName = map[part.toLowerCase()] ?? document.title.split('-')[0];

        // Construct links for pages
        var link = '/' + here.slice(0, j + 1).join('/');

        // Construct the correct append elements
        if (names.includes(part.toLowerCase())) {
            var appendElement = '<li><a href="' + link + '/introduction.html"> <span> ' + pageName + ' </span></a></li>';
        } else {
            var appendElement = '<li><a href="' + link + '"> <span> ' + pageName + ' </span></a></li>';
        };

        // Push append elements
        $('#wikiBreadcrumb ol.breadcrumb').append(appendElement);
        parts.push({
            text: pageName,
            link: link
        });

        pageName = document.title.split('-')[0];
    })
}