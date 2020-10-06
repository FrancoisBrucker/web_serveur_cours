/**
 * @jest-environment jest-environment-webdriver
 */

var fs = require('fs');

const {By, Key} = require('selenium-webdriver');


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
      const iframe = browser.findElement(By.css('iframe'));
      await browser.switchTo().frame(iframe);
      
      await browser.findElement(By.id("introAgreeButton")).click()
      await browser.findElement(By.name("q")).sendKeys("Carole Deumié", Key.ENTER);

      browser.takeScreenshot().then((data) => {
        fs.writeFileSync('img.png', data, 'base64')
      })
  })
})
