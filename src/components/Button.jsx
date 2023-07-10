import React from "react";
import { styled } from "styled-components";

function Button() {
	return (
		<div>
			<h1>Button</h1>
			<StBox>
				<StButton onClick={() => alert("버튼을 만들어보세요")} type='primary' $bgColor={"green"}>
					Large Primary Button 📯
				</StButton>
				<StButton type='medium' $bgColor={"green"}>
					Medium
				</StButton>
				<StButton type='small' $bgColor={"green"}>
					Small
				</StButton>
			</StBox>
			<StBox>
				<StButton onClick={() => prompt("어렵나요?")} type='primary' $bgColor={"pink"}>
					Large Negative Button 🛎️
				</StButton>
				<StButton type='medium' $bgColor={"pink"}>
					Medium
				</StButton>
				<StButton type='small' $bgColor={"pink"}>
					Small
				</StButton>
			</StBox>
		</div>
	);
}

export const StBox = styled.div`
	display: flex;
	margin: 10px;
	gap: 20px;
`;

export const StButton = styled.button`
	box-sizing: border-box;
	border: none;
	width: 500px;
	${({ $bgColor }) => colorHandler($bgColor)};
	${({ type }) => sizeHandler(type)};
	&:active {
		filter: brightness(70%);
	}
`;

const colorHandler = (bgColor) => {
	switch (bgColor) {
		case "green":
			return `border: 3px solid rgb(85, 239, 196); background-color: rgb(85, 239, 196)`;
		case "pink":
			return `border: 3px solid rgb(250, 177, 160); color: rgb(214, 48, 49); background-color: rgb(250, 177, 160)`;
		default:
			return "";
	}
};

const sizeHandler = (size) => {
	switch (size) {
		case "primary":
			return `width: 200px; height: 50px; background-color: white; font-weight: 600;`;
		case "medium":
			return `width: 130px; height: 45px;`;
		default:
			return `width: 100px; height: 40px;`;
	}
};

export default Button;
