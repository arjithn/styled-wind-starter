import styled from "styled-wind";
import logo from "./style_wind_logo.svg";

function App() {
  return (
    <AppWrapper>
      <AppHeader>
        <AppLogo src={logo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Row>
          <Button
            as="a"
            href="https://styled-wind.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Docs
          </Button>
        </Row>
      </AppHeader>
    </AppWrapper>
  );
}

const Row = styled.div`
.flex;
.w-100;
.flex-row;
`;

const Button = styled.button`
  .bg-indigo-500;
  .hover:bg-indigo-800;
  .font-bold;
  .text-lg;
  .text-white;
  .rounded-lg;
  .w-32;
  .p-2;
  .cursor-pointer;
`;

const AppLogo = styled.img`
  width: 40vmin;
 .pointer-events-none;
`;

const AppHeader = styled.header`
 .bg-teal-200;
 .min-h-screen;
 .flex;
 .flex-col;
 .items-center;
 .justify-center;
 font-size: calc(10px + 2vmin);
 .text-orange-600;
`;

const AppWrapper = styled.div`
 .text-center;
 a{
     color: auto;
     .no-underline;
 }
`;

export default App;
