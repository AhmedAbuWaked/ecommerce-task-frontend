/* eslint-disable import/no-anonymous-default-export */
import { useCallback, useEffect, useState } from "react";
import { Image as AntImage } from "antd";

import { errorImage, laodingImage } from "@/constants";
import { ImageProps } from "antd/lib/image";

interface IProps extends ImageProps {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  placeholderImg?: string;
  errorImg?: string;
}

export default ({
  src = "",
  placeholderImg = laodingImage,
  errorImg = errorImage,
  preview = false,
  ...props
}: Partial<IProps>) => {
  const [imgSrc, setSrc] = useState(placeholderImg || src);

  const onLoad = useCallback(() => {
    setSrc(src);
  }, [src]);

  const onError = useCallback(() => {
    setSrc(errorImg || placeholderImg);
  }, [errorImg, placeholderImg]);

  useEffect(() => {
    const img = new Image();
    img.src = src as string;
    img.addEventListener("load", onLoad);
    img.addEventListener("error", onError);
    return () => {
      img.removeEventListener("load", onLoad);
      img.removeEventListener("error", onError);
    };
  }, [src, onLoad, onError]);

  return (
    <AntImage
      {...props}
      alt={imgSrc}
      src={imgSrc}
      preview={preview}
      style={{
        objectFit: "cover",
      }}
    />
  );
};
