import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Effects from '@/components/Effects';

export const metadata = {
  title: 'GoHigh – Digital Agency for Brands That Want to Grow',
  description: 'GoHigh is a digital agency specialising in web design, branding, SEO and performance marketing.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <Effects />
      </body>
    </html>
  );
}
