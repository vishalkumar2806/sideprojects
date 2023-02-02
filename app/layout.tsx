import "./globals.css";
import "./style.css";
import { Providers } from "./providers";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className="bg-sky-600">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
