import React from 'react';

function Autolyse() {
  return (
    <div className="step">
      <h1>2. Autolyse - <span>12:00PM</span></h1>
      <table className="ingredient-table">
        <tr>
          <th>Weight</th>
          <th>Ingredient</th>
        </tr>
        <tr>
          <td>938g</td>
          <td>Bread Flour</td>
        </tr>
        <tr>
          <td>603g</td>
          <td>Water (90oC)</td>
        </tr>
      </table>
      <p>Using your hands, mix all the flour and the water (reserve 50g water for later) called for in the “Dough Mix” section above in a bowl until all dry bits are hydrated. Cover the bowl and store somewhere warm (near your levain is convenient) for 1 hour.</p>
    </div>
  );
}

export default Autolyse;