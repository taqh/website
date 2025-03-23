import type { Metadata, Viewport } from "next";
import {
	Heading,
	ImageWrapper,
	Text,
	Title,
	PageWrapper,
	List,
	ListItem,
	Grid,
	GridItem,
} from "@/components/elements";

export const metadata: Metadata = {
	metadataBase: new URL("https://rivo.gg"),
	alternates: {
		canonical: "/",
	},
	title: "Would You - Rivo Projects",
	description:
		"Would you lets you play Would You Rather, Never Have I Ever, Higher or Lower, Truth or Dare and What Would You Do on Discord!",
	openGraph: {
		title: "Would You - The Discord Bot",
		description:
			"Would you lets you play Would You Rather, Never Have I Ever, Higher or Lower, Truth or Dare and What Would You Do on Discord!",
		type: "website",
	},
	twitter: {
		title: "Would You - The Discord Bot",
		description:
			"Would you lets you play Would You Rather, Never Have I Ever, Higher or Lower, Truth or Dare and What Would You Do on Discord!",
		site: "@WouldYouBot",
	},
	robots: {
		index: true,
		follow: true,
	},
};

export const viewport: Viewport = {
	maximumScale: 5,
	themeColor: "#0598f4",
};

export default function WouldYou() {
	return (
		<PageWrapper goBack>
			<Heading>Would You - Discord Bot</Heading>
			<Text>
				Would You is a Discord bot that lets you play Would You Rather, Never Have I Ever, Higher or Lower, Truth or
				Dare and What Would You Do on Discord! its built with discord.js and uses a MongoDB database to store the
				questions. The bot is hosted on Hetzner Cloud and uses a custom domain from Namecheap.
			</Text>
			<Title>Features</Title>
			Would You features a variety of games to play with your friends on Discord. The bot is constantly being updated
			with new features and games to play. The bot is also open source and you can contribute to the project on GitHub.
			Currently we have the following games:
			<List className="font-semibold">
				<ListItem>• Would You Rather</ListItem>
				<ListItem>• Never Have I Ever</ListItem>
				<ListItem>• Higher or Lower</ListItem>
				<ListItem>• Truth or Dare</ListItem>
				<ListItem>• What Would You Do</ListItem>
				<ListItem>• Random Topic</ListItem>
			</List>
			In addition to these games, the bot also provides a Question of the Day (QOTD) feature where a random question is
			sent to a channel every day. We aim to make the bot really customizable and easy to use. Almost anything in the
			bot can be customized to your liking. You can change the games, the questions, the cooldowns and much more. The
			bot also has a built in help command to help you get started with the bot.
			<Title>Featured on Discord</Title>
			<Text>
				Would You has been featured on Discord multiple times.
				<br />
				<br />
				In <b>November 2023</b>, Would You was featured on the official Discord Developers server as part of their
				Buildathon event. While the bot was added it was the most used bot during its stay and recieved a ton of
				positive feedback.
				<br />
				<br />
				In <b>July 2024</b> we were featured on Discords "App Directory" page where we stayed for a couple of weeks.
				This was a huge milestone for the bot and we saw a huge increase in users during this time. Discord made sure to
				tell us before we were featured so we could prepare for the influx of users.
			</Text>
			<Title>Our Goal</Title>
			<Text>
				We aim to make your server as fun and active as possible. Would You acts as an ice breaker for new servers and a
				fun game to play with your friends. We are constantly updating the bot with new features and games to play. We
				also have a support server where you can ask for help or suggest new features for the bot.
			</Text>
      <Title>Showcase</Title>
			<Grid>
				<GridItem>
					<ImageWrapper src="/projects/would-you/showcase.png" alt="Would You Bot Showcase" size="auto" zoom />
				</GridItem>
				<GridItem>
					<ImageWrapper src="/projects/would-you/ask-more.png" alt="Would You Bot Showcase" size="auto" zoom />
				</GridItem>
				<GridItem>
					<ImageWrapper src="/projects/would-you/questions.png" alt="Would You Bot Showcase" size="auto" zoom />
				</GridItem>
			</Grid>
		</PageWrapper>
	);
}
