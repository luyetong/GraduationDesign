<template>
    <div id="shopify-section-theme_navigation">
		<section data-section-type="Navigation">
			<nav id="navigation">
				<div class="navigation_container">
					<ul class="navigation_list" id="back" v-if='isMore==false'>
						<button class="navigation_list--show-more" @click="more">
							<li  class="navigation_list--header">Colourpop</li>
                        </button>
                        <li class="navigation_list--header" v-for="(nav,i) of navs1" :key='i'>
                            <a href="javascript:;">{{nav}}</a>
                        </li>
                    </ul>
                    <ul class="navigation_list" id="more" v-else>
                        <li class="navigation_list--header" v-for="(nav2,i) of navs2" :key='i' @click="toTheme(i)">
                            {{nav2}}
                        </li> 
                        <li class="navigation_list--back">
                            <button @click="back">back</button>
                        </li>
                    </ul>
				</div>
			</nav>
		</section>
    </div>
</template>
<script>
export default {
    name:'HeaderNavigation',
    data(){
        return{
            navs1:['Sol Body','Fourth Ray Beauty','New Arrivals','Best Sellers','Last Call'],
            navs2:['Lips','eyes','face','glitter','brushes','set & bundles','build your own palette',
            'collabs','cp fam','sale'],
            isMore:false
        }
    },
     methods:{
        more(){
            this.isMore=true
        },
        back(){
            this.isMore=false
        },
        toTheme(i){
            if(i==0){
                console.log('这是lip')
                this.$router.push({path: '/index'})
                this.$emit("toTheme")
            }
            if(i==1){
                this.$router.push({path: '/eyepalettes'})
                console.log('这是eyepalettes')
                this.$emit('toTheme')
            }
            
        }
    }
}
</script>
<style scoped>
section{
	padding: 0 60px;
}
[data-section-type="Navigation"] {
    width: 400px;
	box-sizing: border-box;
    position: fixed;
    color: #111;
    background: #fff;
    height: 100%;
    overflow-y: auto;
    top: 0;
    left: 0;
}
[data-section-type="Navigation"] .navigation_container{
    margin-bottom: 20px;
}
[data-section-type="Navigation"] .navigation_list:first-child{
	margin-top: 110px;
}
[data-section-type="Navigation"] .navigation_list .navigation_list--show-more{
	background-color: transparent;
	border: 0;
	text-align: left;
	padding: 0;
	width: 100%;
}
[data-section-type="Navigation"] .navigation_list .navigation_list--show-more .navigation_list--header{
	background: url("../../assets/img/icon/icon-caret-right.png") 100% center no-repeat;
	background-size: 15px;
	
}
[data-section-type="Navigation"] .navigation_list button .navigation_list--header,[data-section-type="Navigation"] .navigation_list .navigation_list--header{
	display: block;
    font: 15px "Visby CF Extra Bold","Helvetica Neue",Helvetica,Arial,sans-serif;
    text-transform: uppercase;
    margin: 0;
    padding: 13px 0;
    color: #111;
	font-weight: bold;
    cursor: pointer;
}
[data-section-type="Navigation"] .navigation_list .navigation_list--header:hover{
    color: #5E5E5E;
}
[data-section-type="Navigation"] .navigation_list .navigation_list--back ::before{
    content: "\2190";
    margin-right: 10px;
    font-size: 15px;
}
[data-section-type="Navigation"] .navigation_list .navigation_list--back button{
    display: block;
    font: 14px "Visby CF Medium","Helvetica Neue",Helvetica,Arial,sans-serif;
    text-transform: lowercase;
    margin: 0;
    padding: 13px 0;
    color: #111;
    border: 0 none;
    background-color: transparent
}
</style>