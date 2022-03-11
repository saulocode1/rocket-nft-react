import HeaderComponent from "./Components/Header/Header";
import GlobalStyled from "./globalStyled";
import Home from "./Sections/Home/Home";
import PopularSection from "./Sections/Popular";
import StatsSection from "./Sections/Stats";

function App() {
    return (
        <>
            <GlobalStyled />
            <HeaderComponent />
            <Home />
            <StatsSection/>
            <PopularSection/>
        </>
    );
}

export default App;
