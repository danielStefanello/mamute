import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 600px;
  margin: 0 auto;
  padding: 10px;
`;

export const Repository = styled.div`
  list-style: none;
  height: 70px;
  max-width: 520px;
  width: 90%;
  display: flex;
  margin: 30px 0;
  transition: all 0.2s;

  &:hover {
    width: 100%;
    margin: 40px 0;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid #8c5929;
    position: relative;
    top: 0;
    left: 10px;
    background-color: #fff;
  }

  p {
    background-color: #cecece;
    height: 50px;
    padding: 15px 0 0 80px;
    margin: 20px 2px 0 -50px;
    width: 100%;
  }

  a {
    width: 50px;
    height: 50px;
    background-color: #cecece;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ac8866;

    &:visited,
    &:hover {
      color: #8c5929;
    }
  }
`;

export const Field = styled.form`
  position: fixed;
  bottom: 10px;
  right: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  padding: 10px;

  input {
    background-color: #ededed;
    max-width: 550px;
    width: 100px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    border: 2px solid #8c5929;
    border-right: 0;
    transition: width 0.2s;

    &:focus {
      width: 100%;
    }
  }

  button {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    border: 2px solid #8c5929;
    background-color: #8c5929;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 46px;

    svg {
      color: #ac8866;
    }
  }

  span {
    color: red;
    margin-right: 10px;
  }
`;
