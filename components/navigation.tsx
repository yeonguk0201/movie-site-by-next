'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../app/styles/navigation.module.css';

export default function Navigation() {
  const path = usePathname();
  return (
    <nav className={styles.nav}>
      <ul>
        <li className={styles.list}>
          <Link href={'/'}>Home</Link>
          {path === '/' ? '✋' : ''}
        </li>
        <li>
          <Link href={'/about-us'}>About-US</Link>
          {path === '/about-us' ? '✋' : ''}
        </li>
      </ul>
    </nav>
  );
}
