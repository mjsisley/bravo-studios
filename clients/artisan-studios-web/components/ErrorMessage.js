import styled from "styled-components";

const Aside = styled.aside`
  padding: 1.5em;
  font-size: 14px;
  color: white;
  background-color: red;
`;

const ErrorMessage = ({ message }) => <Aside>{message}</Aside>;

export default ErrorMessage;
