// import Image, { ImageProps } from 'next/image'
// import { motion } from 'framer-motion'

// type Props = {} & ImageProps

// const MImage = motion<Props>(Image)

// export { MImage as Image }



import * as React from "react"
import { cn } from '@/lib/utils'

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> { }

const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ className, ...props }, ref) => {
    return (
      <img
        className={cn(
          "w-full h-auto rounded-lg shadow-md hover:scale-105 transition-transform",
          className
        )}
        {...props}
        ref={ref}
      />
    )
  }
)

Image.displayName = 'Image'

export { Image }