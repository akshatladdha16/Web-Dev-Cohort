import '@/app/ui/global.css'; //added global css file to our nextjs app: good practice instead of writing a seperate css file for each component

//font handling in next js
import { inter } from '@/app/ui/fonts';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}> {children}
      </body>
    </html>
  );
}
