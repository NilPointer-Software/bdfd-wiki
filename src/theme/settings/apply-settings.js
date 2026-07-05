// Function Container
function createObjectInfo() {
    if (/introduction/i.test(location.pathname)) return;
    
    if (/bdscript|callbacks/.test(location.pathname)) {
        const h1 = document.querySelector('main h1');
        const p = document.querySelector('main p:not(.breadcrumb p)');
        const tags = document.querySelector('main .functionTags');
        
        if (h1 && p) {
            const container = document.createElement('div');
            container.className = 'objectInfo';
            h1.after(container);
            
            container.append(h1);
            if (tags) container.append(tags);
            container.append(p);
        }
    }
}

// Example "Today at"
function removeTimestamp() {
  const timestamps = document.querySelectorAll('discord-system-message[type] .discord-message-timestamp');
  timestamps.forEach(timestamp => {
    timestamp.remove();
  });
}

// Next & Prev function
function enhanceNavigationSimple() {
  const navWrapper = document.querySelector('.nav-wrapper');
  if (!navWrapper) return;
  
  const prevLink = navWrapper.querySelector('a.previous');
  const nextLink = navWrapper.querySelector('a.next');
  
  const supportedCategories = ['bdscript', 'callbacks', 'guides', 'resources', 'flowchart', 'tools', 'premium', 'javascript'];
  
  function isSupportedCategory(href) {
    const hasCategory = supportedCategories.some(category => href.includes(`/${category}/`));
    const isRootPage = !supportedCategories.some(category => href.includes(`/${category}/`)) && 
                       (href.includes('.html') && !href.includes('/category/'));
    
    return hasCategory || isRootPage;
  }
  
  function getCategoryFromUrl(href) {
    for (const category of supportedCategories) {
      if (href.includes(`/${category}/`)) {
        return category;
      }
    }
    return null;
  }
  
  if (prevLink) {
    const href = prevLink.href;
    if (isSupportedCategory(href)) {
      const prevFileName = href.split('/').pop().replace('.html', '');
      const category = getCategoryFromUrl(href);
      prevLink.textContent = formatFunctionName(prevFileName, href, category);
      prevLink.insertAdjacentHTML('afterbegin', '<i class="fa fa-angle-left"></i> ');
    }
  }
  
  if (nextLink) {
    const href = nextLink.href;
    if (isSupportedCategory(href)) {
      const nextFileName = href.split('/').pop().replace('.html', '');
      const category = getCategoryFromUrl(href);
      nextLink.textContent = formatFunctionName(nextFileName, href, category);
      nextLink.insertAdjacentHTML('beforeend', ' <i class="fa fa-angle-right"></i>');
    }
  }
}

function formatFunctionName(fileName, href, category = null) {
  const lowerFileName = fileName.toLowerCase();
  
  if (lowerFileName === 'foreword') {
    return 'Home';
  }
  
  if (category === 'tools') {
    return 'Tools';
  }
  
  if (lowerFileName === 'introduction') {
    if (category) {
      const categoryMap = {
        'bdscript': 'BDScript',
        'callbacks': 'Callbacks',
        'guides': 'Guides',
        'resources': 'Resources',
        'flowchart': 'Flowchart',
        'tools': 'Tools',
        'premium': 'Premium',
        'javascript': 'JavaScript'
      };
      
      return categoryMap[category] || category.charAt(0).toUpperCase() + category.slice(1);
    }
    return 'Introduction';
  }
  
  const customTitles = {
    'api': 'BDFD API',
    '2fa': '2FA',
    'aboutSelectMenu': 'Select Menus',
    'aboutModals': 'Modals',
    'aboutButtons': 'Buttons',
    'aboutSlashCommands': 'Slash Commands',
    'discordIDSystem': 'Discord ID System',
    'settings': 'Settings',
    'foreword': 'Home',
    'httprequests': 'HTTP Requests',
    'awaitedReactions': 'Awaited Reactions',
    'customimages': 'Custom Images',
    'customprefixes': 'Custom Prefixes',
    'embedbuilder': 'Embed Builder',
    'enablingjavascript': 'Enabling JavaScript',
    'objects': 'Objects'
  };
  
  if (customTitles[lowerFileName]) {
    return customTitles[lowerFileName];
  }
  
  if (category === 'javascript') {
    return fileName;
  }
  
  if (category === 'flowchart') {
    let result = fileName;
    result = result.replace(/([a-z])([A-Z])/g, '$1 $2');
    result = result.charAt(0).toUpperCase() + result.slice(1).toLowerCase();
    return result;
  }
  
  const titleCategories = ['guides', 'resources', 'tools'];
  const functionCategories = ['bdscript', 'callbacks', 'premium'];
  
  if (category && functionCategories.includes(category)) {
    let result = '$' + fileName;
    result = result.replace(/Complex$/i, '[]');
    return result;
  }
  
  const isTitleCategory = category ? titleCategories.includes(category) : true;
  
  if (isTitleCategory) {
    let result = fileName;
    
    result = result
      .replace(/_/g, ' ')
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .replace(/([A-Z])([A-Z][a-z])/g, '$1 $2')
      .replace(/^./, str => str.toUpperCase());
    
    const words = result.split(' ');
    const formattedWords = words.map(word => {
      if (word === word.toUpperCase() && word.length > 1) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
      return word;
    });
    
    result = formattedWords.join(' ');
    
    result = result.replace(/\bBdfd\b/gi, 'BDFD');
    result = result.replace(/\b2fa\b/gi, '2FA');
    result = result.replace(/\bId\b/g, 'ID');
    result = result.replace(/\bAi\b/g, 'AI');
    result = result.replace(/\bI D\b/g, 'ID');
    result = result.replace(/\bA I\b/g, 'AI');
    result = result.replace(/\bU I\b/g, 'UI');
    result = result.replace(/\bF A Q\b/g, 'FAQ');
    result = result.replace(/\bChangelog\b/g, 'Changelog');
    result = result.replace(/\bHttp\b/gi, 'HTTP');
    
    return result.trim();
  }
  
  return fileName;
}

