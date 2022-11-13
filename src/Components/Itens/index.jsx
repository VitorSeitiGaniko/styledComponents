import styled from "styled-components";
import React from "react";
import Item from "../Item";
import ImageFilter from "../ImageFilter";
import ItemTeste from "../Item";

const Itens = styled.div`
  box-shadow: 4px 4px 20px epx rgba(e, e, 0, 0.1);
  border-radius: 10px;
  margin: 2px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  font-size: 12px;
`;

// export default ({ type, value, date, from }) => {
//   return (
//     <Itens>
//       <Item type={type} from={from} value={value} date={date} />
//     </Itens>
//   );
// };

export default (props) => {
  return (
    <Itens>
      {ImageFilter(props.type)}
      <Item {...props} />
      {/* <ItemTeste {...props} /> */}
      <span>{props.date}</span>
    </Itens>
  );
};
