import CoreConcepts from "./CoreConcepts";
import { CORE_CONCEPTS } from "../data";

export default function CoreConcept() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((items) => (
          <CoreConcepts {...items} />
        ))}
      </ul>
    </section>
  );
}
