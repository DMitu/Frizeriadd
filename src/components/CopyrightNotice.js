import React from 'react';

function CopyrightNotice() {
  const styles = {
    footer: {
      backgroundColor: 'transparent',
      textAlign: 'center',
      padding: '10px',
      borderTop: '1px solid #ccc',
    },
    copyright: {
      color: '#333',
    },
  };

  return (
    <footer style={styles.footer}>
      <p style={styles.copyright}>&copy; David Mitu</p>
    </footer>
  );
}

export default CopyrightNotice;
