![logo-image.png](logo-image.png)

This is a simple repo set up to help you script programmatic image generation.

The most typical use is for `og-image` metadata, but I've often found this useful for batch-generating images ahead of time to upload elsewhere too.

In the past, I tried to this for Sparkl, and failed to do this headlessly with [wkhtmltoimage](https://wkhtmltopdf.org/), [phantomjs](https://phantomjs.org/), and [html-to-image](https://www.npmjs.com/package/html-to-image). I finally ended up using [PIL](https://pypi.org/project/pillow/) - but that was quite a bad experience given that you can't write HTML/CSS and instead need to imperatively draw everything.

Currently, the best option is via [Vercel OG](https://vercel.com/docs/functions/og-image-generation) or directly using their dependencies.

However, the Vercel option needs you to put up a Vercel deployment, and they don't document the Node.js path super well. This repo tries to do that.

## Usage

- Add or modify one or more templates in `src`, take a look at `logo.tsx` and `template.tsx` for examples.
- Modify `index.ts` to run the template(s) one or more times and write the outputs wherever you'd like

## Images, Fonts & More

- Remote images can be directly referenced in image tags
- Local images need to be converted to ArrayBuffers first, see `logo.tsx` for an example
- Fonts need to be imported, see `index.tsx` for the example.
- This is ultimately a wrapper around `@vercel/og`, so you should [read their docs](https://vercel.com/docs/functions/og-image-generation/og-image-examples) for more complex behavior.

## FAQ

- **Q:** How do I preview the image during development?
  - **A:** I've not found a great answer yet, ideally this repo would also host a simple webserver, so you could preview the image + inspect HTML. For now, I'd recommend using either the [Vercel Playground](https://og-playground.vercel.app/) or just keeping open an image viewer while you rerun `npm run main`