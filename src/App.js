import { Review } from "./Review";

const App = () => {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h3>Our Reviews</h3>
          <div className="underline"></div>
        </div>
        <Review />
      </section>
    </main>
  );
};

export default App;
