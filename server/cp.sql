SET NAMES UTF8;
DROP DATABASE IF EXISTS cp;
CREATE DATABASE cp CHARSET=UTF8;
USE cp;

/**用户信息**/
CREATE TABLE cp_user (
	uid INT PRIMARY KEY AUTO_INCREMENT,
	ufirst_name VARCHAR(32),
	ulast_name VARCHAR(32),
	upwd VARCHAR(32),
	email VARCHAR(64),
	address VARCHAR(255)
);

/**商品表**/
CREATE TABLE cp_product(
	pid INT PRIMARY KEY AUTO_INCREMENT,
	family_id INT,
	main_id INT,
	product_id INT,
	name VARCHAR(64),
	title VARCHAR(255),
	subtitle VARCHAR(255),
	category VARCHAR(32),
	price DECIMAL(10,2),
	sale_price DECIMAL(10,2),
	finish VARCHAR(64),
	shade  VARCHAR(128),
	net_weigth VARCHAR(32),
	tips VARCHAR(255),
	ingredients Text,
	detail Text,
	pic VARCHAR(128),
	href VARCHAR(128),
	review DECIMAL(10,2)
);

/**购物车列表**/
CREATE TABLE cp_cart(
	cid INT PRIMARY KEY AUTO_INCREMENT,
	pid INT,
	uid INT UNIQUE,
	name VARCHAR(64),
	category VARCHAR(32),
	pcount INT,
	price DECIMAL(10,2),
	sale_price DECIMAL(10,2)
);

/**用户购物车列表**/
CREATE TABLE cp_usercart(
	cid INT PRIMARY KEY AUTO_INCREMENT,
	uid INT UNIQUE,
	tprice DECIMAL(10,2) /**购物车价格总价**/
);

/**购物车商品关系表**/
CREATE TABLE cp_pcart(
	cid INT,
	pid INT,
	name VARCHAR(64),
	category VARCHAR(32),
	pcount INT,
	price DECIMAL(10,2),
	sale_price DECIMAL(10,2)
);


/**商品--眼影盘图片**/
CREATE TABLE cp_palette_pic(
	palette_id INT PRIMARY KEY AUTO_INCREMENT,
	pid INT,
	sm VARCHAR(128),
	nor VARCHAR(128)
);

/**用户信息**/
INSERT INTO cp_user VALUES
(1,'lu','yetong','123456','741688310@qq.com',NULL),
(2,'lu','youlin','123456','youllin@qq.com',NULL),
(3,'lu','wanqing','346567','wanqing@qq.com',NULL),
(4,'lu','youkeng','198764','youkeng@qq.com',NULL);


/**眼影盘图片信息**/
INSERT INTO cp_palette_pic VALUES
(1,1,'img/car_small_img/Yes_Please_A_small.webp','img/eye-palettes/Yes_Please.webp'),
(2,2,'img/car_small_img/sweet_talk_palette_small.webp','img/eye-palettes/sweet_talk_palette.webp'),
(3,3,'img/car_small_img/yellow_palette_a_small.webp','img/eye-palettes/yellow_palette.jpg'),
(4,4,'img/eye-palettes/CA_Love_a.webp','img/eye-palettes/CA_Love_a.webp'),
(5,5,'img/eye-palettes/CA_Love_a.webp','img/eye-palettes/CA_Love_a.webp'),
(6,6,'img/eye-palettes/GITMS_A.webp','img/eye-palettes/GITMS_A.webp'),
(7,7,'img/eye-palettes/Strawberry_Shake.webp','img/eye-palettes/Strawberry_Shake.webp'),
(8,8,'img/eye-palettes/Double_Entendre.webp','img/eye-palettes/Double_Entendre.webp');

