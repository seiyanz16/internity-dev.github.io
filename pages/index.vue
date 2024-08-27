<script setup lang="ts">
const VectorFeaturedReport = resolveComponent("VectorFeaturedReport");
const VectorFeaturedAttendance = resolveComponent("VectorFeaturedAttendance");
const VectorFeaturedPlace = resolveComponent("VectorFeaturedPlace");

const featuredItem = [
	{
		image: VectorFeaturedReport,
		head: "Buat dan pantau laporan",
		body: "Pengguna dapat membuat laporan langsung dalam aplikasi, tak perlu khawatir lupa karena kami akan selalu mengingatkan",
	},
	{
		image: VectorFeaturedAttendance,
		head: "Absensi mudah dimana saja",
		body: "Pengguna dapat melakukan absensi dimana saja dengan mudah melalui aplikasi",
	},
	{
		image: VectorFeaturedPlace,
		head: "Informasi tempat PKL",
		body: "Dapatkan informasi tempat PKL yang tersedia dan daftar dengan mudah",
	},
];
</script>

<template>
	<main>
		<Head>
			<TheHead />
		</Head>

		<section class="jumbotron">
			<div class="jumbotron__content">
				<div class="jumbotron__logo">
					<img class="logo__image" src="/logo.png" alt="Internity" />
					<span class="logo__text">internity</span>
				</div>

				<div class="jumbotron__hero">
					<div class="left__content">
						<div class="text">
							<p>kontrol dan pantau kegiatan <span>PKL</span> dengan mudah dalam satu aplikasi</p>
						</div>
						<div class="action">
							<a href="https://app.internity.smkn1cibinong.sch.id/register" class="action__button signup" target="_blank">Daftar</a>
							<a href="https://app.internity.smkn1cibinong.sch.id/login" class="action__button signin" target="_blank">Masuk</a>
						</div>
					</div>
					<div class="right__content">
						<VectorNotes />
					</div>
				</div>
			</div>

			<div class="eclipse-1 eclipse">
				<img src="/eclipse-1.png" alt="eclipse-1" />
			</div>
			<div class="eclipse-2 eclipse">
				<img src="/eclipse-2.png" alt="eclipse-2" />
			</div>
		</section>

		<section class="featured">
			<header class="featured__head">mengapa internity?</header>

			<div class="featured__content">
				<div class="item" v-for="item in featuredItem">
					<div class="item__image">
						<component :is="item.image" />
					</div>
					<div class="item__head">
						<p>{{ item.head }}</p>
					</div>
					<div class="item__body">
						<p>{{ item.body }}</p>
					</div>
				</div>
			</div>
		</section>

		<section class="download">
			<div class="download__content">
				<div class="left__content">
					<VectorDownloadNow />
				</div>
				<div class="right__content">
					<div class="text">
						<header class="text__head">Download Sekarang</header>
						<p class="text__body">dapatkan segala kemudahan yang kami tawarkan</p>
					</div>

					<div class="action">
						<img src="/google-play-badge.png" alt="" />
					</div>
				</div>
			</div>
		</section>

		<footer class="copyright flex justify-center text-text-white text-center mt-10 font-semibold py-5 gap-x-10">
			<p>Copyright 2022 © Internity-dev.github.io</p>

			<NuxtLink to="/privacy" class="text-text-white hover:underline">Privacy Policy</NuxtLink>
		</footer>
	</main>
</template>

<style lang="postcss" scoped>
section.jumbotron {
	@apply relative;

	.jumbotron__content {
		@apply bg-bg-primary/20 backdrop-blur;

		.jumbotron__logo {
			@apply flex items-center pt-5 pl-5;

			.logo__text {
				@apply font-inter font-bold uppercase text-text-white tracking-[0.15em] ml-2 text-lg;
			}
		}

		.jumbotron__hero {
			@apply flex justify-center items-center pt-10 px-32 gap-x-48;

			.left__content {
				.text {
					p {
						@apply text-4xl font-medium text-text-white leading-snug capitalize;
						word-spacing: 0.1em;

						span {
							background: linear-gradient(180deg, #77f7ff 0%, #4a9dff 100%);
							-webkit-background-clip: text;
							-webkit-text-fill-color: transparent;
							background-clip: text;
							text-fill-color: transparent;
							font-weight: bold;
						}
					}
				}

				.action {
					@apply mt-8 text-base flex gap-x-5;
					.action__button {
						@apply py-2 px-5 rounded-md text-text-white font-bold inline-block;
					}
					.signup {
						@apply relative z-10;
						background-image: linear-gradient(104.81deg, #0098da 12.76%, #2aef79 105.11%, #30ffc1 105.12%);

						&::before {
							@apply rounded-md absolute top-0 left-0 bottom-0 right-0 bg-origin-border border-2 border-transparent -z-10 opacity-0 text-text-white;
							@apply transition-opacity ease-in-out duration-300;
							content: "";
							background-image: linear-gradient(#0144a7, #0144a7), radial-gradient(circle at top left, #0098da, #30ffc1);
							background-clip: padding-box, border-box;
						}

						&:hover::before {
							@apply opacity-100;
						}
					}

					.signin {
						@apply border-2 border-transparent bg-origin-border z-10 relative;
						background-image: linear-gradient(#0144a7, #0144a7), radial-gradient(circle at top left, #0098da, #30ffc1);
						background-clip: padding-box, border-box;

						&::before {
							@apply absolute top-0 left-0 bottom-0 right-0 text-text-white -z-10 opacity-0;
							@apply transition-opacity ease-in-out duration-300;
							content: "";
							background-image: linear-gradient(104.81deg, #0098da 12.76%, #2aef79 105.11%, #30ffc1 105.12%);
						}

						&:hover::before {
							@apply opacity-100;
						}
					}
				}
			}

			.right__content {
				/* responsive */
				@apply hidden lg:flex;
			}
		}
	}

	.eclipse-1 {
		@apply flex justify-end absolute top-0 right-0 -z-10 drop-shadow-[0_4px_100px_#00F0C5];

		img {
			@apply w-[50%] md:min-w-max;
		}
	}

	.eclipse-2 {
		@apply flex justify-start absolute bottom-0 left-0 -z-10 drop-shadow-[0_4px_100px_#00F0C5];

		img {
			@apply w-[50%] md:min-w-max;
		}
	}
}

section.featured {
	@apply px-20 mt-20;

	.featured__head {
		@apply text-text-white text-xl font-bold capitalize;
	}

	.featured__content {
		@apply flex gap-x-16 mt-5;

		.item {
			@apply flex-1 flex flex-col gap-y-5 bg-text-white p-8 rounded-xl;

			.item__head {
				@apply text-text-black text-base font-bold capitalize;
			}

			.item__body {
				@apply text-text-black text-sm font-medium;
			}
		}
	}
}

section.download {
	.download__content {
		@apply flex justify-center gap-x-16 mt-5 items-center px-20;

		.right__content {
			.text {
				.text__head {
					@apply text-text-white text-3xl font-bold capitalize;
				}

				.text__body {
					@apply text-text-white text-base font-medium mt-1;
				}
			}

			.action {
				@apply mt-5;

				img {
					@apply w-[30%];
				}
			}
		}
	}
}
</style>
