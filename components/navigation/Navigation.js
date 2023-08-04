import { Stack, Typography } from "@mui/material";
import Link from "next/link"
import styles from './Navigation.module.css';

const links = [{
  label: "Home",
  route: "/"
}, {
  label: "About",
  route: "/about"
}, {
  label: "Posts",
  route: "/posts"
}];

export function Navigation () {
  return (
    <header className={styles.header}>
      <Stack className={styles.navigation}>
        {links.map((link) => (
          <div key={link.route}>
            <Link href={link.route}>
              <Typography>
                {link.label}
              </Typography>
            </Link>
          </div>
        ))}
      </Stack>
    </header>
  )
}