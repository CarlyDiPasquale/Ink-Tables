import React, { Component } from "react";
import { render, Color } from "ink";
import Table from "ink-table";

const data = [
	{
		Name: "Gouda",
		Gender: "Female",
		Age: 3,
		Breed: "Chihuahua",
		Color: "Brown/tan",
	},
	{
		Name: "Pastrami",
		Gender: "Male",
		Age: 2,
		Breed: "Cavapoo",
		Color: "Golden",
	},
	{
		Name: "Shamus",
		Gender: "Male",
		Age: 7,
		Breed: "Labordoodle",
		Color: "Cream",
	},
	{
		Name: "Pepper",
		Gender: "Female",
		Age: 10,
		Breed: "Doberman",
		Color: "Black/brown",
	},
];

const BasicTable = () => <Table data={data} />;

render(<BasicTable />);
