import React from 'react';

function Levain() {
  return (
    <div className="step">
      <h1>1. Levain - <span>8:00AM</span></h1>
      <table className="ingredient-table">
        <tr>
          <th>Weight</th>
          <th>Ingredient</th>
        </tr>
        <tr>
          <td>38g</td>
          <td>Sourdough Starter</td>
        </tr>
        <tr>
          <td>76g</td>
          <td>Bread Flour</td>
        </tr>
        <tr>
          <td>76g</td>
          <td>Water</td>
        </tr>
      </table>
      <p>Mix together everything called for in the table above in a clean jar in the morning and store somewhere around 74-76°F (23-24°C) ambient for 5-6 hours. Keep an eye on how your levain is progressing during this time. When it’s ready to be used it will be expanded, bubbly on top and at the sides, and smell almost a little sour.</p>
    </div>
  );
}

export default Levain;