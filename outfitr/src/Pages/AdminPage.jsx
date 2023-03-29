import React from "react";
import { Box, Card, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
import { AiOutlineHome } from "react-icons/ai";
import { RiDatabase2Line, RiAdminLine } from "react-icons/ri";
import { MdProductionQuantityLimits } from "react-icons/md";
import { AiOutlineSetting, AiOutlineAppstore } from "react-icons/ai";
import { FiUserPlus } from "react-icons/fi";
import { HiOutlineArrowCircleRight } from "react-icons/hi";

const AdminPage = () => {
  return (
    <Box bg={"#DAFAF8"}>
      <Box
        alignItems={"center"}
        className="adminnavbar"
        bg={"#159895"}
        mb={0}
        h={"60px"}
        w="100%"
        style={{
          marginBottom: "0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Heading marginLeft={50}>Master Admin</Heading>
        <Heading marginRight={50}>Admin name</Heading>
      </Box>
      <Flex hr gap={40} className="body" style={{ marginTop: "0" }}>
        <Box
          className="leftPart"
          bg={"gray"}
          w="20%"
          style={{
            marginTop: "0",
            paddingTop: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "start",
          }}
        >
          <Text marginLeft={30} color={"white"}>
            <AiOutlineHome /> Dashboard
          </Text>
          <Text marginLeft={30} color={"white"}>
            <RiDatabase2Line /> Manage Order
          </Text>
          <Text marginLeft={30} color={"white"}>
            <MdProductionQuantityLimits /> Manage Products
          </Text>
          <Text marginLeft={30} color={"white"}>
            <AiOutlineSetting /> User Account Settings
          </Text>
          <Text marginLeft={30} color={"white"}>
            <AiOutlineAppstore />
            API Data Settings
          </Text>
          <Text marginLeft={30} color={"white"}>
            <RiAdminLine /> Admin Managment
          </Text>
          <Text marginLeft={30} color={"white"}>
            <FiUserPlus /> Add Admins
          </Text>
          <Text marginLeft={30} color={"white"}>
            Logout
          </Text>
        </Box>
        <Box className="rightPart">
          <Heading>Admin's Portal</Heading>
          <Grid gap={30} gridTemplateColumns={"repeat(3,1fr)"}>
            <Card
              style={{
                padding: "10px",
                backgroundColor: "#150E56",
                color: "white",
              }}
            >
              <Flex justifyContent={"space-around"}>
                <Heading>Count: 50</Heading>
                <Image
                  marginTop={10}
                  w={80}
                  h={70}
                  src="https://www.citypng.com/public/uploads/small/11640168385jtmh7kpmvna5ddyynoxsjy5leb1nmpvqooaavkrjmt9zs7vtvuqi4lcwofkzsaejalxn7ggpim4hkg0wbwtzsrp1ldijzbdbsj5z.png"
                  alt="user"
                />
              </Flex>
              <Heading>Manage users </Heading>
              <Text fontSize={"2xl"}>
                <HiOutlineArrowCircleRight />
              </Text>
            </Card>

            <Card
              style={{
                padding: "10px",
                backgroundColor: "#57C5B6",
                color: "white",
              }}
            >
              <Flex justifyContent={"space-around"}>
                <Heading>Count: 60</Heading>
                <Image
                  marginTop={10}
                  w={80}
                  h={70}
                  src="https://cdn2.iconfinder.com/data/icons/user-23/512/User_Group.png"
                  alt="user"
                />
              </Flex>
              <Heading>Manage Mens Products</Heading>
            </Card>

            <Card
              style={{
                padding: "10px",
                backgroundColor: "pink",
                color: "white",
              }}
            >
              <Flex justifyContent={"space-around"}>
                <Heading>Count: 70</Heading>
                <Image
                  marginTop={10}
                  w={80}
                  h={80}
                  src="https://images.freeimages.com/fic/images/icons/747/network/256/user_group.png"
                  alt="user"
                />
              </Flex>
              <Heading>Manage Womens Products</Heading>
            </Card>

            <Card
              style={{
                padding: "10px",
                backgroundColor: "#FF8B13",
                color: "white",
              }}
            >
              <Flex justifyContent={"space-around"}>
                <Heading>Count: 70</Heading>
                <Image
                  marginTop={10}
                  w={150}
                  h={80}
                  src="https://www.pngmart.com/files/3/Order-Now-PNG-Free-Download.png"
                  alt="user"
                />
              </Flex>
              <Heading>Manage Orders</Heading>
            </Card>

            <Card
              style={{
                padding: "10px",
                backgroundColor: "teal",
                color: "white",
              }}
            >
              <Flex justifyContent={"space-around"}>
                <Heading>
                  Count: {Math.floor(Math.random() * 90000) + 100000}
                </Heading>
                <Image
                  marginTop={10}
                  w={90}
                  h={80}
                  src="https://cdn.w600.comps.canstockphoto.com/revenue-stock-illustration_csp29450467.jpg"
                  alt="user"
                />
              </Flex>
              <Heading>Total Revenue</Heading>
            </Card>
          </Grid>
        </Box>
      </Flex>
    </Box>
  );
};

export default AdminPage;