import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  render () {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()
    return (
      <html lang="zh-cmn-Hans">
        <Head>
          <meta charset="utf-8" />
          <script src="http://g.tbcdn.cn/mtb/lib-flexible/0.3.4/??flexible_css.js,flexible.js" />
          <link rel="stylesheet" href="//static.seecsee.com/test/iconfont/iconfont.css" />
          <title>投注活动</title>
          {styleTags}
        </Head>
        <body>
          <noscript>请启用 JavaScript ！</noscript>
          <div className='root'>
            {main}
          </div>
          <NextScript />
        </body>
      </html>
    )
  }
}
