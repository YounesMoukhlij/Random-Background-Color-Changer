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
	"#767e8a",
	"#afcf23",
	"#cf7323",
	"#e86f05",
	"#FECD33",
	"##581845",
	"##CD5C5C",
	"##FFA07A",
	"##CD5C5C",
	"##CD5C5C",

]

const body = document.querySelector("body");
const hex = document.querySelector("#hex");



function getColorIndex()
{
	return (Math.floor(colorsArray.length * Math.random()));
}


function changeBackgroundColor()
{
	const color = colorsArray[getColorIndex()];
	
	hex.innerText = color;
	body.style.backgroundColor = color;
}


const btn = document.querySelector(".btn");
btn.onclick = changeBackgroundColor;




