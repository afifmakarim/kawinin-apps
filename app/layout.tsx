import { Metadata } from "next";
import LayoutProvider from "../provider/provider";

export const metadata: Metadata = {
  title: "Wedding Invitation",
  description: "Wedding Invitation Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LayoutProvider>{children} </LayoutProvider>
      </body>
    </html>
  );
}
