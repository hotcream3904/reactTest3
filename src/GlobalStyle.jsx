import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    button {
        border-radius: 8px;
    }

    h1 {
        margin-left: 10px;
	    margin-bottom: 30px;
	    margin-top: 30px;
	    font-size: 30px;
	    font-weight: 700;
    }
`;
// 색상을 미리 코드화 해놓는게 <theme> </theme> 색상조율을 쉽게하기위한 리덕스의 액션키 같은 느낌!
// 전역에서 쓸 스타일을 만들어 놓는 공간 (공통된 부분에서 적용되는 부분)
export default GlobalStyle;
