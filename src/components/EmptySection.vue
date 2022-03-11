<template>
	<div>
		<div class="container">
			<svg class="neutral" width="44px" height="44px" viewBox="0 0 44 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
				<link rel="stylesheet" href="neutralEmoji.scss" type="text/css">
				<g>
					<circle id="body" fill="#F9AC1B" cx="22" cy="22" r="22"></circle>
					<g class="face">
						<g transform="translate(13.000000, 20.000000)" fill="#2C0E0F">
							<g class="mouth">
									<g transform="translate(9, 5)" >
										<rect x="-2" y="0" width="4" height="2" rx="2"></rect>
									</g>
								</g>
								<ellipse class="right-eye" cx="16.0941176" cy="1.75" rx="1.90588235" ry="1.75"></ellipse>
								<ellipse class="left-eye" cx="1.90588235" cy="1.75" rx="1.90588235" ry="1.75"></ellipse>
						</g>
					</g>
				</g>
			</svg>
			<div class="empty">
				{{ description }}
			</div>
		</div>
	</div>
</template>

<script>
export default ({
	name: 'EmptyPage',
	props: {
		description: {
			type: String,
		}
	}
})
</script>

<style lang="scss">
	.container {
		&:first-child {
			position: relative;
			top: 10%;
			text-align: center;
		}
	}

	.empty {
		text-align: center;
	}

	.neutral { 
    margin-bottom: 1.25rem;

    .face {
        animation: upAndDown 6s ease infinite; 
    }
    
    .left-eye, .right-eye {
        opacity: 1;
        transform-origin: 0 1px;
        animation: blink 3s linear infinite;
        animation-delay: 1s;
    }
    .mouth {
        animation: scaleX 2s ease infinite alternate-reverse;
    }
}

	@keyframes upAndDown {
		0% { transform: translate(0, -1px); }
		50% { transform: translate(0, 2px); }
		100% { transform: translate(0, -1px); }
	}

	@keyframes scaleX {
		0% { transform: translate(0, 0) scale(1, 1); }
		100% { transform: translate(-9px, 0) scale(2, 1); }
	}

	@keyframes blink {
		0% { opacity: 1; }
		45% { opacity: 1; }
		50% { opacity: 0; }
		55% { opacity: 1; }
		100% { opacity: 1; }
	}
</style>