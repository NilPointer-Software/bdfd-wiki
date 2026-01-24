// Next function
function enhanceNavigationSimple() {
  const navWrapper = document.querySelector('.nav-wrapper');
  if (!navWrapper) return;
  
  const prevLink = navWrapper.querySelector('a.previous');
  const nextLink = navWrapper.querySelector('a.next');
  
  if (prevLink && (prevLink.href.includes('/bdscript/') || prevLink.href.includes('/callbacks/'))) {
    const prevFileName = prevLink.href.split('/').pop().replace('.html', '');
    const prevContainer = document.createElement('p');
    prevContainer.className = 'prev-page-info';
    prevContainer.textContent = `← ${formatFunctionName(prevFileName, prevLink.href.includes('/callbacks/'))}`;
    prevLink.parentNode.insertBefore(prevContainer, prevLink.nextSibling);
  }
  
  if (nextLink && (nextLink.href.includes('/bdscript/') || nextLink.href.includes('/callbacks/'))) {
    const nextFileName = nextLink.href.split('/').pop().replace('.html', '');
    const nextContainer = document.createElement('p');
    nextContainer.className = 'next-page-info';
    nextContainer.textContent = `→ ${formatFunctionName(nextFileName, nextLink.href.includes('/callbacks/'))}`;
    nextLink.parentNode.insertBefore(nextContainer, nextLink.nextSibling);
  }
}

function formatFunctionName(fileName, isCallback = false) {
  if (fileName.toLowerCase() === 'introduction') {
    return 'Introduction';
  }
  
  if (isCallback) {
    return fileName.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()).trim();
  }
  
  let result = '$' + fileName;
  result = result.replace(/Complex$/i, '[]');
  return result;
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

    const response = await fetch(
      `https://api.github.com/repos/Rainb0wKey/bdfd-wiki/commits?path=${pagePath}&per_page=1`
    );
    
    if (!response.ok) {
      if (response.status === 404) {
        const dirPath = pagePath.replace(/\.md$/, '/index.md');
        const retryResponse = await fetch(
          `https://api.github.com/repos/Rainb0wKey/bdfd-wiki/commits?path=${dirPath}&per_page=1`
        );
        if (!retryResponse.ok) return;
        var commits = await retryResponse.json();
      } else {
        return;
      }
    } else {
      var commits = await response.json();
    }

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
      
      const container = document.createElement('div');
      container.className = 'last_file_edit';
      
      container.innerHTML = `
        <div class="edit-info">
          <img src="${avatarUrl}" alt="${authorName}" class="edit-avatar">
          <div class="edit-details">
            <div class="edit-date-line">
              <span class="edit-date">Last edited at ${formattedDate}</span>
            </div>
            <div class="edit-author-line">
              <span class="edit-author">${authorName}</span>
            </div>
          </div>
        </div>
      `;
      
      const mainElement = document.querySelector('main');
      if (mainElement) {
        mainElement.appendChild(container);
      } else {
        document.body.appendChild(container);
      }
    }
  } catch (error) {}
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
      }
    }
  };

  for (message of discordMessages) {
    const mutObv = new MutationObserver(callback);
    mutObv.observe(message, { attributes: true });
  }
}

function applySettings() {
  const snowflakes = document.querySelector(".snowflakes");

  let data;

  try {
    data = JSON.parse(localStorage.getItem("json"));
  } catch {}

  const defaultData = {
    "discord-example-theme": "dark",
    "text-size": "60%",
    "language": "en",
    "text-hg": "none",
    "text-font": "Open Sans, sans-serif",
    "effects": "hidden",
    "code-hg": {
      defaultTextHighlight: {
        color: 4288341353,
        style: 0,
      },
      fallbackHighlight: {
        color: 4285791231,
        style: 0,
      },
      bracketHighlight: {
        color: 4294921292,
        style: 1,
      },
      semicolonHighlight: {
        color: 4294920266,
        style: 1,
      },
      functionsHighlights: {
        $nomention: {
          color: 4294932473,
          style: 0,
        },
        $catch: {
          color: 4288905212,
          style: 0,
        },
        $else: {
          color: 4288905212,
          style: 0,
        },
        $elseif: {
          color: 4288905212,
          style: 0,
        },
        $endif: {
          color: 4288905212,
          style: 0,
        },
        $endtry: {
          color: 4288905212,
          style: 0,
        },
        $error: {
          color: 4288905212,
          style: 0,
        },
        $if: {
          color: 4288905212,
          style: 0,
        },
        $try: {
          color: 4288905212,
          style: 0,
        },
      },
    },
  };

  if (!data) localStorage.setItem("json", JSON.stringify(defaultData));
  data ??= defaultData;

  const html = document.querySelector("html");

  html.style.fontFamily = data["text-font"];
  html.style.fontSize = data["text-size"];
  html.style.textShadow = data["text-hg"];
  
  if (snowflakes) {
    snowflakes.style.visibility = data["effects"];
  }

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

  if (currentPath.includes('/tools/')) {
    const fileName = currentPath.split('/').pop();
    window.location.replace('https://bdfd-tool.github.io/bdfd-wiki/nightly/tools/' + fileName);
  }
  else if (currentPath.includes('/terms.html') || currentHref.includes('terms.html')) {
    window.location.replace('https://botdesignerdiscord.com/tos');
  }
  else {
    const allLinks = document.querySelectorAll('a[href]');
    
    allLinks.forEach(link => {
      const href = link.getAttribute('href');
      
      if (href) {
        if (href.indexOf('../tools/') === 0) {
          const newHref = 'https://bdfd-tool.github.io/bdfd-wiki/nightly/tools/' + href.substring(9);
          link.setAttribute('href', newHref);
        }
        
        if (href.includes('terms.html')) {
          link.setAttribute('href', 'https://botdesignerdiscord.com/tos');
        }
      }
    });
  }
  
  setDiscordTheme(data["discord-example-theme"]);
}

document.addEventListener('DOMContentLoaded', function() {
  createAndUpdateLastEdit();
  enhanceNavigationSimple();
  applySettings();
});