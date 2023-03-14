# css

## 定位 position

1. static: 默认值，即没有定位，遵循正常的文档流对象
2. absolute: 绝对定位的元素的位置相对于最近的已定位父元素，如果元素没有已定位的父元素，那么它的位置相对于html;
             定位使元素的位置与文档流无关，因此不占据空间
3. relation: 相对定位元素的定位是相对其正常位置，移动相对定位元素，但它原本所占的空间不会改变。
4. fixed: 相对于浏览器窗口是固定位置。
5. sticky: 粘性定位,基于用户的滚动位置来定位
   粘性定位的元素是依赖于用户的滚动，在 position:relative 与 position:fixed 定位之间切换。
   它的行为就像 position:relative; 而当页面滚动超出目标区域时，它的表现就像 position:fixed;，它会固定在目标位置。

## 垂直居中布局

1. display:flex;align-items:center
2. margin: auto;
   position: absolute;
   left: 0;
   top: 0;
   right: 0;
   bottom: 0;
3. position: absolute;
   top: 50%;
   transform: translate(0, -50%);
4. 父级 display: gird;align-items:center
   子级 grid-row: 1; // 占据第一行

## bfc

BFC是块级格式化上下文（Block Formatting Context）的缩写。它是Web页面中一种盒模型的渲染模式，用于控制块级盒子的布局以及浮动元素与其他元素的交互方式。

BFC的特点如下：

1. BFC中的元素布局是独立于外部的，不会受到外部元素的影响，也不会影响外部元素的布局。
2. BFC中的元素不会重叠，而是按照规定的方式排列，这个排列方式是由BFC的规则决定的。
3. BFC中的浮动元素会参与到高度的计算中，这意味着，如果一个父元素包含浮动元素，那么它的高度将会包括浮动元素的高度。
4. BFC可以防止元素被浮动元素覆盖，当一个元素的BFC和浮动元素重叠时，该元素会自动形成一个新的BFC，从而避免了被浮动元素覆盖。

BFC可以通过以下方式触发：

1. 根元素
2. float属性不为none的元素
3. position属性为absolute或fixed的元素
4. display属性为inline-block, table-cell, table-caption, flex, inline-flex的元素
5. overflow属性不为visible的元素
6. 通过使用BFC，可以解决一些布局上的问题，例如清除浮动、防止文本环绕浮动元素等问题。

## 重排重绘

重绘不一定导致重排，但重排一定会导致重绘。

重排: 当DOM的变化影响了元素的几何信息(元素的的位置和尺寸大小)，浏览器需要重新计算元素的几何属性，将其安放在界面中的正确位置，这个过程叫做重排。

重排也叫回流，简单的说就是重新生成布局，重新排列元素。

重绘: 当一个元素的外观发生改变，但没有改变布局,重新把元素外观绘制出来的过程，叫做重绘。