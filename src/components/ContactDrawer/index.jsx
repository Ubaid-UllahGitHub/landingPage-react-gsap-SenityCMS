import { Drawer, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ContactForm from "../ContactForm";

export default function ContactDrawer({ open, onClose }) {
    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={onClose}
            transitionDuration={700} // 🔥 slow smooth slide
            ModalProps={{
                keepMounted: true,
            }}
            PaperProps={{
                sx: {
                    width: {
                        xs: "80%",
                        sm: "480px",
                        md: "720px",
                    },
                    maxWidth: "100%",
                    minHeight: "100vh",
                    height: "auto",          // content-based
                    padding: "5px 40px",
                    backgroundColor: "rgba(255, 255, 255, 0.75)", // 🔹 more transparent
                    backdropFilter: "blur(10px)",             // optional: adds blur effect
                    overflowY: "visible",
                },
            }}
        >
            {/* CLOSE BUTTON */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    mb: 2,
                }}
            >
                <IconButton onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            </Box>

            {/* CONTACT FORM */}
            <ContactForm />
        </Drawer>
    );
}
