import logo from "../../public/investment-calculator-logo.png";

export default function Header({ children }) {
  return (
    <header id="header">
      <img src={logo} alt="app pogo" />
      <h1>{children}</h1>
    </header>
  );
}
