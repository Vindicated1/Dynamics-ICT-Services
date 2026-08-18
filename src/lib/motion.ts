export const fadeUp = {
  initial: {
    opacity: 0,
    y: 30,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  transition: {
    duration: 0.6,
  },
};

export const fade = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};