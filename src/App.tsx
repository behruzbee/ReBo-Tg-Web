import { Container } from "@mantine/core"
import Header from "./components/Header"
import { Outlet } from "react-router-dom"

const App = () => {
  return (
    <Container p={0}>
      <Header />
      <Outlet />
    </Container>
  )
}

export default App