import { AnimatePresence } from "motion/react"
import * as motion from "motion/react-client"
import React from "react";

const Home = () => {

    return ( 
        <AnimatePresence mode="wait">
                    <motion.div
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div class="content row d-flex m-5" overflow="auto">
                            <div class="col-xs-12 col-lg-6 main text-left">
                                <h3>Hello! My name is</h3>
                                <h1>Megha Shenoy</h1>
                                <p>
                                    🌟 Hi, I’m Megha Shenoy! 🌟

                                    I’m a problem-solver, and lifelong learner with a Bachelor of Science in Computer Science from the University of Illinois at Chicago (Class of 2024).
                                    <br />
                                    With experience as a Software Engineer Intern at Amazon Web Services and Origami Risk,
                                    I’ve honed my skills in building robust software solutions and collaborating in agile team
                                     environments. I’m passionate about coding and have a versatile toolkit, including Python, 
                                     ReactJS, Flask, and Django.
                                    <br />
                                    Currently, I’m diving into web development by creating a dynamic menu app for Addis Cafe, the cafe I work at,
                                     that integrates the Square API into a web application for customers to find information about the cafe, browse a menu, and join a mailing list.
                                     When I’m not coding, I enjoy crafting fun projects like misinformation detection models and interactive games,
                                     fueling my creativity and curiosity.
                                    <br />
                                    I’m all about teamwork, adaptability, and finding joy in the creativity! 💻✨
                                </p>
                            </div>
                            <div class="col-xs-12 col-lg-6 img-fluid justify-content-center">
                                <img src={require("../assets/Froggi.png")} class="img-fluid" alt="image desc" />
                                
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
        
    );
}

export default Home;