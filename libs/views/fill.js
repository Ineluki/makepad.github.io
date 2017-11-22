module.exports=class Fill extends require('base/view'){
	prototype(){
		this.name = 'Fill'
		this.props = {
			color:'red'
		}
		this.nest = {
			Bg:require('shaders/quad').extend({
				color:''
			})
		}
	}

	onDraw(){
		this.drawBg({
			x:0,
			y:0,
			w:this.$w,
			h:this.$h,
			color:this.color
		})
	}
}