/**产品信息**/
INSERT INTO cp_product VALUES
(
	1,1,1,1,
	'yes,please!',
	'What do we say to warm, sunset eyes?',
	NUll,
	'shadow palette',
	'16',
	'12.1',
	'matte, metallic',
	'neutrals, oranges/corals, reds, golds, yellows/oranges',
	'12 x 0.85g (0.03oz)',
	'apply with your favorite shadow brushes. flat and firmer brushes will give the most color payoff. fluffier brushes are great for blending. use a small angled brush to line the eyes.',
	'full-zip: synthetic fluorphlogopite, talc, boron nitride, zinc stearate, lauroyl lysine, magnesium stearate, dimethicone, caprylic/capric triglyceride, silica, phenoxyethanol, caprylyl glycol, dimethiconol, ethylhexylglycerin, hexylene glycol, iron oxides (ci 77491, ci 77492, ci 77499), mica (ci 77019), titanium dioxide (ci 77891).
big cocktails: synthetic fluorphlogopite, talc, boron nitride, zing stearate, lauroyl lysine, magnesium stearate, dimethicone, caprylic/capric triglyceride, silica, phenoxyethanol, caprylyl glycol, dimethiconol, ethylhexylglycerin, hexylene glycol, carmine (ci 75470), mica (ci 77019), titanium dioxide (ci 77891), yellow 5 lake (ci 19140).',
	'highly pigmented shadow that applies evenly and feels ultra-velvety and silky. this long wearing formula contains a unique combination of softer powders which adheres easily to the eyes, gives a soft focus effect, and blends smoothly and evenly.',
	'img/eye-palettes/Yes_Please.webp',
	'products.html?pid=1',
	5
),
(
	2,1,1,2,
	'sweet talk',
	'Fun peach, vibrant coral, and a mix of self-adhering glitter toppers - create the look you want with ease. When you feel pretty, we feel pretty.',
	NUll,
	'shadow palette',
	'16',
	NULL,
	'matte, metallic',
	'oranges/corals, neutrals, yellows/oranges, pinks, golds, reds, browns',
	'12 x 0.85g (0.03oz)',
	'apply with your favorite shadow brushes. flat and firmer brushes will give the most color payoff. fluffier brushes are great for blending. use a small angled brush to line the eyes.',
	'full-zip: synthetic fluorphlogopite, talc, boron nitride, zinc stearate, lauroyl lysine, magnesium stearate, dimethicone, caprylic/capric triglyceride, silica, phenoxyethanol, caprylyl glycol, dimethiconol, ethylhexylglycerin, hexylene glycol, iron oxides (ci 77491, ci 77492, ci 77499), mica (ci 77019), titanium dioxide (ci 77891).
big cocktails: synthetic fluorphlogopite, talc, boron nitride, zing stearate, lauroyl lysine, magnesium stearate, dimethicone, caprylic/capric triglyceride, silica, phenoxyethanol, caprylyl glycol, dimethiconol, ethylhexylglycerin, hexylene glycol, carmine (ci 75470), mica (ci 77019), titanium dioxide (ci 77891), yellow 5 lake (ci 19140).',
	'highly pigmented shadow that applies evenly and feels ultra-velvety and silky. this long wearing formula contains a unique combination of softer powders which adheres easily to the eyes, gives a soft focus effect, and blends smoothly and evenly.',
	'img/eye-palettes/sweet_talk_palette.webp',
	'products.html?pid=2',
	5
),
(
	3,1,1,3,
	'uh-huh-honey',
	'Sweet like honey, bright like the sun.',
	'This yellow monochromatic palette features every shade of yellow under the sun.',
	'shadow palette',
	'12',
	NULL,
	'matte, metallic',
	'yellows, golds, neutrals',
	'12 x 0.85g (0.03oz)',
	'apply with your favorite shadow brushes. flat and firmer brushes will give the most color payoff. fluffier brushes are great for blending. use a small angled brush to line the eyes.',
	'full-zip: synthetic fluorphlogopite, talc, boron nitride, zinc stearate, lauroyl lysine, magnesium stearate, dimethicone, caprylic/capric triglyceride, silica, phenoxyethanol, caprylyl glycol, dimethiconol, ethylhexylglycerin, hexylene glycol, iron oxides (ci 77491, ci 77492, ci 77499), mica (ci 77019), titanium dioxide (ci 77891).
big cocktails: synthetic fluorphlogopite, talc, boron nitride, zing stearate, lauroyl lysine, magnesium stearate, dimethicone, caprylic/capric triglyceride, silica, phenoxyethanol, caprylyl glycol, dimethiconol, ethylhexylglycerin, hexylene glycol, carmine (ci 75470), mica (ci 77019), titanium dioxide (ci 77891), yellow 5 lake (ci 19140).',
	'highly pigmented shadow that applies evenly and feels ultra-velvety and silky. this long wearing formula contains a unique combination of softer powders which adheres easily to the eyes, gives a soft focus effect, and blends smoothly and evenly.',
	'img/eye-palettes/yellow_palette.jpg',
	'products.html?pid=3',
	3.5
),
(
	4,1,1,4,
	'what ever',
	'Call it whatever, wear it however – just know, this is the palette of the season.',
	'Rich burgundy, warm terracotta, mixed finish shadows and glitters make this palette the only one you need for your fall glam.',
	'shadow palette',
	'18',
	NULL,
	'matte, metallic',
	'matte deep red plum',
	'12 x 0.85g (0.03oz)',
	'apply with your favorite shadow brushes. flat and firmer brushes will give the most color payoff. fluffier brushes are great for blending. use a small angled brush to line the eyes.',
	'full-zip: synthetic fluorphlogopite, talc, boron nitride, zinc stearate, lauroyl lysine, magnesium stearate, dimethicone, caprylic/capric triglyceride, silica, phenoxyethanol, caprylyl glycol, dimethiconol, ethylhexylglycerin, hexylene glycol, iron oxides (ci 77491, ci 77492, ci 77499), mica (ci 77019), titanium dioxide (ci 77891).
big cocktails: synthetic fluorphlogopite, talc, boron nitride, zing stearate, lauroyl lysine, magnesium stearate, dimethicone, caprylic/capric triglyceride, silica, phenoxyethanol, caprylyl glycol, dimethiconol, ethylhexylglycerin, hexylene glycol, carmine (ci 75470), mica (ci 77019), titanium dioxide (ci 77891), yellow 5 lake (ci 19140).',
	'highly pigmented shadow that applies evenly and feels ultra-velvety and silky. this long wearing formula contains a unique combination of softer powders which adheres easily to the eyes, gives a soft focus effect, and blends smoothly and evenly.',
	'img/eye-palettes/CA_Love_a.webp',
	'products.html?pid=4',
	4
),
(
	5,1,1,5,
	'california love',
	'Consider this our love song to the West Coast.',
	'The perfect warm golden eyeshadow palette to create the perfect day to night look or California sunset eye.',
	'shadow palette',
	'18',
	NULL,
	'matte, metallic',
	'golds, neutrals, yellows/oranges, oranges/corals, reds, browns',
	'12 x 0.85g (0.03oz)',
	'apply with your favorite shadow brushes. flat and firmer brushes will give the most color payoff. fluffier brushes are great for blending. use a small angled brush to line the eyes.',
	'full-zip: synthetic fluorphlogopite, talc, boron nitride, zinc stearate, lauroyl lysine, magnesium stearate, dimethicone, caprylic/capric triglyceride, silica, phenoxyethanol, caprylyl glycol, dimethiconol, ethylhexylglycerin, hexylene glycol, iron oxides (ci 77491, ci 77492, ci 77499), mica (ci 77019), titanium dioxide (ci 77891).
big cocktails: synthetic fluorphlogopite, talc, boron nitride, zing stearate, lauroyl lysine, magnesium stearate, dimethicone, caprylic/capric triglyceride, silica, phenoxyethanol, caprylyl glycol, dimethiconol, ethylhexylglycerin, hexylene glycol, carmine (ci 75470), mica (ci 77019), titanium dioxide (ci 77891), yellow 5 lake (ci 19140).',
	'highly pigmented shadow that applies evenly and feels ultra-velvety and silky. this long wearing formula contains a unique combination of softer powders which adheres easily to the eyes, gives a soft focus effect, and blends smoothly and evenly.',
	'img/eye-palettes/CA_Love_a.webp',
	'products.html?pid=5',
   3.6
),
(
	6,1,1,6,
	'give it to me straight',
	'Let "s be frank, everyone loves a good neutral palette.',
	'Give It To Me Straight is better than basic.',
	'shadow palette',
	'16',
	NULL,
	'matte, metallic',
	'neutrals, pinks, golds, oranges/corals, browns, reds',
	'12 x 0.85g (0.03oz)',
	'apply with your favorite shadow brushes. flat and firmer brushes will give the most color payoff. fluffier brushes are great for blending. use a small angled brush to line the eyes.',
	'full-zip: synthetic fluorphlogopite, talc, boron nitride, zinc stearate, lauroyl lysine, magnesium stearate, dimethicone, caprylic/capric triglyceride, silica, phenoxyethanol, caprylyl glycol, dimethiconol, ethylhexylglycerin, hexylene glycol, iron oxides (ci 77491, ci 77492, ci 77499), mica (ci 77019), titanium dioxide (ci 77891).
big cocktails: synthetic fluorphlogopite, talc, boron nitride, zing stearate, lauroyl lysine, magnesium stearate, dimethicone, caprylic/capric triglyceride, silica, phenoxyethanol, caprylyl glycol, dimethiconol, ethylhexylglycerin, hexylene glycol, carmine (ci 75470), mica (ci 77019), titanium dioxide (ci 77891), yellow 5 lake (ci 19140).',
	'highly pigmented shadow that applies evenly and feels ultra-velvety and silky. this long wearing formula contains a unique combination of softer powders which adheres easily to the eyes, gives a soft focus effect, and blends smoothly and evenly.',
	'img/eye-palettes/GITMS_A.webp',
	'products.html?pid=6',
	4.1
),
(
	7,1,1,7,
	'StrawberryShake',
	'It’s coming up roses in soft mauve tones and buttery metallic finishes.',
	'Romantic shades make it easy to transition from sweet damsel to femme fatale.',
	'shadow palette',
	'16',
	NULL,
	'matte, metallic',
	'neutrals, pinks, golds, reds, purples, oranges/corals',
	'12 x 0.85g (0.03oz)',
	'apply with your favorite shadow brushes. flat and firmer brushes will give the most color payoff. fluffier brushes are great for blending. use a small angled brush to line the eyes.',
	'full-zip: synthetic fluorphlogopite, talc, boron nitride, zinc stearate, lauroyl lysine, magnesium stearate, dimethicone, caprylic/capric triglyceride, silica, phenoxyethanol, caprylyl glycol, dimethiconol, ethylhexylglycerin, hexylene glycol, iron oxides (ci 77491, ci 77492, ci 77499), mica (ci 77019), titanium dioxide (ci 77891).
big cocktails: synthetic fluorphlogopite, talc, boron nitride, zing stearate, lauroyl lysine, magnesium stearate, dimethicone, caprylic/capric triglyceride, silica, phenoxyethanol, caprylyl glycol, dimethiconol, ethylhexylglycerin, hexylene glycol, carmine (ci 75470), mica (ci 77019), titanium dioxide (ci 77891), yellow 5 lake (ci 19140).',
	'highly pigmented shadow that applies evenly and feels ultra-velvety and silky. this long wearing formula contains a unique combination of softer powders which adheres easily to the eyes, gives a soft focus effect, and blends smoothly and evenly.',
	'img/eye-palettes/Strawberry_Shake.webp',
	'products.html?pid=7',
	3
),
(
	8,1,1,8,
	'double entendre',
	'The perfect nude palette doesn’t exi- ',
	'Look no further. Warm nudes, every day shades, your makeup routine’s sidekick is here! With 12 shades, ranging from cool to warm, matte to metallic, you and this palette will be inseparable.',
	'shadow palette',
	'16',
	NULL,
	'matte, metallic',
	'neutrals, golds, browns, oranges/corals',
	'12 x 0.85g (0.03oz)',
	'apply with your favorite shadow brushes. flat and firmer brushes will give the most color payoff. fluffier brushes are great for blending. use a small angled brush to line the eyes.',
	'full-zip: synthetic fluorphlogopite, talc, boron nitride, zinc stearate, lauroyl lysine, magnesium stearate, dimethicone, caprylic/capric triglyceride, silica, phenoxyethanol, caprylyl glycol, dimethiconol, ethylhexylglycerin, hexylene glycol, iron oxides (ci 77491, ci 77492, ci 77499), mica (ci 77019), titanium dioxide (ci 77891).
big cocktails: synthetic fluorphlogopite, talc, boron nitride, zing stearate, lauroyl lysine, magnesium stearate, dimethicone, caprylic/capric triglyceride, silica, phenoxyethanol, caprylyl glycol, dimethiconol, ethylhexylglycerin, hexylene glycol, carmine (ci 75470), mica (ci 77019), titanium dioxide (ci 77891), yellow 5 lake (ci 19140).',
	'highly pigmented shadow that applies evenly and feels ultra-velvety and silky. this long wearing formula contains a unique combination of softer powders which adheres easily to the eyes, gives a soft focus effect, and blends smoothly and evenly.',
	'img/eye-palettes/Double_Entendre.webp',
	'products.html?pid=8',
	5
);

/**心愿单列表**/
CREATE TABLE cp_wishlist(
	uid INT,
	pid INT,
	FOREIGN KEY (uid) REFERENCES cp_user(uid),
	FOREIGN KEY (pid) REFERENCES cp_product(pid)
);