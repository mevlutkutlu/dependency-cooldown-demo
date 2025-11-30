const axios = require("axios");

async function main() {
  const res = await axios.get("https://catfact.ninja/fact");
  console.log("Cat fact:", res.data.fact);
}

main().catch(console.error);
