import { unstable_createNodejsStream } from "@vercel/og";
import { component as logo } from "./logo";
import { createWriteStream } from "fs";
import { readFile } from "fs/promises";

async function writeImage(component: JSX.Element, filename: string) {
  const interFont = (await readFile("assets/Inter-Bold.ttf")).buffer;

  const stream = await unstable_createNodejsStream(component, {
    width: 1200,
    height: 400,
    fonts: [
      {
        name: "Inter",
        data: interFont,
        style: "normal",
      },
    ],
  });
  const file = createWriteStream(filename);
  stream.pipe(file);
}

(async () => {
  //const c = await component({ domain: "venki.dev", title: "Hello, World!" });
  const c = await logo();

  await writeImage(c, "logo-image.png");
})();
