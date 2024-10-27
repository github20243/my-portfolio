import { Outlet } from "react-router-dom";
import Navbar from "../layouts/Navbar";
import Footer from "../components/Footer";

const BaseLayout: React.FC = () => {
	return (
		<div>
			<Navbar />
			<main>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};

export default BaseLayout