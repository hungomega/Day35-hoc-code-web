import styles from "./Tabs.module.scss";

function Tabs() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.tabsList}></div>
            <div className={styles.tabContent}></div>
        </div>
    );
}
export default Tabs;
