const text = await Deno.readTextFile(new URL("food.json", import.meta.url));

console.log(new URL("food.json", import.meta.url));
console.log(JSON.parse(text));

export { text };
