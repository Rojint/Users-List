"use client";
import Link from "next/link";
import Styles from "./login.module.css";
import {
  Box,
  Button,
  Container,
  FormControl,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";
import styled from "@emotion/styled";
import { PasswordTwoTone } from "@mui/icons-material";

const CustomTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
    borderBottomColor: "#EAE3D2",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#EAE3D2",
    borderBottomWidth: "3px",
  },
}));

export default function Login() {
  return (
    <>
      <Container className={Styles.background}>
        <Container sx={{ ml: 30 }} className={Styles.container}>
          <Container className={Styles["img-container"]}>
            <Box
              component="img"
              className={Styles["login-image"]}
              src="/images/login.png"
            />
          </Container>
          <Box className={Styles["form-container"]}>
            <FormControl className={Styles.form}>
              <Typography variant="h3" className={Styles["form-title"]}>
                Hello Again!
              </Typography>
              <Box className={Styles.inputs}>
                <CustomTextField
                  id="standard-basic"
                  label="Username"
                  InputLabelProps={{
                    style: { color: "white", fontSize: "1rem" },
                  }}
                  InputProps={{ style: { color: "white" } }}
                  sx={{ width: "90%", height: "40px" }}
                  variant="standard"
                  FormHelperTextProps={{ style: { color: "white" } }}
                />
              </Box>
              <Box className={Styles.inputs}>
                <CustomTextField
                  type="password"
                  id="standard-basic"
                  label="Password"
                  InputLabelProps={{
                    style: { color: "white", fontSize: "1rem" },
                  }}
                  InputProps={{ style: { color: "white" } }}
                  sx={{ width: "90%", height: "40px" }}
                  variant="standard"
                  FormHelperTextProps={{ style: { color: "white" } }}
                />
              </Box>
              <Box className={Styles.inputs}>
                <Button
                  className={Styles.formBtn}
                  sx={{ backgroundColor: "white" }}
                >
                  Login
                </Button>
              </Box>

              <Typography variant="body1" className={Styles.register}>
                <Typography variant="caption">
                  Not a member? <Link href="/">Register now</Link>
                </Typography>
              </Typography>
            </FormControl>
          </Box>
        </Container>
      </Container>
    </>
  );
}
