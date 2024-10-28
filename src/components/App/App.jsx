import './App.css';
import Product from '../Product/Product';
import Mailbox from '../Mailbox/Mailbox';
import BookList from '../BookList/BookList';
import Card from '../Card/Card';
import { Alert } from '../Alert/Alert';

const favouriteBooks = [
  { id: '1b5bg132bg', name: 'JS for beginners' },
  { id: '28bg651bgf', name: 'React basics' },
  { id: '376bgfd5bg', name: 'React Router overview' },
];

function App() {
  return (
    <>
      <h1>Site on React</h1>
      <div>
        <h2>Products</h2>

        <Product
          name="Tacos With Lime"
          imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
          price={10.99}
        />
        <Product
          name="Fries and Burger"
          imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
          price={14.29}
        />
      </div>

      <div>
        <h2>Mailbox</h2>

        <Mailbox username="Aleks" unreadMessages="some" />
      </div>

      <div>
        <h2>Book List</h2>

        <BookList books={favouriteBooks} />
      </div>

      <Card>
        <h2>Card title</h2>
        <p>Text between opening and closing tag</p>
      </Card>

      <div>
        <h2>Alerts</h2>

        <Alert variant="info" outlined>
          Would you like to browse our recommended products?
        </Alert>
        <Alert variant="error" elevated>
          There was an error during your last transaction
        </Alert>
        <Alert variant="success" elevated>
          Payment received, thank you for your purchase
        </Alert>
        <Alert variant="warning" outlined>
          Please update your profile contact information
        </Alert>
      </div>
    </>
  );
}

export default App;
