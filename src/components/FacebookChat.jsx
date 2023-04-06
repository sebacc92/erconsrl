/* eslint-disable react/no-unknown-property */
import React, { useEffect } from 'react';

function FacebookChat() {
  useEffect(() => {
    // Carga el SDK de Facebook
    window.fbAsyncInit = function () {
      window.FB.init({
        xfbml: true,
        version: 'v12.0',
      });
    };

    (function (d, s, id) {
      let js;
      const fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
  }, []);

  return (
    <div>
      <div id="fb-root" />
      <div
        className="fb-customerchat"
        attribution="install_email"
        page_id="412481155475589"
      />
    </div>
  );
}

export default FacebookChat;
