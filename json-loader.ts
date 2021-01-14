let text: string;

const href = new URL("food.json", import.meta.url).href;
console.log(href);

text = await (await fetch(href)).text();
console.log(text);

export { text };
