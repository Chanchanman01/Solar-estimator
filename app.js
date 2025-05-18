document.getElementById('estimator-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const pitch = parseFloat(document.getElementById('pitch').value);
  const direction = document.getElementById('direction').value.toLowerCase();
  const latitude = parseFloat(document.getElementById('latitude').value);
  const longitude = parseFloat(document.getElementById('longitude').value);

  const irradiance = {
    north: 5.5,
    east: 4.8,
    west: 4.7,
    south: 3.5,
  };

  const panelEfficiency = 0.18;
  const systemSizeKw = 1;
  const areaPerKw = 6;
  const systemLosses = 0.85;

  const dailyKwh = irradiance[direction] * areaPerKw * panelEfficiency * systemLosses;
  const yearlyKwh = dailyKwh * 365;

  document.getElementById('output').innerHTML = `
    <p><strong>Estimated Daily Production:</strong> ${dailyKwh.toFixed(2)} kWh</p>
    <p><strong>Estimated Yearly Production:</strong> ${yearlyKwh.toFixed(0)} kWh</p>
  `;
});
