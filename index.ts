const text = await Deno.readTextFile("./food.json");

console.log(JSON.parse(text));

export { text };
