import React from "react";
import { readFile } from "fs/promises";

export const component = async () => {
  const imageData = (await readFile("assets/pigscript.png")).buffer;

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fdfbec",
        fontSize: 100,
        fontWeight: "lighter",
        fontFamily: "Inter",
        margin: 0,
        gap: "30px",
      }}
    >
      {/* @ts-ignore-next-line @vercel/og takes a buffer as src, but TypeScript doesn't know that */}
      <img width="256" height="256" src={imageData} />
      <div style={{ marginTop: 0 }}>pig-script</div>
    </div>
  );
};
