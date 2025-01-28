import React from "react";
import { AnimatePresence } from "motion/react"
import * as motion from "motion/react-client"
import ListView from "./Listview";

const Resume = () => {
    return (
        <AnimatePresence mode="wait">
        <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
        >
            <div class="content d-flex" overflow="auto">
                <h1>My experience</h1>
            </div>
            <ListView list={[1, 2, 3, 4, 5, 6]} />
        </motion.div>
    </AnimatePresence>
    );
}

export default Resume;