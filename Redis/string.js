const client = require("./client");

async function func() {
  const val = await client.get("abhishek");
  console.log(val);
}

func();
