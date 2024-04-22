/*
	Paradigm Shift by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			default:   ['1681px',   null       ],
			xlarge:    ['1281px',   '1680px'   ],
			large:     ['981px',    '1280px'   ],
			medium:    ['737px',    '980px'    ],
			small:     ['481px',    '736px'    ],
			xsmall:    ['361px',    '480px'    ],
			xxsmall:   [null,       '360px'    ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Hack: Enable IE workarounds.
		if (browser.name == 'ie')
			$body.addClass('is-ie');

	// Mobile?
		if (browser.mobile)
			$body.addClass('is-mobile');

	// Scrolly.
		$('.scrolly')
			.scrolly({
				offset: 100
			});

	// Polyfill: Object fit.
		if (!browser.canUse('object-fit')) {

			$('.image[data-position]').each(function() {

				var $this = $(this),
					$img = $this.children('img');

				// Apply img as background.
					$this
						.css('background-image', 'url("' + $img.attr('src') + '")')
						.css('background-position', $this.data('position'))
						.css('background-size', 'cover')
						.css('background-repeat', 'no-repeat');

				// Hide img.
					$img
						.css('opacity', '0');

			});

			$('.gallery > a').each(function() {

				var $this = $(this),
					$img = $this.children('img');

				// Apply img as background.
					$this
						.css('background-image', 'url("' + $img.attr('src') + '")')
						.css('background-position', 'center')
						.css('background-size', 'cover')
						.css('background-repeat', 'no-repeat');

				// Hide img.
					$img
						.css('opacity', '0');

			});

		}

	// Gallery.
		$('.gallery')
			.on('click', 'a', function(event) {

				var $a = $(this),
					$gallery = $a.parents('.gallery'),
					$modal = $gallery.children('.modal'),
					$modalImg = $modal.find('img'),
					href = $a.attr('href');

				// Not an image? Bail.
					if (!href.match(/\.(jpg|gif|png|mp4)$/))
						return;

				// Prevent default.
					event.preventDefault();
					event.stopPropagation();

				// Locked? Bail.
					if ($modal[0]._locked)
						return;

				// Lock.
					$modal[0]._locked = true;

				// Set src.
					$modalImg.attr('src', href);

				// Set visible.
					$modal.addClass('visible');

				// Focus.
					$modal.focus();

				// Delay.
					setTimeout(function() {

						// Unlock.
							$modal[0]._locked = false;

					}, 600);

			})
			.on('click', '.modal', function(event) {

				var $modal = $(this),
					$modalImg = $modal.find('img');

				// Locked? Bail.
					if ($modal[0]._locked)
						return;

				// Already hidden? Bail.
					if (!$modal.hasClass('visible'))
						return;

				// Stop propagation.
					event.stopPropagation();

				// Lock.
					$modal[0]._locked = true;

				// Clear visible, loaded.
					$modal
						.removeClass('loaded')

				// Delay.
					setTimeout(function() {

						$modal
							.removeClass('visible')

						setTimeout(function() {

							// Clear src.
								$modalImg.attr('src', '');

							// Unlock.
								$modal[0]._locked = false;

							// Focus.
								$body.focus();

						}, 475);

					}, 125);

			})
			.on('keypress', '.modal', function(event) {

				var $modal = $(this);

				// Escape? Hide modal.
					if (event.keyCode == 27)
						$modal.trigger('click');

			})
			.on('mouseup mousedown mousemove', '.modal', function(event) {

				// Stop propagation.
					event.stopPropagation();

			})
			.prepend('<div class="modal" tabIndex="-1"><div class="inner"><img src="" /></div></div>')
				.find('img')
					.on('load', function(event) {

						var $modalImg = $(this),
							$modal = $modalImg.parents('.modal');

						setTimeout(function() {

							// No longer visible? Bail.
								if (!$modal.hasClass('visible'))
									return;

							// Set loaded.
								$modal.addClass('loaded');

						}, 275);

					});

})(jQuery);
// main.js

// Call the incrementImageName function from util.js
const imageNames = [];
const imageContainer = document.getElementById('imageContainer'); // Get the container div

// Generate image names and create img elements
for (let i = 0; i < 10; i++) {
    const imageName = incrementImageName('0x.jpg', i);
    imageNames.push(imageName);

    // Create img element
    const img = document.createElement('img');
    img.src = imageName; // Set the image source
    img.alt = `Image ${i}`; // Set the alt text

    // Append img element to the container
    imageContainer.appendChild(img);
}
document.addEventListener('DOMContentLoaded', function() {
    const generateButton = document.getElementById('generateButton');
    generateButton.addEventListener('click', generateTable);
});

// Define function to generate multiplication table
function generateTable() {
    // Get the number input value
    const number = parseInt(document.getElementById('number').value);

    // Clear previous table, if any
    const tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = '';

    // Create table element
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');

    // Generate multiplication table rows
    for (let i = 1; i <= 10; i++) {
        const row = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');

        td1.textContent = `${number} x ${i}`;
        td2.textContent = number * i;

        row.appendChild(td1);
        row.appendChild(td2);
        tbody.appendChild(row);
    }

    // Append tbody to table and table to container
    table.appendChild(tbody);
    tableContainer.appendChild(table);
}

// Call the generateTable function when the button is clicked
document.addEventListener('DOMContentLoaded', function() {
    const generateButton = document.getElementById('generateButton');
    generateButton.addEventListener('click', generateTable);
});
