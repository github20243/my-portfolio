import { useEffect } from "react";
import {
	Box,
	Typography,
	Card,
	CardContent,
	Button,
	styled,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../hooks/CustomHooks";
import { getBlogsInfo } from "../store/request/request";
import Spinner from "../components/Spinner";
import backgroundImageBlogsPage from "../assets/img/v856-kul-07.jpg";

interface BlogPost {
	id: number;
	title: string;
	excerpt: string;
	imageUrl: string;
	videoUrl: string;
}

const BlogsPage = () => {
	const dispatch = useAppDispatch();
	const { data, isLoading, error } = useAppSelector((state) => state.blog);

	const blogPosts: BlogPost[] = data
		.flatMap((item) => Object.values(item) as BlogPost[])
		.flat();

	useEffect(() => {
		dispatch(getBlogsInfo());
	}, [dispatch]);

	if (isLoading) return <Spinner isLoading={isLoading} />;
	if (error) return <Typography color="error">Ошибка: {error}</Typography>;

	return (
		<StyledContainer>
			<Typography
				variant="h4"
				sx={{
					marginBottom: 2,
					fontFamily: "monospace",
					textAlign: "center",
					color: "#333",
				}}>
				Блоги
			</Typography>
			<StyledInfoBox>
				<Typography
					variant="body1"
					sx={{ fontFamily: "monospace", textAlign: "center", color: "#555" }}>
					Добро пожаловать на мою страницу блогов! Здесь вы найдете статьи о
					React, GitHub и других технологиях, с которыми я работаю.
				</Typography>
			</StyledInfoBox>
			<StyledCardContainer>
				{blogPosts.length > 0 ? (
					blogPosts.map((post: BlogPost) => (
						<StyledCard key={post.id}>
							<StyledImage src={post.imageUrl} alt={post.title} />
							<CardContent>
								<Typography
									variant="h5"
									sx={{
										marginBottom: 1,
										fontFamily: "monospace",
										color: "#333",
										textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
									}}>
									{post.title}
								</Typography>
								<Typography
									variant="body2"
									color="text.secondary"
									sx={{
										fontFamily: "monospace",
										color: "#666",
										textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
									}}>
									{post.excerpt}
								</Typography>
								<Button
									variant="contained"
									color="primary"
									sx={{ marginTop: 2 }}
									href={post.videoUrl}
									target="_blank"
									rel="noopener noreferrer">
									Смотреть видео
								</Button>
							</CardContent>
						</StyledCard>
					))
				) : (
					<Typography
						variant="body1"
						sx={{
							fontFamily: "monospace",
							textAlign: "center",
							color: "#555",
						}}>
						Нет доступных постов.
					</Typography>
				)}
			</StyledCardContainer>
		</StyledContainer>
	);
};

export default BlogsPage;

const StyledContainer = styled(Box)(({ theme }) => ({
	padding: theme.spacing(4),
	backgroundColor: "#f5f5f5",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	minHeight: "100vh",
	backgroundImage: `url(${backgroundImageBlogsPage})`,
	backgroundSize: "cover",
	backgroundPosition: "center",
	backgroundRepeat: "no-repeat",
	[theme.breakpoints.down("sm")]: {
		backgroundImage: `url(${backgroundImageBlogsPage})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
	},
}));

const StyledInfoBox = styled(Box)(({ theme }) => ({
	backgroundColor: "#ffffff",
	padding: theme.spacing(3),
	borderRadius: "10px",
	marginBottom: theme.spacing(4),
	boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
	maxWidth: "800px",
	width: "100%",
}));

const StyledCardContainer = styled(Box)(({ theme }) => ({
	display: "flex",
	justifyContent: "center",
	flexWrap: "wrap",
	gap: theme.spacing(2),
	maxWidth: "1800px",
	width: "100%",
	padding: theme.spacing(2),
}));

const StyledCard = styled(Card)(({ theme }) => ({
	width: "300px",
	borderRadius: "10px",
	backgroundColor: "rgba(255, 255, 255, 0.9)",
	boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)",
	transition: "transform 0.2s, box-shadow 0.2s",
	marginBottom: theme.spacing(2),
	"&:hover": {
		transform: "translateY(-5px)",
		boxShadow: "0 8px 16px rgba(0, 0, 0, 0.25)",
	},
}));

const StyledImage = styled("img")(({ theme }) => ({
	width: "100%",
	height: "200px",
	objectFit: "cover",
	borderRadius: "10px 10px 0 0",
	border: `2px solid ${theme.palette.primary.main}`,
}));
