import "./globals.css";
import { Inter } from "next/font/google";
import { ApolloWrapper } from "./providers/ApolloWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Dashboard",
    description: "Simple dashboard for country profile",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <ApolloWrapper>
            {children}
        </ApolloWrapper>
        </body>
        </html>
    );
}
