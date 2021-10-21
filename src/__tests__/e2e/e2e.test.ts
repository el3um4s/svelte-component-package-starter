import { Browser, chromium } from 'playwright';

describe('jest-image-snapshot: test is working', () => {
    let browser: Browser;

    beforeAll(async () => {
      browser = await chromium.launch();
    });
    afterAll(async () => {
      await browser.close();
    });

    test("should work", async () => {
        const page = await browser.newPage();
        await page.goto('http://localhost:3000');
        const image = await page.screenshot();
        expect(image).toMatchImageSnapshot();
    })
})
