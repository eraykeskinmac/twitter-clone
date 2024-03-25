import { initServer } from "./app";

async function init() {
  const app = initServer();
  (await app).listen(8000, () => {
    console.log("Server is running on port 8000");
  });
}

init();
