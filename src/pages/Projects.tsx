import {
	Box,
	Button,
	Card,
	CardContent,
	Stack,
	styled,
	Typography,
} from "@mui/material";
import { projectsData } from "../data/projectsData";
import sekundVidio from "../assets/vid/89627-614703091_small.mp4";
import innerVideo from "../assets/vid/animeSiteNurs.mp4";

const Projects = () => {
	return (
		<StyledContainer>
			<VideoContainer>
				<video
					src={sekundVidio}
					controls
					autoPlay
					loop
					muted
					style={{ width: "100%", height: "100%", objectFit: "cover" }}
				/>
			</VideoContainer>

			<Overlay />
			<ContentOverlay>
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

						<StyledStackButton
							direction="row"
							spacing={2}
							sx={{ marginTop: "20px" }}>
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
						<StyledInnerVideo>
							<video
								autoPlay
								loop
								muted
								style={{
									width: "100%",
									height: "80%",
									borderRadius: "20px",
									objectFit: "cover",
									position: "absolute",
									top: "40px",
									left: 0,
									zIndex: 1,
								}}>
								<source src={innerVideo} type="video/mp4" />
								Ваш браузер не поддерживает видео.
							</video>
						</StyledInnerVideo>
					</StyledVideoContainer>
				</StyledCard>
			</ContentOverlay>
		</StyledContainer>
	);
};

export default Projects;

const StyledContainer = styled(Box)(({ theme }) => ({
	position: "relative",
	color: "#fff",
	padding: theme.spacing(0, 4, 4, 4),
	minHeight: "100vh",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "flex-start",
	overflow: "hidden",
}));

const VideoContainer = styled(Box)(({}) => ({
	position: "absolute",
	width: "100%",
	height: "100%",
	top: 0,
	left: 0,
	zIndex: 1,
}));

const Overlay = styled(Box)(({}) => ({
	position: "absolute",
	width: "100%",
	height: "100%",
	top: 0,
	left: 0,
	zIndex: 2,
	filter: "brightness(0.8)",
}));

const ContentOverlay = styled(Box)(({}) => ({
	position: "relative",
	zIndex: 3,
	width: "100%",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "flex-start",
}));

const StyledCard = styled(Card)(({}) => ({
	display: "flex",
	backgroundColor: "rgba(0, 0, 0, 0.4)",
	color: "#fff",
	borderRadius: "15px",
	padding: "20px",
	marginTop: "40px",
	boxShadow: "0 0 20px rgba(255, 0, 255, 0.6)",
	position: "relative",
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
		paddingLeft: "130px",
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
		height: "30px",
	},
}));

const StyledVideoContainer = styled(Box)(({}) => ({
	width: "100%",
	height: "400px",
	position: "relative",
	overflow: "hidden",
	borderRadius: "20px",
}));

const StyledInnerVideo = styled(Box)(({}) => ({
	position: "absolute",
	top: 0,
	left: 0,
	width: "100%",
	height: "100%",
	zIndex: 1,
}));

const StyledStackButton = styled(Stack)(({ theme }) => ({
	[theme.breakpoints.down("sm")]: {
		marginLeft: "55px",
	},
}));
