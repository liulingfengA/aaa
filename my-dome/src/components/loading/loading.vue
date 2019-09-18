<template>
	<transition name="loading-fade" @after-leave="handleAfterLeave">
		<div
			v-show="visible"
			class="loading-mask"
			:style="{ backgroundColor: background || '' }"
			:class="[customClass, { 'is-fullscreen': fullscreen }]"
		>
			<div class="loading-spinner">
				<div class="spinners_wrapper">
					<div class="spinners" role="progressbar">
						<div class="spinner spinner0">
							<div class="spinner_inner spinner0_inner"></div>
						</div>
						<div class="spinner spinner1">
							<div class="spinner_inner spinner1_inner"></div>
						</div>
						<div class="spinner spinner2">
							<div class="spinner_inner spinner2_inner"></div>
						</div>
						<div class="spinner spinner3">
							<div class="spinner_inner spinner3_inner"></div>
						</div>
						<div class="spinner spinner4">
							<div class="spinner_inner spinner4_inner"></div>
						</div>
						<div class="spinner spinner5">
							<div class="spinner_inner spinner5_inner"></div>
						</div>
						<div class="spinner spinner6">
							<div class="spinner_inner spinner6_inner"></div>
						</div>
						<div class="spinner spinner7">
							<div class="spinner_inner spinner7_inner"></div>
						</div>
						<div class="spinner spinner8">
							<div class="spinner_inner spinner8_inner"></div>
						</div>
						<div class="spinner spinner9">
							<div class="spinner_inner spinner9_inner"></div>
						</div>
					</div>
				</div>
				<p v-if="text" class="loading-text">{{ text }}</p>
			</div>
		</div>
	</transition>
</template>

<script>
export default {
	data() {
		return {
			text: null,
			background: null,
			fullscreen: true,
			visible: false,
			customClass: ''
		}
	},

	methods: {
		handleAfterLeave() {
			this.$emit('after-leave')
		},
		setText(text) {
			this.text = text
		}
	}
}
</script>
<style lang="less" scoped>
@keyframes spinner-line-fade-quick {
	0%,
	39%,
	100% {
		opacity: 0.25;
	}
	40% {
		opacity: 1;
	}
}

.spinners_wrapper {
	position: relative;
	width: 60px;
	height: 60px;
	margin-bottom: 10px;
	.spinners {
		position: absolute;
		width: 0px;
		left: 50%;
		top: 50%;
		transform: scale(0.4);
	}
	.spinner {
		position: absolute;
		top: -4px;
		width: 25px;
		height: 8px;
		background: transparent;
		border-radius: 4px;
		transform-origin: left center;
	}
	.spinner_inner {
		width: 100%;
		height: 100%;
		background: rgb(255, 255, 255);
		border-radius: 4px;
		box-shadow: transparent 0px 0px 1px;
	}
	.spinner0 {
		transform: rotate(0deg) translateX(25px);
	}
	.spinner0_inner {
		animation: 1s linear -1s infinite normal none running spinner-line-fade-quick;
	}
	.spinner1 {
		transform: rotate(36deg) translateX(25px);
	}
	.spinner1_inner {
		animation: 1s linear -0.9s infinite normal none running spinner-line-fade-quick;
	}
	.spinner2 {
		transform: rotate(72deg) translateX(25px);
	}
	.spinner2_inner {
		animation: 1s linear -0.8s infinite normal none running spinner-line-fade-quick;
	}
	.spinner3 {
		transform: rotate(108deg) translateX(25px);
	}
	.spinner3_inner {
		animation: 1s linear -0.7s infinite normal none running spinner-line-fade-quick;
	}
	.spinner4 {
		transform: rotate(144deg) translateX(25px);
	}
	.spinner4_inner {
		animation: 1s linear -0.6s infinite normal none running spinner-line-fade-quick;
	}
	.spinner5 {
		transform: rotate(180deg) translateX(25px);
	}
	.spinner5_inner {
		animation: 1s linear -0.5s infinite normal none running spinner-line-fade-quick;
	}
	.spinner6 {
		transform: rotate(216deg) translateX(25px);
	}
	.spinner6_inner {
		animation: 1s linear -0.4s infinite normal none running spinner-line-fade-quick;
	}
	.spinner7 {
		transform: rotate(252deg) translateX(25px);
	}
	.spinner7_inner {
		animation: 1s linear -0.3s infinite normal none running spinner-line-fade-quick;
	}
	.spinner8 {
		transform: rotate(288deg) translateX(25px);
	}
	.spinner8_inner {
		animation: 1s linear -0.2s infinite normal none running spinner-line-fade-quick;
	}
	.spinner9 {
		transform: rotate(324deg) translateX(25px);
	}
	.spinner9_inner {
		animation: 1s linear -0.1s infinite normal none running spinner-line-fade-quick;
	}
}

.loading-mask {
	position: absolute;
	z-index: 2000;
	background-color: transparent;
	margin: 0;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	transition: opacity 0.3s;
	display: flex;
	align-items: center;
	justify-content: center;
}
.loading-mask.is-fullscreen {
	position: fixed;
}
.loading-spinner {
	width: 100px;
	height: 100px;
	background: rgba(0, 0, 0, 0.6);
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	border-radius: 4px;
}
.loading-text {
	color: #fff;
	letter-spacing: 1px;
	font-size: 12px;
}
</style>

