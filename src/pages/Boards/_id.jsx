import { Container } from "@mui/material";

import BoardBar from "./BoardBar";
import BoardContent from "./BoardContent";

import AppBar from "~/components/AppBar";

const Board = () => {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: "100vh" }}>
      <AppBar />
      <BoardBar />
      <BoardContent />
    </Container>
  );
};

export default Board;
