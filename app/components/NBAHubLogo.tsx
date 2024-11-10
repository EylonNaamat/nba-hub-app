import { Lusitana } from "next/font/google";
import classes from "./NBAHubLogo.module.css";
import Image from "next/image";
import Link from "next/link";

const lusitana = Lusitana({ subsets: ["latin"], weight: ["400", "700"] });

function NBAHubLogo() {
  return (
    <div>
      <Link href="/" className={classes.logo}>
        <div className={classes.logoImg}>
          <Image src="/nba_logo.png" alt="NBA logo" fill />
        </div>
        <span className={`${lusitana.className} ${classes.logoTitle}`}>
          NBA Hub
        </span>
      </Link>
    </div>
  );
}
export default NBAHubLogo;
