# Node.js 20으로 업데이트
FROM node:20 AS build

# 경로 설정하기
WORKDIR /app

# package.json과 package-lock.json을 워킹 디렉토리에 복사
COPY package.json ./

# 의존성 설치
RUN npm install

# 모든 파일을 도커 컨테이너의 워킹 디렉토리에 복사
COPY . .

# 프로젝트 빌드
RUN npm run build

# 실제 배포용 이미지 설정
FROM nginx:alpine

# 빌드 결과물을 Nginx 디렉토리에 복사
COPY --from=build /app/dist /usr/share/nginx/html

# 80번 포트 노출
EXPOSE 80

# Nginx 실행
CMD ["nginx", "-g", "daemon off;"]