// psi_dashboard.js is used to store data for index.html

const dataid = [
    "psi_twenty_four_hourly",
    "pm10_twenty_four_hourly",
    "pm10_sub_index",
    "co_sub_index",
    "o3_sub_index",
    "so2_sub_index",
    "pm25_twenty_four_hourly",
    "pm25_sub_index",
    "psi_three_hourly",
    "co_eight_hour_max",
    "o3_eight_hour_max",
    "so2_twenty_four_hourly"
];

function updatePSITable() {
    document.getElementById('error-msg').textContent = '';
    fetch('https://api.data.gov.sg/v1/environment/psi')
        .then(response => response.json())
        .then(data => {
            const item = data.items[0];
            document.getElementById('last-updated').textContent =
                'Last updated: ' +
                item.update_timestamp.replace('T', ' ').slice(0, 19);
            const readings = item.readings;
            const table = document.getElementById('PSItable');
            while (table.rows.length > 1) table.deleteRow(1);
            dataid.forEach(dataid => {
                if (readings[dataid]) {
                    const row = table.insertRow();
                    row.insertCell().textContent = dataid;
                    ['central', 'west', 'east', 'north', 'south'].forEach(region => {
                        row.insertCell().textContent = readings[dataid][region];
                    });
                }
            });
        })
        .catch(err => {
            document.getElementById('error-msg').textContent =
                'Error. Refresh page to load.';
        });
}

// Initial table load
document.addEventListener("DOMContentLoaded", updatePSITable);
