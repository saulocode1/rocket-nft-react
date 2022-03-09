import HeaderComponent from "./Components/Header/Header";
import GlobalStyled from "./globalStyled";
import Home from "./Sections/Home/Home";
import StatsSection from "./Sections/Stats";

function App() {
    return (
        <>
            <GlobalStyled />
            <HeaderComponent />
            <Home />
            <StatsSection/>
        </>
    );
}

export default App;
