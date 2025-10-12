import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Product({ item, className }) {
  let productImage = '';

  if (item.imageURL) {
    if (item.imageURL.startsWith('http') || item.imageURL.startsWith('https')) {
      productImage = item.imageURL;
    } else {
      try {
        productImage = require(`../../assets/${item.imageURL}`);
      } catch (err) {
        console.warn(`Image not found: ${item.imageURL}`, err);
        productImage = require('../../assets/default.jpg');
      }
    }
  } else {
    productImage = require('../../assets/default2.jpg');
  }

  return (
    <li className={className}>
      <a href={`/update-product/${item.id}`}>
        <img src={productImage} alt={item.name} />
        <div className="Products__name">{item.name}</div>
        <small className="Products__type">{item.type}</small>
      </a>
    </li>
  );
}

Product.propTypes = {
  item: PropTypes.object.isRequired
};

// styled-component
export default styled(Product)`
  padding: 0 12px 36px 12px;
  width: 33%;
  position: relative;
  list-style: none;

  img {
    width: 100%;
    height: 200px;      /* ✅ fix height */
    object-fit: cover;   /* ✅ crop/cover */
    border-radius: 8px;
  }

  .Products__name {
    color: #333;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
    display: block;
    margin-top: 0.5rem;
  }

  .Products__type {
    color: #767676;
  }
`;
