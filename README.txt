* Attack–Defense Accuracy Dashboard *
This dashboard visualizes the performance of multiple defenses against a wide range of attacks. It uses an interactive bubble heatmap and includes tools for filtering, sorting, and detailed inspection.
Main Features

1	Bubble Heatmap
	◦	Rows = attacks
	◦	Columns = defenses
	◦	Bubble size and color represent accuracy
	◦	Hovering shows exact values and attack/defense names

2	Value Bands
	◦	Selectable ranges (0–20, 20–40, etc.)
	◦	Highlights cells within the range and dims others
	◦	Shows summary statistics and top 3 values for the band
	◦	Adds min/max indicators inside the range

3	Filtering and Sorting
	◦	Type to filter attacks
	◦	Sort by name, max score, or average score

4	Defense Summary Popup
	◦	Click a defense header to open a popup
	◦	Shows Standard Accuracy, CRR, and CRA across CIFAR100, CIFAR10, SVHN, and MNIST
	◦	Includes a grouped bar chart with hover tooltips
	◦	Close using the button, backdrop, or Escape key

How to Use
	•	Hover cells to inspect individual results
	•	Use bands to study specific accuracy ranges
	•	Use filtering/sorting to organize attacks
	•	Open defense popups to compare metric performance across datasets

Data
The dashboard loads data from a JSON file placed alongside the HTML. If unavailable, it uses inline data.
