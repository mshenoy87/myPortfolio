import React, {useState} from "react";

import { AnimatePresence } from "motion/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import 'font-awesome/css/font-awesome.min.css';
import * as motion from "motion/react-client";

const ContactForm = () => {
    // set to false first (not opened)
    const button = {
        backgroundColor: "#00000000",
        padding: "5px",
    }

    return (
        <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
        >
            <h1>Find me on</h1>
            <div class="justify-content-center row p-5">
                <div class="col-xs-12 p-3">
                        <FontAwesomeIcon icon={faGithub} size="2xl" />
                        <a href="https://github.com/mshenoy87">
                            <p>mshenoy87</p>                    
                        </a>
                </div>
                <div class="col-xs-12 p-3">
                    <FontAwesomeIcon icon={faLinkedin} size="2xl" />
                    <a href="https://www.linkedin.com/in/megha-shenoy/">
                        <p></p>
                    </a>
                </div>
                <div class="col-xs-12 p-3">
                    <motion.div style={button} whileTap={{ y: 1 }}>
                        <FontAwesomeIcon icon={faPhone} size="2xl"/>
                    </motion.div>
                    <AnimatePresence initial={false}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5, y: -10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.5, y: -10 }}
                        > +1 (773) - 799 - 0854 </motion.div>
                        
                    </AnimatePresence>
                </div>
                <div class="col-xs-12 p-3">
                    <motion.div style={button} whileTap={{ y: 1 }}>
                        <FontAwesomeIcon icon={faEnvelope} size="2xl" className="child"/>
                    </motion.div>
                    <AnimatePresence initial={false}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5, y: -10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.5, y: -10 }}
                        >megha.shenoy@icloud.com</motion.div>
                    
                        
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    );
}

export default ContactForm;