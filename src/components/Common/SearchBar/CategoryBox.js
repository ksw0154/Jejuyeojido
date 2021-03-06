import React from "react";
import styled from "styled-components";
import CategoryIcon from "./CategoryIcon";
import { connect } from "react-redux";

const CategoryBox = ({ categorys }) => {
  return (
    <>
      <ItemBox>
        {categorys.map((category, index) => (
          <CategoryIcon key={index} id={category.icon.iconName} />
        ))}
      </ItemBox>
    </>
  );
};

const mapStateToProps = (state) => {
  return { categorys: state.category };
};

export default connect(mapStateToProps)(CategoryBox);

const ItemBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 20px;
`;
