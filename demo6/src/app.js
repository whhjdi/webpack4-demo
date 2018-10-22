import "style-loader/lib/addStyles";
import "css-loader/lib/css-base";


import "./scss/base.scss";

var loaded = false;
window.addEventListener("click", function() {
  if (!loaded) {
    import(/* webpackChunkName: 'style'*/ "./scss/common.scss").then(_ => {
      // chunk-name : style
      console.log("Change bg-color of html");
      loaded = true;
    });
  }
});