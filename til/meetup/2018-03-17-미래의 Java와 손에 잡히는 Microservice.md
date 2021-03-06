#### 세미나 정보

1. 주제 : openjdk, msa
2. 일시 : 2018년 03월 17일
3. 주최 : 오라클 코리아
4. 장소 : 

---

##### next 자바 -- 배달의민족 박성철

- 자바 = 언어 + VM + 라이브러리 초창기에는 의미를 두었지만 최근에는 VM과 언어가 분리되고 있음.

- 업계, 오픈 소스, 커뮤니티 = 개방형 혁신인 언어

- 자바의 설계목표는 단순하고 친숙하다. 

- OpenJDK 

  - 언어의 현대화 : 표현 간소화 & 함수형 특성 도입, 다중 코어 시대 대응, System 자바
  - 클라우드 : 시스템통합; 성능 향상, 경량화; GC 개선, 관측성 개선
  - 다언어용 범용 VM

- Micro Serevices - Java the Unix way 

- 마이크로 서비스를 도입?? 조직의 특성에 맞게

  - amber [프로젝트 링크](http://openjdk.java.net/projects/amber/) 
    - JEP 286 지역변수 타입, 추론
      - 자바 5 제네릭, 자바 7 다이아몬드, 자바 8 람다식
      - 자바 10 지역변수 ( var )
      - JEP 323 람다식
        - 어노테이션 가능 var 타입
      - 제약
        - 필드, 메서드 반환 타입
        - null 갑 지정
        - 두 변수 이상 
    - JEP 326 미가공 문자열
      - 특수기호 후처리 없는 문자열
      - 여러라인 입력
    - JEP 325 switch
      - switch 문 이었으나, 식으로 사용 가능하여 삼항연사자 처럼 결과 값을 반환하도록 사용 가능하다.
    - JEP 305 패턴 매칭
      - 함수형 언어에서의 패턴매칭을 따옴.
      - record class ( POJO 형식 )
      - switch 식 + 타입 비교 + 객체 분해 + 값 비교

- vahalla [프로젝트 링크](http://openjdk.java.net/projects/valhalla/) 

  - 자바 제네렉의 한계를 극복하고 참조 타입 때문에 발생하는 자바 성능을 개선
  - 제네릭
    - 함수형 언어에서 말하는 다형성의 형태
  - 값 타입 : 코드는 클래스 같지만 동작은 값처럼.
  - 지금 까지는 VM에서 제네렉의 타입을 확인하지 않았으나, 값 타입이 추가되면서 제네릭의 타입에 대해서 VM에서 타입을 확인한다.
  - 값 기반 클래스
    - 자바 8에 추가된 클래스 규격
  - 메모리 상에서 성능 향상

- lOOm [프로젝트 링크](http://openjdk.java.net/projects/loom/) 

  - 자바가 관리하는 경량 쓰레드
  - 현재 시스템에서는 쓰레드도 부족한 상황으로 가고 있어서 더 경량화인 화이버가 개발

#### microservices 실습

- [http://microservices.io/](http://microservices.io/) 
- [실습 내용 Repo](https://github.com/namoo4u/microservices-demo)
- [실습 데모 프로젝트](https://github.com/microservices-demo/microservices-demo)
- [istio Repo](https://github.com/istio/istio)     
