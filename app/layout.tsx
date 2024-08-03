import { Metadata } from "next";
import LayoutProvider from "../provider/provider";
import { Suspense } from "react";

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
        <LayoutProvider>
          <Suspense>{children}</Suspense>
        </LayoutProvider>
      </body>
    </html>
  );
}
