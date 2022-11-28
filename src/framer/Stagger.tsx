export const parent = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition: {
            delayChildren: 0.5,
            staggerChildren: 0.5
        }
    }
}

export const child = {
    hidden: {
        opacity: 0,
        scale: 2
    },
    show: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.4
        }
    }
}