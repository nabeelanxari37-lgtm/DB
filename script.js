const sheetID = "YOUR_SHEET_ID";

const url =
`https://opensheet.elk.sh/${sheetID}/Sheet1`;

fetch(url)
  .then(res => res.json())
  .then(data => {

    const dashboard = document.getElementById("dashboard");

    data.forEach(item => {

      dashboard.innerHTML += `
        <div class="card">
          <div class="title">${item.Indicator}</div>
          <div class="value">${item.Achieved}</div>
          <div>Target: ${item.Target}</div>
          <div class="percent">
            Score: ${item["Achieved %"]}
          </div>
        </div>
      `;
    });

  });
