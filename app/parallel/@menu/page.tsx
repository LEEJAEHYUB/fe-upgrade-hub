// app/parallel/@menu/page.tsx
import Link from 'next/link';

export default function MenuPage() {
  return (
    <div>
      <h2 style={{ marginBottom: '8px' }}>Menu</h2>
      <ul style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <li>
          <Link href="/parallel">Home</Link>
        </li>
        <li>
          <Link href="/parallel/profile">Profile</Link>
        </li>
        <li>
          <Link href="/parallel/settings">Settings</Link>
        </li>
      </ul>
    </div>
  );
}
