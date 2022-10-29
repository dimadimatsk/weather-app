import Footer from './components/Footer';
import Header from './components/Header';
import Main from './pages/Main';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
