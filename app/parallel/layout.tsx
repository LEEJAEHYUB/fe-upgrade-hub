export default function ParallelLayout({
  menu,
  content,
}: {
  menu: React.ReactNode;
  content: React.ReactNode;
}) {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <aside
        style={{
          width: '250px',
          borderRight: '1px solid #ddd',
          padding: '16px',
        }}
      >
        {menu}
      </aside>
      <main style={{ flex: 1, padding: '16px' }}>{content}</main>
    </div>
  );
}
