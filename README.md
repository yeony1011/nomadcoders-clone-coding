# nomadcoders-clone-coding

## react-for-beginners
ReactJS 기초

## create-react-app
ReactJS npx로 설치

npx create-react-app xxx

## 배포방법
설치
npm i gh-pages

npm run build

package.json
- 하위에 추가 "homepage": "https://yeony1011.github.io/nomadcoders-clone-coding"
(git remote -v : 현재 저장소명 알 수 있음)
- scripts에 deploy 추가
deploy : gh-pages 를 실행시켜주고, build라는 디렉터리를 생성함, homepage 등록한 웹사이트로 업로드함
("deploy": "gh-pages -d build")
- scripts에 predeploy 추가
build를 하고 난 다음 deploy하는걸 기억하고 싶지 않아 자동화 하기 위함
("predeploy": "npm run build")