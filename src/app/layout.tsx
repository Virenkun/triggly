import type { Metadata } from "next";
import { Gravitas_One, Poppins } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { Toaster } from "sonner";
import NextTopLoader from "nextjs-toploader";
import ReactQueryProvider from "@/providers/react-query-provider";
import ReduxProvider from "@/providers/redux-provider";

const gravitasOne = Gravitas_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-gravitas",
});
const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Slide - Transform Your Instagram Engagement",
  description:
    "Slide revolutionizes how you connect with your audience on Instagram. Automate responses and boost engagement effortlessly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${gravitasOne.variable} ${poppins.variable}`}>
        <body suppressHydrationWarning className="font-poppins">
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            disableTransitionOnChange
          >
            <ReduxProvider>
              <ReactQueryProvider>
                <NextTopLoader
                  color="#4338ca"
                  initialPosition={0.08}
                  crawlSpeed={200}
                  height={3}
                  crawl={true}
                  showSpinner={false}
                  easing="ease"
                  speed={200}
                  shadow="0 0 10px #4338ca,0 0 5px #4338ca"
                  zIndex={1600}
                  showAtBottom={false}
                />
                {children}
              </ReactQueryProvider>
            </ReduxProvider>
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
