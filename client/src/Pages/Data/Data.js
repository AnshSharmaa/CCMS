import React from "react"
import Header from "../../components/header"
import Datapage from "../../components/Datapage"
import Footer from "../../components/Footer"
import { createMuiTheme, ThemeProvider } from "@material-ui/core"

const theme = createMuiTheme({})

function Data() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Datapage />
      <Footer />
    </ThemeProvider>
  )
}

export default Data
