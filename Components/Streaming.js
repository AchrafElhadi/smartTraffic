import React from 'react';
import { useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';
import IframeRenderer, { iframeModel } from '@native-html/iframe-plugin';
import WebView from 'react-native-webview';

const source = {
  html: `
  <iframe width="100%" height="50%" src="https://www.youtube.com/embed/cqyziA30whE" ></iframe>`
};

const renderers = {
    iframe: IframeRenderer
  };
  
  const customHTMLElementModels = {
    iframe: iframeModel
  };
  
export default function Streaming() {
  const { width } = useWindowDimensions();
  return (
    <WebView
          scalesPageToFit={true}
          bounces={false}
          javaScriptEnabled
          style={{ height: 500, width: 300 }}
          source={{
            html: `
                  <!DOCTYPE html>
                  <html>
                    <head></head> // <--add header styles if needed
                    <body>
                      <p>sdsd</> //<--- add your iframe here
                    </body>
                  </html>
            `,
          }}
          automaticallyAdjustContentInsets={false}
        />

  );
}
