import React from "react"
import Header from "../../components/header"
import { makeStyles } from "@material-ui/core/styles"
import Main from "../../components/Main"
import Footer from "../../components/Footer"
import { createMuiTheme, ThemeProvider } from "@material-ui/core"
import Data from "../../Pages/Data/Data"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#81D0DB",
    },
  },
})

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
