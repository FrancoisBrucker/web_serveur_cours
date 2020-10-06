/**
 * @jest-environment jest-environment-webdriver
 */

var fs = require('fs');

const url = 'https://www.google.com'


describe('Google renders', () => {
  test('it renders', async () => {
    await browser.get(url)
    const title = await browser.getTitle()
    expect(title).toContain('Google')
  })

  test('save a picture', async () => {
      // files saved in ./reports/screenshots by default
      await browser.get(url)
      browser.takeScreenshot().then((data) => {
        fs.writeFileSync('img.png', data, 'base64')
      })
  })
})
