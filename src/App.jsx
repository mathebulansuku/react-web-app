import Header from "./Header";
import componentsImg from "./assets/components.png";
import CoreConcepts from "./CoreConcepts";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts
              title="Components"
              description="The core UI building block."
              image={componentsImg}
            />
            <CoreConcepts
              title="Components"
              description="The core UI building block."
              image={componentsImg}
            />
            <CoreConcepts
              title="Components"
              description="The core UI building block."
              image={componentsImg}
            />
            <CoreConcepts
              title="Components"
              description="The core UI building block."
              image={componentsImg}
            />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
