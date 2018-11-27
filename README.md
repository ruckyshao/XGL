

#信广龙开发状态插件安装使用说明

##起因
便于上线版本和开发版本的区分

##安装
`npm install xgl-debugmode --save-dev`

##引用
`import showDebugMode  from 'xgl-debugmode'`

##调用
```
new showDebugMode({
    logo    : true,                 //是否显示logo ****  默认为 true
    position: 'bottomRight',        //bottomRight - 右下角 | bottom - 居中底部 ****  默认为 bottomRight
    language: 'CN',                 // CN - 开发版 | EN - Demo    ****     默认为 CN
    text    : '',                   //自定义文字 三个字以内最佳 | 传参后language无效   ****     默认为''
})
```
