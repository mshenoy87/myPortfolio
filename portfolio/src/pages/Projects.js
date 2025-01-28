import { AnimatePresence } from "motion/react"
import * as motion from "motion/react-client"
import React from "react";
import ListView from "./Listview";

const Projects = () => {

    return ( 
        <AnimatePresence mode="wait">
            <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
            >
                
                <AnimatePresence mode="wait">
                    <motion.div
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                    <ListView list={["Fake News Detection System 😬", "Python Interpreter 😋", "Addis Cafe Website 🤖", "Honest Hive 🧚🏽‍♀️", "Junior Burglar 🦚"]} />

                    </motion.div>
                </AnimatePresence>
            </motion.div>
        </AnimatePresence>
        
    );
}

export default Projects;