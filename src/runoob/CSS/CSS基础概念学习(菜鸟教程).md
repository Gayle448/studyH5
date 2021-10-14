图书管理系统小程序实现目标:

1. 统一导航栏 OK
2. 底部tab切换栏 OK
3. 个人中心页面 UI 引申出来要去学习css >>>>
4. 获取微信登录能力



学习CSS笔记:

1. 选择器

* a,#b,.c {取并集,这三个选择器随便哪一个都满足,这里面定义的样式}
* a.b {a是标签选择器,.b是class选择器,取交集,a标签下面使用了class为b的样式的元素,满足这里定义的样式}
* a b c {后代选择器:a 下级元素 b 下级元素 c 满足这里面定义的样式}
* [target]{对应属性 的标签满足 这里定义的样式}
* a:link{所有未访问的链接 满足这里定义的样式}
* p:after{等等 p 标签相关满足条件 样式}
* 



2. 概念

* 复习一下div span的区别
* 盒模型 是啥东东?



3. 属性

* initial : 是所有css属性都有用的一个值/字段,系统提供的默认值;

* background  背景属性集合

  background-color, 设置背景颜色 #十六进制 、 rgb、英文单词,设置透明,inherit 从父类继承

  background-image, 值:none默认无背景图,url("图片URL,可支持线上和本地相对路径");

  可通过以下函数创建渐变图:

   * linear-gradient() 从上往下的线性渐变,可设置多种颜色,位置和角度等;
   * repeating-linear-gradient() 重复的线性渐变,像是条纹、栈栏一样;
   * radial-gradient() 圆形/椭圆形渐变,可设置多种颜色位置等;
   * repeating-radial-gradient() 重复的原形/径向渐变,像波纹一样;
   * inherit可从父类继承;

  background-position, 设置背景图像位置[第一个是水平位置,第二个是垂直位置], 设置英文单词 空格隔开 (left top)表示左上,设置百分比 空格隔开 (50% 50%)表示在中间位置,设置其他单位 (50px 50px),inherit 从父类继承

  background-Origin, 属性指定background-position属性相对什么位置生效(如果attachment是fixed则设置无效), padding-box (默认,背景图片相对填充框,人话就是在内侧边框), border-box(背景图片相对外侧边框), content-box(背景图片相对内容框)

  background-clip, 属性置顶 背景图的绘制位置(裁剪区域), border-box(默认,背景图显示区域包含边框), padding-box 背景图显示区域不包含边框), content-box(背景图仅显示内容下) 

  background-attachment , 背景图片是否固定,默认scroll,是页面滚动而滚动(也可以认为是固定在某个元素那里); **local, 这个不理解todo**,说是随元素内容滚动而滚动;  fixed 固定在屏幕某个点,不会随页面滚动而滚动; inherit可从父类继承

  background-size,设置背景图像大小 *length* (宽 高) 只设置一个,另一个自动(怎么个自动法?)  |  *percentage* (百分比:宽 高)  |  cover(保持比例 满足短边,超出裁剪)  |  contain(保持比例 满足长边,完整显示)

  background-repeat ,设置背景图像是否重复怎么重复,默认 repeat(纵向横向重复),no-repeat(不重复),repeat-x(横向重复),repeat-y(纵向重复),inherit 可从父类继承
  
  background-blend-mode ,设置背景层混合模式
  
  

