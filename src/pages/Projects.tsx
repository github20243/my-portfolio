import {
	Box,
	Typography,
	Button,
	Card,
	CardContent,
	Stack,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ReactPlayer from "react-player";
import { projectsData } from "../data/projectsData";

const Projects = () => {
	return (
		<StyledContainer>
			<Typography variant="h4" align="center" gutterBottom>
				Проекты
			</Typography>
			<Typography variant="h6" align="center" gutterBottom>
				Каждый проект – это уникальная часть разработки
			</Typography>

			<StyledCard>
				<CardContent>
					<StyledAnimeSiteText
						variant="h5"
						gutterBottom
						sx={{ display: "flex", alignItems: "center" }}>
						{projectsData.title}{" "}
						<span
							role="img"
							aria-label="frog"
							style={{ color: "red", marginLeft: "5px" }}>
							⚛
						</span>
					</StyledAnimeSiteText>
					<Typography variant="body1" gutterBottom>
						{projectsData.description}
					</Typography>

					<StyledStack
						direction="row"
						spacing={2}
						sx={{ marginTop: "20px", flexWrap: "wrap" }}>
						{projectsData.tags.map((tag, index) => (
							<StyledBox key={index}>
								<StyledTag>{tag}</StyledTag>
							</StyledBox>
						))}
					</StyledStack>

					<StyledStackButton direction="row" spacing={2} sx={{ marginTop: "20px" }}>
						<Button
							variant="contained"
							color="primary"
							href={projectsData.codeLink}
							sx={{ marginRight: "20px" }}>
							Код
						</Button>
						<Button
							variant="contained"
							color="secondary"
							href={projectsData.demoLink}>
							Демонстрация
						</Button>
					</StyledStackButton>
				</CardContent>

				<StyledVideoContainer>
					<ReactPlayer
						url={projectsData.image}
						playing={true}
						loop={true}
						muted={true}
						width="100%"
						height="400px"
						borderRadius="20px"
					/>
				</StyledVideoContainer>
			</StyledCard>
		</StyledContainer>
	);
};

export default Projects;

const StyledContainer = styled(Box)(({ theme }) => ({
	padding: "40px",
	backgroundColor: "#000",
	color: "#fff",
	textAlign: "center",
	margin: "0 auto",
	maxWidth: "1600px",
	width: "100%",
	[theme.breakpoints.down("sm")]: {
		padding: "20px",
	},
}));

const StyledCard = styled(Card)(({ theme }) => ({
	display: "flex",
	backgroundColor: "#1A1A1A",
	color: "#fff",
	borderRadius: "15px",
	padding: "20px",
	marginTop: "40px",
	boxShadow: "0 0 20px rgba(255, 0, 255, 0.6)",
	[theme.breakpoints.down("sm")]: {
		flexDirection: "column",
	},
}));

const StyledStack = styled(Stack)(({ theme }) => ({
	display: "flex",
	justifyContent: "flex-start",
	[theme.breakpoints.down("sm")]: {
		justifyContent: "center", 
		alignItems: "center",
	},
}));

const StyledAnimeSiteText = styled(Typography)(({ theme }) => ({
	paddingLeft: "430px",
	paddingTop: "10px",
	[theme.breakpoints.down("sm")]: {
		paddingLeft: "80px",
	},
}));

const StyledBox = styled("div")(({ theme }) => ({
	flex: "0 0 30%",
	position: "relative",
	bottom: "10px",
	left: "20px",
	[theme.breakpoints.down("sm")]: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flex: "0 0 100%", 
		marginBottom: "10px", 
	},
}));

const StyledTag = styled(Box)(({ theme }) => ({
	backgroundColor: "#ff00ff",
	padding: "5px 5px",
	borderRadius: "5px",
	color: "#fff",
	fontWeight: "bold",
	textAlign: "center",
	cursor: "pointer",
	marginTop: "20px",
	fontFamily: "monospace",
	[theme.breakpoints.down("sm")]: {
		border: "2px solid blue",
		marginRight: "50px",
		width: "140px",
		height: "30px"
	},
}));

const StyledVideoContainer = styled(Box)(({ theme }) => ({
	width: "100%",
	maxWidth: "600px",
	borderRadius: "10px",
	overflow: "hidden",
	height: "400px",
	margin: "0 auto",
	[theme.breakpoints.down("sm")]: {
		maxWidth: "100%", 
		height: "400px",
		marginTop: "-100px",
	},
}));

const StyledStackButton = styled(Stack)(({theme}) => ({
	[theme.breakpoints.down("sm")]: {
		marginLeft: "55px"
	}
}))