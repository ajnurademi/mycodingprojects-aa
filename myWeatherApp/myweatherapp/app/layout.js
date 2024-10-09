import "./globals.css";

export const metadata = {
  title: "My Weather App",
  description: "Created by Ajnur Ademi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}