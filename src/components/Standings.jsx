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
  </div>
  
  );
}

export default Standings;
