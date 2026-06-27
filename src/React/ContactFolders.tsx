import Folder from './Folder';

const paperStyle: React.CSSProperties = {
  display: 'flex', flexDirection: 'column', alignItems: 'center',
  justifyContent: 'center', gap: 3, padding: '6px 4px', height: '100%',
  fontSize: 6, fontWeight: 700, color: '#1a1a2e', textAlign: 'center', lineHeight: 1.3,
};

export default function ContactFolders() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Folder
        color="#007bff"
        size={2.2}
        items={[
          <div style={paperStyle}>
            <span style={{ fontSize: 10 }}>🚀</span>
            <span>me@malika.engineer</span>
            <span style={{ color: '#007bff', fontSize: 4.5 }}>Email</span>
          </div>,
          <div style={paperStyle}>
            <span style={{ fontSize: 10 }}>🪽</span>
            <span>in/malikashkl</span>
            <span style={{ color: '#007bff', fontSize: 4.5 }}>LinkedIn</span>
          </div>,
          <div style={paperStyle}>
            <span style={{ fontSize: 10 }}>🐧</span>
            <span>icecoffie</span>
            <span style={{ color: '#007bff', fontSize: 4.5 }}>GitHub</span>
          </div>,
        ]}
      />
    </div>
  );
}
