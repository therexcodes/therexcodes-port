    import { useState, useEffect } from "react";
    import { FaBars, FaTimes } from "react-icons/fa"; // FaTimes for close icon
    import styles from "./Navbar.module.css"; // Import the CSS module

    const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        setIsScrolling(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={styles.navbar}>
        <div className={styles.navCont}>
            <h1 className={styles.logo}>Rex.codes</h1>

            {/* Full Navbar for Large Screens */}
            <ul className={styles.navlinks}>
            <li><a href="#hero">Home</a></li>
            <li><a href="#services">Serivces</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#about-me">About</a></li>
            <li><a href="#skills">Skills</a> </li>
            <li><a href="#contact">Contact</a></li>
            </ul>

            {/* Animated Hamburger Icon */}
            <button
            className={`${styles.menuicon} ${isScrolling ? styles.visible : ""} ${isOpen ? styles.rotate : ""}`}
            onClick={() => setIsOpen(!isOpen)}
            >
            {isOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
            </button>
        </div>

        {/* Animated Mobile Menu */}
        <div className={`${styles.mobilemenu} ${isOpen ? styles.slidein : styles.slideout}`}>
            <ul>
            <li><a href="#hero" onClick={() => setIsOpen(false)}>Home</a></li>
            <li><a href="#services" onClick={() => setIsOpen(false)}>Services</a></li>
            <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
            <li><a href="#about-me" onClick={() => setIsOpen(false)}>About</a></li>
            <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
            </ul>
        </div>
        </nav>
    );
    };

    export default Navbar;
