<template>
    <footer id="myfooter" class="footerv1">
		<section class="nospacing">
			<div class="footer_signup-container">
				<label class="footer_signup-container-subtitle" for="">BE THE FIRST TO KNOW</label>
				<label class="footer_signup-container-title" for="">sign up for our newsletter</label>
				<div class="footer_signup-container-form">
					<form id="footer_signup" class="email_signup" action="">
						<input type="email" placeholder="email address">
						<input type="submit" class="btn-main" value="Enter">
					</form>
				</div>
			</div>
			<div class="footer_social-container">
				<ul>
					<li>
						<routerLink to=""  class="footer_social-facebook hvr-float">
							  <svg class="iconfacebook" aria-hidden="true">
                          		<use xlink:href="#iconfacebook"></use>
              	</svg>
						</routerLink>
					</li>
					<li>
						<routerLink to=""  class="footer_social-facebook hvr-float">
							  <svg class="iconinstagram" aria-hidden="true">
                          		<use xlink:href="#iconinstagram"></use>
                </svg>
						</routerLink>
					</li>
					<li>
						<routerLink to=""  class="footer_social-facebook hvr-float">
							 <svg class="iconttww" aria-hidden="true">
                          		<use xlink:href="#iconttww"></use>
                   			 </svg>
						</routerLink>
					</li>
					<li>
						<routerLink to=""  class="footer_social-facebook hvr-float">
							 <svg class="iconsnapchat" aria-hidden="true">
                          		<use xlink:href="#iconsnapchat"></use>
                   			 </svg>
						</routerLink>
					</li>
					<li>
						<routerLink to=""  class="footer_social-facebook hvr-float">
							 <svg class="iconyoutube" aria-hidden="true">
                          		<use xlink:href="#iconyoutube-copy"></use>
                   			 </svg>
						</routerLink>
					</li>
				</ul>
			</div>
			<div class="footer_navigation-container">
				<ul>
					<li><routerLink to="" >ABOUT US</routerLink></li>
					<li><routerLink to="" >FAQ</routerLink></li>
					<li><routerLink to="" >STUDENT DISCOUNT</routerLink></li>
					<li><routerLink to="" >TERMS</routerLink></li>
					<li><routerLink to="" >PRIVACY POLICY</routerLink></li>
					<li><routerLink to="" >CONTACT US</routerLink></li>
				</ul>
			</div>
			<div class="foot_copyright-container">
				<routerLink to="" >© 2019 SEEDBEAUTY</routerLink>
			</div>
		</section>
	</footer>
</template>
<style scoped>
#footer {
    display: block;
    padding: 60px 20px 20px 20px;
}
#footer{
	font: 1em/1 "VisbyCFDemiBold","Helvetica Neue",Helvetica,Arial,sans-serif;
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #333;
    letter-spacing: 0.08em;
    flex-direction: column;
    padding: 60px 0 20px 0;
}
.footerv1{
	width: 100%;
	text-align: center;
}
.footer_signup-container label{
	display: block;
}
.footer_signup-container-form{
	display: block;
}
.footerv1 .footer_signup-container .footer_signup-container-subtitle{
	font-size: 0.9em;
    letter-spacing: 0.1em;
    display: block;
    margin-bottom: 5px;
	color:#333;
	font-weight:540;
}
.footerv1 .footer_signup-container .footer_signup-container-title {
    font-size: 25px;
    padding: 10px 10px 30px 10px;
    margin: 0;
    font-weight: bolder;
    text-transform: lowercase;
    letter-spacing: 0.1em;
    display: block;
}
.footerv1 .footer_signup-container-form [type="email"]{
	margin-right: -1px;
    width: 80%;
    font-size: 16px;
    text-align: left;
	padding: 15px;
    border: 1px solid #333;
	vertical-align: middle;
	box-sizing: border-box;
	height: 51px;
}
.footerv1 .footer_signup-container-form [type="submit"]{
	text-transform: uppercase;
	padding: 14px 0px;
	height: 51px;
}
@media screen and (min-width:980px){
	.footerv1 .footer_signup-container-form [type="email"]{
	margin-right: -1px;
    width: 80%;
    max-width: 480px;
    font-size: 16px;
    text-align: left;
	}
	.footerv1 .footer_signup-container-form [type="submit"]{
	width: 20%;
    max-width: 200px;
	}
	
}
@media screen and (min-width:501px) and (max-width:979px){
	.footerv1 .footer_signup-container-form [type="email"]{
	margin-right: -1px;
    width: 20%;
    width: 315px;
    font-size: 16px;
    text-align: left;
	}
	.footerv1 .footer_signup-container-form [type="submit"]{
	width: 20%;
    max-width:78px;
	}
	
}
@media screen and (max-width:500px){
	.footerv1 .footer_signup-container-form [type="email"]{
    max-width: 265px;
	}
	.footerv1 .footer_signup-container-form [type="submit"]{
    width: 265px;
	margin: 10px 0 0 0;
	}
}
.footerv1 .footer_social-container li{
	display: inline-block;
	padding: 0 15px;
}
.footerv1 .footer_social-container ul{
	margin: 0 0 20px 0;
}
.footerv1 .footer_social-container{
	margin: 40px auto;
}
.footerv1 .footer_navigation-container li{
	display:inline-block;
	margin-right: 20px;
	font-size: 12px;
	color: #333;
	font: 12px/1 "VisbyCFExtraBold","Helvetica Neue",sans-serif;
    
}
.footerv1 .footer_navigation-container li a{
	padding: 10px 0;
    display: block;
    color: #333;
	font-weight: bold;
}
.footerv1 .footer_navigation-container ul{
	margin: 0 0 20px 0;
}
.footerv1 .foot_copyright-container{
	font-size: 11px;
}
.footerv1 .foot_copyright-container a{
	color: #333;
}

</style>