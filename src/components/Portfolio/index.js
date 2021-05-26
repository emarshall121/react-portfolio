import React from 'react';

function Portfolio() {
  return (
    <section className="my-5">
      <h1 id="portfolio">Portfolio</h1>
      <div class="columns">
        {/* Project 1 */}
        <div class="card m-4">
        <header class="card-header has-text-centered">
          <p class="card-header-title">
            Vail CTE Website
          </p>
        </header>
          <div class="card-image">
            <figure class="image">
              <img src="Portfolio/CTE.png" alt="Placeholder"></img>
            </figure>
          </div>
          <footer class="card-footer">
            <a href="https://cte.vailschooldistrict.org/" class="card-footer-item">Application</a>
          </footer>
        </div>

        {/* Project 2 */}
        <div class="card m-4">
        <header class="card-header has-text-centered">
          <p class="card-header-title">
            Mood Music
          </p>
        </header>
          <div class="card-image">
            <figure class="image">
              <img src="Portfolio/mood-music.png" alt="Placeholder"></img>
            </figure>
          </div>
          <footer class="card-footer">
            <a href="https://github.com/aejg-project/mood-music" class="card-footer-item">Github</a>
            <a href="https://mewd-mewsic.herokuapp.com/" class="card-footer-item">Application</a>
          </footer>
        </div>

        {/* Project 3 */}
        <div class="card m-4">
        <header class="card-header has-text-centered">
          <p class="card-header-title">
            Vail High School Choice
          </p>
        </header>
          <div class="card-image">
            <figure class="image">
              <img src="Portfolio/highschoolchoice.png" alt="Placeholder"></img>
            </figure>
          </div>
          <footer class="card-footer">
            <a href="http://info.vailhighschoolchoice.org/" class="card-footer-item">Application</a>
          </footer>
        </div>

        {/* Project 4 */}
        <div class="card m-4">
        <header class="card-header has-text-centered">
          <p class="card-header-title">
            Borderland's Aviation
          </p>
        </header>
          <div class="card-image">
            <figure class="image">
              <img src="Portfolio/borderlands.png" alt="Placeholder"></img>
            </figure>
          </div>
          <footer class="card-footer">
            <a href="http://borderlandsaviation.com/" class="card-footer-item">Application</a>
          </footer>
        </div>
        </div>
    </section>
  );
}

export default Portfolio;