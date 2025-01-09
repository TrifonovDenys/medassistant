import Image, { ImageProps } from 'next/image'
import { motion } from 'framer-motion'

type Props = {} & ImageProps

const MImage = motion<Props>(Image)

export { MImage as Image }