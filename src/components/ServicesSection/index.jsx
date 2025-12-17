import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import img1 from "../../assets/portfolioimg5.svg";
import img2 from "../../assets/portfolioimg5.svg";
import img3 from "../../assets/portfolioimg5.svg";
import img4 from "../../assets/portfolioimg5.svg";
import img5 from "../../assets/portfolioimg5.svg";

const bgColors = [
    "#ffffff",
    "#fafafa",
    "#f5f5f5",
    "#efefef",
    "#e8e8e8",
];

const services = [
    {
        id: 1,
        title: "Strategy",
        text: "Know your spot. Set your sights. Plan your path. A solid strategy keeps us grounded and focused.",
        bullets: [
            "Positioning",
            "Brand Workshop",
            "Insights",
            "Purpose Code",
            "Brand Name",
            "Communication Strategy",
            "Strategic Consulting",
            "Brand Claim",
        ],
        image: img1,
        btn: "let’s work together",
    },
    {
        id: 2,
        title: "Branding",
        text: "We build identity systems that shape perception.",
        bullets: ["Logo Design", "Visual Identity", "Brand Guidelines"],
        image: img2,
        btn: "Explore Branding",
    },
    {
        id: 3,
        title: "Digital",
        text: "Digital-first strategies that move people.",
        bullets: ["Digital Ads", "SEO", "Content Strategy"],
        image: img3,
        btn: "Explore Digital",
    },
    {
        id: 4,
        title: "Webflow",
        text: "High-quality Webflow sites with pixel-perfect animations.",
        bullets: ["CMS Setup", "Responsive Design", "Custom Animations"],
        image: img4,
        btn: "Explore Webflow",
    },
    {
        id: 5,
        title: "Graphic Design",
        text: "Creative visuals that elevate your brand.",
        bullets: ["Posters", "Packaging", "Social Media Creatives"],
        image: img5,
        btn: "Explore Graphics",
    },
];

export default function ServiceSection() {
    return (
        <Box sx={{ py: 12, px: 2 }}>
            {services.map((service, index) => (
                <Box
                    key={service.id}
                    sx={{
                        mb: 10,
                        p: 6,
                        borderRadius: 4,
                        bgcolor: bgColors[index] || "#fff",
                        boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
                    }}
                >
                    <Grid container spacing={6} alignItems="center">

                        {/* LEFT COLUMN */}
                        <Grid item xs={12} md={4} sx={{ display: "flex", flexDirection: "column" }}>
                            <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                                {service.title}
                            </Typography>

                            <Typography sx={{ color: "#555", mb: 3 }}>
                                {service.text}
                            </Typography>

                            <Box sx={{ flexGrow: 1 }} />

                            <Button
                                variant="contained"
                                sx={{
                                    width: "fit-content",
                                    bgcolor: "black",
                                    color: "white",
                                    px: 3,
                                    py: 1.2,
                                    borderRadius: 2,
                                    textTransform: "none",
                                    "&:hover": { bgcolor: "#333" },
                                }}
                            >
                                {service.btn}
                            </Button>
                        </Grid>

                        {/* MIDDLE COLUMN - BULLETS */}
                        <Grid item xs={12} md={4}>
                            {service.bullets.map((b, i) => (
                                <Box key={i} sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
                                    <ArrowForwardIosIcon sx={{ fontSize: 18, mr: 1 }} />
                                    <Typography sx={{ fontSize: 16 }}>{b}</Typography>
                                </Box>
                            ))}
                        </Grid>

                        {/* RIGHT COLUMN - FIXED SIZE IMAGE */}
                        <Grid
                            item
                            xs={12}
                            md={4}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Box
                                component="img"
                                src={service.image}
                                alt={service.title}
                                sx={{
                                    width: "230px",
                                    height: "300px",
                                    objectFit: "cover",
                                    borderRadius: 2,
                                }}
                            />
                        </Grid>

                    </Grid>

                </Box>
            ))}
        </Box>
    );
}
