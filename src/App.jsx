import { Component } from 'react';
import { LoginForm } from './components/LoginForm/LoginForm';
import { ProductReviewForm } from 'components/ProductReviewForm/ProductReviewForm';

export class App extends Component {
  render() {
    return (
      <>
        <ProductReviewForm />
        {/* <LoginForm /> */}
      </>
    );
  }
}
