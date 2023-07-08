import React from "react";
import { useState } from "react";
import { styled } from "styled-components";
import { StButton, StBox } from "./Button";

function Input() {
	const [name, setName] = useState("");
	const [price, setPrice] = useState("0");

	const handleChange = (event) => {
		const { id, value } = event.target;
		if (id === "이름") {
			setName(value);
		} else if (id === "가격") {
			const removedNum = value.replace(/[^0-9]/g, ""); //숫자만 쓸수있게 해 주는거
			const formattedPrice = (+removedNum).toLocaleString(); //세자리 콤마찍어줌
			setPrice(formattedPrice);
		}
	};

	const handleClick = () => {
		if (name.trim() === "" && price.trim() === "0") {
			return alert("이름과 가격 모두 입력해주세요.");
		}
		alert(`이름:${name}, 가격:${price.replaceAll(",", "")}`);
	};

	return (
		<form>
			<h1>Input</h1>
			<StBox>
				이름 <StInput type='text' id='이름' onChange={handleChange}></StInput>
				가격 <StInput type='text' id='가격' value={price} onChange={handleChange}></StInput>
				<StButton type='small' bgColor={"green"} onClick={handleClick}>
					저장
				</StButton>
			</StBox>
		</form>
	);
}

export default Input;

const StInput = styled.input`
	width: 210px;
	height: 40px;
	border-radius: 8px;
	border: 1px solid black;
	&:focus {
		outline: 1px solid black;
	}
`;
