import React from "react";

function Standings() {
  return (
    <div class="standings-container">
      <div class="standings-wrapper">
        <h2 class="standings-title">Standings</h2>
        <table class="standings-table">
          <thead>
            <tr>
              <th>Duelists</th>
              <th>Stats</th>
              <th>Sets Won</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Violet</td>
              <td>106 - 66 - 1</td>
              <td>17</td>
            </tr>
            <tr>
              <td>Jordan</td>
              <td>81 - 47 - 1</td>
              <td>10</td>
            </tr>
            <tr>
              <td>Pop</td>
              <td>53 - 63</td>
              <td>5</td>
            </tr>
            <tr>
              <td>Josh</td>
              <td>51 - 80</td>
              <td>3</td>
            </tr>
            <tr>
              <td>Luis</td>
              <td>30 - 69</td>
              <td>2</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="upcoming-sets">
        <h2>Upcoming Sets</h2>
        <ul>
          <li>
            <a
              href="https://ygoprodeck.com/pack/The%20Duelist%20Genesis"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Duelist Genesis
            </a>
          </li>
          <li>
            <a
              href="https://ygoprodeck.com/pack/Crossroads%20of%20Chaos"
              target="_blank"
              rel="noopener noreferrer"
            >
              Crossroads of Chaos
            </a>
          </li>
          <li>
            <a
              href="https://ygoprodeck.com/pack/Dark%20Legends"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dark Legends
            </a>
          </li>
          <li>
            <a
              href="https://ygoprodeck.com/pack/Duelist%20Pack%3A%20Yusei"
              target="_blank"
              rel="noopener noreferrer"
            >
              Duelist Pack 8: Yusei
            </a>
          </li>
          <li>
            <a
              href="https://ygoprodeck.com/pack/Crimson%20Crisis"
              target="_blank"
              rel="noopener noreferrer"
            >
              Crimson Crisis
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Standings;
