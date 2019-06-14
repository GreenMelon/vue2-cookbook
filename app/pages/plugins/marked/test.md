# Odyssey API

## （一）配置项

### options 示例

```javascript
const options = {
	resources: {
	    images: {
    	    url: 'http://www.gaoding.com/api/images',
    	    params: {
    			user_id: 1001,
    			template_id: 1,
    		},
    	},
        fonts: {
    		url: 'http://www.gaoding.com/api/fonts',
    		params: {
    			platform_id: 32,
    			page_size: 10,
    			page_num: 1,
    		},
    	},
    	templets: {
    		url: 'http://www.gaoding.com/api/templets',
    		params: {
    			platform_id: 32,
    			page_size: 10,
    			page_num: 1,
    		},
    	},
    	materials: {
    	    url: 'http://www.gaoding.com/api/materials',
    		params: {
    			platform_id: 32,
    			page_size: 10,
    			page_num: 1,
    			type: 'graph',
    		},
    	},
	},
	server: {
	    template: {
	        url: 'https://www.gaoding.com/api/templets/1',
	    },
	},
	environment: {
	    language: 'en',
	    vuePosterEditor: {
    	    editorOptions: {
    	        mode: 'flow',
    	    },
    	},
	},
	script: [],
};
```

### 详细说明

> - `resources`: 该字段用于定义所需的资源。如文字列表、图形列表和图片特效列表等。url 字段是资源路径，params 字段是获取资源所需的参数。
> - `server`: 该字段用于声明模版的接口。模版的 PUT(更新)操作和 GET(获取) 都通过统一的接口完成，返回值和更新值保持一致。
> - `environment`: 该字段用于设置奥德赛的外观和展示。如使用什么语言；核心编辑器是显示全部画布还是显示单个画布。 
> - `script`: 该字段用于设置一些自定义脚本。目前使用场景不清晰，所以没有细致地考虑。

## （二）使用方式

### 路由参数(目前暂定使用这种方式)

将 options 转成字符串，然后作为路由参数拼接到访问路径中。options 设置项过多的话可能导致超出地址栏的长度限制问题。

```javascript
https://odyssey.gaoding.com/#/design?options=%7B%22mode%22:%22design%22,%22user%22:%7B%22id%22:123,%22name%22:%22caigua%22%7D,%22favor%22:%5B0,1%5D%7D
```

### iframe

业务方通过 iframe 将奥德赛嵌入其页面中，然后通过 postMessage 的方式传参。

```javascript
iframe.postMessage(options);
```

### server

业务方先将 options 保存到奥德赛服务端，然后根据返回的凭证，跳转到奥德赛。进入奥德赛以后，根据凭证 id 去取回 options。

```javascript
https://odyssey.gaoding.com/#/design?id=100
```
