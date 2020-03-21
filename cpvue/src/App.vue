<template>
  <div id="app">
		<myheader></myheader>
    <router-view></router-view>
    <myfooter></myfooter>
  </div>
</template>

<style>
*{margin: 0px; padding: 0px; box-sizing: border-box}
a{text-decoration: none;color: #111}
ul li{list-style: none}
.clearfix:after{
	content: "";
	display: block;
	clear: both;
}
.clearfix:before{
	content: "";
	display: block;
	clear: both;
}
.blank{
	height: 186px;
}
/* 按钮样式 */
input[type="submit"] {
			font: 0.8em/1 "VisbyCFBold","Helvetica Neue",Helvetica,Arial,sans-serif;
			text-transform: uppercase;
			text-align: center;
			text-decoration: none;
			padding: 1.329em 0.78em;
			background: transparent;
			color: #333;
			border: solid 1px #333;
			cursor: pointer;
			border-radius: 0;
			letter-spacing: 0.0625em;
			transition: all 0.2s ease;
}
input[type="submit"]:hover{
	background: #333;
	color: #fff;
}
</style>
