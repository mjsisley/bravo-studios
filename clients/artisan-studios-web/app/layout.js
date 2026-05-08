import GlobalStyles from '../themes/reset';

export const metadata = {
  title: 'Artisan Studios',
  description: 'Artisan Studios web app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <GlobalStyles />
        {children}
      </body>
    </html>
  );
}
