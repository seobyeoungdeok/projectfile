# 📅 일정 관리 웹 서비스 (Calendar App)

## 1. 프로젝트 소개

React와 Node.js를 활용하여 개인 일정을 효율적으로 관리할 수 있는 웹 서비스입니다.
달력 UI를 통해 직관적으로 일정을 확인하고, 드래그 앤 드롭으로 손쉽게 수정할 수 있습니다.

- **개발 기간:** 2026.01.12 ~ 2026.02.6 (4주)
- **개발 인원:** 1인 (개인 프로젝트)

## 2. 기술 스택 (Tech Stack)

### Frontend

<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">

### Backend

<img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"> <img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white">

### Database

<img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white">
## 3. 주요 기능 (Key Features)

- **캘린더 뷰:** 월(Month), 주(Week), 일(Day) 단위로 일정 확인
- **일정 관리 (CRUD):** 일정 등록, 조회, 수정, 삭제 기능 구현
- **드래그 앤 드롭:** 마우스 드래그를 통해 일정 날짜 변경 가능
- **필터링:** 카테고리별 일정 필터링 기능

## 4. 실행 화면 (Demo)

|             메인 화면(달력)              |              일정 등록 모달              |
| :--------------------------------------: | :--------------------------------------: |
| ![메인화면](이미지경로를_넣어주세요.png) | ![일정등록](이미지경로를_넣어주세요.png) |

## 5. 실행 방법 (Getting Started)

이 프로젝트를 로컬 환경에서 실행하기 위해서는 Node.js가 설치되어 있어야 합니다.

### 설치 및 실행 (Installation)

**1. 프로젝트 클론 (Clone)**

```bash
git clone [https://github.com/본인아이디/프로젝트저장소명.git](https://github.com/본인아이디/프로젝트저장소명.git)
cd projectfile

* **[문제]** 서버 실행 시 `DB 연결 실패` 오류 및 `ECONNREFUSED` 에러 발생
    * **원인:** 로컬 환경에서 MySQL 서비스가 실행되지 않아(Stopped) 서버가 데이터베이스를 찾지 못함.
    * **해결:** Windows 서비스 관리자에서 `MySQL` 서비스를 찾아 '시작(Start)' 상태로 변경하여 정상 연결 성공.
    ## 6. 트러블 슈팅 (Troubleshooting)

* **[문제]** DB 연결 후 데이터를 조회했으나 테이블이 존재하지 않음 (Error 1146)
    * **원인:** DB 연결은 성공했으나, 데이터를 저장할 `schedules` 테이블을 생성하지 않음.
    * **해결:** MySQL Workbench에서 `CREATE TABLE` 쿼리문을 직접 실행하여 테이블 스키마 생성 완료.

* **[문제]** 로컬 서버 실행 시 DB 연결 거부 (Connection Refused)
    * **원인:** 윈도우 서비스에서 MySQL 서버가 중지(Stopped) 상태였음.
    * **해결:** 서비스 관리자에서 MySQL을 '시작' 상태로 변경하여 해결.
```
