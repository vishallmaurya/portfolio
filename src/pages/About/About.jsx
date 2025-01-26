import styles from "./About.module.css";

export const About = () => {
    return (
        <>
            <div className={styles["introduction"]}>
                <h2>About Me</h2>
                <p>Hi, I'm Vishal Maurya, a software developer and data science enthusiast currently pursuing my MCA at NIT Jamshedpur. With a solid academic foundation and hands-on experience, I specialize in Python, Java, and C++ and have a strong interest in machine learning, data science, and web development.</p>
                <p>
                I'm the creator of veda-lib, a Python library for automating data preprocessing, published on PyPI to streamline workflows for data scientists. I've also worked on impactful projects like a sentiment analysis model with 89% accuracy, a Java-based quiz application.
                </p>
                <p>
                As a researcher, I co-authored DWAEF: Deep Weighted Average Ensemble Framework, applying advanced ML techniques in NLP to detect sarcasm, published in a data science journal.
                </p>
                <p>
                I'm also active in competitive programming, solving 500+ problems on LeetCode and contributing to technical teams and coding events at NIT Jamshedpur. With a passion for innovation, I'm always eager to learn, create, and collaborate on meaningful projects.
                </p>
            </div>
        </>
    )
}