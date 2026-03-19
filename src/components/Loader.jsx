function Loader({ language }) {
return (
    <div
    style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#020617',
        color: 'white'
    }}
    >
    <div
        style={{
        width: '60px',
        height: '60px',
        border: '4px solid #60a5fa',
        borderTop: '4px solid transparent',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
        }}
    ></div>
    <p style={{ marginTop: '20px' }}>
        {language === 'id' ? 'Memuat portofolio...' : 'Loading portfolio...'}
    </p>

    <style>{`
        @keyframes spin {
        100% { transform: rotate(360deg); }
        }
    `}</style>
    </div>
)
}

export default Loader