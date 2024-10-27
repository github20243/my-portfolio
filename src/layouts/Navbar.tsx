import {
	Button,
	Typography,
	styled,
	Collapse,
	IconButton,
} from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import ComputerIcon from "@mui/icons-material/Computer";
import DescriptionIcon from "@mui/icons-material/Description";
import ArticleIcon from "@mui/icons-material/Article";

const Navbar = () => {
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

	return (
		<StyledContainer open={openMenu}>
			<StyledTitle variant="h6">Мое портфолио</StyledTitle>
			<IconButton
				onClick={toggleMenu}
				sx={{ display: { xs: "block", md: "none" } }}
			>
				{openMenu ? <CloseIcon sx={{ color: "#fff" }} /> : <MenuIcon sx={{ color: "#fff" }} />}
			</IconButton>
			<StyledBox open={openMenu}>
				{buttons.map((button) => (
					<div key={button.href}>
						<StyledButton
							href={button.href}
							onClick={() => {
								if (button.hasDropdown) {
									toggleDropdown();
								}
								if (button.href === "/about") {
									closeMenu();
								}
							}}
						>
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

const StyledContainer = styled("header")<{ open: boolean }>(({ theme, open }) => ({
	backgroundImage: "url('https://cdn.pixabay.com/photo/2016/12/29/18/44/background-1939128_960_720.jpg')",
	backgroundSize: "cover",
	backgroundPosition: "center",
	backgroundColor: open ? "rgba(0, 0, 0, 0.5)" : "transparent",
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

const StyledBox = styled("nav")<{ open: boolean }>(({ theme, open }) => ({
	display: open ? "flex" : "none",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	position: "absolute",
	top: "80px",
	left: 0,
	width: "100%",
	backgroundColor: "rgba(0, 0, 0, 0.8)",
	padding: "10px 0",
	borderTop: "1px solid #ddd",
	[theme.breakpoints.up("md")]: {
		display: "flex",
		flexDirection: "row",
		position: "static",
		backgroundColor: "transparent",
		padding: 0,
		borderTop: "none",
	},
}));

const getHoverColor = (index: number) => {
	const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#A133FF", "#FFD700", "#FF4500"];
	return colors[index % colors.length];
};

const StyledButton = styled(Button)<{ index?: number }>(({ index = 0 }) => ({
	color: "#fff",
	display: "flex",
	flexDirection: "column",
	textTransform: "none",
	position: "relative",
	transition: "color 0.3s ease, background-color 0.3s ease",
	width: "100%",
	marginLeft: "30px",
	"&:hover": {
		color: getHoverColor(index),
		backgroundColor: "#222",
	},
	"&::after": {
		content: '""',
		position: "absolute",
		bottom: 0,
		left: 0,
		right: 0,
		height: "2px",
		backgroundColor: "transparent",
		transition: "background-color 0.3s, width 0.3s",
		width: "0%",
	},
	"&:hover::after": {
		backgroundColor: getHoverColor(index),
		width: "100%",
	},
}));

const StyledDropdown = styled("div")(() => ({
	backgroundColor: "#2c3e50",
	borderRadius: "4px",
	boxShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
	marginTop: "10px",
	display: "flex",
	flexDirection: "column",
	opacity: 0,
	transition: "opacity 0.3s ease",
	"&.MuiCollapse-enter": {
		opacity: 1,
	},
	"&.MuiCollapse-exit": {
		opacity: 0,
	},
}));

const StyledDropdownItem = styled(Button)(() => ({
	color: "#fff",
	padding: "10px 20px",
	textTransform: "none",
	justifyContent: "flex-start",
	"&:hover": {
		backgroundColor: "#34495e",
	},
}));
