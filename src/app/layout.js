import "@/styles/globals.css";

export const metadata = {
	title: "next.js-tailwindcss",
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	);
}
