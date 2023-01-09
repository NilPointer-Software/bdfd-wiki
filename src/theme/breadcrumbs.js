if ($('#wikiBreadcrumb ol.breadcrumb')) {
    var here = location.href.replace(/(\?.*)$/,'').split('/').slice(3);

    var parts = [{
        text: "Foreword",
        link: "/"
    }];

    for (var j = 0; j < here.length; j++) {
        var part = here[j];

        switch (part.toLowerCase()) {
            case 'bdscript':
                var pageName = 'Functions';
                break;
            case 'guides':
                var pageName = 'Guides';
                break;
            case 'resources':
                var pageName = 'Resources';
                break;
            case 'callbacks':
                var pageName = 'Callbacks';
                break;
            case 'premium':
                var pageName = 'Premium';
                break;
            case 'javascript':
                var pageName = 'JavaScript';
                break;
        };

        if (pageName == undefined) {
            pageName = document.title.split('-')[0];
        };


        var link = '/' + here.slice(0, j + 1).join('/');

        if (part == 'guides' || part == 'resources' || part == 'bdscript' || part == 'premiun' || part == 'javascript') {
            var appendElement = '<li><a href="' + link + '/introduction.html"> <span> ' + pageName + ' </span></a></li>';
        } else {
            var appendElement = '<li><a href="' + link + '"> <span> ' + pageName + ' </span></a></li>';
        };

        $('#wikiBreadcrumb ol.breadcrumb').append(appendElement);
        parts.push({
            text: pageName,
            link: link
        });

        pageName = document.title.split('-')[0];
    }
}