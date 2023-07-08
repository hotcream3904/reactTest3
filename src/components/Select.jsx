import React from "react";
import { useState } from "react";
import { styled } from "styled-components";

function Select() {
	const [selectBoxOne, setSelectBoxOne] = useState(false);
	const [selectBoxTwo, setSelectBoxTwo] = useState(false);

	const toggleSelectBoxOne = () => {
		setSelectBoxOne(!selectBoxOne);
	};
	const toggleSelectBoxTwo = () => {
		setSelectBoxTwo(!selectBoxTwo);
	};

	const languageList = ["리액트", "자바", "스프링", "리액트네이티브"];
	const [fisrtLanguage, setfirstLanguage] = useState("리액트"); //32 번줄 바꿀꺼야 ㅋㅋㅋㅋ
	const firstLanguageClick = (e) => {
		setfirstLanguage(e.target.innerHTML);
	};
	const [secondLanguage, setSecondLanguage] = useState("리액트"); // 50번줄 바꿀꺼야 ㅋㅋㅋㅋ
	const secondLanguageClick = (e) => {
		setSecondLanguage(e.target.dataset.value);
	};

	return (
		<>
			<Stddd>
				{selectBoxOne && (
					<StChoiceBoxParent>
						{languageList.map((item) => {
							return (
								<StChoiceBox key={item} onClick={firstLanguageClick}>
									{/* onMouseEnter */}
									{item}
								</StChoiceBox>
							);
						})}
					</StChoiceBoxParent>
				)}
			</Stddd>
			<StSelectBox>
				<h1>Select</h1>
				<StChoiceBoxContainer>
					<FirstButton>
						<StSelect onClick={toggleSelectBoxOne}>
							<p>{fisrtLanguage}</p>
							<p>▼</p>
						</StSelect>
					</FirstButton>
					<SecondButton>
						<StSelect onClick={toggleSelectBoxTwo}>
							<p>{secondLanguage}</p>
							<p>▼</p>
						</StSelect>
						{selectBoxTwo && (
							<StChoiceBoxParent>
								{languageList.map((item) => {
									return (
										<StChoiceBox key={item} data-value={item} onClick={secondLanguageClick}>
											{item}
										</StChoiceBox>
									);
								})}
							</StChoiceBoxParent>
						)}
					</SecondButton>
				</StChoiceBoxContainer>
			</StSelectBox>
		</>
	);
}

export default Select;

const StSelectBox = styled.div`
	height: 200px;
	margin: 50px 10px 0 10px;
	border: 2px solid rgb(196, 193, 193);
	overflow: hidden;
`;

const StChoiceBoxContainer = styled.div`
	display: flex;
	gap: 20px;
`;

const FirstButton = styled.div`
	display: flex;
	flex-direction: column;
`;

const SecondButton = styled.div`
	display: flex;
	flex-direction: column;
`;

const StSelect = styled.button`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: white;
	width: 300px;
	height: 40px;
	border-radius: 8px;
	border: 1px solid rgb(196, 193, 193);
`;

const StChoiceBoxParent = styled.div`
	display: flex;
	flex-direction: column;
	width: 300px;
	height: 160px;
	border: 1px solid rgb(196, 193, 193);
	border-radius: 8px;
`;

const StChoiceBox = styled.button`
	border: none;
	height: 40px;
	border-radius: 8px;
	background-color: white;
	&:hover {
		background-color: #dcdcdc;
	}
`;

const Stddd = styled.div`
	position: absolute;
	top: 680px;
	left: 10px;
`;