// Last edited
async function createAndUpdateLastEdit() {
  try {
    const currentPath = window.location.pathname;
    const allowedPaths = ['premium', 'bdscript', 'guides', 'resources', 'flowchart', 'callbacks'];
    let shouldAddBlock = false;
    for (const path of allowedPaths) {
      if (currentPath.includes(`/${path}/`) || 
          currentPath.endsWith(`/${path}`) || 
          currentPath.endsWith(`/${path}.html`)) {
        shouldAddBlock = true;
        break;
      }
    }
    
    if (!shouldAddBlock) return;
    let pagePath = '';

    if (currentPath.includes('/nightly/')) {
      const nightlyIndex = currentPath.indexOf('/nightly/') + 8;
      pagePath = currentPath.substring(nightlyIndex);
    } else {
      pagePath = currentPath.startsWith('/') ? currentPath.substring(1) : currentPath;
    }

    if (!pagePath || pagePath === '' || pagePath === 'index.html') {
      pagePath = 'index.md';
    } else {
      pagePath = pagePath.replace('.html', '.md');
      if (!pagePath.startsWith('src/')) {
        pagePath = 'src/' + pagePath;
      }
    }

    const apiUrl = `https://api.github.com/repos/NilPointer-Software/bdfd-wiki/commits?path=${encodeURIComponent(pagePath)}&per_page=1`;
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    const commits = await response.json();
    
    if (commits && commits.length > 0) {
      const lastCommit = commits[0];
      const lastModified = new Date(lastCommit.commit.committer.date);
      
      const formattedDate = lastModified.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
      
      const authorName = lastCommit.author ? 
                        (lastCommit.author.login || lastCommit.commit.author.name) : 
                        lastCommit.commit.author.name;
      
      const avatarUrl = lastCommit.author ? 
                       lastCommit.author.avatar_url : 
                       'https://github.com/identicons/identicon.png';
      
      createEditBlock(formattedDate, authorName, avatarUrl, pagePath);
    } else {
      createFallbackBlock(pagePath);
    }
  } catch (error) {
    console.error('Error loading last edit data:', error);
    createFallbackBlock();
  }
}

