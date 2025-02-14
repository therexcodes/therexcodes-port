import { motion } from "framer-motion";
import React from "react";

    const letter = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    };

    const container = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.05 },
    },
    };

    // Function to split JSX elements and animate text
    export const renderAnimatedText = (node) => {
    if (typeof node === "string") {
        return node.split("").map((char, index) => (
        <motion.span key={index} variants={letter}>
            {char}
        </motion.span>
        ));
    } else if (React.isValidElement(node)) {
        return React.cloneElement(node, {
        children: node.props.children
            ? React.Children.map(node.props.children, renderAnimatedText)
            : node.props.children,
        });
    }
    return node;
    };

    // Usage inside a component
    export const TypingAnimation = ({ children }) => {
    return (
        <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="text-lg font-semibold"
        >
        {React.Children.map(children, renderAnimatedText)}
        </motion.div>
    );
};
