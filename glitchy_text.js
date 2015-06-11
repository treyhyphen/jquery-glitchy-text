/*
  glitchy_text.js
  treyhyphen (https://keybase.io/treyhyphen)
*/
(function ($) {
	$.fn.glitch = function () {
		var string = this.text()

		rnd_char(this, string.split(''))

		function rnd_char (el, string_arr) {
			//var num_chars = Math.floor(Math.random()*(string_arr.length/5)) - 1;
			var num_chars = 1
			var magic_number = 3
			var random_max = 20

			var indexes = []
			var new_string_arr = []

			for (i = 0; i < string_arr.length; i++) {
				new_string_arr[i] = string_arr[i]
			}


			setTimeout(function() {

				var random = Math.floor(Math.random() * random_max) + 1

				if (random == magic_number) {

					for (i = 0; i < num_chars; i++) {
						new_string_arr[Math.floor(Math.random()*new_string_arr.length)] = '&#' + ( Math.floor(Math.random() * (125-33) + 33) ) + ';'
					}

					el.html(new_string_arr.join(''))

					setTimeout(function() {
						el.html(string_arr)
					}, 50)

					
				}
				rnd_char(el, string_arr)

			}, 50)
		}
	}
}(jQuery));
