const colorsArray =
[
	"#2C3E50",
	"#34495E",
	"#2C2C2C",
	"#616A6B",
	"#4A235A",
	"#2F4F4F",
	"#0E4B5A",
	"#36454F",
	"#2C3E50",
	"#800020",
]

function getColorIndex()
{
	return (Math.floor(colorsArray.length * Math.random()));
}

const body = document.querySelector("body");

const btn = document.querySelector("#btn");

const hex = document.querySelector("#hex");

function changeBackgroundColor()
{
	const color = index[getColorIndex()];

	hex.innerText = color;
	body.style.backgroundColor = color;

}

btn.onclick = changeBackgroundColor;

