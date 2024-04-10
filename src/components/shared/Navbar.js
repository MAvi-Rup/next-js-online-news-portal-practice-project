"use client";
import logo from "@/assets/logo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { IconButton, Stack } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";
import Link from "next/link";
import Header from "./Header";
;

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

function Navbar() {


    return (
        <>
            <Header />
            <AppBar position="static" className="bg-black">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Image src={logo} width={100} height={100} alt="logo" />
                        <Box className="w-full text-center">
                            {navItems.map((item) => (
                                <Link key={item} href={item.pathname}>
                                    <Button className="text-white">{item.route}</Button>
                                </Link>
                            ))}
                        </Box>
                        <Box>
                            <Stack
                                direction="row"
                                spacing={1}
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
                            </Stack>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
}
export default Navbar;
