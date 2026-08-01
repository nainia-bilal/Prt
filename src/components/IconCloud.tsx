import React from "react";
import { Cloud } from "react-icon-cloud";

interface IconCloudProps {
  images?: string[];
  iconSlugs?: string[];
}

const cloudProps = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
};

export const IconCloud = ({ images }: IconCloudProps) => {
  return (
    <Cloud {...cloudProps}>
      {images?.map((url, index) => (
        <a key={index} href="#" onClick={(e) => e.preventDefault()}>
          <img height="42" width="42" alt={`icon-${index}`} src={url} />
        </a>
      ))}
    </Cloud>
  );
};
