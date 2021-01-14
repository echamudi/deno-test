let text: string;

text = await (await fetch(new URL("food.json", import.meta.url).href)).text();

export { text };
