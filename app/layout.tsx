import { Tektur } from "next/font/google";

const tektur = Tektur({
  subsets: ["latin"],
  display: "swap",
});

import "@/app/_styles/globals.css";

export const metadata = {
  title: {
    template: "%s | GYMTEAM",
    default: "Welcome | GYMTEAM",
  },
  description: "Workout with professionals",
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${tektur.className} antialiased`}>
        <main className="h-full bg-black text-neutral-200">{children}</main>
      </body>
    </html>
  );
}

export default RootLayout;
