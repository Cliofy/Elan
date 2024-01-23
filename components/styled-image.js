import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

export const triplet = (e1, e2, e3) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63);

export const rgbDataURL = (r, g, b) =>
  `data:image/gif;base64,R0lGODlhAQABAPAA${triplet(0, r, g) + triplet(b, 255, 255)}/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;

const StyledImage = ({ height, width, size,round = false, alt, src, classNames, ...props }) => {
  let imageSize;
  switch (size) {
    case 'xs':
      imageSize = 'h-6 w-6 sm:h-8 sm:w-8 md:h-[40px] md:w-[40px]';
      break;
    case 'sm':
      imageSize = 'h-8 w-8 sm:h-10 sm:w-10 md:h-[45px] md:w-[45px]';
      break;
    case 'md':
      imageSize = 'h-16 w-16 md:h-[80px] md:w-[80px]';
      break;
    default:
      imageSize = size;
  }

  return (
    <Image
      width={height || 100}
      height={width || 100}
      placeholder="blur"
      blurDataURL={rgbDataURL(0, 105, 255)}
      src={src || `/${process.env.APP_LOGO_PATH}`}
      alt={alt || 'Logo'}
      className={cn(`object-cover ${imageSize} ${round? 'rounded-full': 'rounded-none'}`, classNames)}
      decoding='async'
      {...props}
    />
  );
};

export default StyledImage;
