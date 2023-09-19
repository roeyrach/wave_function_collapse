import tile from "./tiles/tile.png"
import blank from "./tiles/blank.png"

const rows = []

const grid = []

const DIM = 4

const BLANK = blank
const UP = 0
const RIGHT = 90
const LEFT = 270
const DOWN = 180

function setup() {
	for (let i = 0; i < DIM * DIM; i++) {
		grid[i] = {
			collapsed: false,
			options: [BLANK, UP, RIGHT, LEFT, DOWN],
		}
	}
	grid[0].collapsed = true
	grid[0].options = [LEFT, RIGHT]
	grid[1].collapsed = true
	grid[1].options = [RIGHT, UP]
}

function draw() {
	setup()

	const gridCopy = grid.slice()
	const newGrid = gridCopy
		.sort((a, b) => {
			return a.options.length - b.options.length
		})
		.filter((obj) => gridCopy[0].options.length === obj.options.length)

	const cell = grid[Math.floor(Math.random() * newGrid.length)]
	console.log(cell)
	cell.collapsed = true
	const pick = cell.options[Math.floor(Math.random() * cell.options.length)]
	cell.options = [pick]

	for (let i = 0; i < DIM; i++) {
		const col = []
		for (let j = 0; j < DIM; j++) {
			let cell = grid[i + j * DIM]
			if (cell.collapsed) {
				col.push({ tile, rotate: cell.options[0] })
			} else {
				col.push({ tile: blank })
			}
		}
		rows.push(col)
	}

	return rows
}

export default draw
