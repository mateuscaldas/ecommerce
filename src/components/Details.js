import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { ProductConsumer } from '../context';
import { ButtonContainer } from './Button';

class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { id, company, img, info, price, title, inCart } = value.detailProduct;
          return (
            <div className="container py-5">
              {/* Tilte */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              {/* End Tilte */}

              {/* Product Info */}
              <div className="row">
                {/* Product Image */}
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} alt="Imagem do Produto" className='img-fluid' />
                </div>
                {/* Product Info Text */}
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h1>modelo: {title}</h1>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    Fabricado por: <span className="text-uppercase">{company}</span>
                  </h4>
                  <h4 className="text-blue">
                    <strong>
                      preço: <span>R$</span>{price},00
                    </strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-2">
                    alguma informação sobre o produto:
                  </p>
                  <p className="text-muted lead">{info}</p>
                  {/* Buttons */}
                  <div>
                    <Link to='/'>
                      <ButtonContainer >Voltar para Produtos</ButtonContainer>
                    </Link>
                    <ButtonContainer 
                      cart
                      disabled={inCart ? true : false} 
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart ? 'Adicionado ao Carrinho' : 'Adicionar ao Carrinho'}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          )
        }}
      </ProductConsumer>
    );
  }
}

export default Details;