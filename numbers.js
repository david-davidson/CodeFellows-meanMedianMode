// Since median sometimes requires mean, let's put all three in functions
var mean = function(numbers) {
	var meanSum = 0;
	for (var i = 0; i < numbers.length; i++) {
		meanSum += new Number(numbers[i]);
	}
	return (meanSum / numbers.length);
}
var median = function(numbers) {
	var numbers = numbers.slice().sort(function(a, b) { 
		return a - b;  // .slice() lets us sort a copy, not the original: cleaner
	});
	if (numbers.length % 2 != 0) {
		// Odd number of arguments? Return the middle number...
		var middle = (numbers.length - 1) / 2;
		return numbers[middle]; 
	} else {
		// ...Even? Return the mean of the middle two
		var lowerMiddle = Math.floor((numbers.length - 1) / 2);
		var higherMiddle = Math.ceil((numbers.length - 1) / 2);
		return mean([numbers[lowerMiddle], numbers[higherMiddle]]);
	}
}
var mode = function(numbers) {
	var numAppearances = [];
	var winners = [];
	var prevMax = 0;
	for (var i = 0; i < numbers.length; i++) {
		// Increment the count if it's available; otherwise, start a new one
		numAppearances[numbers[i]] = (numAppearances[numbers[i]] || 0) + 1;
		if (numAppearances[numbers[i]] > prevMax) {
			prevMax = numAppearances[numbers[i]];
			winners = []; // Clear previous winner(s)
			winners.push(numbers[i]);
		} else if (numAppearances[numbers[i]] == prevMax) {
			winners.push(numbers[i]); // DON'T clear previous winner(s)
		}
	}
	if (winners.length > 1) {
		return "It's a tie between " + winners.join(' and ');
	} else {
		return winners[0];
	}
}
if (process.argv.length <= 2) {
	console.log('Uh oh, you didn\'t give me any numbers!');
} else {
	process.argv.splice(0,2); // Trim argv[] to just the "real" arguments
	for (var i = 0; i < process.argv.length; i++) {
		if (isNaN(process.argv[i])) {
			process.argv.splice(i, 1); // Remove non-numbers, just to be safe
		}
	}
	console.log('mean: ' + mean(process.argv));
	console.log('median: ' + median(process.argv));
	console.log('mode: ' + mode(process.argv));
}