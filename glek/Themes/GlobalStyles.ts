import { createGlobalStyle } from "styled-components";
import InterRegularWoff from "../Fonts/InterRegular.woff";
import InterRegularWoff2 from "../Fonts/InterRegular.woff2";
import TomorrowRegularTtf from "./../Fonts/TomorrowRegular.ttf";

const FontStyles = createGlobalStyle`

@font-face {
    font-family: 'Inter';
    src: url(${InterRegularWoff2}) format('woff2'),
        url(${InterRegularWoff}) format('woff');
}

@font-face {
    font-family: 'Tomorrow';
    src: url(${TomorrowRegularTtf}) format('truetype'),
}    
`;


export default FontStyles;