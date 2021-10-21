import { useState, useEffect } from "react";
import check from "./../media/svgs/li-check.svg";
import db from "./../db.json";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

const Fadein = styled.div`
  animation: 0.3s ${keyframes`${fadeIn}`} linear;
`;

export default function Investors() {
  const [index, setIndex] = useState(0);
  const data = db.investors;

  const contentLeftBlock = data.map((el, i) => {
    const style = i === index ? "name active" : "name";
    return (
      <li>
        <h4 className={style} id={i} key={i} onClick={() => setIndex(i)}>
          {el.name}
        </h4>
      </li>
    );
  });

  const contentRightBlock = data[index].desc.map((el, i) => {
    return (
      <li>
        <div className="desc" key={i}>
          <img src={check} />
          <p>
            {el}
            {i - 1 != data.length ? <hr className="hr-desctop" /> : null}
          </p>
          {i - 1 != data.length ? <hr className="hr-mobile" /> : null}
        </div>
      </li>
    );
  });

  return (
    <div className="investors" key={index}>
      <div className="content">
        <div className="info">
          <div className="left-block">
            <ul>{contentLeftBlock}</ul>
          </div>
          <Fadein>
            <div className="right-block">
              <h3>{data[index].name}</h3>
              <ul>{contentRightBlock}</ul>
            </div>
          </Fadein>
        </div>
      </div>
    </div>
  );
}
