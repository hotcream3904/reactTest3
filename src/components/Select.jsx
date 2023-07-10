import React, { useState } from "react";
import { styled } from "styled-components";

function Select() {
	const [isSelectBoxOneVisible, setIsSelectBoxOneVisible] = useState(false);
	const [isSelectBoxTwoVisible, setIsSelectBoxTwoVisible] = useState(false);
	const [firstLanguage, setFirstLanguage] = useState("리액트");
	const [secondLanguage, setSecondLanguage] = useState("리액트");

	const languageList = ["리액트", "자바", "스프링", "리액트네이티브"];

	const toggleSelectBoxOne = () => {
		setIsSelectBoxOneVisible(!isSelectBoxOneVisible);
	};
	const toggleSelectBoxTwo = () => {
		setIsSelectBoxTwoVisible(!isSelectBoxTwoVisible);
	};

	const handleFirstLanguageClick = (e) => {
		const firstLanguage = e.target.innerText;
		setFirstLanguage(firstLanguage);
	};
	const handleSecondLanguageClick = (e) => {
		const secondLanguage = e.target.innerText;
		setSecondLanguage(secondLanguage);
	};

	return (
		<div>
			<StOptionsVisible>
				{isSelectBoxOneVisible && (
					<StSelectBoxParent>
						{languageList.map((item) => {
							return (
								<StSelectBoxChild key={item} onClick={handleFirstLanguageClick}>
									{item}
								</StSelectBoxChild>
							);
						})}
					</StSelectBoxParent>
				)}
			</StOptionsVisible>
			{/* overflow:hidden */}
			<StSelectBorder>
				<h1>Select</h1>
				<StSelectBtnContainer>
					<StSelectBtn onClick={toggleSelectBoxOne}>
						<p>{firstLanguage}</p>
						<p>▼</p>
					</StSelectBtn>
					<StSelectBtnBox>
						<StSelectBtn onClick={toggleSelectBoxTwo}>
							<p>{secondLanguage}</p>
							<p>▼</p>
						</StSelectBtn>
						{isSelectBoxTwoVisible && (
							<StSelectBoxParent>
								{languageList.map((item) => {
									return (
										<StSelectBoxChild key={item} onClick={handleSecondLanguageClick}>
											{item}
										</StSelectBoxChild>
									);
								})}
							</StSelectBoxParent>
						)}
					</StSelectBtnBox>
				</StSelectBtnContainer>
			</StSelectBorder>
		</div>
	);
}

export default Select;

const StSelectBorder = styled.div`
	height: 200px;
	margin: 50px 10px 0 10px;
	border: 2px solid rgb(196, 193, 193);
	overflow: hidden;
`;

const StSelectBtnContainer = styled.div`
	display: flex;
	gap: 20px;
`;

const StSelectBtnBox = styled.div`
	display: flex;
	flex-direction: column;
`;

const StSelectBtn = styled.button`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: white;
	width: 300px;
	height: 40px;
	border-radius: 8px;
	border: 1px solid rgb(196, 193, 193);
`;

const StSelectBoxParent = styled.div`
	display: flex;
	flex-direction: column;
	width: 300px;
	height: 160px;
	border: 1px solid rgb(196, 193, 193);
	border-radius: 8px;
`;

const StSelectBoxChild = styled.button`
	border: none;
	height: 40px;
	border-radius: 8px;
	background-color: white;
	&:hover {
		background-color: #dcdcdc;
	}
`;

const StOptionsVisible = styled.div`
	position: absolute;
	top: 680px;
	left: 10px;
`;
