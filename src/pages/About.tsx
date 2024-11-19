import React from "react";
import { Box, Typography } from "@mui/material";
import { styled, keyframes } from "@mui/material/styles";
import { Skills, tools } from "../data/dataSkill";
import vidio from "../assets/vid/aboutvideo-ABo_mGCM.mp4";
import planetaVidio from "../assets/vid/178501-860033423_medium.mp4";

const About: React.FC = () => {
	return (
		<StyledContainer>
			<VideoContainer>
				<video
					src={planetaVidio}
					controls
					autoPlay
					loop
					muted
					style={{ width: "100%", height: "100%", objectFit: "cover" }}
				/>
			</VideoContainer>
			<Overlay />
			<StyledContent>
				<StyledTextContainer>
					<StyledTitle>
						Узнайте, <GradientText>кто я</GradientText>
					</StyledTitle>
					<StyledBodyText>
						Привет всем! Я —{" "}
						<StyledHighlight>Абдималиков Нурислам</StyledHighlight> из{" "}
						<StyledHighlight>Бишкека, Кыргызстан</StyledHighlight>.
					</StyledBodyText>
					<StyledBodyText>
						На данный момент я ищу работу разработчиком веб-приложений и готов
						применить <br />
						свои знания, полученные на курсе программирования в Peaksoft.
					</StyledBodyText>
					<StyledMotto>
						Мой девиз: <br /> «Не бойся мечтать и воплощать мечты в реальность!»
					</StyledMotto>
					<StyledMotto>С уважением, Нурислам</StyledMotto>
				</StyledTextContainer>
				<StyledVideoContainer>
					<video
						src={vidio}
						autoPlay
						loop
						muted
						style={{ width: "100%", maxWidth: "600px" }}
					/>
				</StyledVideoContainer>
			</StyledContent>
			<StyledSkillsToolsSection>
				<StyledSubTitle>Мои навыки</StyledSubTitle>
				<StyledItemsContainer>
					{Skills.map((skill, index) => (
						<StyledItemContainer key={skill.id} delay={index * 0.1}>
							<StyledItemIcon src={skill.img} alt="Skill icon" />
						</StyledItemContainer>
					))}
				</StyledItemsContainer>
			</StyledSkillsToolsSection>
			<StyledSkillsToolsSection>
				<StyledSubTitle>Мои инструменты</StyledSubTitle>
				<StyledItemsContainer>
					{tools.map((tool, index) => (
						<StyledItemContainer key={tool.id} delay={index * 0.1}>
							<StyledItemIcon src={tool.img} alt="Tool icon" />
						</StyledItemContainer>
					))}
				</StyledItemsContainer>
			</StyledSkillsToolsSection>
		</StyledContainer>
	);
};

export default About;

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
	backgroundColor: "rgba(0, 0, 0, 0.4)",
	zIndex: 2,
	filter: "brightness(0.8)",
}));

const StyledContent = styled(Box)(({ theme }) => ({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "flex-start",
	width: "100%",
	maxWidth: "1200px",
	marginBottom: "2rem",
	flexDirection: "column",
	position: "relative",
	zIndex: 3,
	[theme.breakpoints.up("md")]: {
		flexDirection: "row",
	},
}));

const StyledTextContainer = styled(Box)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	width: "100%",
	maxWidth: "60%",
	marginBottom: theme.breakpoints.down("sm") ? "1rem" : "0",
	[theme.breakpoints.down("sm")]: {
		maxWidth: "1200px",
	},
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
	color: "#fff",
	fontSize: "2.5rem",
	paddingTop: "10px",
	[theme.breakpoints.down("sm")]: {
		fontSize: "2rem",
		paddingLeft: "0",
		width: "100%",
		textAlign: "center",
	},
}));

const GradientText = styled("span")({
	background: "linear-gradient(90deg, #fff, #ff00ff)",
	WebkitBackgroundClip: "text",
	WebkitTextFillColor: "transparent",
});

const StyledBodyText = styled(Typography)(({ theme }) => ({
	fontSize: "1.25rem",
	lineHeight: "1.4",
	margin: "10px 0",
	fontFamily: "monospace",
	[theme.breakpoints.down("sm")]: {
		fontSize: "1rem",
		textAlign: "center",
	},
}));

const StyledHighlight = styled("span")({
	color: "#ff00ff",
	fontWeight: "bold",
});

const StyledSubTitle = styled(Typography)(({ theme }) => ({
	fontSize: "1.3rem",
	color: "#fff",
	paddingBottom: "10px",
	textAlign: "center",
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.1rem",
	},
}));

const StyledSkillsToolsSection = styled(Box)(({}) => ({
	width: "100%",
	padding: "20px 0",
	position: "relative",
	zIndex: 3,
}));

const slideIn = keyframes`
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const StyledItemsContainer = styled(Box)(({}) => ({
	display: "flex",
	flexWrap: "wrap",
	justifyContent: "center",
	marginTop: "20px",
}));

const StyledItemContainer = styled(Box)<{ delay: number }>(({ delay }) => ({
	width: "200px",
	height: "200px",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	border: "2px solid blue",
	textAlign: "center",
	borderRadius: "10px",
	backgroundColor: "#1a1a1a",
	margin: "10px",
	animation: `${slideIn} 0.5s ease forwards`,
	animationDelay: `${delay}s`,
	opacity: 0,
	"@media (max-width: 600px)": {
		width: "150px",
		height: "150px",
	},
}));

const StyledItemIcon = styled("img")({
	width: "120px",
	height: "120px",
	cursor: "pointer",
	animation: `${pulse} 1s infinite`,
	"@media (max-width: 600px)": {
		width: "80px",
		height: "80px",
	},
});

const StyledMotto = styled(Typography)(({ theme }) => ({
	fontSize: "1.25rem",
	color: "#896d9c",
	margin: "10px 0",
	fontFamily: "monospace",
	[theme.breakpoints.down("sm")]: {
		fontSize: "1rem",
		textAlign: "center",
	},
}));

const StyledVideoContainer = styled(Box)(({ theme }) => ({
	maxWidth: "30%",
	marginTop: "1rem",
	display: "flex",
	justifyContent: "flex-end",
	[theme.breakpoints.down("sm")]: {
		maxWidth: "100%",
		justifyContent: "center",
		marginBottom: "1rem",
	},
}));