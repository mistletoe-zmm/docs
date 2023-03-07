<!--
 * @Author: 张苗苗
 * @Date: 2023-03-07 21:14:40
 * @LastEditors: 张苗苗
 * @LastEditTime: 2023-03-07 22:00:13
 * @FilePath: /my-docs/docs/Web/JavaScript/es6.md
 * @Description:
-->

# es6的一些语法

## var与const与let

### var

1. 声明提升
2. 没有块级作用域
3. 变量覆盖
4. 在全局上下文中var声明的会挂载到window上

### let const

1. 不允许重复声明
2. 仅在块级作用域下有效
3. 不存在变量提升

### const

1. 用于声明常量,不允许重新赋值,基本类型不可改,引用类型可改(内存地址未变即可)
2. 声明时需赋值

 报错示例

``` js
const a = 1;
a = 2;

const b = { c: 1 };
b = { d: 1 };
```

 正确示例

``` js
const a = [];
a.push(1);

const b = { c: 1 };
b.c = 2;
```

