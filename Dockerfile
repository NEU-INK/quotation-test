## Use an official Node runtime as a parent image
#FROM node:16-alpine
#
## Set the working directory in the container
#WORKDIR /app
#
## Copy package.json and package-lock.json to the container
#COPY package*.json ./
#
## Install dependencies
#RUN npm install
#
## Copy the rest of the application code to the container
#COPY . .
#
## Build the Next.js application
#RUN npm run build
#
#
#
## Debug: List the .next directory contents
#RUN ls -la /app/.next
#
## Expose the port that the app runs on
#EXPOSE 3070
#
## Define the command to run the app
#CMD ["npm", "start"]


# 使用官方 Node 16 Alpine 镜像
FROM node:16-alpine

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json
COPY package*.json ./

# 安装依赖
RUN npm install

# 复制应用程序代码到容器中
COPY . .

# 构建 Next.js 项目并生成站点地图
#RUN npm run build
RUN npm run build && ls -la /app/public


# Debug: 列出 public 文件夹内容以验证站点地图文件
RUN ls -la /app/public

# 暴露应用运行的端口
EXPOSE 3070

# 启动 Next.js 应用
CMD ["npm", "start"]
