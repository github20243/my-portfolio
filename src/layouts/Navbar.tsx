import {
	Button,
	Typography,
	styled,
	Collapse,
	IconButton,
} from "@mui/material";
import { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import ComputerIcon from "@mui/icons-material/Computer";
import DescriptionIcon from "@mui/icons-material/Description";
import ArticleIcon from "@mui/icons-material/Article";
import { useLocation } from "react-router-dom";

const Navbar = () => {
	const location = useLocation();
	const [openDropdown, setOpenDropdown] = useState(false);
	const [openMenu, setOpenMenu] = useState(false);

	const buttons = [
		{ href: "/", label: "Home", icon: <HomeIcon /> },
		{ href: "/about", label: "About", icon: <PersonIcon /> },
		{ href: "/projects", label: "Projects", icon: <ComputerIcon /> },
		{ href: "/resume", label: "Resume", icon: <DescriptionIcon /> },
		{
			href: "/blogs",
			label: "Blogs",
			icon: <ArticleIcon />,
			hasDropdown: true,
		},
	];

	const toggleDropdown = () => setOpenDropdown((prev) => !prev);
	const toggleMenu = () => setOpenMenu((prev) => !prev);
	const closeMenu = () => setOpenMenu(false);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 960) {
				closeMenu();
			}
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<StyledContainer>
			<StyledTitle variant="h6">Мое портфолио</StyledTitle>
			<IconButton
				onClick={toggleMenu}
				sx={{ display: { xs: "block", md: "none" } }}>
				{openMenu ? (
					<CloseIcon sx={{ color: "#fff" }} />
				) : (
					<MenuIcon sx={{ color: "#fff" }} />
				)}
			</IconButton>
			<DesktopMenu>
				{buttons.map((button, index) => (
					<StyledButton
						key={button.href}
						href={button.href}
						index={index}
						selected={location.pathname === button.href}>
						{button.icon}
						<Typography variant="caption">{button.label}</Typography>
					</StyledButton>
				))}
			</DesktopMenu>
			<StyledBox open={openMenu}>
				{buttons.map((button, index) => (
					<div key={button.href}>
						<StyledButton
							href={button.href}
							onClick={() => {
								if (button.hasDropdown) toggleDropdown();
								closeMenu();
							}}
							index={index}
							selected={location.pathname === button.href}>
							{button.icon}
							<Typography variant="caption">{button.label}</Typography>
						</StyledButton>
						{button.hasDropdown && (
							<Collapse in={openDropdown} timeout="auto" unmountOnExit>
								<StyledDropdown>
									<StyledDropdownItem onClick={toggleDropdown}>
										Категория 1
									</StyledDropdownItem>
									<StyledDropdownItem onClick={toggleDropdown}>
										Категория 2
									</StyledDropdownItem>
									<StyledDropdownItem onClick={toggleDropdown}>
										Категория 3
									</StyledDropdownItem>
								</StyledDropdown>
							</Collapse>
						)}
					</div>
				))}
			</StyledBox>
		</StyledContainer>
	);
};

export default Navbar;

const StyledTitle = styled(Typography)(({ theme }) => ({
	color: "#fff",
	fontSize: "1.5rem",
	fontWeight: "bold",
	marginLeft: "200px",
	width: "20%",
	[theme.breakpoints.down("sm")]: {
		width: "50%",
		marginLeft: "20px",
	},
}));

const StyledContainer = styled("header")(({ theme }) => ({
	backgroundImage:
		"url('https://cdn.pixabay.com/photo/2016/12/29/18/44/background-1939128_960_720.jpg')",
	backgroundSize: "cover",
	backgroundPosition: "center",
	width: "100%",
	position: "sticky",
	top: 0,
	height: "80px",
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	padding: "0 20px",
	boxShadow: "0 4px 10px rgba(0, 0, 0, 0.4)",
	zIndex: 1000,
	[theme.breakpoints.down("sm")]: {
		height: "60px",
		padding: "0 10px",
	},
}));

const DesktopMenu = styled("nav")(({ theme }) => ({
	display: "flex",
	flexDirection: "row",
	marginRight: "120px",
	[theme.breakpoints.down("md")]: {
		display: "none",
	},
}));

const StyledBox = styled("nav")<{ open: boolean }>(({ theme, open }) => ({
	display: open ? "flex" : "none",
	flexDirection: "column",
	alignItems: "center",
	position: "absolute",
	top: "80px",
	left: 0,
	width: "100%",
	backgroundColor: "rgba(0, 0, 0, 0.8)",
	padding: "10px 0",
	borderTop: "1px solid #ddd",
	zIndex: 999,
	[theme.breakpoints.down("md")]: {
		top: "50px",
		position: "fixed",
	},
}));

const getHoverColor = (index: number) => {
	const colors = [
		"#FF5733",
		"#33FF57",
		"#3357FF",
		"#FF33A1",
		"#A133FF",
		"#FFD700",
		"#FF4500",
	];
	return colors[index % colors.length];
};

const StyledButton = styled(Button)<{ index?: number; selected?: boolean }>(
	({ theme, index = 0, selected }) => ({
		color: selected ? "#FFD700" : "#fff",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		textTransform: "none",
		position: "relative",
		transition: "color 0.3s ease, background-color 0.3s ease",
		width: "100%",
		marginLeft: "30px",
		"&:hover": {
			color: getHoverColor(index),
			backgroundColor: "#222",
		},
		[theme.breakpoints.down("sm")]: {
			marginLeft: "10px",
			width: "100%",
		},
	})
);

const StyledDropdown = styled("div")(() => ({
	backgroundColor: "#2c3e50",
	borderRadius: "4px",
	boxShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
	marginTop: "10px",
	padding: "5px 0",
}));

const StyledDropdownItem = styled("div")(({}) => ({
	color: "#fff",
	padding: "10px 15px",
	cursor: "pointer",
	"&:hover": {
		backgroundColor: "#3e5b72",
	},
}));