function createEditBlock(formattedDate, authorName, avatarUrl, pagePath) {
  const container = document.createElement('div');
  container.className = 'last_file_edit';
  
  const editUrl = `https://github.com/NilPointer-Software/bdfd-wiki/edit/dev/${encodeURI(pagePath)}`;
  
  // Create elements using DOM methods instead of innerHTML
  const editInfo = document.createElement('div');
  editInfo.className = 'edit-info';
  
  const avatarImg = document.createElement('img');
  avatarImg.className = 'edit-avatar';
  avatarImg.src = encodeURI(avatarUrl);
  avatarImg.alt = '';
  
  const editDetails = document.createElement('div');
  editDetails.className = 'edit-details';
  
  const dateLine = document.createElement('div');
  dateLine.className = 'edit-date-line';
  
  const dateSpan = document.createElement('span');
  dateSpan.className = 'edit-date';
  dateSpan.textContent = `Last edited at ${formattedDate}`;
  
  const editLink = document.createElement('a');
  editLink.href = editUrl;
  editLink.className = 'editPage';
  
  const editIcon = document.createElement('i');
  editIcon.className = 'fa fa-edit';
  editIcon.id = 'editPageIcon';
  
  editLink.appendChild(editIcon);
  dateLine.appendChild(dateSpan);
  dateLine.appendChild(editLink);
  
  const authorLine = document.createElement('div');
  authorLine.className = 'edit-author-line';
  
  const authorSpan = document.createElement('span');
  authorSpan.className = 'edit-author';
  authorSpan.textContent = authorName;
  
  authorLine.appendChild(authorSpan);

  editDetails.appendChild(dateLine);
  editDetails.appendChild(authorLine);
  editInfo.appendChild(avatarImg);
  editInfo.appendChild(editDetails);
  container.appendChild(editInfo);
  
  // Insert into DOM
  const mainElement = document.querySelector('main');
  if (mainElement) {
    mainElement.appendChild(container);
  } else {
    document.body.appendChild(container);
  }
}

function createFallbackBlock(pagePath = '') {
  const container = document.createElement('div');
  container.className = 'last_file_edit';
  
  const editUrl = pagePath ? `https://github.com/NilPointer-Software/bdfd-wiki/edit/dev/${encodeURI(pagePath)}` : '#';
  
  // Create elements using DOM methods
  const editInfo = document.createElement('div');
  editInfo.className = 'edit-info';
  
  const avatarImg = document.createElement('img');
  avatarImg.className = 'edit-avatar';
  avatarImg.src = 'https://github.com/identicons/identicon.png';
  avatarImg.alt = '';
  
  const editDetails = document.createElement('div');
  editDetails.className = 'edit-details';
  
  const dateLine = document.createElement('div');
  dateLine.className = 'edit-date-line';
  
  const dateSpan = document.createElement('span');
  dateSpan.className = 'edit-date';
  dateSpan.textContent = 'Last edited at Failed to load';
  
  const editLink = document.createElement('a');
  editLink.href = editUrl;
  editLink.className = 'editPage';
  
  const editIcon = document.createElement('i');
  editIcon.className = 'fa fa-edit';
  editIcon.id = 'editPageIcon';
  
  editLink.appendChild(editIcon);
  dateLine.appendChild(dateSpan);
  dateLine.appendChild(editLink);
  
  const authorLine = document.createElement('div');
  authorLine.className = 'edit-author-line';
  
  const authorSpan = document.createElement('span');
  authorSpan.className = 'edit-author';
  authorSpan.textContent = 'GitHub API may be experiencing issues loading data.';
  
  authorLine.appendChild(authorSpan);
  
  editDetails.appendChild(dateLine);
  editDetails.appendChild(authorLine);
  editInfo.appendChild(avatarImg);
  editInfo.appendChild(editDetails);
  container.appendChild(editInfo);
  
  const mainElement = document.querySelector('main');
  if (mainElement) {
    mainElement.appendChild(container);
  } else {
    document.body.appendChild(container);
  }
}

const DiscordThemes = {
  light: {
    reactionColor: "#F2F3F5",
    messageTextColor: "#313338",
    background: "#FFF",
  },
  dark: {
    reactionColor: "#202226",
    messageTextColor: "#C6C7CC",
    background: "#1C1D22",
  },
  redmoon: {
    reactionColor: "#4e0505",
    background: "linear-gradient(-25deg, #240000, #740606)",
  },
  nightsapphire: {
    reactionColor: "#180052",
    background: "linear-gradient(-25deg, #000124, #260674)",
  },
  emeraldearth: {
    reactionColor: "#006d3f",
    background: "linear-gradient(-25deg, #0c2400, #067446)",
  },
  nightviolet: {
    reactionColor: "#390085",
    background: "linear-gradient(-25deg, #1d0024, #350674)",
  },
  oldwood: {
    reactionColor: "#714400",
    background: "linear-gradient(-25deg, #240f00, #744806)",
  },
  azuresky: {
    reactionColor: "#007162",
    background: "linear-gradient(-25deg, #001a24, #067465)",
  },
  cherryvelvety: {
    reactionColor: "#710049",
    background: "linear-gradient(-25deg, #240017, #74064d)",
  },
  forestdepth: {
    reactionColor: "#616d00",
    background: "linear-gradient(-25deg, #222400, #687406)",
  },
  nightchestnut: {
    reactionColor: "#4e0505",
    background: "linear-gradient(-25deg, #190024, #740606)",
  },
  mosscovered: {
    reactionColor: "#4b6d11",
    background: "linear-gradient(-25deg, #1c2400, #4c7406)",
  },
  deepruby: {
    reactionColor: "#74066e",
    background: "linear-gradient(-25deg, #1f0024, #74066e)",
  },
  fernvalley: {
    reactionColor: "#1e6d00",
    background: "linear-gradient(-25deg, #00240a, #247406)",
  },
  forestshadows: {
    reactionColor: "#086b00",
    background: "linear-gradient(-25deg, #000624, #086700 , #0a7f01)",
  },
  autumnblaze: {
    reactionColor: "#742006",
    background: "linear-gradient(-25deg, #240800, #742006)",
  },
};

