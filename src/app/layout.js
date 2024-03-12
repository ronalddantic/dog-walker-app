import {Inter} from "next/font/google";
import "./globals.css";
import MuiTheme from "@/bootstrap/mui";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
	title: "Acme Dog Walkers",
	description: "The application, developed using React for the web, will serve as a tool for dog walkers to log details of their walks.",
	author: "Ronald Paulo Dantic"
};

export default function RootLayout({children}) {
	return (<html lang="en">
	<body suppressHydrationWarning={true} className={inter.className}>
	<MuiTheme>
		{children}
	</MuiTheme>
	</body>
	</html>);
}
