import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SideQuest – Level up your real life",
  description: "Gamifizierte Web-App: Alltagsaufgaben werden zu Quests.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
