import React from "react";
import Layout from "./../components/Layout/Layout";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  TextField,
  Button,
} from "@mui/material";

const Contact = () => {
  return (
    <Layout>
      {/* Contact Information Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          my: 5
        }}
      >
        <Typography variant="h4" fontWeight={"bold"} style={{ textAlign: "center" }}>
          Contact our Customer Support
        </Typography>
        {/* Paragraph describing the purpose of the contact */}
        <p
          style={{
            fontSize: "18px",
            textAlign: "justify",
            marginRight: "50px",
            marginTop: "15px",
            lineHeight: "35px",
            marginLeft: "50px",
          }}
        >
          {/* Contact description */}
          If you encounter any challenges while searching for your favorite
          restaurant or cuisine, or if you encounter any issues while using our
          platform, please do not hesitate to reach out to us. We are here to
          assist you and ensure that your dining experience is as delightful as
          possible. Your feedback and inquiries are invaluable to us, and our
          dedicated support team is ready to assist you in any way we can. Don't
          hesitate to get in touch; we're just a message or call away. Your
          satisfaction is our priority, and we look forward to serving you
          better. Thank you for choosing Dining Delight!
        </p>
        {/* Table for displaying contact details */}
        <TableContainer component={Paper} sx={{ mt: 3 }}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    bgcolor: "black",
                    color: "white",
                    textAlign: "center",
                    fontSize: "16px"
                  }}
                  align="center"
                >
                  Our Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* Rows for contact details */}
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pt: 1, fontSize: 27, }} /> 123-456-7890
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <MailIcon sx={{ color: "skyblue", pt: 1, fontSize: 27 }} /> support@diningdelight.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: "green", pt: 1, fontSize: 27 }} /> +91 1122334455
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* Feedback Form Section */}
      <TableContainer component={Paper} sx={{ mt: 3 }}>
        <Table aria-label="contact table">
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  bgcolor: "black",
                  color: "white",
                  textAlign: "center",
                  fontSize: "16px"
                }}
                align="center"
              >
                Let us know your experience with this app by filling out this Feedback Form !
              </TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          ml: 5,
          mr: 5,
        }}
      >
        <Box sx={{ width: "60%" }}>
          {/* Feedback Form */}
          <form>
            <TextField
              id="name"
              label="Name"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              id="feedback"
              label="Feedback"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              margin="normal"
            />
            {/* Submit button */}
            <Button variant="contained" color="primary" type="submit" style={{ marginBottom: "55px", marginTop: "20px" }}>
              Submit
            </Button>
          </form>
        </Box>
      </Box>
    </Layout>
  );
};

export default Contact;
