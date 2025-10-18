import AutoLoops from "../components/AutoLoops";

export default function Page() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <h1>Trusted Auto Repair in Richardson, TX</h1>
          <p>Inspections • Brakes • Tires • Diagnostics • AC • Alignments • More</p>
        </div>
      </section>

      {/* Loop stripes under the hero */}
      <AutoLoops />

      <section id="services" className="section">
        <div className="container">
          <h2>Services</h2>
          <p className="muted">We take care of everything from routine maintenance to complex repairs.</p>
        </div>
      </section>
    </main>
  );
}
