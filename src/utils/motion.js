export const fadeUp = {
	hidden: { opacity: 0, y: 20 },
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: "easeOut",
		},
	},
};

export const fadeIn = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			duration: 0.6,
			ease: "easeOut",
		},
	},
};

export const staggerContainer = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.25,
            delayChildren: 0.1,
        },
    },
};

export const marquee = {
  animate: {
    x: ["0%", "-50%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 10,
        ease: "linear",
      },
    },
  },
};