* border 边框

  border-width, 边框宽度, 上 右 下 左,可组合设,值有thin 细、medium中、thick粗、自定义宽度,还可继承

  border-style, 边框样式, 上 右 下 左,可组合设,只有 none(无)、hidden(隐藏)、dotted(点状)、dashed(虚线)、solid(实线)、double(双实线)、groove、ridge、inset、outset (这几个是3D效果待使用时了解),可继承

  border-color,边框颜色, 上 右 下 左,十六进制、rgb等,transparent透明,可继承
  
  border-radius 属性是一个最多可指定四个 border -*- radius 属性的复合属性
  

  border-bottom, 底部边框,宽度 样式 颜色, 可继承

  border-bottom-color,底部边框颜色,可继承
  
  border-bottom-left-radius ,下 左 角边框的圆角弧度,长度或边框百分比
  
  border-bottom-right-radius, 下 右 角边框的圆角弧度,长度或边框百分比
  
  border-collapse 属性设置表格的边框是否被合并为一个单一的边框，还是像在标准的 HTML 中那样分开显示 (看着效果像是 实心/空心)。
  
  
  border-top 简写属性把上边框的所有属性设置到一个声明中. 属性：border-top-width, border-top-style, and border-top-color.
  
  
  border-left 简写属性把左边框的所有属性设置到一个声明中。 属性： border-left-width, border-left-style, and border-left-color.
  
  
  border-right 简写属性把右边框的所有属性设置到一个声明中。 属性：：border-right-width, border-right-style, and border-right-color.
  
  
  border-spacing 属性设置相邻单元格的边框间的距离（仅用于"边框分离"模式）。上 右 下 左 


  border-image, 图片边框 各种设置简写
  
  border-image -width属性指定图像边界的宽度。
  
  border-image-source属性指定要使用的图像，而不是由border-style属性设置的边框样式。
  
  border-image -slice属性指定图像的边界向内偏移。（待理解）
  
  border-image -width属性指定图像边界的宽度。
  
  border-image-outset用于指定在边框外部绘制 border-image-area 的量。 （待理解）
  
  border-image-repeat 属性用于图像边界是否应重复（repeated）、拉伸（stretched）或铺满（rounded）。
  
  
  [border-top-left-radius](https://www.runoob.com/cssref/css3-pr-border-top-left-radius.html) 、[border-top-right-radius](https://www.runoob.com/cssref/css3-pr-border-top-right-radius.html)、[border-top-left-radius](https://www.runoob.com/cssref/css3-pr-border-top-left-radius.html)、[border-top-right-radius](https://www.runoob.com/cssref/css3-pr-border-top-right-radius.html)
  
  [border-left](https://www.runoob.com/cssref/pr-border-left.html) 、[border-left-color](https://www.runoob.com/cssref/pr-border-left_color.html)、[border-left-width](https://www.runoob.com/cssref/pr-border-left_width.html)
  
  [border-right](https://www.runoob.com/cssref/pr-border-right.html)、[border-right-color](https://www.runoob.com/cssref/pr-border-right_color.html)、[border-right-width](https://www.runoob.com/cssref/pr-border-right-width.html)
  
  [border-top](https://www.runoob.com/cssref/pr-border-top.html)、[border-top-color](https://www.runoob.com/cssref/pr-border-top-color.html)、[border-top-width](https://www.runoob.com/cssref/pr-border-top-width.html)
  
  [border-spacing](https://www.runoob.com/cssref/pr-border-spacing.html) 属性设置相邻单元格的边框间的距离（仅用于"边框分离"模式）
  
  box-shaow, boxShadow 属性把一个或多个下拉*阴影*添加到框上(多个逗号隔开)。*h-shadow 垂直阴影位置、 v-shadow 水平阴影位置、 blur模糊距离、 spread 阴影大小 、color 阴影颜色 、inset 由外到内改*. 例子:[旋转图像](https://www.runoob.com/try/try.php?filename=trycss3_image_gallery)还蛮有趣.
  
  
* box 相关
  
  box-align、box-flex、box-drection、 box-drection-group、box-lones、等等待了解 todo
  
    
  
  
* postion 定位  static、relative、absolute、sticky、z-index

  [bottom](https://www.runoob.com/cssref/pr-pos-bottom.html) 相对底部偏移,absolute  相对父view 和 relative 相对自己原本的位置,正往上移动,负往下移.left、right、top同理

  clip 指定裁剪区域,rect (*top*, *right*, *bottom*, *left*),裁剪一个绝对定位的元素.

  overflow-x、overflow-y,元素内容超出边界,指定显示模式: visible 显示,但是会显示在框外部; hidden,裁剪不滚动; scroll 滚动; auto 自动滚动; no-display 超出则删掉所有元素及框 (没看到效果); no-content 超出则隐藏整个内容 (没看到效果);

  别人关于层级的一个总结:

  > **总结：**标准流盒子，低于浮动的盒子，浮动的盒子又低于定位的盒子。
  >
  > 定位高于浮动，浮动高于标准流。（高低和占不占位置无关）
  >
  > 用法：
  >
  > 1、必须有定位。（除去static之外）。
  >
  >  2、给定 z-index 的值为层级的值。（不给默认为0）
  >
  > - a. 层级为0的盒子，也比标准流和浮动高。
  > - b. 层级为负数的盒子，比标准流和浮动低。
  > - c. 层级不取小数）
  > - d. 层级一样，后面的盒子比前面的层级高。
  > - e. 浮动或者标准流的盒子，后面的盒子比前面的层级高。
  > - f. abselute是不占位置的，relative是站位的的。而层级的高低，是和占不占位置没有关系的。

* [font](https://www.runoob.com/cssref/pr-font-font.html) 字体,大小,类型等

* [height](https://www.runoob.com/cssref/pr-dim-height.html) 高度

* [margin](https://www.runoob.com/cssref/pr-margin.html) 设置所有外边距属性, 上 右 下 左

* [padding](https://www.runoob.com/cssref/pr-padding.html) 所谓填充,估计就是内边距

* Opacity 不透明度 0是透明,1是不透明

* [outline](https://www.runoob.com/cssref/pr-outline.html) border边框外围的一层框

* 对比 -- 字符间距:[letter-spacing](https://www.runoob.com/cssref/pr-text-letter-spacing.html),字与字之间 ; 段字空间:[word-spacing](https://www.runoob.com/cssref/pr-text-word-spacing.html),单词与单词之间;



TODO:

* [columns](https://www.runoob.com/cssref/css3-pr-columns.html) 指定列的数量和宽度, 等等相关日后再了解吧
* [filter](https://www.runoob.com/cssref/css3-pr-filter.html) 这个滤镜的相关使用,日后也可以学学
* [flex](https://www.runoob.com/cssref/css3-pr-flex.html) 不理解
* [transform](https://www.runoob.com/cssref/css3-pr-transform.html) 动画 平移、旋转等有需要要学
* [perspective](https://www.runoob.com/cssref/css3-pr-perspective.html) 允许你改变3D元素是怎样查看透视图。和3D 效果有关.

* [@keyframes规则](https://www.runoob.com/cssref/css3-pr-animation-keyframes.html)



TODO:

泽元采编 网络请求方式

泽元采编 编目模块代码

keyframes

transition

