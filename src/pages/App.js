import { Menu } from "../modules/layout/Menu";
import { Banner } from "../templates/Banner";
import { Download } from "../templates/Download";
import { Features } from "../templates/Features";
import { Footer } from "../templates/Footer";
import { Newsletter } from "../templates/Newsletter";
import { Question } from "../templates/Question";

function App() {
  return (
    <div className="App">
      <Menu/>
      <Banner/>
      <Features/>
      <Download/>
      <Question/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default App;
