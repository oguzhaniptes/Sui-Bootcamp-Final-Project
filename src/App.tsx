import { ConnectButton } from "@mysten/dapp-kit";
import { Box, Button, Flex, Heading } from "@radix-ui/themes";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  return (
    <div>
      <Flex
        position="sticky"
        px="4"
        py="2"
        justify="between"
        style={{
          borderBottom: "1px solid var(--gray-a2)",
        }}
      >
        <Box>
          <Heading>oFinder dApp</Heading>
        </Box>

        <Box>
          <ConnectButton />
        </Box>
      </Flex>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",
          width: "100vw",
          height: "80vh",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            justifyContent: "center",
            maxWidth: "200px",
          }}
        >
          <Button size={"3"} onClick={() => navigate("/create-notice")}>
            Create Notice
          </Button>
          <Button size={"3"} onClick={() => navigate("/found-doc")}>
            I found document!
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
