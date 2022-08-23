const reset = document.querySelector(".reset_btn > button");

var section = document.querySelector("#list-lac-nft");

const galleryLoader = $(".gallery-cont");
let start = 0;
let end = 12;

function loader(show = true) {
	if (show) {
		galleryLoader.addClass("loader");
		return;
	}
	galleryLoader.removeClass("loader");
}

loader();
var metaData = [];
var filterData = [];
var reachedBottom = false;
var stopScroll = false;
var isFilter = false;

fetch(`./assets/json/meta.json`)
	.then(function (response) {
		return response.json();
	})
	.then(function (json) {
		loader(false);
		metaData = json;
		filter(metaData);
	})
	.catch(function (error) {
		console.log(error);
	});

function filter() {
	var meta = isFilter ? filterData : metaData;
	meta = meta.slice(start, end);
	//console.log(meta, "here");

	if (!meta.length) {
		$(".gallery .data").html("<h5>No results found</h5>");
		loader(false);
		return;
	}

	for (let i = 0; i < meta.length; i++) {
		var li = document.createElement("li");
		var a = document.createElement("a");
		a.setAttribute("href", meta[i].hash);
    	a.target = "_blank";
		var myPara1 = document.createElement("p");
		// console.log(meta[i].attributes)
		var img = document.createElement("img");
		img.dataset.src;
		img.src = meta[i].image;
		img.loading = "lazy";

		myPara1.textContent = `Lady Apes #${meta[i].name}`;
		a.appendChild(img);
		li.appendChild(a);
		li.classList.add("item-lac");
		li.setAttribute("data-num", meta[i].name); 

		if (typeof meta[i].attributes.Head === "object") {
			console.log(meta[i].attributes.Head[1].Head02);
		}

		if (meta[i].attributes.Background) {
			li.setAttribute("data-background", meta[i].attributes.Background);
		}
		if (meta[i].attributes.Mouth) {
			li.setAttribute("data-mouth", meta[i].attributes.Mouth);
		}
		if (meta[i].attributes.Fur) {
			li.setAttribute("data-fur", meta[i].attributes.Fur);
		}
		if (meta[i].attributes.Clothes) {
			li.setAttribute("data-clothes", meta[i].attributes.Clothes);
		}
		if (meta[i].attributes.Necklace) {
			li.setAttribute("data-necklace", meta[i].attributes.Necklace);
		}
		if (meta[i].attributes.Glasses) {
			li.setAttribute("data-glasses", meta[i].attributes.Glasses);
		}
		if (meta[i].attributes.Head) {
			li.setAttribute("data-head", meta[i].attributes.Head);
		}
		if (meta[i].attributes.Earring) {
			li.setAttribute("data-earring", meta[i].attributes.Earring);
		}
		if (meta[i].attributes.Eyes) {
			li.setAttribute("data-eyes", meta[i].attributes.Eyes);
		}
		if (meta[i].attributes.Head02) {
			li.setAttribute("data-head02", meta[i].attributes.Head02);
		}
		if (meta[i].attributes.Special) {
			li.setAttribute("data-special", meta[i].attributes.Special);
		}
		li.appendChild(myPara1);
		section.appendChild(li);

		const options = { threhold: 0.1 };
		const io = new IntersectionObserver((entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					var image = entry.target;
					image.src = image.dataset.src;
					entry.target.classList.add("visible");
					io.unobserve(image);
				} else {
					entry.target.classList.remove("visible");
				}
			});
		}, options);

		document.querySelectorAll(".item-lac").forEach((item) => io.observe(item));
		reachedBottom = false;
	}

	loader(false);

	$(window).on("scroll", function () {
		if (
			$(this).scrollTop() + $(this).innerHeight() >=
				$(".gallery-cont")[0].scrollHeight &&
			!stopScroll
		) {
			if (!reachedBottom) {
				loader();
				reachedBottom = true;
				setTimeout(function () {
					start = end;
					end = end + 12;
					filter();
				}, 1000);
			}
		}
	});
}






