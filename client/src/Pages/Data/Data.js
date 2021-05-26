import React from "react"
import Header from "../../components/header"
import { makeStyles } from "@material-ui/core/styles"
import Datapage from "../../components/Datapage"
import Footer from "../../components/Footer"
import { createMuiTheme, ThemeProvider } from "@material-ui/core"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#81D0DB",
    },
  },
})

function Data() {
  return (
    <ThemeProvider>
      <Header />
      <Datapage />
      <Footer />
    </ThemeProvider>
  )
}

export default Data
