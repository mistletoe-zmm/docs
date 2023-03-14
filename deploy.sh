#!/usr/bin/env sh
###
 # @Author: 张苗苗 
 # @Date: 2023-02-21 18:14:11
 # @LastEditors: 张苗苗
 # @LastEditTime: 2023-03-07 22:44:44
 # @FilePath: /my-docs/deploy.sh
 # @Description: 
### 

# 确保脚本抛出遇到的错误
set -e

# 生存静态文件
yarn docs:build

# 进入生成的文件夹
cd ./docs/.vuepress/dist

git init
git branch -M main
git remote add origin https://github.com/mistletoe-zmm/mistletoe-zmm.github.io.git
git add -A 
git commit -m "deploy"

git push -f origin main
