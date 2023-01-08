import styled from "styled-components";
// import Twitter from "../../assets/twitter-square-brands.svg";
// import Instagram from "../../assets/instagram-square-brands.svg";
// import Gmail from "../../assets/envelope-open-solid.svg";

const FOOTER = styled.footer`
  background-color: #0a0b10;
  padding: 1.2rem calc(2.5rem + 2.5vw);
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only Screen and (max-width: 48em) {
    flex-direction: column;
    align-items: center;
    div {
      &:first-child {
        margin-bottom: 1rem;
      }
    }
  }
`;

// const RightText = styled.div`
//   color: var(--white);
//   display: flex;
//   align-items: center;
//   img {
//     width: 1.5rem;
//     height: 1.5rem;
//     margin-left: 1rem;
//     filter: invert(100%);
//     transition: all 0.2s ease-in-out;
//   }
//   a {
//     &:hover {
//       img {
//         transform: scale(1.5);
//         filter: invert(50%) sepia(100%) saturate(500%) hue-rotate(216deg)
//           brightness(100%) contrast(97%);
//       }
//     }
//   }
// `;
const LeftText = styled.div`
  font-size: 12px;
  color: var(--white);
  text-align: left;
`;

const Abc = styled.p`
    margin-bottom: 10px;
`;

const Footer = () => {
  return (
    <FOOTER>
      <LeftText>
        <Abc>Services are provided by:</Abc>
        <div>
          <p>BM Web Services Group SRL</p>
          <p>Romania, Bucharest, 4th Sector</p>
          <p>Boulevard Contantin Brancoveanu nr 116, room 1</p>
          <p>Apartment building M2/III, 3rd entrance, 3rd floor, apartment 138</p>
          <p>Unique ID number: 42910168</p>
        </div>
      </LeftText>
      {/*<RightText>*/}
      {/*  Reach out to me via*/}
      {/*</RightText>*/}
    </FOOTER>
  );
};

export default Footer;
