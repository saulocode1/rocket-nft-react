import HeaderComponent from "./Components/Header/Header";
import GlobalStyled from "./globalStyled";
import Home from "./Sections/Home/Home";

function App() {
    return (
        <>
            <GlobalStyled />
            <HeaderComponent />

            <Home></Home>
        </>
    );
}

export default App;
