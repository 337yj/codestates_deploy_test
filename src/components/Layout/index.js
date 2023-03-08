import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import styles from "./layout.module.css";

const Layout = () => {
  return (
    <div className={styles.app}>
      <main>
        <Sidebar />
        <section className={styles.features}>
          <Outlet />
        </section>
      </main>
    </div>
  )
}

export default Layout;