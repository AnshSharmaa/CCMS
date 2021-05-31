import React from "react"
import Header from "../../components/header"
import Main from "../../components/Main"
import Footer from "../../components/Footer"
import { createMuiTheme, ThemeProvider } from "@material-ui/core"

const theme = createMuiTheme({})

function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Main />
      <Footer />
    </ThemeProvider>
  )
}

export default Home
