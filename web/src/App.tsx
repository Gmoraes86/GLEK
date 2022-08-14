import MainRoutes from "./Routes/index.routes"
import { Authentication, Firestore } from "./Providers"
import ThemeProvider from "./Themes"


function App() {  

  // const teste = async () => {

  //   // const result = await Firestore.Create('users', {
  //   //   first: "gef",
  //   //   middle: "moraes",
  //   //   last: "Turing",
  //   //   born: 1912
  //   // });

  //   const x = await Firestore.GetAll('users');
  //   console.log(x)

  //   //https://firebase.google.com/docs/firestore/query-data/queries?hl=pt&authuser=0

  // }


  return (
    <div>     
      <ThemeProvider>
        <MainRoutes />
      </ThemeProvider>
    </div>
  )
}

export default App
