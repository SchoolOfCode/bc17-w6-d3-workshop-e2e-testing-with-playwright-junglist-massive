import{test,expect} from '@playwright/test';

test ("practice test should pass",async ({page}) =>{
    await page.goto("http://localhost:3000");

    const textbox = page.getByRole('textbox');
    await textbox.fill('some value');

    await expect(textbox).toHaveValue('some value');
})

test ("End to end",async ({page}) =>{
    await page.goto("http://localhost:3000");

    await expect(page.getByText('Todo List App')).toBeVisible();

    await page.getByRole('textbox').fill('wake up');

    const button = page.getByRole('button');

    await button.click();
})
