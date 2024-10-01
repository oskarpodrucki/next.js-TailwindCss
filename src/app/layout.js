import "@/styles/globals.css"

export const metadata = {
  title: "next.js-reusable-components",
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
