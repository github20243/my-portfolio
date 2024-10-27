import { Box, Button, styled } from "@mui/material";
import resumePdf from "../assets/pdf/AbdimalicovNurislam.pdf.pdf";
import resumeimg from "../assets/img/resume.png";

const MyResume = () => {

	const handleDownload = () => {
		const link = document.createElement("a");
		link.href = resumePdf;
		link.setAttribute("download", "Resume(Nurislan Abdimalikov).pdf");
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	const handleOpenPdf = () => {
		window.open(resumePdf, "_blank");
	};

	return (
		<Container>
			<StyledBox>
				<Image src={resumeimg} alt="Резюме Нурислана Абдимааликова" />
				<ButtonContainer>
					<DownloadButton onClick={handleDownload}>
						СКАЧАТЬ PDF
					</DownloadButton>
					<OpenButton onClick={handleOpenPdf}>ОТКРЫТЬ PDF</OpenButton>
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
		border: "2px solid green",
		marginTop: "-200px"
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
