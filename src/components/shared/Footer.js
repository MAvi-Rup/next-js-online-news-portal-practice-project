import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import Link from "next/link";

const Footer = () => {
    const navItems = [
        {
            route: "Home",
            pathname: "/",
        },
        {
            route: "Pages",
            pathname: "/pages",
        },
        {
            route: "Category",
            pathname: "/categories",
        },
        {
            route: "News",
            pathname: "/news",
        },
        {
            route: "Contact",
            pathname: "/contact",
        },
    ];
    return (
        <div>
            <Box className=" bg-black px-2 py-10">
                <Container>
                    <Box
                        className="w-full text-center"
                        sx={{
                            "& svg": {
                                color: "white",
                            },
                        }}
                    >
                        <IconButton aria-label="delete">
                            <FacebookIcon />
                        </IconButton>
                        <IconButton aria-label="delete">
                            <TwitterIcon />
                        </IconButton>
                        <IconButton aria-label="delete">
                            <YouTubeIcon />
                        </IconButton>
                        <IconButton aria-label="delete">
                            <LinkedInIcon />
                        </IconButton>
                    </Box>
                    <Box className="w-full text-center">
                        {navItems.map((item) => (
                            <Link key={item} href={item.pathname}>
                                <Button className="text-white">{item.route}</Button>
                            </Link>
                        ))}
                    </Box>
                    <Typography color="gray" variant="body2" textAlign="center">
                        @2024 Design By M-Avirup

                    </Typography>

                </Container>

            </Box>



        </div>
    );
};

export default Footer;