function setDiscordTheme(colorId) {
  const discordMessages = document.getElementsByTagName("discord-messages");

  const styles = {
    reactionColor: "#131318",
    messageTextColor: "#DDDEE1",
    background: "#000",
    ...(DiscordThemes[colorId] || {}),
  };

  const callback = (mutationList, observer) => {
    for (const mutation of mutationList) {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "class"
      ) {
        const reactions =
          document.getElementsByTagName("discord-reaction");
        const messageColors = document.querySelectorAll(
          ".discord-message .discord-message-markup"
        );

        const botToApp =
          document.querySelectorAll('.discord-application-tag');

        if (styles.background)
          mutation.target.style.background = styles.background;
          mutation.target.style.backgroundColor = styles.exampleColor;
        for (const reaction of reactions) {
          reaction.children.item(0).style.backgroundColor =
            styles.reactionColor;
        }
        messageColors.forEach((text) => {
          text.style.color = styles.messageTextColor;
        });

        botToApp.forEach(tag => {
          if (tag.textContent.includes("Bot")) {
            tag.textContent = tag.textContent.replace("Bot", "App");
            tag.setAttribute("aria-label", "Verified App");
          }
        });

        const timestamps = document.querySelectorAll(
          ".discord-message-timestamp"
        );
        timestamps.forEach((timestamp) => {
          var time = new Date().getTime();
          var minuteExample = new Date().getMinutes();
          var hourExample = new Date().getHours();
          const formattedMinute =
            minuteExample < 10
              ? `0${minuteExample}`
              : minuteExample;
          const formattedHour =
            hourExample < 10 ? `0${hourExample}` : hourExample;
          const formattedTime = `Today at ${formattedHour}:${formattedMinute}`;
          timestamp.textContent = formattedTime;
        });

        removeTimestamp();
      }
    }
  };

    for (const message of discordMessages) {
        const mutObv = new MutationObserver(callback);
        mutObv.observe(message, { attributes: true });
    }
}

function applySettings() {
  const defaultData = {
    "discord-example-theme": "dark",
    "text-size": "60%",
    "language": "en",
    "text-hg": "none",
    "text-font": "Open Sans, sans-serif",
  };

  let data;

  try {
    const localData = JSON.parse(localStorage.getItem("json"));
    data = Object.assign({}, defaultData, localData);
  } catch {
    data = defaultData;
  }

  const html = document.querySelector("html");

  html.style.fontFamily = data["text-font"];
  html.style.fontSize = data["text-size"];
  html.style.textShadow = data["text-hg"];

  document.querySelectorAll('.chapter > li.chapter-item').forEach(el => {
    if (el.querySelector('div')) {
      const text = el.querySelector('div').textContent.trim();
      if (text === 'Functions' || text === 'Premium') {
        el.classList.add('functions-section');
      }
    }
  });
  
  const currentPath = window.location.pathname;
  const currentHref = window.location.href;

  if (currentPath.includes('/tools/') && !currentHref.includes('https://github.io')) {
    const fileName = currentPath.split('/').pop();
    window.location.replace('https://github.io' + fileName);
  }
  else if (currentPath.includes('/terms.html') || currentHref.includes('terms.html')) {
    window.location.replace('https://botdesignerdiscord.com');
  }
  else {
    const allLinks = document.querySelectorAll('a[href]');
    
    allLinks.forEach(link => {
      const href = link.getAttribute('href');
      
      if (href) {
        if (href.indexOf('../tools/') === 0) {
          const newHref = 'https://github.io' + href.substring(9);
          link.setAttribute('href', newHref);
        }
        
        if (href.includes('terms.html')) {
          link.setAttribute('href', 'https://botdesignerdiscord.com');
        }
      }
    });
  }
  
  setDiscordTheme(data["discord-example-theme"]);
}

document.addEventListener('DOMContentLoaded', function() {
  createAndUpdateLastEdit();
  enhanceNavigationSimple();
  createObjectInfo();
  applySettings();
});
