import logo from "@/assets/topLogo.png";
import { getCurrentTime } from "@/utils/getCurrentDate";

import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

const Header = () => {
    const currentTime = getCurrentTime();
    return (
        <Box py={3}>
            <Container>
                <Image
                    alt="logo"
                    src={logo}
                    width={500}
                    height={500}
                    className="mx-auto"
                ></Image>
                <Typography color="gray" py={2} variant="body1" textAlign="center">
                    Journalism Without Fear or Favour
                </Typography>
                <Typography textAlign="center">{currentTime}</Typography>
            </Container>
        </Box>
    );
};

export default Header;