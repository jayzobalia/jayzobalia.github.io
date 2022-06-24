  let webchatScript = document.createElement('script');
      webchatScript.setAttribute('src', 
        'https://cdn.jsdelivr.net/gh/cherrybase/cherrybase.github.io@gh-pages/plugins/customer.js?theme=bubble');
      webchatScript.innerHTML = JSON.stringify({
          "domain" : "<domain>",
          "channelId" : "<channelId>",
          "channelKey" : "<channelKey>",
          "config" : {
           }
        });
      document.body.appendChild(webchatScript);
