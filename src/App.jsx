import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import Modal from "./components/Modal";
import Select from "./components/Select";
import GlobalStyle from "./GlobalStyle";

function App() {
	return (
		<div>
			<GlobalStyle />
			<Button />
			<Input />
			<Modal />
			<Select />
		</div>
	);
}

export default App;
