import React from 'react';
import MainHeader from './header';

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className='app-wrapper'>
    <MainHeader/>
    <main className="container">{children}</main>
    <footer className="footer">© 2025 Your Name</footer>
  </div>
);

export default RootLayout;