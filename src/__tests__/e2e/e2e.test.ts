import { Browser, chromium } from 'playwright';

describe('visual regression test', () => {
    let browser: Browser;

    beforeAll(async () => {
      browser = await chromium.launch();
    });
    afterAll(async () => {
      await browser.close();
    });

    test("base", async () => {
      const page = await browser.newPage();
      await page.goto('http://localhost:3000/test');
      const image = await page.screenshot();
      expect(image).toMatchImageSnapshot();
    });

    test("Change border color", async () => {
      const page = await browser.newPage();
      await page.goto('http://localhost:3000/test');
      await page.click('text=Change border color');
      let image = await page.screenshot();
      expect(image).toMatchImageSnapshot();
      await page.click('text=Change border color');
      image = await page.screenshot();
      expect(image).toMatchImageSnapshot();
    });

    test("Change first color", async () => {
      const page = await browser.newPage();
      await page.goto('http://localhost:3000/test');
      await page.click('text=Change first color');
      let image = await page.screenshot();
      expect(image).toMatchImageSnapshot();
      await page.click('text=Change first color');
      image = await page.screenshot();
      expect(image).toMatchImageSnapshot();
    })

    test("Change second color", async () => {
      const page = await browser.newPage();
      await page.goto('http://localhost:3000/test');
      await page.click('text=Change second color');
      let image = await page.screenshot();
      expect(image).toMatchImageSnapshot();
      await page.click('text=Change second color');
      image = await page.screenshot();
      expect(image).toMatchImageSnapshot();
    })
  })


describe.each([2,5,12,15,20,24])("Set steps %i", (i) => {
  let browser: Browser;

  beforeAll(async () => {
    browser = await chromium.launch();
  });
  afterAll(async () => {
    await browser.close();
  });

  test("Change Steps ", async () => {
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/test');

    await page.check(`text="${i}"`);
    let image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  })
});

