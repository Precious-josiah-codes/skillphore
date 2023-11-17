import "./globals.css";
import { sora } from "./fonts";

export const metadata = {
  title: "Skillphor",
  description:
    "Skillphore fosters a supportive data analytics community, boosting confidence and practical skills through real-world projects, courses and mentorship, leading to successful career transitions.Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={sora.className}>{children}</body>
    </html>
  );
}
