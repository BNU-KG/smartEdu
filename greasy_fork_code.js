// ==UserScript==
// @name              国家智慧教育公共服务平台助手
// @namespace         github.com/hmjz100
// @version           1.0.8.1
// @description       《也许同类型中最好用？》系列 - 中小学智教平台免登录查看文档（教材 / 书籍 / 政策 / 课件，下载原件或预览）、视频（宣传 / 经验 / 影视，播放器更多功能）、音频（听力，倍速播放）、专题（前两者的综合列表）、课程（自主学习 / 备课授课），还可以查看、切换和下载 新版(2024版) / 中版(常见版) / 先版(旧版) 教材；美化整个国家智慧教育公共服务平台，顶栏毛玻璃，页脚一言诗；增强原 PDF 预览页，可网页全屏，可下载，确保舒适阅读；脚本界面融合原生网页风格，简洁且美观
// @author            hmjz100
// @match             *://*.smartedu.cn/*
// @match             *://*.edu.cn/*
// @match             *://*.eduyun.cn/*
// @icon              data:image/webp;base64,UklGRvYNAABXRUJQVlA4IOoNAACQUQCdASpoAWgBPlEok0YjoqIhIvR4iHAKCWVu/HyZcemVJf0/4weFdX7v/5MfmL849ffnv3t/KHl56x/wHoneQfpH/C/v35PfOn/Weon85/773BP0r/1P9s/JTuJeYD9ef2f97v0Of6D1CP6n/pusn9Cr9t/TT/cP4Zv26/bf2jv/z2f/Sn9bP8Z2v/5n9XutS9xTFbiv47+AYkHirqEewP9LvE4APrHxLeCbh+6AH6A9GDQI9chs21NqbU2ptTam1NqbU2ptTam1NqbU2ptTam1NqbU2ptTam1NqbU2ptTam1NqbU2ptTam1NqbU2ptTam1NqbU2ptTaW1lBgn1cbwPqsCJmOJOCNRA0BoDP411GD4cO0VgzHuKafHYn9zURfStq45mBBCCEEIEIF54yangINI9Ro9NFab2XOkqA0Bm1GjidEfXJiIqWPG/d1DmVVx/CxFvlfEzYEDtlcHpEIIQQdCEtgc4UvZ1ar5GfNpo+mJRBNCkXaBLDIq4LAZ5KqDzY2xtjGK/4NLmYZHihyA/8bvLgF3fO3bGfcr/FJ+ebbU2ptSzrBxUvyMkKikFiMzHy/bl+62dlifQaL2bJxPiefVWHluOs18wlKIk6EJRQoo9QN23nHP/P+sf7NcWFdN2BKepI7Bpn+V2R975eeCNRArynjHLtd4qEXztz3JE3+4k8n0uEMsz7XAAb7kqWG11A5Pe089wMHho9j+a0qQWAsBV7Jls8vjUiCOmT17ARwku/8/VzAW/2tvirHMQQQgQQghBFI/D3WMCtSwDVtgWAsBYCwFgLINAWAsBYCwFgLAWAsBYCwFgLAWAsBYCwFgLAWAsBYCwFgLAWAsBYCwFgLAWAsBYCwFgLAWAsBYCwFfYAAP7+efHeau/Ro/Kr3HXsPNpMAAAAAAAAABrdR765V7IiYl6QehjURUlWwOalV1SOCiZOXZbKEz10br7RGkqrmQMFJduDpko72ju2IGDb04sJKhUT6fYC1LnsWECybz3TL5o0lPUL/4w2kTIF0GxywsrhrCfSl2y8PHQR3XLvIRKZ7p0ZFoXu0ygHEe7EHyqF453aZo4YpfBoHn9e8itUziOA0suu7bvCEKDLCOmenTeXSrKby5w2erfbzDSQMQSXJ3fpqQBOvlnBAx5/B/Or4r1kr/VWD/S+kH3Kiw5N4aAPEoiplggj8XmQY633lZY4YCSg/hfx4X+9R8TJnLrrK/bTHP8icW4zujsg0sWp4lzqhbZhOSUIXbZwrIp9MrQbZzt0YzG5HkM5HEQYZLNEFFSdjwh+BrwQeR+2g36P9fnjlx1OsjXZUPkigKiylWxQ7JcHQr6u55mzyrQzs8N0KvQPgjLe7/NPFLVryImB3a0RACkGk8AkYB3x4Uv2hsb7mcRwIlhPTxGo9COzMznjJzSPEUtyI6/YhvJCMZ1W8HoLFkZvShTBlw5FcSEH4dN7wh4d49r3OjsjImLz8jTBqjiSjbq2TP8wAAAey40WUPp2i9AChj5NTXieW5zqMR7NGtqAdFy7YP2uOy2ZfF9vATIr80/4U1D1Cki6DrS0ymC7IXiX0p9OvQ+8KgppI4+Q6exo2p0p72E9NqzkK6KFN2fhsaEfIsCaeT4dnW8+VdiTN3fy57Jzs1q7qVQ+klQN4ryPCcTteEtGC5M7jyy1n3VpyLynDAKaTFwlfhJ7/RXBrBvebUDlrFDpwYiqnEE6Yya47nW0bcPhGcavSeUad6xa3/XEA8jVY4jO1X//M980dxLb72tHQPvIcbwNmrEHkUoIYJwGfT+mbBVQND2vfqqaGCuYLzitdzc/Lj/ZUpSZQoTa01KcGG52uOFAqs4AIFbFsWp8PSIAt1wRtkDWfqP8StxhvW2LdN2aMIq5gyBKB6m+57nRqP58U4X3JaWfq6qU1hEp9B2QUtNDQMR6F7QPNh1L0EjguFUlayQPfv3DTjDXw3TBixUkltrP2WaTQGPGQtqhvV9Crj7EapFLZpXsuw65eUJ93aWbyzwEmJ+kSvH2Kmnr29EzvqaqplMDImlKJcLbUsVwAhGDJEUlxatPEJnvqyw+F1CuYmwEV5WSgFSacUes80WtdrOFc9tk+uw1tT304J0kBwRSn5kLqgNcTXKR0/EsZbXk1LgA4HDDHE0EyOkI5rJqlF9U/xL4tU1VRWWie5NXtiswexYCQGioHHLjI6/QmpkzWZF0NLU+8jjJUdy/7ctQwV/zQFYnCtAmAQKTc+z9/KxFHcCEOLhZYqNSZE+W4+N6hrCD2+3yFoJ6cmbUzfJgm9uri715mzFdfV6rTU54Dk5XiSXFyx01twoXD3eLBGJigN3ykt4HvmBZuJJD/f0gX983YHfsagjw7sB1qTeonmE8R/NZ/IRfffFWB2fY1UrloxY8HkZ8FGV1h4IdwZniZX1Omc7Uqa2aJPDBYKnWV8Dh19N4spWlc/XDm8GCsFxAMogm9xTxE+8b7F+XVk8ES59D5jfkogBs+Gn2bffC9VVo+qHo4EPNwTmy8IAcI8HGW8K8pihnj3GY81Yc6T6c2NGonQnlsm0/qbhqJLcK+RcuBTZng8UrN0iAlyR4iHFyGNivU0xWrlfH/WuEJRc9fKE1qEfv390pCCw0EcavhFgFVR426kIsxMzEYTYbkDfK+igKKmLGPFVFmkVQ8yrh+IJewjAa7z8CvKNbIxTCVlRNww6S7VqU7edJ52K58+a9D1nRJAtePFsVFOmUAaORb3BsKS5YzcuGBIvPQ9AAtc3SEUO+MV2+iCgW4PSSceJbjQzGwsnxkK9+j5i6otE/XkhBZNtwW6adzTABMhAOovTpXLzN6faWOv5XCelg0SjX5macUMJFpgpovnWj0BfuyS5+BjUHxtTz9wm70FgQxuxZyRaFJr/cD4pBs/J07mOKi6J6PdwJ5HTR/BtxEoBLnKZuyvr9HEcA1UdFDG9CBPSr0Vyc/PxppUttqZHbcVHHscxlsP5AQnUTNb295VY274XRXlf2CtC8L7dCotkwreaGbSFyMS3vEPLDd/pAtLUDKt5SuQTo5+wLcipv7NQD4AoDlg19Qrq0IPpz2VDPOwE2Al8q4PKbXGKZ7/ZSe3M9N0+UKfC6AdUm/xfp+ii5ZUMXtym7+xBOM60NpQwmR+p8hEuU8tx6A7NM+enPGVyX2L2pAQvLqdvaTTQmRolp/S+5CvLRRebxklUHzYBNc1rVWAAGYLa2rWk++mC1XCjDhHm+UEuqjujG2xXDfk4TSzsLLttpxRHUoS/8clD5+7JsGCtOwKT3Ki6Xx5GzIGqXu//AqXsLcV9B5+rv99M/vxLTX1p8vy7GdZCJ5Hbho0Jn1++w6fK52Lf2ia0bKv1HpQbkcrNzxV24evMtJHB1NL1shC2/YKcbSHAV42OcKQomps1mHEEvIXQ0sA6wlyc0sN9zcCYNTCS89jHiV2scDGqUN57nDBfxTmmd1AdwmafQ44lAEt/Hp5V8ykDZOA9plooKTljl2F9ARYinjjxqQB2J5dRRRXa6v/H0WZttO/WQMDqlGL1wtFmQ7ro0jzL+kksZfYGE5iNvvnh+PQzOioq5FIsD/QQaiJoQOiuNNkUhg5V/OGG2v1y5vl326fxML6ahyPZm1oO/QTSxH1uP2rq2BMybEtFHTx5yt7/Z41svv/sss46AGTvUuH+0NyNnxRHHu72aFdRhOe29GD6Y3Z3rTjdcJfKGW5LjFEqaYGbmUVam4ba5aH6LwBcuLsA9a1kn09O63WroES5rTVSfjqQElaJaMh62+eLEUMhIOr8xMxQtp+QwuiLmmnXRehoOIHRe1RIqevDyymkeZKj8oU/VlrMyWPs2D8l7DdJE+xtqrmdRlwXVTwArkORCcvS45IVXqm+mnKFt93ivJS8pqcC8wLW7AkMgsF80Fl2X6Sk2OVO1YoZoRG3LvmhcoNFFlfWeYHCFqzvoDYIj0rK8ikB3yfQ7hjRP/AOe1LSofUul7s+B8SNpz1PnFqDI/yU+pClMzswBeUpPOGnZgEdol4MgZ1wW1cWz4an/8T9AN5dyjV/Z+SAeWgxnulM6MsA9Aa4lTYnihAov+OPOwu28by5B+03lkomjklj9V0kK7ak+9C242fGwb1l3/OXuDTPoD5sdezTKGb4KBnAGf5kjeQZyXhOArJ8cnewHvACWOyub90YtH7eRWqjCmwxMd8UNgncTnKqClTBq/FpscMuDtvf6n7GIkw5Y8KlBK8+/Gb9hCGnRUS4E2ZjYsYLz13ZH4W1/7/2J32ok3d31TELunCjJkzifLLCZcV6ig4uzv7zJ1ox/r4uUJ7lKK4HuawoFjKkfOzXnjvhDiCpBE0V9DARiiZCFBRcg1AjyJT/9BcduJmCMnlPM32gSHwLNgKgPHFSEayfB38zYYOMT0q++OuJno5YKBKL3tw5YYS3QY+eovOPweajK1tv7a0/waPJZM+PihtUk9IWukV1Fwhp+ZBeQlrqKd9HA/SQ8ieDOBLCbkSXNA3qCQodHARc+uM7ds/wuRy2e5YjcSepdyXd1kdEALbEPPjOLOY/EGjBGLZYHTRF6+BALDVEXKQXNskJ/0KIEPoxqE9qsOYrWdbsauiLwuzI5Ef4NCr/PhPF2wF8wNGlOcPpgK+je75Yn1rm0LQqAzgngHPDVbQE0MoCP24ASn17LwAa4Lg3EHI8KOM7wEopsXVFnhaUo6eIaVY8LsFt+cbLjlXS3IUGrzA7FU5nRsIgvw6X34WJXueUGF90AAAAAAAAAAAAA
// @license           MIT
// @run-at            document-body
// @grant             GM_getresourceText
// @grant             GM_openInTab
// @grant             GM_xmlHttpRequest
// @grant             GM.xmlHttpRequest
// @grant             unsafeWindow
// @connect           smartedu.cn
// @connect           edu.cn
// @connect           eduyun.cn
// @connect           ykt.cbern.com.cn
// @connect           hitokoto.cn
// @require           https://unpkg.com/jquery@3.6.3/dist/jquery.min.js
// @require           https://unpkg.com/hls.js@1.5.10/dist/hls.min.js
// @require           https://unpkg.com/artplayer@5.1.6/dist/artplayer.legacy.js
// @require           https://unpkg.com/pinyin-pro@3.24.2/dist/index.js
// @downloadURL https://update.greasyfork.org/scripts/459404/%E5%9B%BD%E5%AE%B6%E6%99%BA%E6%85%A7%E6%95%99%E8%82%B2%E5%85%AC%E5%85%B1%E6%9C%8D%E5%8A%A1%E5%B9%B3%E5%8F%B0%E5%8A%A9%E6%89%8B.user.js
// @updateURL https://update.greasyfork.org/scripts/459404/%E5%9B%BD%E5%AE%B6%E6%99%BA%E6%85%A7%E6%95%99%E8%82%B2%E5%85%AC%E5%85%B1%E6%9C%8D%E5%8A%A1%E5%B9%B3%E5%8F%B0%E5%8A%A9%E6%89%8B.meta.js
// ==/UserScript==

