import Image from "next/image";
import React, { memo } from "react";
import internal from "stream";
import styles from "./component.module.css"


const TopBar:React.FC<{props:{itemlist:Array<any>}}> = function(props){
  return (
    <>
      <div className={styles.bar}>
        <div className={styles.logo}>
            一个标题
        </div>
        <div className={styles.option}>

        </div>
        <div className={styles.info}>

        </div>
      </div>
    </>
  )
}

const Topbar = memo(TopBar)

export default function Home() {
  const data = {itemlist:[]}
  return (
    <div>
      <div className="external">
        <Topbar props={data}></Topbar>
      </div>
    </div>
  );
}
