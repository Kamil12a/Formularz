import { ThemeProvider } from "styled-components";
import Form from "./components/Form/Form";
function App() {
  const theme = {
    main: "white"
  };
  return (
    <ThemeProvider theme={theme}>
      <Form />
    </ThemeProvider>
  );
}

export default App;

