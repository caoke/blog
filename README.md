### caoke的博客
    主要是记录工作中遇到的各种问题
    分为vue、js、css、webpack
#### vue 
1. vue ajax请求当离开页面或者点击查询中断上一个请求
``` js
        // 在data中初始化变量previousRequest
        data() {
            return{
                url: '',
                previousRequest: null
            }
        },
        methods: {
            // 发出请求之前 给previousRequest 赋值
            this.$http.get(url, {
                params: option,
                before (request) {
                    // abort previous request, if exists
                    if (this.previousRequest) {
                        this.previousRequest.abort() // 若上一个请求存在 则终止请求
                    }
                    this.previousRequest = request // 赋值为最新的请求
                }
            }).then((res) => {

            }, (err) => 

            })
        },
        /**
        * 离开守卫 离开页面
        */
        beforeRouteLeave (to, from, next) {
            // abort previous request, if exists
            if (this.previousRequest) {
                this.previousRequest.abort() // 离开页面是存在请求则终止
            }
            next()
        }
    
``` 
2. vue 引入富文本 使用插件vue-quill-editor，还需要引入富文本样式
* 引入
``` js
    import VueQuillEditor from 'vue-quill-editor'
    import 'quill/dist/quill.core.css'
    import 'quill/dist/quill.snow.css'
    import 'quill/dist/quill.bubble.css' // 这三个样式文件可以在入口js中引入，一次引入多出使用
    export default {
        components: {
            quillEditor  // 局部引入组件
        },
        data() {
            return {
                editorOption:{ // 富文本配置项

                }
            }
        },
        computed:{

        },
        methods: {
            /**
            * reday
            */
            onEditorReady (event, myQuillEditor) {
                // 富文本禁用
                this.$refs[myQuillEditor].quill.enable(false) // 禁用
            },
            // 失去焦点
            onEditorBlur(event) {
                // do something
            },
            // 获取焦点
            onEditorFocus() {

            }
        }
    }

```
* 使用
``` html
    <quill-editor
        v-model="form.description"
        ref="descriptionQuillEditor"
        class="editor"
        @ready="onEditorReady($event, 'descriptionQuillEditor')"
        @blur="onEditorBlur($event)"
        @focus=""
        :options="editorOption">
    </quill-editor>
```
    

    

***
#### js
* 设置npm指向npm镜像
``` npm config set registry https://registry.npmjs.org```
* 设置淘宝镜像
``` npm config set registry https://registry.npm.taobao.org```
***
#### webpack