(async function SmartEduDownload() {
	'use strict';

	/*
	防止代码因其他原因被执行多次
	这段代码出自 Via轻插件，作者谷花泰
	*/
	const key = encodeURIComponent('国家中小学智慧教育平台助手:主代码');
	if (unsafeWindow[key]) return;
	unsafeWindow[key] = true;

	var { pinyin } = pinyinPro;
	Artplayer.LOG_VERSION = false
	console.log("【国家中小学智慧教育平台助手】即时\n运行中…")

	// Hook 窗口打开
	let originOpen = window.open
	unsafeWindow.oopen = originOpen
	unsafeWindow.open = function (url, name, specs) {
		const cUrl = new URL(location.href);
		if (cUrl.searchParams.get('x-edu-theme') === 'dark') {
			const xUrl = new URL(url, location.href);
			if (xUrl.host === location.host) {
				xUrl.searchParams.set('x-edu-theme', 'dark');
				return originOpen.call(unsafeWindow, xUrl.href, name, specs);
			}
		} else {
			return originOpen.call(unsafeWindow, url, name, specs);
		}
	};
	addDownStyle();
	let activityId = new URL(location.href).searchParams.get("activityId") || '';
	let contentType = new URL(location.href).searchParams.get("contentType") || '';
	let contentId = new URL(location.href).searchParams.get("contentId") || '';
	let isNight = new URL(location.href).searchParams.get("x-edu-theme") === 'dark' || false;
	let contentFirst = new URL(location.href).searchParams.get("contentFirst") || '';
	let contentCommon = new URL(location.href).searchParams.get("contentCommon") || '';
	let isLogin = false

	// 根据头像检测是否已经登录账号
	waitForKeyElements('[class*="index-module_avatar"]', function () {
		isLogin = true
	})

	// 给顶栏加个时钟
	let img_question = "data:image/png;base64,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"
	waitForKeyElements('[class^="index-module_menu-container_"]', (element) => {
		var timebar = $(`<div class="index-module_tip"><img src="${img_question}"/><span id="smartEduGreeting"></span>，现在是<span id="smartEduTime"></span>感谢您使用本脚本~</div>`);

		timebar.append(`<a title="好评" style="display: inline-flex"><svg id="smartEduGood"><use xlink:href="#web_icon_dianzan_fill"></use></svg></a>`);
		timebar.find("#smartEduGood").on('click', function () {
			GM_openInTab('https://greasyfork.org/scripts/459404/feedback', { active: true });
		})

		if (/((en.|)basic.smartedu.cn|(xue\-test|web\-bd|en\-test|test\d).ykt.eduyun.cn)/.test(location.host)) {
			timebar.append(`<a title="更换主题 (Beta)" style="display: inline-flex"><svg id="smartEduTheme"><use xlink:href="#huabishezhi"></use></svg></a>`);
			timebar.find("#smartEduTheme").on('click', function () {
				let url = new URL(location);
				if (url.searchParams.get("x-edu-theme") === 'dark') {
					url.searchParams.delete('x-edu-theme');
				} else {
					url.searchParams.set("x-edu-theme", "dark");
				}
				$(this).remove();
				location.href = url.toString();
			});
			// 默认收起侧栏
			waitForKeyElements('[class^="index-module_collapse_"]', (element) => {
				element.click();
			}, true)
		}

		if (element && element.length > 0) {
			element.after(timebar);
			window.setInterval(function () {
				timebar.find("#smartEduTime").text(Time());
				timebar.find("#smartEduGreeting").text(Greeting());
			}, 500);
		}
	}, true);

	// 移除顶部客户端相关内容
	if (location.host !== 'www.smartedu.cn') waitForKeyElements('[class^="index-module_top-bar"], [class^="index-module_download"], [class^="index-module_float-download"], #app div.bg-no-repeat div[class^="bg"], #app header.el-header.plang div.topLine1, div.header div.headbar', (element) => {
		element.remove()
	}, true)

	waitForKeyElements('[class*="index-module_modal"].theme-modal', (element) => {
		element.hide()
	})

	// 给底栏增加个一言
	waitForKeyElements('.main-wrapper #main-content div.content', (element) => {
		var poembar = $(`<div class="index-module_tip"><img src="${img_question}"/><span class="todayPoem"></span></div>`)
		if (element && element.length > 0) {
			let text = poembar.find(".todayPoem")
			element.after(poembar)
			text.on('click', function () {
				if (text.text() === "加载中……") return;
				text.text("加载中……")
				text.css({ "cursor": "default" });
				Poem(text)
			})
			text.text("加载中……")
			text.css({ "cursor": "default" });
			Poem(text)
		}
	}, true)

	const originalOpen = XMLHttpRequest.prototype.open;
	unsafeWindow.XMLHttpRequest.prototype.open = function (method, url) {
		if ((location.pathname.includes('/tchMaterial') || location.pathname.includes('/elecEdu')) && url.includes("query?res_ids=") && url.match(/res_ids=([^&]*)/)[1]) {
			const ids = url.match(/res_ids=([^&]*)/)[1].split(',');
			$('.index-module_toolbar').remove()
			try {
				let idIndex = 0;
				document.querySelectorAll('li[class*="index-module_item"]').forEach(async element => {
					element = $(element)
					if (idIndex < ids.length) {
						if (
							!element.find('[class^="index-module_cover"] img[src]') &&
							!element.find('[class^="index-module_cover"] img[src]').attr('src') &&
							!element.find('[class^="index-module_cover"] img[src]').attr('src').match(/r(\d)-ndr/)[1]
						) return;

						let base = element.find('[class^="index-module_cover"] img[src]').attr('src').match(/r(\d)-ndr/)[1];
						let contentId = ids[idIndex]
						idIndex++;

						// 教材信息
						let content = await request({
							url: `https://s-file-${base}.ykt.cbern.com.cn/zxx/ndrv2/resources/tch_material/details/${contentId}.json`,
							headers: {
								"referer": "https://basic.smartedu.cn/",
								'Cache-Control': 'no-cache'
							}
						});

						if (content.toString().startsWith('<?xml') || !content.ti_items[0]) {
							let button = $(`<li class="index-module_toolbar" style="display: flex;">
								<div class="index-module_item read new">
									<svg><use xlink:href="#web_icon_wodeyuedu"></use></svg>
									<span class="text">阅读专题内容(文件列表)</span>
								</div>
							</li>`)
							button.find(".index-module_item.read.new").on('click', async function () {
								GM_openInTab(`//${location.host}/tchMaterial/detail?contentType=thematic_course&contentId=${contentId}&catalogType=tchMaterial&subCatalog=tchMaterial${isNight ? '&x-edu-theme=dark' : ''}`, { active: true });
							})
							element.css({ "border-bottom": "none" })
							return element.after(button);
						}

						let data = {
							id: content.id,
							title: content.global_title['zh-CN'],
							cover: content.custom_properties?.thumbnails[0],
							author: content.provider_list[0]?.name,
							url: content.ti_items?.find(item => item.ti_format === "pdf")?.ti_storages?.[base - 1].replace(/(r\d)-ndr-\w+/, '$1-ndr'),
							titleCommon: element.find('[class^="index-module_line"] span[title]')[0].title + " 中版",
							urlCommon: `https://r${base}-ndr.ykt.cbern.com.cn/edu_product/esp/assets/${contentId}.pkg/pdf.pdf`,
							titleFirst: element.find('[class^="index-module_line"] span[title]')[0].title + " 先版",
							urlFirst: `https://r${base}-ndr.ykt.cbern.com.cn/edu_product/esp/assets_document/${contentId}.pkg/pdf.pdf`
						};

						console.log("【国家中小学智慧教育平台助手】即时\n教材列表：书籍数据加载成功\n", data)

						element.css({ "border-bottom": "none" })
						let button = $(`
							<li class="index-module_toolbar" style="display: flex;">
								<div class="index-module_item read new">
									<svg><use xlink:href="#web_icon_wodeyuedu"></use></svg>
									<span class="text">阅读</span>
								</div>
								<div class="index-module_item download new">
									<svg><use xlink:href="#pc_icon_xiazai-fill"></use></svg>
									<span class="text">下载</span><span class="size"></span>
								</div>
								<div class="index-module_item read common">
									<svg><use xlink:href="#web_icon_wodeyuedu"></use></svg>
									<span class="text">阅读中版</span>
								</div>
								<div class="index-module_item download common">
									<svg><use xlink:href="#pc_icon_xiazai-fill"></use></svg>
									<span class="text">下载中版</span><span class="size"></span>
								</div>
								<div class="index-module_item read first">
									<svg><use xlink:href="#web_icon_wodeyuedu"></use></svg>
									<span class="text">阅读先版</span>
								</div>
								<div class="index-module_item download first">
									<svg><use xlink:href="#pc_icon_xiazai-fill"></use></svg>
									<span class="text">下载先版</span><span class="size"></span>
								</div>
							</li>
						`);
						if (isLogin) button.find('.index-module_item.read:not(.index-module_item.new)').html("登录下无法使用").fadeOut()

						let fileName = decodeURIComponent(data.urlCommon.substring(data.urlCommon.lastIndexOf('/') + 1))
						let newFileName = decodeURIComponent(data.url.substring(data.url.lastIndexOf('/') + 1))

						// 根据文件链接情况显示按钮
						let commonAndNewAreSame = (fileName === newFileName);
						let commonAndFirstAreSame = (data.url === data.urlFirst);

						// 获取文件大小并显示
						getFileSize(data.url).then(size => {
							button.find('.index-module_item.download.new .size').text(`(${formatFileSize(size)})`);
						}).catch(() => {
							button.find('.index-module_item.new').html("找不到新版").fadeOut();
						});
						button.find(".index-module_item.read.new").on('click', async function () {
							GM_openInTab(`//${location.host}/tchMaterial/detail?contentType=assets_document&contentId=${contentId}&catalogType=tchMaterial&subCatalog=tchMaterial${isNight ? '&x-edu-theme=dark' : ''}`, { active: true });
						})

						if (!commonAndNewAreSame) {
							getFileSize(data.urlCommon).then(size => {
								button.find('.index-module_item.download.common .size').text(`(${formatFileSize(size)})`);
							}).catch(() => {
								button.find('.index-module_item.common').html("找不到中版").fadeOut();
							});
							button.find(".index-module_item.read.common").on('click', async function () {
								GM_openInTab(`//${location.host}/tchMaterial/detail?contentType=assets_document&contentId=${contentId}&catalogType=tchMaterial&subCatalog=tchMaterial&contentCommon=true${isNight ? '&x-edu-theme=dark' : ''}`, { active: true });
							})
						} else {
							button.find('.index-module_item.common').html("找不到中版").fadeOut();
						}

						if (!commonAndFirstAreSame) {
							getFileSize(data.urlFirst).then(size => {
								button.find('.index-module_item.download.first .size').text(`(${formatFileSize(size)})`);
							}).catch(() => {
								button.find('.index-module_item.first').html("找不到先版").fadeOut();
							});
							button.find(".index-module_item.read.first").on('click', async function () {
								GM_openInTab(`//${location.host}/tchMaterial/detail?contentType=assets_document&contentId=${contentId}&catalogType=tchMaterial&subCatalog=tchMaterial&contentFirst=true${isNight ? '&x-edu-theme=dark' : ''}`, { active: true });
							})
						} else {
							button.find('.index-module_item.first').html("找不到先版").fadeOut();
						}

						element.after(button);

						button.find(".index-module_item.download").on('click', async function () {
							let element = $(this)
							let ins = {};
							let progress = {};
							let index = element.data('index');
							let orgtext = element.find('.text').text()

							element.prop('disabled', true);

							ins[index] = setInterval(function () {
								let prog = +progress[index] || 0;
								element.find('.text').text(prog + "%");
							}, 10);

							try {
								let response = await fetch(element.hasClass('first') ? data.urlFirst : element.hasClass('common') ? data.urlCommon : data.url);
								if (!response.ok) throw new Error('网络响应失败');

								let totalSize = response.headers.get('Content-Length') || 0;
								let reader = response.body.getReader();
								let receivedLength = 0;
								let chunks = [];

								while (true) {
									const { done, value } = await reader.read();
									if (done) break;
									chunks.push(value);
									receivedLength += value.length;
									progress[index] = Math.floor((receivedLength / totalSize) * 100);
								}

								let blob = new Blob(chunks);
								clearInterval(ins[index]);
								progress[index] = 100;
								element.find('.text').text("完成~");

								// 下载文件
								const downloadUrl = URL.createObjectURL(blob);
								const a = document.createElement('a');
								a.href = downloadUrl;
								a.download = `${element.hasClass('first') ? data.titleFirst : element.hasClass('common') ? data.titleCommon : data.title}.pdf`;
								a.click();
								URL.revokeObjectURL(downloadUrl);

								setTimeout(function () {
									element.find('.text').text(orgtext);
									$(this).prop('disabled', false);
								}.bind(this), 3000);
							} catch (error) {
								clearInterval(ins[index]);
								element.find('.text').text("失败,重试?");
								$(this).prop('disabled', false).one('click', async function () {
									$(this).trigger('click');
								});
							}
						});

					}

				})
			} catch (error) {
				console.error('【国家中小学智慧教育平台助手】\n获取数据时发生错误：', error);
			}
		}
		return originalOpen.apply(this, arguments);
	};

	// 若是教材阅读页
	if (/^\/tchMaterial\/detail/.test(location.pathname) && (contentType === 'assets_document' || contentType === 'x_document') && contentId && !isLogin) {
		try {
			// 教材信息
			let data = await Promise.any(["1", "2", "3"].map(async base => {
				try {
					let file = await request({
						url: `https://s-file-${base}.ykt.cbern.com.cn/zxx/ndrv2/resources/tch_material/details/${contentId}.json`,
						headers: {
							'Cache-Control': 'no-cache'
						}
					});

					let audio = await request({
						url: `https://s-file-${base}.ykt.cbern.com.cn/zxx/ndrs/resources/${contentId}/relation_audios.json`,
						headers: {
							'Cache-Control': 'no-cache'
						}
					});

					let item = {
						id: file.id,
						title: file.global_title['zh-CN'],
						cover: file.custom_properties?.thumbnails[0],
						author: file.provider_list[0]?.name,
						url: file.ti_items?.find(item => item.ti_format === "pdf")?.ti_storages?.[base - 1].replace(/(r\d)-ndr-\w+/, '$1-ndr'),
						audio: (() => {
							if (audio.length !== 0) {
								let list = []
								audio.forEach(item => {
									list.push({
										id: item.id,
										title: item.global_title['zh-CN'],
										url: item.ti_items?.find(file => file?.ti_format === 'mp3')?.ti_storages[base - 1].replace(/(r\d)-ndr-\w+/, '$1-ndr'),
										format: item.ti_items?.find(file => file?.ti_format === 'mp3')?.ti_format,
										duration: (item.ti_items?.find(file => file?.ti_format === 'mp3')?.custom_properties?.requirements?.find(require => require?.name === 'Duration')?.value.match(/PT(\d+)M(\d+)S/)?.slice(1).reduce((acc, val) => acc * 60 + +val, 0)) || 0,
										durationText: (() => {
											const isoDuration = item.ti_items?.find(file => file?.ti_format === 'mp3')?.custom_properties?.requirements?.find(require => require?.name === 'Duration')?.value;
											const duration = isoDuration?.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)/);
											if (duration) {
												const hours = String(duration[1] || 0).padStart(2, '0'); // 小时
												const minutes = String(duration[2] || 0).padStart(2, '0'); // 分钟
												const seconds = String(duration[3] || 0).padStart(2, '0'); // 秒
												return hours !== '00' ? `${hours}:${minutes}:${seconds}` : minutes !== '00' ? `${minutes}:${seconds}` : seconds !== '00' ? `${minutes}:${seconds}` : `/`;
											}
											return null;
										})()
									})
								})
								return list
							}
							return null;
						})()
					};
					if (contentFirst === "true") {
						item.title = file.global_title['zh-CN'].replace(/（.*?课程标准.*?）/, '').replace(/•.*?•/, '·') + ' 先版'
						item.url = `https://r${base}-ndr.ykt.cbern.com.cn/edu_product/esp/assets_document/${contentId}.pkg/pdf.pdf`
					}
					if (contentCommon === "true") {
						item.title = file.global_title['zh-CN'].replace(/（.*?课程标准.*?）/, '').replace(/•.*?•/, '·') + ' 中版'
						item.url = `https://r${base}-ndr.ykt.cbern.com.cn/edu_product/esp/assets/${contentId}.pkg/pdf.pdf`
					}
					return item
				} catch (error) {
					console.error('【国家中小学智慧教育平台助手】\n获取数据时发生错误：', error);
				}
			}));

			console.log("【国家中小学智慧教育平台助手】即时\n教材预览：书籍数据加载成功\n", data)
			$('title').html(data.title + " - 国家中小学智慧教育平台");

			// 遇到默认弹窗
			waitForKeyElements('div.fish-modal-content div.fish-modal-body div.fish-modal-confirm-body-wrapper', (elemlogin) => {
				if (!elemlogin.find('div.fish-modal-confirm-content').text().match("需要登录才可以查看")) return;

				waitForKeyElements('div[class^="index-module_special-edu-detail_"] div[class^="index-module_content-wrap_"] div[class^="index-module_wrapper_"]', (element) => {
					// 点击登录提示中隐藏的取消按钮
					elemlogin.find('button[type="button"].fish-btn').filter(function () {
						return $(this).text().includes("取 消");
					}).click();

					$('.fish-breadcrumb.breadcrumb-container:last-child span.fish-breadcrumb-link').html(data.title);

					let fullDom = $(`<div class="imageList-module_special-edu-image_A7C2c">
						<div class="index-module_header_tG-zz">
							<h3 class="index-module_title_bnE9V" title="${data.title}" style="width:auto">${data.title}</h3>
							<div class="index-module_info_evO1d">
								<span class="index-module_origin_nuihE">
										<svg class="index-module_icon_dwVZ4"><use xlink:href="#icon_hotel_fill"></use></svg>
										<span class="index-module_department_ewVZW">${data.author}</span>
										<svg class="index-module_icon_dwVZ4 no-select"><use xlink:href="#icon_information_fill"></use></svg>
										<span class="index-module_department_ewVZW no-select" title="所有平台资源均免费使用，任何单位及个人不得用于商业行为">所有平台资源均免费使用，任何单位及个人不得用于商业行为</span>
								</span>
								<div class="index-module_extra_tUQog">
									<span class="index-module_origin_nuihE no-select">
										<svg class="index-module_icon_dwVZ4"><use xlink:href="#icon_star_fill"></use></svg>
										<div>感谢您使用本脚本~</div>
									</span>
								</div>
							</div>
						</div>
						<div class="index-module_divider_rI-lg"></div>
						<div class="imageList-module_special-edu-image-list-wrapper_18zfs">
							<div class="imageList-module_special-edu-image-list_+ywag" style="max-width: unset;">
								<div class="course-document" style="border-radius:8px;">
									<div class="document-context" style="border-radius:8px; overflow: hidden; height: 100%">
										<iframe id="pdfPlayerFirefox"
											src="/pdfjs/2.13/web/viewer.html?file=${data.url}&disableAutoFetch=true&page=1"
											frameborder="0" height="100%" width="100%"></iframe>
									</div>
								</div>
							</div>
						</div>
						<span class="course-handler-tip no-select">感谢所有为资源建设提供资料的单位和个人<br>未经允许不得转载或引用</span>
					</div>`)

					if (data.audio) {
						fullDom = $(`<div style="margin: 0px auto;max-width: 1368px;display: flex;">
							<div class="index-module_content-wrap_RGev6" style="margin: 0px; flex: 1 1 auto; overflow: hidden;">
								<div class="imageList-module_special-edu-image_A7C2c">
									<div class="index-module_header_tG-zz">
										<h3 class="index-module_title_bnE9V" title="${data.title}" style="width:auto">${data.title}</h3>
										<div class="index-module_info_evO1d">
											<span class="index-module_origin_nuihE">
													<svg class="index-module_icon_dwVZ4"><use xlink:href="#icon_hotel_fill"></use></svg>
													<span class="index-module_department_ewVZW">${data.author}</span>
													<svg class="index-module_icon_dwVZ4 no-select"><use xlink:href="#icon_information_fill"></use></svg>
													<span class="index-module_department_ewVZW no-select" title="所有平台资源均免费使用，任何单位及个人不得用于商业行为">所有平台资源均免费使用，任何单位及个人不得用于商业行为</span>
											</span>
											<div class="index-module_extra_tUQog">
												<span class="index-module_origin_nuihE no-select">
													<svg class="index-module_icon_dwVZ4"><use xlink:href="#icon_star_fill"></use></svg>
													<div>感谢您使用本脚本~</div>
												</span>
											</div>
										</div>
									</div>
									<div class="index-module_divider_rI-lg"></div>
									<div class="imageList-module_special-edu-image-list-wrapper_18zfs">
										<div class="imageList-module_special-edu-image-list_+ywag" style="max-width: unset;">
											<div class="course-document">
												<div class="document-context" style="overflow: hidden; height: 100%">
													<iframe id="pdfPlayerFirefox"
														src="/pdfjs/2.13/web/viewer.html?file=${data.url}&disableAutoFetch=true&page=1"
														frameborder="0" height="100%" width="100%"></iframe>
												</div>
											</div>
										</div>
									</div>
									<span class="course-handler-tip no-select">感谢所有为资源建设提供资料的单位和个人<br>未经允许不得转载或引用</span>
								</div>
							</div>
							<div style="margin: 0px 0px 0px 24px; width: 392px; flex-shrink: 0;">
								<div class="study-list audioList-module_audio-list-wrapper_H4jIc" style="border-radius: 8px">
									<div class="study-list-body audioList-module_audio-list-body_Ncgax">
										<div class="study-list-menu audioList-module_audio-list-header_SS1Zq no-select" style="border-radius: 8px 8px 0 0;">
											<img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE3LjUgMTYuMzMzM0MxNy41IDE3LjQzNzkgMTYuNjA0NiAxOC4zMzMzIDE1LjUgMTguMzMzM0g0LjVDMy4zOTU0MyAxOC4zMzMzIDIuNSAxNy40Mzc5IDIuNSAxNi4zMzMzVjMuNjY2NjZDMi41IDIuNTYyMDkgMy4zOTU0MyAxLjY2NjY2IDQuNSAxLjY2NjY2SDEzLjMzMzNMMTcuNSA1LjgzMzMyVjE2LjMzMzNaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMjY1M18yNDMzKSIvPgo8cGF0aCBkPSJNMTIuOTM3OSAxMS4xODcyTDguODg5MTggMTQuMDA5NEM4LjQ3OTg1IDE0LjI5NDcgNy45MjU1NCAxNC4xODExIDcuNjUxMTYgMTMuNzU1NUM3LjU1MjYyIDEzLjYwMjcgNy41IDEzLjQyMjkgNy41IDEzLjIzODlWNy41OTQzNUM3LjUgNy4wODIwMyA3Ljg5OTUxIDYuNjY2NjYgOC4zOTIyNiA2LjY2NjY2QzguNTY5MjMgNi42NjY2NSA4Ljc0MjIgNi43MjEzNiA4Ljg4OTE4IDYuODIzODJMMTIuOTM3OCA5LjY0NjFDMTMuMzQ3MSA5LjkzMTM2IDEzLjQ1NjUgMTAuNTA3NyAxMy4xODIxIDEwLjkzMzNDMTMuMTE3NCAxMS4wMzM2IDEzLjAzNDQgMTEuMTE5OSAxMi45Mzc5IDExLjE4NzJaIiBmaWxsPSJ1cmwoI3BhaW50MV9saW5lYXJfMjY1M18yNDMzKSIvPgo8cGF0aCBkPSJNMTQuMzMzMyA1LjgzMzMzSDE3LjVMMTMuMzMzMyAxLjY2OTMxVjQuODMzMzNDMTMuMzMzMyA1LjM4NTYxIDEzLjc4MSA1LjgzMzMzIDE0LjMzMzMgNS44MzMzM1oiIGZpbGw9InVybCgjcGFpbnQyX2xpbmVhcl8yNjUzXzI0MzMpIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfMjY1M18yNDMzIiB4MT0iMi41IiB5MT0iMS42NjY2NiIgeDI9IjIuNSIgeTI9IjE4LjMzMzMiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzZBQkNGRiIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMxRTYyRUMiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDFfbGluZWFyXzI2NTNfMjQzMyIgeDE9IjYuMzY1NzQiIHkxPSIxMS43MzM4IiB4Mj0iMTAuNTk2MiIgeTI9IjE2LjU2NCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSJ3aGl0ZSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IndoaXRlIiBzdG9wLW9wYWNpdHk9IjAuNiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50Ml9saW5lYXJfMjY1M18yNDMzIiB4MT0iMTIuNTIzMSIgeTE9IjQuNDgyNjIiIHgyPSIxNC43Mjc2IiB5Mj0iNy43MjA3NCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSJ3aGl0ZSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IndoaXRlIiBzdG9wLW9wYWNpdHk9IjAuNiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=" class="audioList-module_video-icon_UM-JM">
											<span class="audioList-module_resource-type-title_rPab2">音频资源</span>
										</div>
										<div>
											<div class="index-module_audio-player-wrap_U+83Y audioList-module_audio-player-wrapper_BjSaC">
												<div class="index-module_audio-player-title_2kzqd" style="animation-play-state: paused; overflow: hidden;" id="audioTitle">请选择媒体以开始播放</div>
												<div class="fish-slider" id="progressBar">
													<div class="fish-slider-rail"></div>
													<div class="fish-slider-track" id="progress" style="left: 0%; right: auto; width: 0%;"></div>
													<div class="fish-slider-step"></div>
													<div class="fish-slider-handle" id="progpoint" style="transform: translateX(-50%); right: auto; left: 0%;"></div>
													<div class="fish-slider-mark"></div>
												</div>
												<div class="index-module_audio-player-time_HvYTi no-select">
													<label id="audioTime">00:00</label>
													<label id="audioDuration">00:00</label>
												</div>
												<div class="index-module_audio-player-control_Ej6J7 no-select">
													<svg width="40" height="40" fill="none" class="index-module_audio-player-control" id="playButton">
														<path d="m25.184 21.267-8.203 5.474a1.813 1.813 0 0 1-2.508-.493 1.794 1.794 0 0 1-.306-1.002V14.3c0-.993.81-1.799 1.807-1.799.359 0 .71.106 1.007.305l8.203 5.473a1.794 1.794 0 0 1 0 2.989Z" fill="#fff"></path>
													</svg>
													<div class="index-module_audio-player-control" id="speedButton">
														<span>X1</span>
													</div>
												</div>
												<div>
													<audio id="media"></audio>
												</div>
											</div>
										</div>
									</div>
									<div class="audioList-module_audio-list_-XAH6" id="list" style="height: 821px;"></div>
								</div>
							</div>
						</div>`)


						let svg_play = `<path fill-rule="evenodd" clip-rule="evenodd" d="M15.301 13.41h1.218c.417 0 .756.34.756.76v11.66c0 .42-.339.76-.756.76H15.3a.758.758 0 0 1-.755-.76V14.17c0-.42.338-.76.755-.76Zm8.18 0H24.7c.417 0 .756.34.756.76v11.66c0 .42-.339.76-.756.76h-1.218a.758.758 0 0 1-.755-.76V14.17c0-.42.338-.76.755-.76Z" fill="#fff"></path>`;
						let svg_pause = `<path d="m25.184 21.267-8.203 5.474a1.813 1.813 0 0 1-2.508-.493 1.794 1.794 0 0 1-.306-1.002V14.3c0-.993.81-1.799 1.807-1.799.359 0 .71.106 1.007.305l8.203 5.473a1.794 1.794 0 0 1 0 2.989Z" fill="#fff"></path>`;
						let svg_playing = $(`<div id="status" style="min-width: 16px; margin-left: 1px; transform: rotate(180deg);">
								<svg class="coursePlayingIcon" x="0px" y="0px" width="18px" height="12px" viewBox="0 0 24 24" fill="currentColor">
								<rect x="0" y="0" width="6" height="7">
									<animateTransform attributeType="xml" attributeName="transform" type="scale" values="1,1; 1,3; 1,1" begin="0s" dur="0.6s" repeatCount="indefinite"></animateTransform>
								</rect>
								<rect x="10" y="0" width="6" height="7">
									<animateTransform attributeType="xml" attributeName="transform" type="scale" values="1,1; 1,3; 1,1" begin="0.2s" dur="0.6s" repeatCount="indefinite"></animateTransform>
								</rect>
								<rect x="20" y="0" width="6" height="7">
									<animateTransform attributeType="xml" attributeName="transform" type="scale" values="1,1; 1,3; 1,1" begin="0.4s" dur="0.6s" repeatCount="indefinite"></animateTransform>
								</rect>
							</svg>
						</div>`)
						let svg_pauseing = $(`<svg id="status" style="min-width: 16px; margin-left: 1px;" width="18px" height="18px" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
							<path d="M3 10.7778H6.11111V17.7778H3V10.7778ZM13.8889 7.66667H17V17.7778H13.8889V7.66667ZM8.44444 3H11.5556V17.7778H8.44444V3Z"></path>
						</svg>`)

						fullDom.find('#media').on('loadstart', function () {
							const media = $(this);
							let button = fullDom.find("#playButton")
							if (media.paused) {
								button.html(svg_pause);
							} else {
								button.html(svg_play);
							}
							fullDom.find("#progress").css('width', '0%');
							fullDom.find("#progpoint").css('left', '0%');
						});

						fullDom.find('#media').on('play', function () {
							let button = fullDom.find("#playButton")
							button.html(svg_play);
							fullDom.find('[class*="audioList-module_audio-item-active"] #playing #status').replaceWith(svg_playing)
						});

						fullDom.find('#media').on('pause', function () {
							let button = fullDom.find("#playButton")
							button.html(svg_pause);
							fullDom.find('[class*="audioList-module_audio-item-active"] #playing #status').replaceWith(svg_pauseing)
						});

						fullDom.find('#media').on('ended', function () {
							let button = fullDom.find("#playButton")
							button.html(svg_pause);
							fullDom.find("#progress").css('width', '100%');
							fullDom.find("#progpoint").css('left', '100%');
						});

						fullDom.find('#media').on('timeupdate', function () {
							const media = $(this)[0];
							const originTime = media.currentTime; // 当前播放时间
							const currentTime = Math.floor(originTime); // 当前播放时间(取整)
							const duration = media.duration; // 总时长（秒）
							if (isNaN(duration)) return;

							const hours = String(Math.floor(currentTime / 3600)).padStart(2, '0');
							const minutes = String(Math.floor((currentTime % 3600) / 60)).padStart(2, '0');

							const seconds = String(currentTime % 60).padStart(2, '0');
							const dSeconds = `.${(originTime - currentTime).toFixed(2).split('.')[1]}`.padStart(3, '0');

							// 处理总时长
							const totalHours = String(Math.floor(duration / 3600)).padStart(2, '0');
							const totalMinutes = String(Math.floor((duration % 3600) / 60)).padStart(2, '0');
							const totalSeconds = String(Math.floor(duration % 60)).padStart(2, '0');
							const totalDSeconds = `.${(duration - Math.floor(duration)).toFixed(2).split('.')[1]}`.padStart(3, '0');

							fullDom.find('#audioTime').text(hours !== '00' ? `${hours}:${minutes}:${seconds}${dSeconds}` : minutes !== '00' ? `${minutes}:${seconds}${dSeconds}` : `00:${seconds}${dSeconds}`);
							fullDom.find('#audioDuration').text(totalHours !== '00' ? `${totalHours}:${totalMinutes}:${totalSeconds}${totalDSeconds}` : totalMinutes !== '00' ? `${totalMinutes}:${totalSeconds}${totalDSeconds}` : `00:${totalSeconds}${totalDSeconds}`);

							const progress = (originTime / duration) * 100;
							fullDom.find("#progress").css('width', progress + '%');
							fullDom.find("#progpoint").css('left', progress + '%');
						});


						fullDom.find("#playButton").on('click', function () {
							let media = fullDom.find('#media')[0]
							if (isNaN(media.duration)) return;
							if (media.paused) {
								media.play();
							} else {
								media.pause();
							}
						});

						fullDom.find('#speedButton').on('click', function (event) {
							const media = fullDom.find('#media')[0];
							const element = $(this)
							if (isNaN(media.duration)) return;
							const speeds = [0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0]; // 倍速数组
							let currentSpeedIndex = (speeds.indexOf(media.playbackRate) + 1) % speeds.length; // 计算下一个速度索引
							media.playbackRate = speeds[currentSpeedIndex]; // 更新倍速
							element.find('span').text(`X${speeds[currentSpeedIndex]}`); // 更新显示
						});

						fullDom.find('#progressBar').on('mousedown', function (event) {
							event.preventDefault();

							function update(event) {
								const media = fullDom.find('#media')[0];
								const progressBar = fullDom.find('#progressBar');
								const progressBarWidth = progressBar.width();
								let offsetX = event ? (event.pageX - progressBar.offset().left) : 0;
								// 限制拖动范围
								if (offsetX < 0) offsetX = 0;
								if (offsetX > progressBarWidth) offsetX = progressBarWidth;

								// 更新进度条和点的位置
								const percentage = offsetX / progressBarWidth;

								// 更新视频播放进度
								media.currentTime = percentage * media.duration;
							}

							if (isNaN(media.duration)) return;
							update(event)

							$(document).on('mousemove', function (event) {
								update(event)
							});

							$(document).on('mouseup', function (event) {
								event = event || window.event;
								document.onmousemove = null;
								document.onmouseup = null;
								$(document).off('mousemove');
								$(document).off('mouseup');
							});
						});

						let lastItem
						function update(item, itemDom) {
							if (item.id === lastItem) return;
							lastItem = item.id
							if (!fullDom.find('#media')[0].paused) fullDom.find('#media')[0].pause()
							fullDom.find('#media').attr('src', item.url)
							fullDom.find('#audioTitle').text(item.title)
							fullDom.find('#audioTitle').attr('title', item.title)
							fullDom.find('#audioTime').text(`00:00`)
							fullDom.find('#audioDuration').text(item.durationText)

							try {
								if (fullDom.find('#media')[0].paused) fullDom.find('#media')[0].play()
							} catch (e) { }

							fullDom.find('[class*="audioList-module_audio-item-active"] #playing').css('color', '')
							fullDom.find('[class*="audioList-module_audio-item-active"] #playing #duration').show()
							fullDom.find('[class*="audioList-module_audio-item-active"] #playing #status').replaceWith('<svg id="status" style="display:none;"></svg>')
							fullDom.find('[class*="audioList-module_audio-item-active"]').removeClass('audioList-module_audio-item-active_Xx7f-')
							fullDom.find('[class*="audioList-module_audio-item-active"]').removeClass('audioList-module_audio-item-active_Xx7f-')

							itemDom.addClass('audioList-module_audio-item-active_Xx7f-')
							itemDom.find('#playing #duration').hide()
							itemDom.find('#playing #status').replaceWith(svg_playing)
						}

						Object.values(data.audio).forEach((item) => {
							let itemDom = $(`<div class="audioList-module_audio-item_GGkA9 no-select" style="align-items: center;">
								<img src="${getIcon('音频')}" class="audioList-module_left_jVqte">
								<div class="audioList-module_center_MjbID" id="info" title="${item.title}">${item.title}</div>
								<div class="audioList-module_right_M7mTj" style="width: auto;" id="playing">
									<div id="status" style="display:none;"></div>
									<span id="duration">${item.durationText}</span>
								</div>
							</div>`)
							fullDom.find('#list').append(itemDom)
							itemDom.on('click', function () {
								update(item, itemDom)
							})

							let data = {
								name: `${item.title}.${item.format}`,
								url: item.url
							}
							let downloadDom = $(`<button title="如果点击此按钮无法下载原件，请先预览文件，点击预览下方工具栏的下载按钮来下载转换后的 PDF 文件" class="index-module_download_tool_bar">
								<svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
									<g fill="#ffffff">
										<path d="M8 10 5.333 7.333h2V2.667h1.334v4.666h2L8 10Z"></path>
										<path d="M2.667 12V9.333H1.334v3.334c0 .35.298.666.666.666h12a.678.678 0 0 0 .667-.666V9.333h-1.333V12H2.667Z"></path>
									</g>
								</svg>
								<span class="text">下载</span>
							</button>`)

							downloadDom.on('click', async function (event) {
								event.stopPropagation();
								let element = $(this)
								let ins = {};
								let progress = {};
								let index = element.data('index');

								element.prop('disabled', true);

								ins[index] = setInterval(function () {
									let prog = +progress[index] || 0;
									element.find('.text').text(`${prog} %`);
								}, 10);

								try {
									let response = await fetch(data.url);
									if (!response.ok) throw new Error('网络响应失败');

									let totalSize = response.headers.get('Content-Length') || 0;
									let reader = response.body.getReader();
									let receivedLength = 0;
									let chunks = [];

									while (true) {
										const { done, value } = await reader.read();
										if (done) break;
										chunks.push(value);
										receivedLength += value.length;
										progress[index] = Math.floor((receivedLength / totalSize) * 100);
									}

									let blob = new Blob(chunks);
									clearInterval(ins[index]);
									progress[index] = 100;
									element.find('.text').text("完成~");

									// 下载文件
									const downloadUrl = URL.createObjectURL(blob);
									const a = document.createElement('a');
									a.href = downloadUrl;
									a.download = `${data.name}`;
									a.click();
									URL.revokeObjectURL(downloadUrl);

									setTimeout(function () {
										element.find('.text').text("下载");
										$(this).prop('disabled', false);
									}.bind(this), 3000);
								} catch (error) {
									clearInterval(ins[index]);
									console.error("【国家中小学智慧教育平台助手】即时\n下载教材时出错", error)
									element.find('.text').text("失败,重试?");
									$(this).prop('disabled', false).one('click', async function () {
										$(this).trigger('click');
									});
								}
							})

							itemDom.find('#info').after(downloadDom)
						})
					}
					// 既然不给页面内容，那就抄一个已登录的放上去吧
					element.html(fullDom)
				}, true)
			})
		} catch (error) {
			console.error('【国家中小学智慧教育平台助手】\n获取数据时发生错误：', error);
		}
	}

	// 若是文档阅读页
	if ((contentType === 'assets_document' || contentType === 'x_document') && contentId && !/^\/tchMaterial\/detail/.test(location.pathname)) {
		try {
			// 文档信息
			let data = await Promise.any([1, 2, 3].map(async base => {
				try {
					let data = await request({
						url: `https://s-file-${base}.ykt.cbern.com.cn/zxx/ndrs/special_edu/resources/details/${contentId}.json`,
						headers: {
							'Cache-Control': 'no-cache'
						}
					});
					let item = {
						id: data.id,
						title: data.global_title['zh-CN'],
						cover: data.custom_properties?.thumbnails[0],
						author: data.provider_list[0]?.name,
						url: data.ti_items?.find(file => file?.ti_format === "pdf")?.ti_storages[base - 1].replace(/(r\d)-ndr-\w+/, '$1-ndr')
					};
					return item
				} catch (error) {
					console.error('【国家中小学智慧教育平台助手】\n获取数据时发生错误：', error);
				}
			}));

			console.log("【国家中小学智慧教育平台助手】即时\n文档预览：文档数据加载成功\n", data)
			$('title').html(data.title + " - 国家中小学智慧教育平台");

			// 遇到默认弹窗
			waitForKeyElements('div.fish-modal-content div.fish-modal-body div.fish-modal-confirm-body-wrapper', (elemlogin) => {
				if (!elemlogin.find('div.fish-modal-confirm-content').text().match("需要登录才可以查看")) return;

				waitForKeyElements('div[class^="index-module_special-edu-detail_"] div[class^="index-module_content-wrap_"] div[class^="index-module_wrapper_"]', (element) => {
					// 点击登录提示中隐藏的取消按钮
					elemlogin.find('button[type="button"].fish-btn').filter(function () {
						return $(this).text().includes("取 消");
					}).click();

					$('.fish-breadcrumb.breadcrumb-container:last-child span.fish-breadcrumb-link').html(data.title);

					let fullDom = $(`<div class="imageList-module_special-edu-image_A7C2c">
						<div class="index-module_header_tG-zz">
							<h3 class="index-module_title_bnE9V" title="${data.title}" style="width:auto">${data.title}</h3>
							<div class="index-module_info_evO1d">
								<span class="index-module_origin_nuihE">
										<svg class="index-module_icon_dwVZ4"><use xlink:href="#icon_hotel_fill"></use></svg>
										<span class="index-module_department_ewVZW">${data.author}</span>
										<svg class="index-module_icon_dwVZ4 no-select"><use xlink:href="#icon_information_fill"></use></svg>
										<span class="index-module_department_ewVZW no-select" title="所有平台资源均免费使用，任何单位及个人不得用于商业行为">所有平台资源均免费使用，任何单位及个人不得用于商业行为</span>
								</span>
								<div class="index-module_extra_tUQog">
									<span class="index-module_origin_nuihE no-select">
										<svg class="index-module_icon_dwVZ4"><use xlink:href="#icon_star_fill"></use></svg>
										<div>感谢您使用本脚本~</div>
									</span>
								</div>
							</div>
						</div>
						<div class="index-module_divider_rI-lg"></div>
						<div class="imageList-module_special-edu-image-list-wrapper_18zfs">
							<div class="imageList-module_special-edu-image-list_+ywag" style="max-width: unset;">
								<div class="course-document" style="border-radius:8px;">
									<div class="document-context" style="border-radius:8px; overflow: hidden; height: 100%">
										<iframe id="pdfPlayerFirefox"
											src="/pdfjs/2.13/web/viewer.html?file=${data.url}&disableAutoFetch=true&page=1"
											frameborder="0" height="100%" width="100%"></iframe>
									</div>
								</div>
							</div>
						</div>
						<span class="course-handler-tip no-select">感谢所有为资源建设提供资料的单位和个人<br>未经允许不得转载或引用</span>
					</div>`)

					// 既然不给页面内容，那就抄一个已登录的放上去吧
					element.html(fullDom)
				}, true)
			})

			waitForKeyElements("div.course-document div#viewerContainer", (element) => {
				element.html(`
				<div class="document-context" style="overflow: hidden; height: 100%;">
					<iframe id="pdfPlayerFirefox"
						src="/pdfjs/2.13/web/viewer.html?file=${data.url}&disableAutoFetch=true&page=1"
						frameborder="0" height="100%" width="100%"></iframe>
				</div>
				`)
				element.css({ "border-radius": "8px" })
				element.parent().css({ "border-radius": "8px" })
				element.parent().parent().css({ "border-radius": "8px" })
				waitForKeyElements('div.course-document div[class^="doc-"]', (element) => {
					element.css({ "display": "none" })
				})
			})
		} catch (error) {
			console.error('【国家中小学智慧教育平台助手】\n获取数据时发生错误：', error);
		}
	}

	// 若是视频播放页
	if ((contentType === 'assets_video' || contentType === 'x_video') && contentId) {
		try {
			// 视频信息
			let data = await Promise.any([1, 2, 3].map(async base => {
				try {
					let data = await request({
						url: `https://s-file-${base}.ykt.cbern.com.cn/zxx/ndrs/special_edu/resources/details/${contentId}.json`,
						headers: {
							'Cache-Control': 'no-cache'
						}
					});
					let item = {
						id: data.id,
						title: data.global_title?.['zh-CN'],
						cover: data.custom_properties?.thumbnails?.[0],
						author: data.provider_list?.[0]?.name,
						url: null,
						urls: []
					};

					let seenMd5 = new Set();
					let maxQuality = null;
					data.un_ti_items.forEach(video => {
						let md5 = video.ti_md5;
						let encryption = video?.custom_properties?.encryption
						if (!seenMd5.has(md5) && video?.custom_properties?.requirements && (encryption !== 'drm')) {
							let quality = null;
							video.custom_properties.requirements.forEach(req => {
								if (req.name === 'Height') {
									quality = Number(req.value);
									if (maxQuality === null || quality > maxQuality) {
										maxQuality = quality;
									}
								}
							});
							let url = {
								"url": video.ti_storages[base - 1].replace(/(r\d)-ndr-\w+/, '$1-ndr'),
								"html": quality <= 360 ? `流畅 ${quality}P` : quality <= 480 ? `标清 ${quality}P` : quality <= 720 ? `高清 ${quality}P` : quality <= 1080 ? `全高清 ${quality}P` : quality <= 1440 ? `极高清 2K ${quality}P` : quality <= 2160 ? `超高清 4K ${quality}P` : `${quality}P`,
								"quality": quality
							};
							item.urls.push(url);
							seenMd5.add(md5);
						}
					});
					item.urls.sort((a, b) => (b.quality || 0) - (a.quality || 0));
					item.urls.forEach(url => {
						if (url.quality === maxQuality) {
							url.default = true;
							item.url = url.url
						}
					});
					return item
				} catch (error) {
					console.error('【国家中小学智慧教育平台助手】\n获取数据时发生错误：', error);
				}
			}));

			console.log("【国家中小学智慧教育平台助手】即时\n视频预览：视频数据加载成功\n", data)
			$('title').html(data.title + " - 国家中小学智慧教育平台");

			waitForKeyElements("div.course-video div.fish-video", (element) => {
				element.html(`
				<div class="index-module_art-player" style="overflow: hidden; height: auto; width: auto; aspect-ratio: 16/9; border-radius: 8px;">
				</div>
				`)
				play(data.id, data.url, data.urls, data.cover, (art) => {
					art.controls.add({
						name: 'hideList',
						index: 50,
						position: 'right',
						html: '<i class="art-icon"><svg height="21" width="21"><use xlink:href="#icon-laoshixinxi-liner"></use></svg></i>',
						tooltip: '显隐推荐',
						click: function () {
							$('[class^="index-module_comp-related-recommend"]').fadeToggle()
						},
					})
				})
				element.css({ "height": "auto", "width": "auto", "aspect-ratio": "16/9" })
				element.parent().css({ "border-radius": "8px", "height": "auto", "width": "auto" })
				element.parent().parent().css({ "border-radius": "8px", "height": "auto", "width": "auto" })
			}, true)
		} catch (error) {
			console.error('【国家中小学智慧教育平台助手】\n获取数据时发生错误：', error);
		}
	}

	/* 若是专题页 */
	if (contentType === 'thematic_course' && contentId && !isLogin) {
		try {
			// 专题信息
			let data = await Promise.any(["1", "2", "3"].map(async base => {
				try {
					let data = await request({
						url: `https://s-file-${base}.ykt.cbern.com.cn/zxx/ndrs/special_edu/resources/details/${contentId}.json`,
						headers: {
							'Cache-Control': 'no-cache'
						}
					});
					let listParent = await request({
						url: `https://s-file-${base}.ykt.cbern.com.cn/zxx/ndrs/special_edu/thematic_course/trees/${contentId}.json`,
						headers: {
							'Cache-Control': 'no-cache'
						}
					});
					let listChild = await request({
						url: `https://s-file-${base}.ykt.cbern.com.cn/zxx/ndrs/special_edu/thematic_course/${contentId}/resources/list.json`,
						headers: {
							'Cache-Control': 'no-cache'
						}
					});

					let list = {};
					listParent.forEach((tree, index) => {
						list[index] = {
							id: tree.id,
							title: tree.title,
							richTitle: tree.rich_title,
							item: []
						};
						listChild.forEach((item) => {
							if (item.chapter_ids[0] === tree.id) {
								list[index].item.push({
									id: item.id,
									title: item.global_title['zh-CN'].replace("  ", " "),
									cover: item.custom_properties?.thumbnails[0],
									format: item.ti_items?.find(file => (file?.ti_format === "pdf" || file?.ti_format === "m3u8"))?.ti_format,
									source: (() => {
										const sourceFile = item.ti_items?.find(file => file?.ti_is_source_file === true);
										if (sourceFile && sourceFile.ti_storages) {
											if (sourceFile.ti_storages.length >= base) {
												return sourceFile.ti_storages[base - 1].replace(/(r\d)-ndr-\w+/, '$1-ndr')
											} else {
												return sourceFile.ti_storages[0].replace(/(r\d)-ndr-\w+/, '$1-ndr')
											}
										}
										return null;
									})(),
									url: (() => {
										const previewFile = item.ti_items?.find(file => file?.ti_format === "pdf");
										if (previewFile && previewFile.ti_storages) {
											if (previewFile.ti_storages.length >= base) {
												return previewFile.ti_storages[base - 1].replace(/(r\d)-ndr-\w+/, '$1-ndr')
											} else {
												return previewFile.ti_storages[0].replace(/(r\d)-ndr-\w+/, '$1-ndr')
											}
										}
										return null;
									})(),
									urls: (() => {
										if (item.ti_items?.find(file => (file?.ti_format === "m3u8"))?.ti_format !== "m3u8") return null;
										let urls = [];
										let maxQuality = null;
										let seenMd5 = new Set();
										item.un_ti_items.forEach(video => {
											let md5 = video.ti_md5;
											let encryption = video?.custom_properties?.encryption
											if (!seenMd5.has(md5) && video?.custom_properties?.requirements && (encryption !== 'drm')) {
												let quality = null;
												video.custom_properties.requirements.forEach(req => {
													if (req.name === 'Height') {
														quality = Number(req.value);
														if (maxQuality === null || quality > maxQuality) {
															maxQuality = quality;
														}
													}
												});
												let url = {
													"url": video.ti_storages[base - 1].replace(/(r\d)-ndr-\w+/, '$1-ndr'),
													"html": quality <= 360 ? `流畅 ${quality}P` : quality <= 480 ? `标清 ${quality}P` : quality <= 720 ? `高清 ${quality}P` : quality <= 1080 ? `全高清 ${quality}P` : quality <= 1440 ? `极高清 2K ${quality}P` : quality <= 2160 ? `超高清 4K ${quality}P` : `${quality}P`,
													"quality": quality,
													"item": video
												};
												urls.push(url);
												seenMd5.add(md5);
											}
										});
										urls.sort((a, b) => (b.quality || 0) - (a.quality || 0));
										urls.forEach(url => {
											if (url.quality === maxQuality) {
												url.default = true;
											}
										});
										return urls;
									})(),
								});
							}
						});
						list[index].item.sort((a, b) => {
							// 使用 pinyin 库将中文转换为拼音进行排序
							let pinyinA = pinyin(a.title, { toneType: 'none' });
							let pinyinB = pinyin(b.title, { toneType: 'none' });
							// 正则表达式提取字符串中的数字
							let numA = a.title.match(/\d+/);
							let numB = b.title.match(/\d+/);
							// 如果两者都有数字，按数字排序
							if (numA && numB) {
								return parseInt(numA[0], 10) - parseInt(numB[0], 10);
							}
							// 如果只有一个有数字，优先按数字排序
							if (numA) return -1;
							if (numB) return 1;
							// 否则按拼音排序
							return pinyinA.localeCompare(pinyinB);
						});
					});

					let item = {
						id: data.id,
						title: data.global_title['zh-CN'],
						cover: data.custom_properties?.thumbnails[0],
						author: data.provider_list[0]?.name,
						list: list,
					};
					return item
				} catch (error) {
					console.error('【国家中小学智慧教育平台助手】\n获取数据时发生错误：', error);
				}
			}));

			console.log("【国家中小学智慧教育平台助手】即时\n教材专题：项目数据加载成功\n", data)
			$('title').html(data.title + " - 国家中小学智慧教育平台");

			waitForKeyElements('div[class*="index-module_detail-top"]', (element) => {

				let fullDom = $(`<div class="index-module_detail-top_tYgSd">
					<div class="index-module_header_r8Olw">
						<div class="index-module_name_XHQul">${data.title}</div>
						<div class="index-module_control_du6Kf">
							<div class="index-module_providers_Cu7rz">
								<svg class="index-module_icon_RucWz"><use xlink:href="#icon_hotel_fill"></use></svg>
								<span class="index-module_text_KLfhw">${data.author}</span>
								<svg class="index-module_icon_RucWz"><use xlink:href="#icon_information_fill"></use></svg>
								<span class="index-module_text_KLfhw no-select" title="所有平台资源均免费使用，任何单位及个人不得用于商业行为">所有平台资源均免费使用，任何单位及个人不得用于商业行为</span>
							</div>
							<div class="index-module_control-content_xrWUD no-select">
								<svg class="index-module_icon_RucWz"><use xlink:href="#icon_star_fill"></use></svg>
								<div>感谢您使用本脚本~</div>
							</div>
						</div>
					</div>
					<div class="index-module_detail-container_R+I41">
						<div class="index-module_detail-top-l_leSqX">
							<div class="index-module_video-wrapper_5J5cW">
								<div class="course-document">
									<div id="viewerContainer" class="viewerContainer">
										<span id="tch-loading" class="tch-loading no-select">
											<p><h2>启始</h2></p>
											<p>请从右侧目录选择文件以查看预览…</p>
										</span>
									</div>
								</div>
							</div>
							<div class="course-detail-handler no-select" style="z-index:0">
								<span class="course-handler-tip">感谢所有为资源建设提供资料的单位和个人<br>未经允许不得转载或引用</span>
							</div>
						</div>
						<div class="index-module_detail-top-r_Jb-pW" style="display: block;">
							<div class="index-module_catalog-wrapper_uYB1D">
								<div class="index-module_catalog-title_NSNUY no-select">
									<i role="img" class="fishicon fishicon-left"></i>
									<span>目录</span>
								</div>
								<div class="index-module_course-catalog_-4RqA" style="height: 748px;">
									<div class="fish-collapse fish-collapse-icon-position-right" id="list"></div>
								</div>
							</div>
						</div>
					</div>
				</div>`)
				// 既然不给页面内容，那就抄一个已登录的放上去吧
				element.replaceWith(fullDom)

				let lastItem
				function update(list, item, listDom, itemDom) {
					if (item.id === lastItem) return;
					lastItem = item.id
					fullDom.find('div.course-document div#viewerContainer').html("")
					fullDom.find('[class*="index-module_study-list-icon-play"]').remove()
					fullDom.find('[class*="index-module_resource-item-active"]').removeClass("index-module_resource-item-active_7sImn")
					itemDom.find('#info').append(`<div class="index-module_study-list-icon-r_CMKbc index-module_study-list-icon-play_HIe+l" style="min-width:16px;"></div>`)
					itemDom.addClass("index-module_resource-item-active_7sImn")
					if (item.format === "pdf") {
						fullDom.find('div.course-document div#viewerContainer').html(`<div class="document-context" style="overflow: hidden; height: 100%;">
						<iframe id="pdfPlayerFirefox"
							src="/pdfjs/2.13/web/viewer.html?file=${item.url}&disableAutoFetch=true&page=1"
							frameborder="0" height="100%" width="100%"></iframe>
						</div>`)
					} else if (item.format === "m3u8") {
						fullDom.find('div.course-document div#viewerContainer').html(`<div
							class="index-module_art-player"
							style="overflow: hidden; height: 100%; width: 100%">
						</div>`)
						play(item?.id, (item?.urls[0]?.url || ''), (item?.urls || ''), item?.cover, (art) => {
							art.controls.add({
								name: 'hideList',
								index: 50,
								position: 'right',
								html: '<i class="art-icon"><svg height="21" width="21"><use xlink:href="#icon-laoshixinxi-liner"></use></svg></i>',
								tooltip: '显隐推荐',
								click: function () {
									$('[class^="index-module_comp-related-recommend"]').fadeToggle()
								},
							})
						})
					}
				}

				Object.values(data.list).forEach((list, listIndex) => {
					let listDom = $(`<div class="fish-collapse-item fish-collapse-item-active">
						<div class="fish-collapse-header" id="listTitle" style="cursor: default;">${list.title}</div>
						<div class="fish-collapse-content fish-collapse-content-active">
							<div class="fish-collapse-content-box">
								<div class="fish-collapse fish-collapse-icon-position-right">
									<div class="index-module_resources_uA99Y" id="res"></div>
								</div>
							</div>
						</div>
					</div>`)
					fullDom.find('#list').append(listDom)
					list.item.forEach((item, itemIndex) => {
						let itemDom = $(`<div class="index-module_resource-item_Va-YD no-select">
							<img src="${item.format === 'pdf' ? getIcon('文档') : item.format === 'm3u8' ? getIcon('视频') : getIcon('文档')}" class="index-module_study-list-icon-l_Z5Wbs">
							<div class="index-module_txt-box_Pp102" id="info">
								<span class="index-module_study-list-text_sxCZD">${item.title}</span>
							</div>
						</div>`)
						if (item.title === list.title) {
							itemDom = $(`<div class="index-module_resources_uA99Y no-select">
								<div class="index-module_resource-item_Va-YD ">
									<img src="${item.format === 'pdf' ? getIcon('文档') : item.format === 'm3u8' ? getIcon('视频') : getIcon('文档')}" class="index-module_study-list-icon-l_Z5Wbs">
									<div class="index-module_txt-box_Pp102" id="info">
										<span class="index-module_study-list-text_sxCZD">${item.title}</span>
									</div>
								</div>
							</div>`)
						}
						if (item.title === list.title) {
							listDom.find("*").remove()
							fullDom.find('#list').append(itemDom)
						} else {
							listDom.find('#res').append(itemDom)
						}
						itemDom.on('click', function () {
							update(list, item, listDom, itemDom)
						})
						if (item.source) {
							let src = new URL(item.source)
							let data = {
								name: decodeURIComponent(src.pathname.substring(src.pathname.lastIndexOf('/') + 1)),
								url: src.toString()
							}

							let downloadDom = $(`<button title="如果点击此按钮无法下载原件，请先预览文件，点击预览下方工具栏的下载按钮来下载转换后的 PDF 文件" class="index-module_download_tool_bar">
								<svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
									<g fill="#ffffff">
										<path d="M8 10 5.333 7.333h2V2.667h1.334v4.666h2L8 10Z"></path>
										<path d="M2.667 12V9.333H1.334v3.334c0 .35.298.666.666.666h12a.678.678 0 0 0 .667-.666V9.333h-1.333V12H2.667Z"></path>
									</g>
								</svg>
								<span class="text">下载</span>
							</button>`)

							downloadDom.on('click', async function (event) {
								event.stopPropagation(); // 阻止事件冒泡
								let element = $(this)
								let ins = {};
								let progress = {};
								let index = element.data('index');

								element.prop('disabled', true);

								ins[index] = setInterval(function () {
									let prog = +progress[index] || 0;
									element.find('.text').text(`${prog} %`);
								}, 10);

								try {
									let response = await fetch(data.url);
									if (!response.ok) throw new Error('网络响应失败');

									let totalSize = response.headers.get('Content-Length') || 0;
									let reader = response.body.getReader();
									let receivedLength = 0;
									let chunks = [];

									while (true) {
										const { done, value } = await reader.read();
										if (done) break;
										chunks.push(value);
										receivedLength += value.length;
										progress[index] = Math.floor((receivedLength / totalSize) * 100);
									}

									let blob = new Blob(chunks);
									clearInterval(ins[index]);
									progress[index] = 100;
									element.find('.text').text("完成~");

									// 下载文件
									const downloadUrl = URL.createObjectURL(blob);
									const a = document.createElement('a');
									a.href = downloadUrl;
									a.download = `${data.name}`;
									a.click();
									URL.revokeObjectURL(downloadUrl);

									setTimeout(function () {
										element.find('.text').text("下载");
										$(this).prop('disabled', false);
									}.bind(this), 3000);
								} catch (error) {
									clearInterval(ins[index]);
									console.error("【国家中小学智慧教育平台助手】即时\n下载教材时出错", error)
									element.find('.text').text("失败,重试?");
									$(this).prop('disabled', false).one('click', async function () {
										$(this).trigger('click');
									});
								}
							})

							itemDom.find('#info').append(downloadDom)
						}
						//if (listIndex === 0 && itemIndex === 0) itemDom.click()
					})
				})
			}, true)

			// 遇到默认弹窗
			waitForKeyElements('div.fish-modal-content div.fish-modal-body div.fish-modal-confirm-body-wrapper', (elemlogin) => {
				if (!elemlogin.find('div.fish-modal-confirm-content').text().match("需要登录才可以查看")) return;

				waitForKeyElements('div[class^="index-module_error_"]', (element) => {
					// 点击登录提示中隐藏的取消按钮
					elemlogin.find('button[type="button"].fish-btn').filter(function () {
						return $(this).text().includes("取 消");
					}).click();

					$('title').html(data.title + " - 国家中小学智慧教育平台");

					let fullDom = $(`<div class="web-breadcrumb">
						<div class="fish-breadcrumb breadcrumb-container" style="display:flex">
							<span style="display:inline-flex">
								<a class="fish-breadcrumb-link" href="/">首页</a>
								<span class="fish-breadcrumb-separator">&gt;</span>
							</span>
							<span style="display:inline-flex">
								<a class="fish-breadcrumb-link" href="/tchMaterial">教材</a>
								<span class="fish-breadcrumb-separator">&gt;</span>
							</span>
							<span style="display:inline-flex">
								<span class="fish-breadcrumb-link">${data.title}</span>
								<span class="fish-breadcrumb-separator">&gt;</span>
							</span>
						</div>
					</div>
					<div class="fish-spin-nested-loading x-edu-nested-loading">
						<div class="fish-spin-container">
							<div class="index-module_course-detail_CQCvk">
								<div class="index-module_detail-top_tYgSd"></div>
								<div class="index-module_detail-bottom_JqZB3"></div>
							</div>
						</div>
					</div>`)

					// 既然不给页面内容，那就抄一个已登录的放上去吧
					element.replaceWith(fullDom)
				}, true)
			}, true)
		} catch (error) {
			console.error('【国家中小学智慧教育平台助手】\n获取数据时发生错误：', error);
		}
	}

	/* 若是课程页 */
	if (/^\/syncClassroom\/classActivity/.test(location.pathname) && activityId && !isLogin) {
		try {
			// 课程信息
			let data = await Promise.any(["1", "2", "3"].map(async base => {
				try {
					let data = await request({
						url: `https://s-file-${base}.ykt.cbern.com.cn/zxx/ndrv2/national_lesson/resources/details/${activityId}.json`,
						headers: {
							'Cache-Control': 'no-cache'
						}
					});

					let res = await request({
						url: `https://s-file-${base}.ykt.cbern.com.cn/zxx/ndrs/national_lesson/resources/${activityId}/relation_resource.json`,
						headers: {
							'Cache-Control': 'no-cache'
						}
					});


					let item = {
						id: data.id,
						title: data.global_title['zh-CN'],
						cover: data.custom_properties?.thumbnails[0],
						author: data.provider_list[0]?.name,
						book: res?.tch_materials?.[0]?.id,
						list: (() => {
							if (data?.relations?.national_course_resource) {
								let list = []
								data?.relations?.national_course_resource?.forEach(item => {
									list.push({
										id: item.id,
										title: item.title,
										format: item.ti_items?.find(file => (file?.ti_format === "pdf" || file?.ti_format === "m3u8"))?.ti_format,
										url: (() => {
											const previewFile = item.ti_items?.find(file => file?.ti_format === "pdf");
											if (previewFile && previewFile.ti_storages) {
												if (previewFile.ti_storages.length >= base) {
													return previewFile.ti_storages[base - 1].replace(/(r\d)-ndr-\w+/, '$1-ndr')
												} else {
													return previewFile.ti_storages[0].replace(/(r\d)-ndr-\w+/, '$1-ndr')
												}
											}
											return null;
										})(),
										urls: (() => {
											if (item.ti_items?.find(file => (file?.ti_format === "m3u8"))?.ti_format !== "m3u8") return null;
											let urls = [];
											let maxQuality = null;
											let seenMd5 = new Set();
											item.un_ti_items.forEach(video => {
												let md5 = video.ti_md5;
												let encryption = video?.custom_properties?.encryption
												if (!seenMd5.has(md5) && video?.custom_properties?.requirements && (encryption !== 'drm')) {
													let quality = null;
													video.custom_properties.requirements.forEach(req => {
														if (req.name === 'Height') {
															quality = Number(req.value);
															if (maxQuality === null || quality > maxQuality) {
																maxQuality = quality;
															}
														}
													});
													let url = {
														"url": video.ti_storages[base - 1].replace(/(r\d)-ndr-\w+/, '$1-ndr'),
														"html": quality <= 360 ? `流畅 ${quality}P` : quality <= 480 ? `标清 ${quality}P` : quality <= 720 ? `高清 ${quality}P` : quality <= 1080 ? `全高清 ${quality}P` : quality <= 1440 ? `极高清 2K ${quality}P` : quality <= 2160 ? `超高清 4K ${quality}P` : `${quality}P`,
														"quality": quality,
														"item": video
													};
													urls.push(url);
													seenMd5.add(md5);
												}
											});
											urls.sort((a, b) => (b.quality || 0) - (a.quality || 0));
											urls.forEach(url => {
												if (url.quality === maxQuality) {
													url.default = true;
												}
											});
											return urls;
										})()
									})
								})
								return list
							}
							return null;
						})(),
						zorigin: data
					};
					return item
				} catch (error) {
					console.error('【国家中小学智慧教育平台助手】\n获取数据时发生错误：', error);
				}
			}));

			console.log("【国家中小学智慧教育平台助手】即时\n教材课程：项目数据加载成功\n", data)
			$('title').html(data.title + " - 国家中小学智慧教育平台");

			// 遇到默认弹窗
			waitForKeyElements('div.fish-modal-content div.fish-modal-body div.fish-modal-confirm-body-wrapper', (elemlogin) => {
				if (!elemlogin.find('div.fish-modal-confirm-content').text().match("需要登录才可以查看")) return;
				// 点击登录提示中隐藏的取消按钮
				elemlogin.find('button[type="button"].fish-btn').filter(function () {
					return $(this).text().includes("取 消");
				}).click();
			}, true)

			if (data.book) {
				waitForKeyElements('[class*="index-module_tch-material"]', (element) => {
					let clone = element.clone(true)
					clone.on('click', () => {
						GM_openInTab(`//${location.host}/tchMaterial/detail?contentType=assets_document&contentId=${data.book}&catalogType=tchMaterial&subCatalog=tchMaterial${isNight ? '&x-edu-theme=dark' : ''}`, { active: true });
					})
					element.replaceWith(clone);
				}, true)
			}

			waitForKeyElements('.course-detail-container', (element) => {
				let fullDom = $(`<div class="course-detail-l with-handler">
					<div class="course-detail-player" style="height: 100%; background-color: rgb(0, 0, 0); overflow: hidden;">
						<div class="course-document">
							<div id="viewerContainer" class="viewerContainer">
								<span id="tch-loading" class="tch-loading no-select">
									<p><h2>启始</h2></p>
									<p>请从右侧目录选择文件以查看预览…</p>
								</span>
							</div>
						</div>
					</div>
					<div class="course-detail-handler">
						<span class="course-handler-tip">感谢所有为资源建设提供资料的单位和个人<br>未经允许不得转载或引用</span>
					</div>
				</div>
				<div class="course-detail-r">
					<div class="course-detail-r-list" style="display: block; width: 392px;">
						<div class="study-list">
							<div class="study-list-body" style="max-height: 580px;">
								<div class="study-list-menu">
									<i><svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2.5" y="1.667" width="15" height="16.667" rx="2" fill="url(#icon_color_svg__a)"></rect><path d="M11.166 6.926a.2.2 0 0 1-.333-.15v-5.11H15v5.11a.2.2 0 0 1-.333.15L13.05 5.488a.2.2 0 0 0-.266 0l-1.618 1.438Z" fill="url(#icon_color_svg__b)"></path><path d="M11.133 6.889a.15.15 0 0 1-.25-.112v-5.06h4.067v5.06a.15.15 0 0 1-.25.112l-1.617-1.438a.25.25 0 0 0-.332 0L11.133 6.89Z" stroke="#fff" stroke-opacity="0.2" stroke-width="0.1"></path><rect x="5" y="10" width="5" height="1.667" rx="0.833" fill="url(#icon_color_svg__c)"></rect><rect x="5" y="13.333" width="7.5" height="1.667" rx="0.833" fill="url(#icon_color_svg__d)"></rect><defs><linearGradient id="icon_color_svg__a" x1="2.5" y1="1.667" x2="2.5" y2="18.333" gradientUnits="userSpaceOnUse"><stop stop-color="#6ABCFF"></stop><stop offset="1" stop-color="#1E62EC"></stop></linearGradient><linearGradient id="icon_color_svg__b" x1="10.023" y1="4.753" x2="14.253" y2="8.152" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"></stop><stop offset="1" stop-color="#fff" stop-opacity="0.6"></stop></linearGradient><linearGradient id="icon_color_svg__c" x1="4.028" y1="10.926" x2="4.765" y2="13.295" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"></stop><stop offset="1" stop-color="#fff" stop-opacity="0.6"></stop></linearGradient><linearGradient id="icon_color_svg__d" x1="3.542" y1="14.259" x2="4.058" y2="16.751" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"></stop><stop offset="1" stop-color="#fff" stop-opacity="0.6"></stop></linearGradient></defs></svg></i>
									<span>课时资源</span>
								</div>
								<div class="style-module_tab-container_zfk2b" style="transform: translateX(0%);">
									<div class="style-module_tab-panel_6DFs6" id="list"></div>
								</div>
							</div>
						</div>
					</div>
				</div>`)

				// 既然不给页面内容，那就抄一个已登录的放上去吧
				element.html(fullDom)

				let lastItem
				function update(item, itemDom) {
					if (item.id === lastItem) return;
					lastItem = item.id

					fullDom.find(".study-list-item-active").removeClass('study-list-item-active')
					fullDom.find(".study-list-icon-play").removeClass('study-list-icon-play')
					itemDom.addClass('study-list-item-active')
					itemDom.find('.study-list-icon-r').addClass('study-list-icon-play')

					if (item.format === "pdf") {
						fullDom.find('div.course-document div#viewerContainer').html(`<div class="document-context" style="overflow: hidden; height: 100%;">
						<iframe id="pdfPlayerFirefox"
							src="/pdfjs/2.13/web/viewer.html?file=${item.url}&disableAutoFetch=true&page=1"
							frameborder="0" height="100%" width="100%"></iframe>
						</div>`)
					} else if (item.format === "m3u8") {
						fullDom.find('div.course-document div#viewerContainer').html(`<div
							class="index-module_art-player"
							style="overflow: hidden; height: 100%; width: 100%">
						</div>`)
						play(item?.id, (item?.urls[0]?.url || ''), (item?.urls || ''), item?.cover, (art) => {
							art.controls.add({
								name: 'hideList',
								index: 50,
								position: 'right',
								html: '<i class="art-icon"><svg height="21" width="21"><use xlink:href="#icon-laoshixinxi-liner"></use></svg></i>',
								tooltip: '显隐推荐',
								click: function () {
									$('[class^="index-module_comp-related-recommend"]').fadeToggle()
								},
							})
						})
					}
				}

				data.list.forEach((item, itemIndex) => {
					let itemDom = $(`<div class="study-list-item">
						<img class="study-list-icon-l" src="${getIcon(item.title)}"></img>
						<div class="study-list-text" id="info">${item.title}</div>
						<svg class="study-list-icon-r" style="margin-left:5px"></svg>
					</div>`)
					fullDom.find('#list').append(itemDom)
					itemDom.on('click', function () {
						update(item, itemDom)
					})
					if (item.format === 'pdf') {
						let src = new URL(item.url)
						let data = {
							name: item.title,
							url: src.toString()
						}

						let downloadDom = $(`<button title="如果此按钮无法下载，请点击下方工具栏的下载按钮" class="index-module_download_tool_bar_ydLdZ index-module_download_tool_bar">
								<svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
									<g fill="#ffffff">
										<path d="M8 10 5.333 7.333h2V2.667h1.334v4.666h2L8 10Z"></path>
										<path d="M2.667 12V9.333H1.334v3.334c0 .35.298.666.666.666h12a.678.678 0 0 0 .667-.666V9.333h-1.333V12H2.667Z"></path>
									</g>
								</svg>
								<span class="text">下载</span>
							</button>`)

						downloadDom.on('click', async function (event) {
							event.stopPropagation(); // 阻止事件冒泡
							let element = $(this)
							let ins = {};
							let progress = {};
							let index = element.data('index');

							element.prop('disabled', true);

							ins[index] = setInterval(function () {
								let prog = +progress[index] || 0;
								element.find('.text').text(`${prog} %`);
							}, 10);

							try {
								let response = await fetch(item.url);
								if (!response.ok) throw new Error('网络响应失败');

								let totalSize = response.headers.get('Content-Length') || 0;
								let reader = response.body.getReader();
								let receivedLength = 0;
								let chunks = [];

								while (true) {
									const { done, value } = await reader.read();
									if (done) break;
									chunks.push(value);
									receivedLength += value.length;
									progress[index] = Math.floor((receivedLength / totalSize) * 100);
								}

								let blob = new Blob(chunks);
								clearInterval(ins[index]);
								progress[index] = 100;
								element.find('.text').text("完成~");

								// 下载文件
								const downloadUrl = URL.createObjectURL(blob);
								const a = document.createElement('a');
								a.href = downloadUrl;
								a.download = `${data.name}.pdf`;
								a.click();
								URL.revokeObjectURL(downloadUrl);

								setTimeout(function () {
									element.find('.text').text("下载");
									$(this).prop('disabled', false);
								}.bind(this), 3000);
							} catch (error) {
								clearInterval(ins[index]);
								console.error("【国家中小学智慧教育平台助手】即时\n下载教材时出错", error)
								element.find('.text').text("失败,重试?");
								$(this).prop('disabled', false).one('click', async function () {
									$(this).trigger('click');
								});
							}
						})

						itemDom.find('#info').after(downloadDom)
					}
					//if (itemIndex === 0) itemDom.click()
				})
			})
		} catch (error) {
			console.error('【国家中小学智慧教育平台助手】\n获取数据时发生错误：', error);
		}
	}

	// 遇到 PDF 预览器的 iframe
	waitForKeyElements("iframe[src*='/web/viewer.html']", (element) => {
		let parent = element.parent();
		let button = $(`
			<div id="tch-loading" class="tch-loading no-select">
				<img src=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBvcGFjaXR5PSIwLjIiIGN4PSIyNCIgY3k9IjI0IiByPSIyMSIgc3Ryb2tlPSIjMUU2MkVDIiBzdHJva2Utd2lkdGg9IjYiLz4KPG1hc2sgaWQ9InBhdGgtMi1pbnNpZGUtMV8yMDA3XzUzNDg3IiBmaWxsPSJ3aGl0ZSI+CjxwYXRoIGQ9Ik00Mi4zODUxIDguNTczMUM0NS42NDI5IDEyLjQ1NTYgNDcuNTg4IDE3LjI2OTkgNDcuOTQxNSAyMi4zMjU5QzQ4LjI5NTEgMjcuMzgxOCA0Ny4wMzg5IDMyLjQxOTkgNDQuMzUzMSAzNi43MTgxTDM5LjI2NDkgMzMuNTM4NkM0MS4yNzkyIDMwLjMxNDkgNDIuMjIxMyAyNi41MzY0IDQxLjk1NjIgMjIuNzQ0NEM0MS42OTEgMTguOTUyNCA0MC4yMzIyIDE1LjM0MTcgMzcuNzg4OCAxMi40Mjk4TDQyLjM4NTEgOC41NzMxWiIvPgo8L21hc2s+CjxwYXRoIGQ9Ik00Mi4zODUxIDguNTczMUM0NS42NDI5IDEyLjQ1NTYgNDcuNTg4IDE3LjI2OTkgNDcuOTQxNSAyMi4zMjU5QzQ4LjI5NTEgMjcuMzgxOCA0Ny4wMzg5IDMyLjQxOTkgNDQuMzUzMSAzNi43MTgxTDM5LjI2NDkgMzMuNTM4NkM0MS4yNzkyIDMwLjMxNDkgNDIuMjIxMyAyNi41MzY0IDQxLjk1NjIgMjIuNzQ0NEM0MS42OTEgMTguOTUyNCA0MC4yMzIyIDE1LjM0MTcgMzcuNzg4OCAxMi40Mjk4TDQyLjM4NTEgOC41NzMxWiIgc3Ryb2tlPSIjMUU2MkVDIiBzdHJva2Utd2lkdGg9IjEyIiBtYXNrPSJ1cmwoI3BhdGgtMi1pbnNpZGUtMV8yMDA3XzUzNDg3KSIvPgo8L3N2Zz4K alt="">
				<p>国家智慧教育公共服务平台助手</p>
				<p>正在加载 PDF 文件…</p>
			</div>
			<div class="index-module_pdf-control left">
				<button class="index-module_pdf-button index-module_pdf-rating" onclick="oopen('https://greasyfork.org/scripts/459404/feedback','_blank')">
					<svg><use xlink:href="#web_icon_dianzan_fill"></use></svg>
					<span class="text">好评</span>
				</button>
				<button class="index-module_pdf-button index-module_pdf-refresh">
					<svg><use xlink:href="#pc_icon_shuaxin_line"></use></svg>
					<span class="text">刷新</span>
				</button>
			</div>
			<div class="index-module_pdf-control right">
				<button class="index-module_pdf-button index-module_pdf-download" title="如果此按钮无法下载，请点击下方工具栏的下载按钮">
					<svg><use xlink:href="#pc_icon_xiazai-fill"></use></svg>
					<span class="text">下载</span>
				</button>
				<button class="index-module_pdf-button index-module_pdf-fullscreen">
					<svg><use xlink:href="#web_icon_fullscreen"></use></svg>
					网页全屏 (Esc)
				</button>
			</div>`)
		element.css({ "background": "#232d2a" })
		let pdfWindow = element[0].contentWindow

		button.find('.index-module_pdf-refresh').on('click', function () {
			let button = $(this)
			button.find('.text').text('等待');
			pdfWindow.location.reload();
			element.on('load', function () {
				button.find('.text').text('刷新');
			});
		})
		button.find('.index-module_pdf-fullscreen').on('click', function () {
			let element = $(this)
			if (!parent.hasClass('fullscreen-dom')) {
				// 进入全屏模式
				$('body').addClass('no-scroll');
				parent.addClass('fullscreen-dom');
				element.html('<svg><use xlink:href="#web_icon_fullscreen-exit"></use></svg>退出全屏 (Esc)');
				$('#header').fadeOut();
				button.find('.index-module_pdf-rating').fadeOut();
				button.find('.index-module_pdf-refresh').fadeOut();
				button.find('.index-module_pdf-download').fadeOut();
			} else {
				// 退出全屏模式
				$('body').removeClass('no-scroll');
				parent.removeClass('fullscreen-dom');
				element.html('<svg><use xlink:href="#web_icon_fullscreen"></use></svg>网页全屏 (Esc)');
				$('#header').fadeIn();
				button.find('.index-module_pdf-rating').fadeIn();
				button.find('.index-module_pdf-refresh').fadeIn();
				button.find('.index-module_pdf-download').fadeIn();
			}
		});
		$(document).off('keydown').on('keydown', function (event) {
			if (event.key === 'Escape' || event.which === 27) button.find('.index-module_pdf-fullscreen').click();
		});
		element.on('load', function () {
			let loading = $('body').find('#tch-loading');
			loading.fadeOut();
			try {
				const iframeDocument = this.contentDocument || this.contentWindow.document;
				$(iframeDocument).off('keydown').on('keydown', function (event) {
					if (event.key === 'Escape' || event.which === 27) {
						button.find('.index-module_pdf-fullscreen').click();
					}
				});
			} catch (e) { }
		});
		button.find('.index-module_pdf-download').on('click', async function () {
			let src = new URL(pdfWindow.location.href)
			let url = src.searchParams.get("file")
			let fileName = decodeURIComponent(url.substring(url.lastIndexOf('/') + 1))
			let title = $(document).find('h3[title]').attr("title") || fileName || document.title
			let data = {
				title: title,
				url: url
			}
			let element = $(this)
			let ins = {};
			let progress = {};
			let index = element.data('index');

			element.prop('disabled', true);

			ins[index] = setInterval(function () {
				let prog = +progress[index] || 0;
				element.find('.text').text(prog + "%");
			}, 10);

			try {
				let response = await fetch(data.url);
				if (!response.ok) throw new Error('网络响应失败');

				let totalSize = response.headers.get('Content-Length') || 0;
				let reader = response.body.getReader();
				let receivedLength = 0;
				let chunks = [];

				while (true) {
					const { done, value } = await reader.read();
					if (done) break;
					chunks.push(value);
					receivedLength += value.length;
					progress[index] = Math.floor((receivedLength / totalSize) * 100);
				}

				let blob = new Blob(chunks);
				clearInterval(ins[index]);
				progress[index] = 100;
				element.find('.text').text("完成~");

				// 下载文件
				const downloadUrl = URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.href = downloadUrl;
				a.download = `${data.title}.pdf`;
				a.click();
				URL.revokeObjectURL(downloadUrl);

				setTimeout(function () {
					element.find('.text').text("下载");
					$(this).prop('disabled', false);
				}.bind(this), 3000);
			} catch (error) {
				clearInterval(ins[index]);
				console.error("【国家中小学智慧教育平台助手】即时\n下载教材时出错", error)
				element.find('.text').text("失败,重试?");
				$(this).prop('disabled', false).one('click', async function () {
					$(this).trigger('click');
				});
			}
		});

		element.before(button)
	})

	// 预览页面增强
	if (/^\/pdfjs\/.*\/web\/viewer.html/.test(location.pathname) || /^\/web\/viewer.html/.test(location.pathname)) {
		let file = new URL(location.href).searchParams.get("file");
		if (file) {
			let noPrivateFile = file.replace(/(r\d)-ndr-\w+/, '$1-ndr');
			let url = new URL(`${location.origin}${location.pathname}?file=${noPrivateFile}&disableAutoFetch=true&page=1`).toString()
			if (url !== location.href) location.replace(url);
		}

		$('html').css({
			"background-color": "#232d2a",
			"--body-bg-color": "#232d2a",
			"--toolbar-bg-color": "#2a3632",
			"--sidebar-toolbar-bg-color": "#2a3632",
			"--doorhanger-border-color": "#232d2a",
			"--doorhanger-bg-color": "#2a3632",
			"--dropdown-btn-bg-color": "#232d2a",
			"--button-hover-color": "#32403b",
			"--doorhanger-hover-bg-color": "#32403b",
			"--overlay-button-bg-color": "#232d2a",
			"--overlay-button-hover-bg-color": "#32403b",
			"--field-bg-color": "#232d2a",
			"--field-border-color": "#32403b",
		})
		$('#loadingBar').css({
			"top": "0",
			"opacity": "0.8",
			"height": "10px",
			"margin": "8px 6px",
			"border": "none",
			"border-radius": "10px",
			"background": "#232323"
		}).appendTo('body');
		$('#loadingBar .progress').css({ "border-radius": "50px" })
		$('#toolbarViewerMiddle').attr('id', 'toolbarViewerLeft');
		$('#viewerContainer').css({ "background-color": "#232d2a" })
		$('#sidebarContent').css({ "background-color": "#2a3632" })
		// 取消隐藏预览PDF页面的隐藏功能（例如下载等功能，打印没法用除外）
		waitForKeyElements('button[hidden]:not(#print)', function (element) {
			if (element.attr('hidden') !== undefined) {
				element.removeAttr('hidden');
			}
		});

		// 根据链接判断是教材才显示切换版本按钮
		if (file.includes("edu_product/esp/assets/") || file.includes("edu_product/esp/assets_document/")) {
			let contentIdMatch = file.match(/([a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12})/i);
			let contentId = contentIdMatch ? contentIdMatch[1] : null;
			let canFound = false

			if (!contentId) return;
			await getFileSize(`https://s-file-1.ykt.cbern.com.cn/zxx/ndrv2/resources/tch_material/details/${contentId}.json`)
				.then(() => {
					canFound = true
				})
				.catch(() => {
					canFound = false
				});
			if (!canFound) return;

			// 教材信息
			let data = await Promise.any(["1", "2", "3"].map(async base => {
				try {
					let data = await request({
						url: `https://s-file-${base}.ykt.cbern.com.cn/zxx/ndrv2/resources/tch_material/details/${contentId}.json`,
						headers: {
							'Cache-Control': 'no-cache'
						}
					});

					if (data.toString().startsWith('<?xml') || !data.ti_items[0]) return;

					let item = {
						id: data.id,
						title: data.global_title['zh-CN'],
						cover: data.custom_properties?.thumbnails[0],
						author: data.provider_list[0]?.name,
						url: data.ti_items?.find(item => item.ti_format === "pdf")?.ti_storages?.[base - 1].replace(/(r\d)-ndr-\w+/, '$1-ndr'),
					};
					return item
				} catch (error) {
					console.error('【国家中小学智慧教育平台助手】\n获取数据时发生错误：', error);
				}
			}));

			console.log("【国家中小学智慧教育平台助手】即时\nPDF预览：书籍数据加载成功\n", data)

			let version
			let fileName = decodeURIComponent(file.substring(file.lastIndexOf('/') + 1))
			let newFileName = decodeURIComponent(data.url.substring(data.url.lastIndexOf('/') + 1))

			if (file.includes('edu_product/esp/assets_document/')) {
				// 先版 -> 中版
				file = file.replace('edu_product/esp/assets_document/', 'edu_product/esp/assets/');
				version = '中版';
			} else if (file.includes('edu_product/esp/assets/')) {
				if (fileName === 'pdf.pdf' && fileName !== newFileName) {
					// 中版 -> 新版
					file = file.replace('pdf.pdf', encodeURIComponent(newFileName));
					version = '新版';
				} else if (fileName !== 'pdf.pdf' && fileName === newFileName) {
					// 验证是否有先版教材
					await getFileSize(file.replace('edu_product/esp/assets/', 'edu_product/esp/assets_document/').replace(newFileName, 'pdf.pdf')).then(() => {
						// 新版 -> 先版
						file = file.replace('edu_product/esp/assets/', 'edu_product/esp/assets_document/');
						file = file.replace(newFileName, 'pdf.pdf');
						version = '先版';
					}).catch(() => {
						// 新版 -> 中版
						file = file.replace(encodeURIComponent(newFileName), 'pdf.pdf').replace(newFileName, 'pdf.pdf');
						version = '中版';
					});
				}
			}

			let url = new URL(`${location.origin}${location.pathname}?file=${file}&disableAutoFetch=true&page=1`).toString()
			getFileSize(file).then(size => {
				let button = $(`
				<style>
					#switchVersion:before {
						-webkit-mask-image: var(--secondaryToolbarButton-rotateCw-icon);
						mask-image: var(--secondaryToolbarButton-rotateCw-icon);"
					}
				</style>
				<button id="switchVersion" class="toolbarButton" title="${version}教材（${formatFileSize(size)}）" href="${file}" tabindex="12" aria-expanded="false">
					<span>${version}教材（${formatFileSize(size)}）</span>
				</button>`)
				button.on('click', function () {
					if (url !== location.href) location.replace(url);
				})
				$("#sidebarToggle").after(button)
			});
		}
	}

	let lastTitle
	setInterval(() => {
		const linkText = $('.fish-breadcrumb-link').last().text();
		const currentTitle = $('title').text();

		if (linkText && currentTitle && lastTitle !== linkText && currentTitle === '国家中小学智慧教育平台') {
			$('title').html(`${linkText} - 国家中小学智慧教育平台`);
			lastTitle = linkText
		} else if (lastTitle !== linkText && currentTitle === '国家中小学智慧教育平台') {
			$('title').html(`国家中小学智慧教育平台`);
			lastTitle = linkText
		}
	}, 1000);

	function Time() {
		function repair(i) {
			if (i >= 0 && i <= 9) {
				return "0" + i;
			} else {
				return i;
			}
		}
		var date = new Date();
		var year = date.getFullYear();
		var month = repair(date.getMonth() + 1);
		var day = repair(date.getDate());
		var hours = repair(date.getHours());
		var minute = repair(date.getMinutes());
		var second = repair(date.getSeconds());

		var curTime = year + "年 - " + month + "月 - " + day + "日 " + hours + "时 : " + minute + "分 : " + second + "秒";
		return curTime;
	}

	function Greeting() {
		var date = new Date();
		var hour = date.getHours();
		var greeting = '';

		if (hour >= 0 && hour <= 10) {
			greeting = '早上好';
		} else if (hour > 10 && hour <= 14) {
			greeting = '中午好';
		} else if (hour > 14 && hour <= 18) {
			greeting = '下午好';
		} else if (hour > 18 && hour <= 24) {
			greeting = '晚上好';
		}
		return greeting;
	}

	async function Poem(element) {
		try {
			let data = await request({
				data: "",
				url: "https://v1.hitokoto.cn/?encode=json&c=i",
				headers: {
					"origin": "https://hitokoto.cn",
					"referer": "https://hitokoto.cn",
					'Cache-Control': 'no-cache'
				}
			})
			// 使用数据更新页面元素
			element.text(`「${data.hitokoto}」${data.from_who || ""}`);
			element.css({ "cursor": "pointer" });
		} catch (error) {
			// 处理错误情况
			console.error('获取诗词时发生错误：', error);
			element.text('诗词加载失败');
			element.css({ "cursor": "pointer" });
		}
	}

	function request(option) {
		return new Promise((resolve, reject) => {
			let httpRequest = typeof GM_xmlhttpRequest !== "undefined" ? GM_xmlhttpRequest : GM.xmlHttpRequest;
			httpRequest({
				method: 'get',
				...option,
				onload: (response) => {
					if (response.responseText === undefined) return;
					let res
					try {
						res = JSON.parse(response.responseText);
					} catch (e) {
						res = response.response;
					}
					resolve(res);
				},
				onerror: (error) => {
					resolve(null);
				},
			});
		});
	}

	function addStyle(id, tag, css) {
		tag = tag || 'style';
		let doc = document, styleDom = doc.getElementById(id);
		if (styleDom) styleDom.remove();
		let style = doc.createElement(tag);
		style.rel = 'stylesheet';
		style.id = id;
		tag === 'style' ? style.innerHTML = css : style.href = css;
		$('body').before(style)
	}

	function addDownStyle() {
		const url = new URL(location);
		let deColor = url.searchParams.get("x-edu-theme") === 'dark' ? "#0e9aff" : "#1e62ec";
		let hvColor = url.searchParams.get("x-edu-theme") === 'dark' ? "#1e62ec" : "#4079ef";
		let bgColor = url.searchParams.get("x-edu-theme") === 'dark' ? "rgba(42, 54, 50, 0.5)" : "rgba(255, 255, 255, 0.5)";
		let spColor = url.searchParams.get("x-edu-theme") === 'dark' ? "#323e3a" : "#eee";
		let txColor = url.searchParams.get("x-edu-theme") === 'dark' ? "#fff" : "#666";
		let css = `
			a, button, ul li, ui, label, input, select {
				transition: all 0.25s !important;
				-webkit-transition: all 0.25s !important;
			}
			[class^="index-module_header-wrap_"], [class*="index-module_header"] {
				height: auto !important;
			}

			[class^="index-module_header"] [class^="index-module_nav-normal"],
			[class^="index-module_header-wrap_"] [class^="index-module_header"] .theme-menu-sticky {
				height: auto !important;
				-webkit-backdrop-filter: blur(15px);
				backdrop-filter: blur(15px);
				background-color: ${bgColor};
			}

			.course-document .viewerContainer {
				background-color: ${spColor} !important;
			}

			#smartEduTime{
				margin: 0 5px;
				color: ${deColor};
			}

			.index-module_tip {
				cursor: default;
				text-align: center;
				display: inline-flex;
				justify-content: center;
				align-items: center;
				margin: 10px 0;
				width: 100%;
				transition: all 0.3s !important;
				-webkit-transition: all 0.3s !important;
			}

			.index-module_tip img,
			.index-module_tip svg {
				margin: 0 5px;
				width: 20px;
				height: 20px;
			}

			.index-module_tip svg {
				color: ${deColor};
				cursor: pointer;
			}

			.index-module_tip svg:hover {
				color: ${hvColor};
				transition: all 0.3s !important;
				-webkit-transition: all 0.3s !important;
			}

			.index-module_pdf-control {
				display: flex;
				justify-content: center;
				position: absolute;
				top: 5%;
				pointer-events: none;
				width: auto !important;
				height: auto !important;
			}

			.index-module_pdf-control.left {
				left: 3%;
			}

			.index-module_pdf-control.right {
				right: 3%;
			}

			.index-module_pdf-button {
				background-color: ${deColor}cc !important;
				text-align: center !important;
				color: #fff !important;
				padding: 7px 20px !important;
				border-radius: 144.889px !important;
				border: 0 !important;
				margin: 0 5px !important;
				display: inline-flex;
				vertical-align: middle !important;
				pointer-events: all !important;
				transition: all 0.3s !important;
				-webkit-transition: all 0.3s !important;
			}

			.index-module_pdf-button:hover,.index-module_pdf-button:disabled {
				background-color: ${hvColor}cc !important;
			}

			.index-module_pdf-button svg {
				height: 18px !important;
				width: 17px !important;
				margin-right: 5px !important;
				vertical-align: middle !important;
				fill: #fff !important;
			}

			.index-module_item {
				cursor: pointer;
				font-size: 15px;
				-webkit-user-select: none;
				-ms-user-select: none;
				user-select: none;
				vertical-align: middle;
				display: flex;
				align-items: center;
				padding: 5px 0;
				justify-content: center;
				border-bottom: 1px solid ${spColor};
				flex: 1;
				transition: all 0.3s !important;
				-webkit-transition: all 0.3s !important;
			}

			.index-module_item svg {
				height: 20px;
				width: 20px;
				margin-right: 4px;
				vertical-align: middle;
			}

			.index-module_item:hover {
				color: #fff;
				background-color: ${deColor};
			}

			.index-module_download_tool_bar {
				display: flex !important;
				color: #fff !important;
				border: none !important;
				border-radius: 50px !important;
				white-space: nowrap !important;
				cursor: pointer !important;
				padding: 2px 9px 4px 9px !important;
				background-color: ${deColor} !important;
				transition: all 0.3s !important;
				-webkit-transition: all 0.3s !important;
			}

			.index-module_download_tool_bar:hover {
				background-color: ${hvColor} !important;
			}

			.index-module_download_tool_bar:disabled {
				background-color: ${hvColor} !important;
			}

			.index-module_download_tool_bar svg {
				margin-right: 3px !important;
			}

			.index-module_audio-player-control {
				width: 40px !important;
				height: 40px !important;
				display: inline-flex;
				justify-content: center !important;
				align-items: center !important;
				color: #fff !important;
				border-radius: 50px !important;
				cursor: pointer !important;
				background-color: ${deColor} !important;
				transition: all 0.3s !important;
				-webkit-transition: all 0.3s !important;
			}

			.index-module_audio-player-control:hover {
				background-color: ${hvColor} !important;
			}

			#listTitle {
				color: ${txColor}!important;
			}

			[class*="audioList-module_audio-list"] [class*="audioList-module_audio-item-active"] [class*="audioList-module_center"],
			[class*="audioList-module_audio-list"] [class*="audioList-module_audio-item-active"] [class*="audioList-module_right"] {
				color: ${deColor};
			}

			div .fullscreen-dom {
				position: fixed !important;
				top: 0 !important;
				left: 0 !important;
				width: 100% !important;
				height: 100% !important;
				z-index: 99999 !important;
			}

			::-webkit-scrollbar {
				width: 10px;
				height: 10px;
				background-color: transparent;
				z-index: 999999999999999;
			}

			::-webkit-scrollbar-thumb {
				background: ${deColor};
				border-radius: 50px;
				z-index: 999999999999999;
			}

			::-webkit-scrollbar-thumb:hover {
				background: ${hvColor};
				z-index: 999999999999999;
			}

			.no-scroll {
				overflow: hidden !important;
			}

			.no-select {
				user-select: none;
				-webkit-user-select: none;
				-moz-user-select: none;
			}

			@keyframes spin {
				0% {
					transform: rotateZ(0)
				}
				100% {
					transform: rotateZ(360deg)
				}
			}

			.tch-loading {
				position: absolute;
				top: 45%;
				left: 50%;
				transform: translateX(-50%);
				text-align: center;
				background: radial-gradient(29% 54% at 84% 95%,#f1f1f5 28%,#eff2f9 77%);
				padding: 45px 50px 40px;
				border-radius: 20px;
				box-shadow: 0 0 20px 5px rgba(0,0,0,0.5);
				margin-top: -47px!important;
				z-index: 989;
				-webkit-backdrop-filter: blur(15px);
				backdrop-filter: blur(15px);
			}

			.tch-loading img {
				height: 48px;
				width: 48px;
				border-radius: 50%;
				animation: spin 0.5s linear infinite
			}

			.tch-loading p {
				color: #232323;
				font-size: 14px;
				line-height: 22px;
				margin: 0
			}

			.tch-loading p:nth-child(2) {
				margin: 24px 0 0
			}

			/* 修复 PDFJS 预览界面搜索框的位置 */
			html[dir=ltr] .findbar {
				right: 166px;
			}

			html[dir=rtl] .findbar {
				left: 166px;
			}

			@media (max-width: 770px) {
				html[dir=ltr] .findbar {
					right: 50px
				}

				html[dir=rtl] .findbar {
					left: 50px
				}
			}
		`;

		addStyle('BasicSmartEdu-User', 'style', css);
		return deColor
	}

	function play(id, url, urls, cover, actionFunction) {
		if (id && url) {
			var art = new Artplayer({
				id: id,
				container: '.index-module_art-player',
				url: url,
				volume: 1,
				autoPlayback: true,
				customType: {
					m3u8: function (video, url, art) {
						if (Hls.isSupported()) {
							if (art.hls) art.hls.destroy();
							const hls = new Hls();
							hls.loadSource(url);
							hls.attachMedia(video);
							art.hls = hls;
							art.on('destroy', () => hls.destroy());
						} else if (video.canPlayType('application/vnd.apple.mpegurl')) {
							video.src = url;
						} else {
							art.notice.show = 'Unsupported playback format: m3u8';
						}
					},
				},
				controls: [
					{
						name: 'goodRing',
						index: 21,
						position: 'left',
						html: '<i class="art-icon"><svg height="21" width="21"><use xlink:href="#web_icon_dianzan_fill"></use></svg></i>',
						tooltip: '好评',
						click: function () {
							GM_openInTab('https://greasyfork.org/scripts/459404/feedback', { active: true });
						},
					}
				],
				icons: {
					state: '<svg width="100" height="100" fill="none"><g opacity=".9"><path opacity=".5" d="M50 4.167C24.687 4.167 4.167 24.687 4.167 50c0 25.314 20.52 45.834 45.833 45.834 25.314 0 45.834-20.52 45.834-45.834 0-25.313-20.52-45.833-45.834-45.833Z" fill="#000"/><path d="M69.194 53.043 43.153 70.231a3.646 3.646 0 0 1-5.653-3.043V32.816a3.646 3.646 0 0 1 5.654-3.043l26.042 17.188c2.183 1.44 2.183 4.645 0 6.086-2.184 1.44 6.51-4.3-.002-.004Z" fill="#fff"/></g></svg>',
					indicator: '<img width="16" heigth="16" style="border-radius:50px" src="data:image/webp;base64,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">',
					play: '<svg height="21" width="21"><use xlink:href="#app_icon_bofang_fill"></use></svg>',
					pause: '<svg height="21" width="21"><use xlink:href="#app_icon_zanting_fill"></use></svg>',
					setting: '<svg height="21" width="21"><use xlink:href="#app_icon_equipment_linear"></use></svg>',
					fullscreenOn: '<svg height="21" width="21"><use xlink:href="#web_icon_fullscreen"></use></svg>',
					fullscreenOff: '<svg height="21" width="21"><use xlink:href="#web_icon_fullscreen-exit"></use></svg>',
					playbackRate: '<svg height="21" width="21"><use xlink:href="#web_icon_shijian_fill"></use></svg>',
					aspectRatio: '<svg height="21" width="21"><use xlink:href="#ri-macbook-line"></use></svg>',
					check: '<svg height="21" width="21"><use xlink:href="#ri-check-fill"></use></svg>',
					flip: '<svg height="21" width="21"><use xlink:href="#PC_xuanzhuan"></use></svg>',
					arrowUp: '<svg height="21" width="21"><use xlink:href="#icon_arrowUp_linear"></use></svg>',
					arrowDown: '<svg height="21" width="21"><use xlink:href="#icon_arrowDown_linear"></use></svg>',
					arrowLeft: '<svg height="21" width="21"><use xlink:href="#icon_arrowLeft_linear"></use></svg>',
					arrowRight: '<svg height="21" width="21"><use xlink:href="#icon_arrowRight_linear"></use></svg>',
					download: '<svg height="21" width="21"><use xlink:href="#pc_icon_xiazai-fill"></use></svg>',
					info: '<svg height="17" width="17"><use xlink:href="#icon_information_fill"></use></svg>',
					close: '<svg height="16" width="16"><use xlink:href="#pc_icon_guanbi_line"></use></svg>',
				},
				setting: true,
				theme: addDownStyle(),
				hotkey: true,
				autoMini: true,
				flip: true,
				playbackRate: true,
				aspectRatio: true,
				miniProgressBar: true,
				fullscreen: true,
				fullscreenWeb: true,
			})
			urls ? (art.quality = [...urls]) : ""
			var contextmenuStyle = {
				"display": "flex",
				"justify-content": "center",
				"align-items": "center",
				"border-bottom": "none"
			}
			art.contextmenu.add({
				name: 'appTitle',
				index: 1,
				html: `<img width="16" heigth="16" style="border-radius:50px" src="data:image/webp;base64,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">国家智慧教育公共服务平台助手`,
				style: contextmenuStyle,
				click: function () {
					GM_openInTab('https://greasyfork.org/scripts/459404/feedback', { active: true });
				},
			})
			art.contextmenu.update({
				name: 'version',
				index: 2,
				html: `<img width="15" heigth="15" src="https://artplayer.org/assets/img/logo.png"/>Artplayer Ultra ${Artplayer.version}`,
				click: function () {
					GM_openInTab('https://artplayer.org/', { active: true });
				},
				style: contextmenuStyle
			})
			art.contextmenu.update({
				name: 'info',
				index: 40,
				html: `${$(art.icons.info).html()}${art.i18n.language["Video Info"]}`,
				style: contextmenuStyle
			})
			art.contextmenu.update({
				name: 'close',
				index: 50,
				html: `${$(art.icons.close).html()}${art.i18n.language["Close"]}`,
				style: contextmenuStyle
			})
			art.on('fullscreen', () => {
				$('#header').fadeToggle();
				$(art.controls.fullscreenWeb).toggle();
				$(art.controls.hideList).toggle();
				$(art.controls.goodRing).toggle();
				if (!$('body').hasClass('no-scroll')) {
					$('body').addClass('no-scroll');
				} else {
					$('body').removeClass('no-scroll');
				}
			});
			art.on('fullscreenWeb', () => {
				$('#header').fadeToggle();
				$(art.controls.fullscreen).toggle();
				$(art.controls.hideList).toggle();
				$(art.controls.goodRing).toggle();
				if (!$('body').hasClass('no-scroll')) {
					$('body').addClass('no-scroll');
				} else {
					$('body').removeClass('no-scroll');
				}
			});
			$(art.template.$container).find(".icon").removeClass("icon")
			addStyle('Artplayer-User', 'style', `
				.art-contextmenu svg, .art-contextmenu img {
					vertical-align: top;
					margin-right: 5px
				}
			`);
			cover ? (art.poster = cover) : ""
			actionFunction ? actionFunction(art) : ""
		} else {
			document.querySelector('.index-module_art-player').innerHTML = `<div id="viewerContainer" class="viewerContainer">
				<span class="tch-loading no-select">
					<p><h2>抱歉</h2></p>
					<p>此媒体未满足所需参数</p>
					<p>可能是脚本出了问题</p>
					<p>请登录后关闭脚本查看</p>
				</span>
			</div>`
		}
	}

	// 格式化文件大小函数
	function formatFileSize(bytes) {
		if (bytes === 0) return '0 Bytes';
		const k = 1024;
		const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
		const i = Math.floor(Math.log(bytes) / Math.log(k));
		return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
	}

	// 获取文件大小函数
	function getFileSize(url) {
		return new Promise((resolve, reject) => {
			fetch(url, { method: 'HEAD' })
				.then(response => {
					if (!response.ok) throw new Error('找不到该文件');
					let contentLength = response.headers.get('Content-Length');
					resolve(parseInt(contentLength));
				})
				.catch(error => {
					reject(error);
				})
		});
	}

	/*--- waitForKeyElements(): 一个实用函数，用于 Greasemonkey 脚本，
		它可以检测和处理AJAX加载的内容，且支持在使用 `shadowRoot` 的页面上运行。
		此外，该函数允许多次调用时对相同的元素执行独立的操作，避免前后调用之间的干扰。
		
		使用示例：
			base.waitForKeyElements (
				"div.comments",
				commentCallbackFunction
			);
			// 页面特定的函数，用于在找到节点时执行我们想要的操作。
			function commentCallbackFunction (jNode) {
				jNode.text("waitForKeyElements() 更改了这段注释。");
			}
		重要提示：这个函数需要你的脚本加载了jQuery。
		
		更新说明：
		- 每次调用时使用独立的标识符来控制对元素的处理，支持多次调用时重复执行操作，
		即使是同一个元素也能在不同的调用中执行操作，而不会受之前调用的影响。
	*/
	var uniqueIdCounter = 0;
	function waitForKeyElements(selectorTxt, actionFunction, bWaitOnce, iframeSelector) {
		function findInShadowRoots(root, selector) {
			let elements = $(root).find(selector).toArray();
			$(root).find('*').each(function () {
				const shadowRoot = this.shadowRoot;
				if (shadowRoot) {
					elements = elements.concat(findInShadowRoots(shadowRoot, selector));
				}
			});
			return elements;
		}
		var targetElements;
		if (iframeSelector) {
			targetElements = $(iframeSelector).contents();
		} else {
			targetElements = $(document);
		}
		let allElements = findInShadowRoots(targetElements, selectorTxt);
		if (allElements.length > 0) {
			allElements.forEach(function (element) {
				var jThis = $(element);
				//var uniqueIdentifier = 'alreadyFound_' + uniqueIdCounter;
				var uniqueIdentifier = 'alreadyFound';
				var alreadyFound = jThis.data(uniqueIdentifier) || false;
				if (!alreadyFound) {
					var cancelFound = actionFunction(jThis);
					if (cancelFound) {
						return false;
					} else {
						jThis.data(uniqueIdentifier, true);
					}
				}
			});
		}
		var controlObj = waitForKeyElements.controlObj || {};
		var controlKey = selectorTxt.replace(/[^\w]/g, "_");
		var timeControl = controlObj[controlKey];
		if (allElements.length > 0 && bWaitOnce && timeControl) {
			clearInterval(timeControl);
			delete controlObj[controlKey];
		} else {
			if (!timeControl) {
				timeControl = setInterval(function () {
					waitForKeyElements(selectorTxt, actionFunction, bWaitOnce, iframeSelector);
				}, 500);
				controlObj[controlKey] = timeControl;
				uniqueIdCounter++;
			}
		}
		waitForKeyElements.controlObj = controlObj;
	}

	function getIcon(character) {
		let icon_document = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj4NCjxwYXRoIGQ9Ik0yMSA5VjIwLjk5MjVDMjEgMjEuNTUxMSAyMC41NTUyIDIyIDIwLjAwNjYgMjJIMy45OTM0QzMuNDQ0OTUgMjIgMyAyMS41NTYgMyAyMS4wMDgyVjIuOTkxOEMzIDIuNDU1MzEgMy40NDY5NCAyIDMuOTk4MjYgMkgxNFY4QzE0IDguNTUyMjggMTQuNDQ3NyA5IDE1IDlIMjFaTTIxIDdIMTZWMi4wMDMxOEwyMSA3Wk04IDdWOUgxMVY3SDhaTTggMTFWMTNIMTZWMTFIOFpNOCAxNVYxN0gxNlYxNUg4WiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzQxOV8xODYwNSkiLz4NCjxkZWZzPg0KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzQxOV8xODYwNSIgeDE9IjIxIiB5MT0iLTgiIHgyPSIzIiB5Mj0iLTgiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4NCjxzdG9wIHN0b3AtY29sb3I9IiM3MUJERkYiLz4NCjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzJFOUZGRiIvPg0KPC9saW5lYXJHcmFkaWVudD4NCjwvZGVmcz4NCjwvc3ZnPg==`;
		let icon_video = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNi41IDIySDIwQzIwLjU1MjMgMjIgMjEgMjEuNTUyMyAyMSAyMVYzQzIxIDIuNDQ3NzIgMjAuNTUyMyAyIDIwIDJINkM0LjM0MzE1IDIgMyAzLjM0MzE1IDMgNVYxOC41QzMgMjAuNDMzIDQuNTY3IDIyIDYuNSAyMlpNMTkgMTdWMjBINi41QzUuNjcxNTcgMjAgNSAxOS4zMjg0IDUgMTguNUM1IDE3LjY3MTYgNS42NzE1NyAxNyA2LjUgMTdIMTlaTTE1LjUwMDggOS4zMTk4M0wxMC42MjE5IDYuMDY3MThDMTAuNTU2MiA2LjAyMzM3IDEwLjQ3OSA2IDEwLjQgNkMxMC4xNzkxIDYgMTAgNi4xNzkwOCAxMCA2LjRWMTIuOTA1MkMxMCAxMi45ODQyIDEwLjAyMzQgMTMuMDYxNCAxMC4wNjcyIDEzLjEyNzFDMTAuMTg5NyAxMy4zMTA5IDEwLjQzODEgMTMuMzYwNiAxMC42MjE5IDEzLjIzOEwxNS41MDA4IDkuOTg1NDNDMTUuNTQ0NyA5Ljk1NjEzIDE1LjU4MjQgOS45MTg0MyAxNS42MTE3IDkuODc0NTNDMTUuNzM0MyA5LjY5MDczIDE1LjY4NDYgOS40NDIzMyAxNS41MDA4IDkuMzE5ODNaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfNDIzXzMwNzc0KSIvPg0KPGRlZnM+DQo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfNDIzXzMwNzc0IiB4MT0iMjEiIHkxPSItOCIgeDI9IjMiIHkyPSItOCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPg0KPHN0b3Agc3RvcC1jb2xvcj0iI0Y5Q0Q3RiIvPg0KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkVBRjI0Ii8+DQo8L2xpbmVhckdyYWRpZW50Pg0KPC9kZWZzPg0KPC9zdmc+`;
		let icon_audio = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjY2NjcgNy4zMzMzN1YxMkgxNFY3LjMzMzM3QzE0IDQuMDE5NjcgMTEuMzEzNyAxLjMzMzM3IDggMS4zMzMzN0M0LjY4NjI5IDEuMzMzMzcgMiA0LjAxOTY3IDIgNy4zMzMzN1YxMkgzLjMzMzMzVjcuMzMzMzdDMy4zMzMzMyA0Ljc1NjA1IDUuNDIyNjcgMi42NjY3MSA4IDIuNjY2NzFDMTAuNTc3MyAyLjY2NjcxIDEyLjY2NjcgNC43NTYwNSAxMi42NjY3IDcuMzMzMzdaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMjUzN183MTQpIi8+CjxwYXRoIGQ9Ik0xLjMzMzMzIDkuMzMzMzdDMS4zMzMzMyA4LjU5Njk5IDEuOTMwMjkgOC4wMDAwNCAyLjY2NjY3IDguMDAwMDRINEM0LjM2ODE5IDguMDAwMDQgNC42NjY2NyA4LjI5ODUyIDQuNjY2NjcgOC42NjY3MVYxMi42NjY3QzQuNjY2NjcgMTMuNDAzMSA0LjA2OTcxIDE0IDMuMzMzMzMgMTRIMi42NjY2N0MxLjkzMDI5IDE0IDEuMzMzMzMgMTMuNDAzMSAxLjMzMzMzIDEyLjY2NjdWOS4zMzMzN1oiIGZpbGw9InVybCgjcGFpbnQxX2xpbmVhcl8yNTM3XzcxNCkiLz4KPHBhdGggZD0iTTExLjMzMzMgOC42NjY3MUMxMS4zMzMzIDguMjk4NTIgMTEuNjMxOCA4LjAwMDA0IDEyIDguMDAwMDRIMTMuMzMzM0MxNC4wNjk3IDguMDAwMDQgMTQuNjY2NyA4LjU5Njk5IDE0LjY2NjcgOS4zMzMzN1YxMi42NjY3QzE0LjY2NjcgMTMuNDAzMSAxNC4wNjk3IDE0IDEzLjMzMzMgMTRIMTIuNjY2N0MxMS45MzAzIDE0IDExLjMzMzMgMTMuNDAzMSAxMS4zMzMzIDEyLjY2NjdWOC42NjY3MVoiIGZpbGw9InVybCgjcGFpbnQyX2xpbmVhcl8yNTM3XzcxNCkiLz4KPHBhdGggZD0iTTUuMzMzMzMgMTBDNS4zMzMzMyA5LjYzMTg1IDUuNjMxODEgOS4zMzMzNyA2IDkuMzMzMzdDNi4zNjgxOSA5LjMzMzM3IDYuNjY2NjcgOS42MzE4NSA2LjY2NjY3IDEwVjEyQzYuNjY2NjcgMTIuMzY4MiA2LjM2ODE5IDEyLjY2NjcgNiAxMi42NjY3QzUuNjMxODEgMTIuNjY2NyA1LjMzMzMzIDEyLjM2ODIgNS4zMzMzMyAxMlYxMFoiIGZpbGw9InVybCgjcGFpbnQzX2xpbmVhcl8yNTM3XzcxNCkiLz4KPHBhdGggZD0iTTcuMzMzMzMgOC42NjY3MUM3LjMzMzMzIDguMjk4NTIgNy42MzE4MSA4LjAwMDA0IDggOC4wMDAwNEM4LjM2ODE5IDguMDAwMDQgOC42NjY2NyA4LjI5ODUyIDguNjY2NjcgOC42NjY3MVYxMi42NjY3QzguNjY2NjcgMTMuMDM0OSA4LjM2ODE5IDEzLjMzMzQgOCAxMy4zMzM0QzcuNjMxODEgMTMuMzMzNCA3LjMzMzMzIDEzLjAzNDkgNy4zMzMzMyAxMi42NjY3VjguNjY2NzFaIiBmaWxsPSJ1cmwoI3BhaW50NF9saW5lYXJfMjUzN183MTQpIi8+CjxwYXRoIGQ9Ik05LjMzMzMzIDEwQzkuMzMzMzMgOS42MzE4NSA5LjYzMTgxIDkuMzMzMzcgMTAgOS4zMzMzN0MxMC4zNjgyIDkuMzMzMzcgMTAuNjY2NyA5LjYzMTg1IDEwLjY2NjcgMTBWMTJDMTAuNjY2NyAxMi4zNjgyIDEwLjM2ODIgMTIuNjY2NyAxMCAxMi42NjY3QzkuNjMxODEgMTIuNjY2NyA5LjMzMzMzIDEyLjM2ODIgOS4zMzMzMyAxMlYxMFoiIGZpbGw9InVybCgjcGFpbnQ1X2xpbmVhcl8yNTM3XzcxNCkiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl8yNTM3XzcxNCIgeDE9IjE0LjY2NjciIHkxPSItNC45OTk5NiIgeDI9IjEuMzMzMzMiIHkyPSItNC45OTk5NiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMUREQkMzIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzJGQzdCNCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MV9saW5lYXJfMjUzN183MTQiIHgxPSIxNC42NjY3IiB5MT0iLTQuOTk5OTYiIHgyPSIxLjMzMzMzIiB5Mj0iLTQuOTk5OTYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzFEREJDMyIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMyRkM3QjQiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDJfbGluZWFyXzI1MzdfNzE0IiB4MT0iMTQuNjY2NyIgeTE9Ii00Ljk5OTk2IiB4Mj0iMS4zMzMzMyIgeTI9Ii00Ljk5OTk2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiMxRERCQzMiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMkZDN0I0Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQzX2xpbmVhcl8yNTM3XzcxNCIgeDE9IjE0LjY2NjciIHkxPSItNC45OTk5NiIgeDI9IjEuMzMzMzMiIHkyPSItNC45OTk5NiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMUREQkMzIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzJGQzdCNCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50NF9saW5lYXJfMjUzN183MTQiIHgxPSIxNC42NjY3IiB5MT0iLTQuOTk5OTYiIHgyPSIxLjMzMzMzIiB5Mj0iLTQuOTk5OTYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzFEREJDMyIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMyRkM3QjQiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDVfbGluZWFyXzI1MzdfNzE0IiB4MT0iMTQuNjY2NyIgeTE9Ii00Ljk5OTk2IiB4Mj0iMS4zMzMzMyIgeTI9Ii00Ljk5OTk2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiMxRERCQzMiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMkZDN0I0Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg==`;
		let icon_courseVideo = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE3LjUgMTYuMzMzM0MxNy41IDE3LjQzNzkgMTYuNjA0NiAxOC4zMzMzIDE1LjUgMTguMzMzM0g0LjVDMy4zOTU0MyAxOC4zMzMzIDIuNSAxNy40Mzc5IDIuNSAxNi4zMzMzVjMuNjY2NjNDMi41IDIuNTYyMDYgMy4zOTU0MyAxLjY2NjYzIDQuNSAxLjY2NjYzSDEzLjMzMzNMMTcuNSA1LjgzMzI5VjE2LjMzMzNaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMjg0MF82OTkpIi8+CjxwYXRoIGQ9Ik0xMi45Mzc5IDExLjE4NzFMOC44ODkxOCAxNC4wMDk0QzguNDc5ODUgMTQuMjk0NyA3LjkyNTU0IDE0LjE4MSA3LjY1MTE2IDEzLjc1NTVDNy41NTI2MiAxMy42MDI3IDcuNSAxMy40MjI5IDcuNSAxMy4yMzg5VjcuNTk0MzJDNy41IDcuMDgyIDcuODk5NTEgNi42NjY2MyA4LjM5MjI2IDYuNjY2NjNDOC41NjkyMyA2LjY2NjYyIDguNzQyMiA2LjcyMTMzIDguODg5MTggNi44MjM3OUwxMi45Mzc4IDkuNjQ2MDdDMTMuMzQ3MSA5LjkzMTMzIDEzLjQ1NjUgMTAuNTA3NyAxMy4xODIxIDEwLjkzMzJDMTMuMTE3NCAxMS4wMzM2IDEzLjAzNDQgMTEuMTE5OCAxMi45Mzc5IDExLjE4NzFaIiBmaWxsPSJ1cmwoI3BhaW50MV9saW5lYXJfMjg0MF82OTkpIi8+CjxwYXRoIGQ9Ik0xNC4zMzMzIDUuODMzMzNIMTcuNUwxMy4zMzMzIDEuNjY5MzFWNC44MzMzM0MxMy4zMzMzIDUuMzg1NjEgMTMuNzgxIDUuODMzMzMgMTQuMzMzMyA1LjgzMzMzWiIgZmlsbD0idXJsKCNwYWludDJfbGluZWFyXzI4NDBfNjk5KSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzI4NDBfNjk5IiB4MT0iMi41IiB5MT0iMS42NjY2MyIgeDI9IjIuNSIgeTI9IjE4LjMzMzMiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzZBQkNGRiIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMxRTYyRUMiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDFfbGluZWFyXzI4NDBfNjk5IiB4MT0iNi4zNjU3NCIgeTE9IjExLjczMzgiIHgyPSIxMC41OTYyIiB5Mj0iMTYuNTY0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IndoaXRlIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0id2hpdGUiIHN0b3Atb3BhY2l0eT0iMC42Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQyX2xpbmVhcl8yODQwXzY5OSIgeDE9IjEyLjUyMzEiIHkxPSI0LjQ4MjYyIiB4Mj0iMTQuNzI3NiIgeTI9IjcuNzIwNzQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0id2hpdGUiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSJ3aGl0ZSIgc3RvcC1vcGFjaXR5PSIwLjYiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K`;
		let icon_courseWare = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjMzMzMgMi4wMDAzOUgxMy45OTk5QzE0LjM2ODEgMi4wMDAzOSAxNC42NjY2IDIuMjk4ODYgMTQuNjY2NiAyLjY2NzA2VjEzLjMzMzdDMTQuNjY2NiAxMy43MDE5IDE0LjM2ODEgMTQuMDAwNCAxMy45OTk5IDE0LjAwMDRIMTEuMzMzM1YyLjAwMDM5Wk0xLjkwNTY0IDEuOTE4NjJMMTAuMjg2MSAwLjcyMTQxQzEwLjQ2ODQgMC42OTUzNzYgMTAuNjM3MiAwLjgyMjAxIDEwLjY2MzMgMS4wMDQyNUMxMC42NjU1IDEuMDE5ODYgMTAuNjY2NiAxLjAzNTYyIDEwLjY2NjYgMS4wNTEzOVYxNC45NDk0QzEwLjY2NjYgMTUuMTMzNSAxMC41MTczIDE1LjI4MjcgMTAuMzMzMyAxNS4yODI3QzEwLjMxNzUgMTUuMjgyNyAxMC4zMDE3IDE1LjI4MTYgMTAuMjg2MSAxNS4yNzk0TDEuOTA1NjQgMTQuMDgyMkMxLjU3NzIxIDE0LjAzNTIgMS4zMzMyNSAxMy43NTQgMS4zMzMyNSAxMy40MjIyVjIuNTc4NThDMS4zMzMyNSAyLjI0NjgyIDEuNTc3MjEgMS45NjU1NCAxLjkwNTY0IDEuOTE4NjJaTTMuMzMzMjUgNS4zMzM3MlYxMC42NjdINC42NjY1OVY5LjMzMzcxSDguNjY2NTlWNS4zMzM3MkgzLjMzMzI1Wk00LjY2NjU5IDYuNjY3MDRINy4zMzMyNVY4LjAwMDM4SDQuNjY2NTlWNi42NjcwNFoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8yNThfNTAyMzQpIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfMjU4XzUwMjM0IiB4MT0iMTQuNjY2NiIgeTE9Ii02LjU2NDMzIiB4Mj0iMS4zMzMyNSIgeTI9Ii02LjU2NDMzIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGRkFGODUiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkU3QTIyIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg==`;
		let icon_coursePlan = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQuMDgwOTcgOC43OTUzNkw1LjI5OTkzIDEwLjAxNDNMNi4yNDI3MyA5LjA3MTQ5TDUuMDIzNzkgNy44NTI1Nkw1Ljk2NjU5IDYuOTA5NzNMNy4xODU1NyA4LjEyODY5TDguMTI4MzcgNy4xODU4OUw2LjkwOTQgNS45NjY5Mkw3Ljg1MjIzIDUuMDI0MTFMOS4wNzExNyA2LjI0MzA2TDEwLjAxNCA1LjMwMDI1TDguNzk1MDMgNC4wODEzTDEwLjY4MDYgMi4xOTU2OEMxMC45NDEgMS45MzUzMyAxMS4zNjMxIDEuOTM1MzMgMTEuNjIzNCAyLjE5NTY4TDE0LjQ1MTkgNS4wMjQxMUMxNC43MTIyIDUuMjg0NDYgMTQuNzEyMiA1LjcwNjU3IDE0LjQ1MTkgNS45NjY5Mkw1Ljk2NjU5IDE0LjQ1MjJDNS43MDYyNCAxNC43MTI2IDUuMjg0MTMgMTQuNzEyNiA1LjAyMzc5IDE0LjQ1MjJMMi4xOTUzNSAxMS42MjM4QzEuOTM1MDEgMTEuMzYzNCAxLjkzNTAxIDEwLjk0MTMgMi4xOTUzNSAxMC42ODFMNC4wODA5NyA4Ljc5NTM2Wk05LjczNzgzIDEyLjU2NjJMMTIuNTY2MiA5LjczNzgzTDE0LjMyMzQgMTEuNDk1VjE0LjMyMzhIMTEuNDk1NEw5LjczNzgzIDEyLjU2NjJaTTQuMDgwODggNi45MDkzMUwyLjE5NTI2IDUuMDIzNjlDMS45MzQ5MSA0Ljc2MzM0IDEuOTM0OTEgNC4zNDEyMyAyLjE5NTI2IDQuMDgwODhMNC4wODA4OCAyLjE5NTI2QzQuMzQxMjMgMS45MzQ5MSA0Ljc2MzM0IDEuOTM0OTEgNS4wMjM2OSAyLjE5NTI2TDYuOTA5MzEgNC4wODA4OEw0LjA4MDg4IDYuOTA5MzFaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMjU4XzUwMjMyKSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzI1OF81MDIzMiIgeDE9IjE1LjYwMjQiIHkxPSItMC41MzcwNSIgeDI9IjMuNzA1NjMiIHkyPSItMy45NDgzMyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMUU2MkVDIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzFEOTNGNyIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=`;
		let icon_courseTask = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQgMi42NjY1OVY1LjMzMzI1SDEyVjIuNjY2NTlIMTMuMzM3N0MxMy43MDM1IDIuNjY2NTkgMTQgMi45NjMyMiAxNCAzLjMyODg1VjE0LjAwNDNDMTQgMTQuMzcwMSAxMy43MDM0IDE0LjY2NjYgMTMuMzM3NyAxNC42NjY2SDIuNjYyMjdDMi4yOTY1MSAxNC42NjY2IDIgMTQuMzcgMiAxNC4wMDQzVjMuMzI4ODVDMiAyLjk2MzA5IDIuMjk2NjMgMi42NjY1OSAyLjY2MjI3IDIuNjY2NTlINFpNNiAxMS4zMzMzSDQuNjY2NjdWMTIuNjY2Nkg2VjExLjMzMzNaTTYgOS4zMzMyNUg0LjY2NjY3VjEwLjY2NjZINlY5LjMzMzI1Wk02IDcuMzMzMjVINC42NjY2N1Y4LjY2NjU5SDZWNy4zMzMyNVpNMTAuNjY2NyAxLjMzMzI1VjMuOTk5OTJINS4zMzMzM1YxLjMzMzI1SDEwLjY2NjdaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMjU4XzUwMjM3KSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzI1OF81MDIzNyIgeDE9IjE0IiB5MT0iLTUuMzMzNDIiIHgyPSIyIiB5Mj0iLTUuMzMzNDIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzFEREJDMyIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMyRkM3QjQiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K`;
		let icon_coursePractice = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS4zMzM0IDMuMzMzMjVDMTUuMzMzNCAyLjIyODY5IDE0LjQzOCAxLjMzMzI1IDEzLjMzMzQgMS4zMzMyNUg0LjAwMDA4QzIuODk1NTEgMS4zMzMyNSAyLjAwMDA4IDIuMjI4NjkgMi4wMDAwOCAzLjMzMzI1VjkuOTk5OTJIMTIuNjY2N1YxMi42NjY2TDEyLjY2MjMgMTIuNzQ0M0MxMi42MjM3IDEzLjA3NTkgMTIuMzQxOSAxMy4zMzMzIDEyLjAwMDEgMTMuMzMzM0wxMS45MjIzIDEzLjMyODhDMTEuNTkwNyAxMy4yOTAzIDExLjMzMzQgMTMuMDA4NSAxMS4zMzM0IDEyLjY2NjZWMTEuMzMzM0gwLjY2Njc0OFYxMi42NjY2QzAuNjY2NzQ4IDEzLjc3MTIgMS41NjIxOCAxNC42NjY2IDIuNjY2NzUgMTQuNjY2NkgxMi4wMDAxQzEzLjEwNDcgMTQuNjY2NiAxNC4wMDAxIDEzLjc3MTIgMTQuMDAwMSAxMi42NjY2VjQuNjY2NTlIMTUuMzMzNFYzLjMzMzI1Wk0xMi4zMzMzIDRWNS4zMzMzM0g0VjRIMTIuMzMzM1pNOS4zMzMzMyA2LjY2NjY3VjhINFY2LjY2NjY3SDkuMzMzMzNaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMjU4XzUwMjMxKSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzI1OF81MDIzMSIgeDE9IjE2LjEzMDMiIHkxPSI2LjI5MzM5IiB4Mj0iNi45NDA1MSIgeTI9Ii00LjE3NDQ4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiMwMURDNzMiLz4KPHN0b3Agb2Zmc2V0PSIwLjUyIiBzdG9wLWNvbG9yPSIjMEZERjZGIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzIxRjM4RSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=`;

		const iconMap = {
			'文档': icon_document,
			'视频': icon_video,
			'音频': icon_audio,
			'视频课程': icon_courseVideo,
			'课件': icon_courseWare,
			'教学设计': icon_coursePlan,
			'学习任务单': icon_courseTask,
			'课后练习': icon_coursePractice
		};

		return iconMap[character] || icon_document;
	}

	$("head").before($(`
		<svg aria-hidden="true" style="position: absolute; width: 0px; height: 0px; color: #fff; overflow: hidden;">
			<symbol id="pc_icon_xiazai-fill" viewBox="0 0 1024 1024">
				<path d="M815.402667 435.669333H549.973333V132.266667H474.026667v303.402666H208.64L512 739.072l303.402667-303.36zM853.333333 890.794667V814.933333H170.666667v75.861334h682.666666z" fill="#333333"></path>
			</symbol>
			<symbol id="icon_hotel_fill" viewBox="0 0 1024 1024">
				<path d="M693.333333 843.861333h81.066667v-379.306666h-243.2v379.306666h81.066667V559.36h81.066666v284.458667z m-567.466666 0V132.693333C125.866667 106.538667 144 85.333333 166.4 85.333333h567.466667c22.4 0 40.533333 21.205333 40.533333 47.402667v237.056h81.066667v474.026667H896V938.666667H85.333333v-94.805334h40.533334z m162.133333-379.306666v94.848h81.066667V464.64h-81.066667z m0 189.653333v94.848h81.066667v-94.848h-81.066667z m0-379.264v94.848h81.066667V274.944h-81.066667z" fill="#333333"></path>
			</symbol>
			<symbol id="icon_question_fill" viewBox="0 0 1024 1024">
				<path d="M512 938.666667C276.352 938.666667 85.333333 747.648 85.333333 512S276.352 85.333333 512 85.333333s426.666667 191.018667 426.666667 426.666667-191.018667 426.666667-426.666667 426.666667z m-42.666667-298.666667v85.333333h85.333334v-85.333333h-85.333334z m85.333334-70.186667A149.418667 149.418667 0 0 0 512 277.333333a149.376 149.376 0 0 0-146.474667 120.021334l83.712 16.768A64 64 0 1 1 512 490.666667a42.666667 42.666667 0 0 0-42.666667 42.666666V597.333333h85.333334v-27.52z">
				</path>
			</symbol>
			<symbol id="icon_star_fill" viewBox="0 0 1024 1024">
				<path d="M501.589333 821.504l-239.274666 133.930667a21.333333 21.333333 0 0 1-31.36-22.784l53.461333-268.928a21.333333 21.333333 0 0 0-6.442667-19.84l-201.386666-186.154667a21.333333 21.333333 0 0 1 11.989333-36.864l272.341333-32.298667a21.333333 21.333333 0 0 0 16.853334-12.245333l114.858666-249.002667a21.333333 21.333333 0 0 1 38.741334 0l114.858666 249.002667a21.333333 21.333333 0 0 0 16.853334 12.245333l272.341333 32.298667a21.333333 21.333333 0 0 1 11.946667 36.864l-201.344 186.154667a21.333333 21.333333 0 0 0-6.4 19.84l53.418666 268.928a21.333333 21.333333 0 0 1-31.36 22.784l-239.274666-133.930667a21.333333 21.333333 0 0 0-20.821334 0" fill="#333333"></path>
			</symbol>
			<symbol id="web_icon_dianzan_fill" viewBox="0 0 1024 1024">
				<path d="M575.0784 133.48864L336.6912 371.79392a37.2736 37.2736 0 0 0-10.8544 26.33728v431.39072c0 20.56192 16.67072 37.2736 37.23264 37.2736h403.2512a37.2736 37.2736 0 0 0 34.44736-23.06048l115.26144-279.83872c3.6864-9.0112 5.57056-18.6368 5.57056-28.38528v-78.35648a74.46528 74.46528 0 0 0-74.46528-74.46528h-238.30528l42.92608-168.67328a55.86944 55.86944 0 0 0-20.60288-58.44992l-31.744-23.83872a18.59584 18.59584 0 0 0-24.3712 1.76128zM251.33056 419.92192H139.6736a37.2736 37.2736 0 0 0-37.23264 37.2736v372.3264c0 20.56192 16.67072 37.2736 37.2736 37.2736h111.65696v-446.8736z" fill="#333333"></path>
			</symbol>
			<symbol id="pc_icon_shuaxin_line" viewBox="0 0 1024 1024">
				<path d="M512 128a382.506667 382.506667 0 0 0-251.008 93.44l38.272 68.906667A307.2 307.2 0 0 1 819.2 512h-115.2l122.496 220.416A384 384 0 0 0 512 128z m0 768a382.506667 382.506667 0 0 0 251.008-93.44l-38.272-68.906667A307.2 307.2 0 0 1 204.8 512h115.2L197.504 291.584A384 384 0 0 0 512 896z" fill="#333333"></path>
			</symbol>
			<symbol id="pc_icon_xiazai-fill" viewBox="0 0 1024 1024">
				<path d="M815.402667 435.669333H549.973333V132.266667H474.026667v303.402666H208.64L512 739.072l303.402667-303.36zM853.333333 890.794667V814.933333H170.666667v75.861334h682.666666z" fill="#333333"></path>
			</symbol>
			<symbol id="web_icon_wodeyuedu" viewBox="0 0 1024 1024">
				<path d="M228.295111 342.869333h175.217778c3.640889 0 6.656 4.096 6.599111 9.045334v54.044444c0 4.949333-3.015111 9.102222-6.712889 9.102222H228.295111c-3.640889 0-6.656-4.152889-6.656-9.102222v-54.044444c0-4.949333 3.015111-9.045333 6.656-9.045334zM228.295111 511.203556h175.217778c3.640889 0 6.656 4.096 6.599111 9.045333v54.044444c0 4.949333-3.015111 9.102222-6.712889 9.102223H228.295111c-3.640889 0-6.656-4.152889-6.656-9.102223v-54.044444c0-4.949333 3.015111-9.045333 6.656-9.045333zM613.831111 406.016v-54.101333c0-4.949333 3.015111-9.045333 6.712889-9.045334h175.104c3.640889 0 6.656 4.096 6.656 9.045334v54.044444c0 4.949333-3.015111 9.102222-6.656 9.102222h-175.104c-3.697778 0-6.712889-4.152889-6.712889-9.102222zM620.544 511.203556h175.217778c3.640889 0 6.656 4.096 6.542222 9.045333v54.044444c0 4.949333-3.015111 9.102222-6.656 9.102223h-175.104c-3.697778 0-6.712889-4.152889-6.712889-9.102223v-54.044444c0-4.949333 3.015111-9.045333 6.712889-9.045333z"></path><path d="M688.526222 102.4h215.722667c16.668444 0 30.151111 17.180444 30.151111 38.456889v682.951111c0 21.333333-13.482667 38.513778-30.151111 38.513778h-215.722667c-46.307556 0-91.648 16.952889-130.673778 48.924444l-41.870222 34.417778a6.030222 6.030222 0 0 1-4.039111 1.536 6.712889 6.712889 0 0 1-4.096-1.536l-41.870222-34.417778c-38.912-31.971556-84.195556-48.924444-130.446222-48.924444H119.808c-16.725333 0-30.151111-17.180444-30.151111-38.456889V140.856889c0-21.276444 13.425778-38.456889 30.151111-38.456889h215.722667c46.250667 0 91.591111 16.952889 130.446222 48.924444l46.08 37.660445 45.966222-37.660445c38.912-31.971556 84.195556-48.924444 130.503111-48.924444zM157.468444 775.736889h178.062223c51.256889 0 101.432889 16.099556 146.318222 46.876444V267.150222L475.306667 261.688889l-45.966223-37.660445c-28.046222-22.983111-60.472889-35.100444-93.866666-35.100444H157.525333v586.752z m531.057778 0h178.005334V188.984889h-178.062223c-33.336889 0-65.763556 12.117333-93.752889 35.100444l-46.08 37.660445-6.428444 5.404444v555.463111c44.828444-30.72 95.004444-46.876444 146.318222-46.876444z">
				</path>
			</symbol>
			<symbol id="web_icon_fullscreen" viewBox="0 0 1024 1024">
				<path d="M682.666667 128h256v256h-85.333334V213.333333h-170.666666V128zM85.333333 128h256v85.333333H170.666667v170.666667H85.333333V128z m768 682.666667v-170.666667h85.333334v256h-256v-85.333333h170.666666zM170.666667 810.666667h170.666666v85.333333H85.333333v-256h85.333334v170.666667z" fill="#333333"></path>
			</symbol>
			<symbol id="web_icon_fullscreen-exit" viewBox="0 0 1024 1024">
				<path d="M768 298.666667h170.666667v85.333333h-256V128h85.333333v170.666667zM341.333333 384H85.333333V298.666667h170.666667V128h85.333333v256z m426.666667 341.333333v170.666667h-85.333333v-256h256v85.333333h-170.666667zM341.333333 640v256H256v-170.666667H85.333333v-85.333333h256z" fill="#333333"></path>
			</symbol>
			<symbol id="huabishezhi" viewBox="0 0 1024 1024">
				<path d="M189.013333 602.453333a176.341333 176.341333 0 0 1 39.808-80.256 177.28 177.28 0 0 1 246.613334-13.738666 176.810667 176.810667 0 0 1 60.245333 118.869333 176.341333 176.341333 0 0 1-39.936 126.976 331.477333 331.477333 0 0 1-176.768 105.472 332.373333 332.373333 0 0 1-205.226667-19.114667 118.613333 118.613333 0 0 0 81.749334-143.744c-1.408-1.450667-1.493333-3.2-1.621334-4.949333a176.426667 176.426667 0 0 1-4.821333-89.514667zM822.442667 85.333333c6.058667 0 11.946667 2.048 16.64 5.888a26.325333 26.325333 0 0 1 4.736 33.109334l-244.053334 372.693333a18.730667 18.730667 0 0 1-22.528 8.661333 18.816 18.816 0 0 1-7.338666-4.650666l-100.096-87.04a18.773333 18.773333 0 0 1-0.213334-28.928l336.213334-293.802667a26.325333 26.325333 0 0 1 16.64-5.930667zM337.066667 910.208h544.725333c-2.986667-2.986667-6.016-6.272-9.216-9.728-32.853333-36.138667-84.394667-92.8-348.245333-23.978667-101.205333 26.368-175.914667 33.706667-187.264 33.706667z">
				</path>
			</symbol>
		</svg>
	`))
})();
// “我是中国人。我们都是中国人。中华民族是一家。”