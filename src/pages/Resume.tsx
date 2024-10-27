import { Box, Button, CircularProgress, styled } from "@mui/material";
import { useState } from "react";
import resumePdf from "../assets/pdf/AbdimalicovNurislam.pdf.pdf"; // исправлено, убрана лишняя .pdf
import resumeImg from "../assets/img/resume.png";

const MyResume = () => {
	const [loading, setLoading] = useState(false);

	const handleDownload = () => {
		setLoading(true);
		const link = document.createElement("a");
		link.href = resumePdf;
		link.setAttribute("download", "Resume(Nurislan Abdimalikov).pdf");
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
		setLoading(false);
	};

	const handleOpenPdf = () => {
		setLoading(true);
		window.open(resumePdf, "_blank");
		setLoading(false);
	};

	return (
		<Container>
			<StyledBox>
				<Image src={resumeImg} alt="Резюме Нурислана Абдимааликова" loading="lazy" />
				<ButtonContainer>
					<DownloadButton onClick={handleDownload} disabled={loading}>
						{loading ? <CircularProgress size={24} color="inherit" /> : 'СКАЧАТЬ PDF'}
					</DownloadButton>
					<OpenButton onClick={handleOpenPdf} disabled={loading}>
						{loading ? <CircularProgress size={24} color="inherit" /> : 'ОТКРЫТЬ PDF'}
					</OpenButton>
				</ButtonContainer>
			</StyledBox>
		</Container>
	);
};

export default MyResume;

const Container = styled(Box)(({ theme }) => ({
	width: "100%",
	backgroundImage: "url('https://cdn.pixabay.com/photo/2016/12/29/18/44/background-1939128_960_720.jpg')",
	backgroundSize: "cover",
	backgroundPosition: "center",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	minHeight: "100vh",
	[theme.breakpoints.down("sm")]: {
		marginTop: "-140px"
	}
}));

const StyledBox = styled("div")(({ theme }) => ({
	width: "100%",
	maxWidth: "600px",
	margin: "0 auto",
	padding: theme.spacing(2),
	backgroundColor: theme.palette.common.white,
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "space-between",
	boxShadow: theme.shadows[3],
	borderRadius: theme.shape.borderRadius,
	minHeight: "400px",
	transition: "transform 0.3s",
	"&:hover": {
		transform: "scale(1.02)",
	},
}));

const Image = styled("img")(() => ({
	width: "100%",
	borderRadius: "10px",
	marginBottom: "20px",
	boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
}));

const ButtonContainer = styled(Box)(() => ({
	marginTop: "auto",
	display: "flex",
	justifyContent: "center",
	gap: "10px",
	width: "100%",
}));

const DownloadButton = styled(Button)(({ theme }) => ({
	backgroundColor: theme.palette.primary.main,
	color: theme.palette.common.white,
	padding: theme.spacing(1, 2),
	borderRadius: theme.shape.borderRadius,
	"&:hover": {
		backgroundColor: theme.palette.primary.dark,
	},
}));

const OpenButton = styled(Button)(({ theme }) => ({
	border: `2px solid ${theme.palette.primary.main}`,
	color: theme.palette.primary.main,
	padding: theme.spacing(1, 2),
	borderRadius: theme.shape.borderRadius,
	"&:hover": {
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.common.white,
	},
}));
