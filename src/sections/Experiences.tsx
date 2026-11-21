import { Arrow } from '@/components/Arrow'

export function Experiences() {
  return (
    <section className="home-xp" id="about-events" data-reveal>
      <div className="home-xp-head">
        <img
          src="/products/runway.jpg?v=7"
          alt=""
          width="4608"
          height="3456"
          className="home-xp-thumb"
        />
        <h2>
          <span>Crafting</span>
          <span><em>Experiences</em></span>
        </h2>
      </div>
      <div className="home-xp-copy">
        <p className="home-xp-lead">We deliver live experiences shaped by timing, collaboration, and precision.</p>
        <p>
          From high-impact brand moments to large-scale live events in Hargeisa, every brief takes a clear path.
          We start with the objective, the audience and the context — then bring creative, technical and operational
          work into one coordinated plan.
        </p>
        <p>
          As the experience takes shape, every detail is prepared with care: environments, structures, screens,
          logistics and live readiness. When the moment arrives, we stay present — overseeing delivery, coordination
          and response until it is complete.
        </p>
        <div className="home-xp-actions">
          <a className="text-link" href="#about">About us <Arrow /></a>
          <a className="text-link" href="#services">All services <Arrow /></a>
        </div>
      </div>
    </section>
  )
}
