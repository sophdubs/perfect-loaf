import React from 'react';

function Mix() {
  return (
    <div className="step">
      <h1>2. Mix - <span>1:00PM</span></h1>
      <table className="ingredient-table">
        <tr>
          <th>Weight</th>
          <th>Ingredient</th>
        </tr>
        <tr>
          <td>50g</td>
          <td>Water (90oC)</td>
        </tr>
        <tr>
          <td>18g</td>
          <td>Fine Sea Salt</td>
        </tr>
        <tr>
          <td>184g</td>
          <td>Levain</td>
        </tr>
      </table>
      <p>Add the ingredients in the table above (salt, water, and levain) to your flour and water mixed in the Autolyse step. If your dough is feeling very, very wet and shaggy, do not use all of the 50g of water. I like to spread everything on top of dough resting in the bowl and use my hand to pinch all the ingredients together. Transfer dough to a tub or thick-walled bowl for bulk fermentation.</p>
      <p>At this point use your instant-read thermometer to take the temperature of your dough to get your final dough temperature. If your FDT is below 78°F (25°C) next time use warmer water, and conversely, if it’s above 78°F (25°C) use cooler water.</p>
    </div>
  );
}

export default Mix;