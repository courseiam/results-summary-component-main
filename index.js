const summarySkills = document.querySelector('.summary__skills');

const colour = {
	Reaction: 'red',
	Memory: 'orangey',
	Verbal: 'green',
	Visual: 'blue',
};

const getData = async () => {
	const url = '/data.json';
	try {
		const responce = await fetch(url);
		if (!responce.ok) {
			throw new Error(`Response status: ${responce.ststus}`);
		}

		const result = await responce.json();
		console.log(result);
		return result;
	} catch (error) {
		console.error(error.message);
	}
};

getData().then((data) => {
	console.log(data);
	data.forEach((d) => {
		console.log(d.category);
		summarySkills.insertAdjacentHTML(
			'beforeend',
			`<article class="skill skill--${colour[d.category]}">
						<div class="skill__left">
							<img
								class="skill__img"
								src="${d.icon}"
								alt="${d.category}"
							/>
							<h3 class="skill__title skill__title--${colour[d.category]}">${d.category}</h3>
						</div>
						<div class="skill__right">
							<p class="skill__out-of"><span class="black">${d.score}</span> / 100</p>
						</div>
					</article>`,
		);
	});
});
