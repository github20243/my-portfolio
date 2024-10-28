import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getInfo } from "../store/request/request";
import { useAppSelector } from "../hooks/CustomHooks";
import Spinner from "../components/Spinner";
import { styled } from "@mui/material/styles";
import { Typography, Box } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";

const Home: React.FC = () => {
	const dispatch = useDispatch();
	const { data = [], isLoading, error } = useAppSelector((state) => state.data); 

	useEffect(() => {
		dispatch(getInfo() as any);
	}, [dispatch]);

	if (isLoading) return <Spinner isLoading={isLoading} />;
	if (error) return <div>Error: {error}</div>;

	return (
		<StyledContainer>
			{data.map(
				(
					item,
					index 
				) => (
					<ItemWrapper key={item.id || index}>
						{" "}
						<TextContainer>
							<StyledTitle>{item.name}</StyledTitle>
							<StyledDescription>{item.description}</StyledDescription>
							<StyledTitleText>{item.titles}</StyledTitleText>
							<StyledDescriptionText>{item.descriptions}</StyledDescriptionText>
							<StyledSocialLinks>
								<StyledLink
									href="https://github.com/github20243"
									target="_blank"
									rel="noopener noreferrer">
									<GitHubIcon fontSize="large" style={{ color: "#181717" }} />
									<Typography
										variant="body2"
										style={{ color: "#fff", marginLeft: 8 }}>
										GitHub
									</Typography>
								</StyledLink>
								<StyledLink
									href="https://t.me/Nurs_06A"
									target="_blank"
									rel="noopener noreferrer">
									<TelegramIcon fontSize="large" style={{ color: "#0088cc" }} />
									<Typography
										variant="body2"
										style={{ color: "#fff", marginLeft: 8 }}>
										Telegram
									</Typography>
								</StyledLink>
							</StyledSocialLinks>
						</TextContainer>
						<StyledImage src={item.image} alt={item.name} />
						<StyledAdditionalImage src={item.images} alt={item.titles} />
					</ItemWrapper>
				)
			)}
		</StyledContainer>
	);
};

export default Home;

const StyledContainer = styled(Box)(({ theme }) => ({
	backgroundColor: "#1a1a1a",
	color: "#fff",
	padding: theme.spacing(4),
	minHeight: "100vh",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "flex-start",
}));

const ItemWrapper = styled(Box)(({ theme }) => ({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	marginBottom: theme.spacing(8),
	width: "100%",
	maxWidth: "1200px",
	padding: theme.spacing(2),
	backgroundColor: "#2a2a2a",
	borderRadius: "8px",
	boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
	transition: "transform 0.3s ease",
	"&:hover": {
		transform: "scale(1.02)",
	},
	[theme.breakpoints.down("md")]: {
		flexDirection: "column",
		alignItems: "flex-start",
	},
}));

const TextContainer = styled(Box)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	width: "60%",
	padding: theme.spacing(2),
	[theme.breakpoints.down("md")]: {
		width: "100%", 
	},
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
	fontSize: "2.5rem",
	fontWeight: "bold",
	color: "#D5006D",
	textTransform: "uppercase",
	marginBottom: theme.spacing(1),
	[theme.breakpoints.down("md")]: {
		fontSize: "2rem", 
	},
}));

const StyledDescription = styled(Typography)(({ theme }) => ({
	fontSize: "1.25rem",
	maxWidth: "600px",
	textAlign: "left",
	color: "#ccc",
	marginBottom: theme.spacing(2),
	[theme.breakpoints.down("md")]: {
		fontSize: "1rem", 
	},
}));

const StyledTitleText = styled(Typography)(({ theme }) => ({
	fontSize: "1.5rem",
	fontWeight: "bold",
	color: "#D5006D",
	marginTop: theme.spacing(2),
	[theme.breakpoints.down("md")]: {
		fontSize: "1.25rem",
	},
}));

const StyledDescriptionText = styled(Typography)(({ theme }) => ({
	fontSize: "1rem",
	color: "#bbb",
	marginTop: theme.spacing(1),
	textAlign: "left",
	[theme.breakpoints.down("md")]: {
		fontSize: "0.875rem", 
	},
}));

const StyledImage = styled("img")(({ theme }) => ({
	maxWidth: "400px",
	borderRadius: "8px",
	boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
	transition: "transform 0.5s ease",
	"&:hover": {
		transform: "scale(1.05)",
	},
	[theme.breakpoints.down("md")]: {
		maxWidth: "100%", 
	},
}));

const StyledAdditionalImage = styled("img")(({ theme }) => ({
	maxWidth: "400px",
	borderRadius: "8px",
	boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
	marginTop: theme.spacing(2),
	transition: "transform 0.5s ease",
	"&:hover": {
		transform: "scale(1.05)",
	},
	[theme.breakpoints.down("md")]: {
		maxWidth: "100%", 
	},
}));

const StyledSocialLinks = styled(Box)(({ theme }) => ({
	display: "flex",
	gap: theme.spacing(4),
	marginTop: theme.spacing(2),
	flexWrap: "wrap", 
}));

const StyledLink = styled("a")(() => ({
	color: "#fff",
	textDecoration: "none",
	display: "flex",
	alignItems: "center",
	"&:hover": {
		color: "#D5006D",
	},
}));
