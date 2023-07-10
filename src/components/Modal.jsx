import React from "react";
import { useState } from "react";
import { StButton, StBox } from "./Button";
import { styled } from "styled-components";

function Modal() {
	const [modalOne, setModalOne] = useState(false);
	const [modalTwo, setModalTwo] = useState(false);

	const openModalOne = () => {
		setModalOne(true);
	};
	const closeModalOne = () => {
		setModalOne(false);
	};
	const openModalTwo = () => {
		setModalTwo(true);
	};
	const closeModalTwo = () => {
		setModalTwo(false);
	};

	return (
		<div>
			<h1>Modal</h1>
			{modalOne && (
				<>
					<StModalsFather>
						<StModalOneChild>
							닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.
							<ButtonBox>
								<StButton type='small' $bgColor={"pink"} onClick={closeModalOne}>
									닫기
								</StButton>
								<StButton type='small' $bgColor={"green"}>
									확인
								</StButton>
							</ButtonBox>
						</StModalOneChild>
					</StModalsFather>
				</>
			)}
			{modalTwo && (
				<>
					<StModalsFather onClick={closeModalTwo}>
						<StModalTwoChild onClick={(e) => e.stopPropagation()}>
							<p>
								닫기 버튼 1개가 있고,<br></br>외부 영역을 누르면 모달이 닫혀요.
							</p>
							<Xbutton onClick={closeModalTwo}>X</Xbutton>
						</StModalTwoChild>
					</StModalsFather>
				</>
			)}

			<StBox>
				<StButton type='small' $bgColor={"green"} onClick={openModalOne}>
					open modal
				</StButton>
				<StButton type='primary' $bgColor={"pink"} onClick={openModalTwo}>
					open modal
				</StButton>
			</StBox>
		</div>
	);
}

export default Modal;

const StModalsFather = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.8);
`;
const StModalOneChild = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	background-color: white;
	border-radius: 8px;
	width: 500px;
	height: 300px;
`;

const ButtonBox = styled.div`
	display: flex;
	position: relative;
	top: 20px;
	left: 100px;
	gap: 20px;
`;

const StModalTwoChild = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: baseline;
	width: 300px;
	height: 200px;
	border-radius: 8px;
	background-color: white;
`;

const Xbutton = styled.button`
	border: 1px solid rgb(221, 221, 221);
	width: 40px;
	height: 40px;
	border-radius: 100%;
	cursor: pointer;
	&:hover {
		border: 1px solid black;
	}
`;
