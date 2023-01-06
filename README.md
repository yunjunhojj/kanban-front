# WePlan!

[https://youtu.be/VREggdYcD5Y](https://youtu.be/VREggdYcD5Y)

### 팀원 별 담당 feature

윤준호 :  보드 아이템 

김상현 : 헤더, 풋터, 댓글, 모달

홍희진 :  상세 페이지 

임홍구 :  배포, 모달 

박휘인 :  메인 페이지, CSS

# 프로젝트 소개

어떤 문제를 해결하고자 하나요? 문제를 해결 하기 위해서 진행 사항을 체크하는 것을 매우 중요한 일 입니다. 

업무 관리 시 WePlan 스케줄링을 사용하면, 프로젝트 진행에 많은 도움을 줄 것 입니다.

### **칸반이란**

**칸반(Kanban)은 단계별 작업 현황을 column 형태의 보드로 시각화하는 프로젝트 관리 방법**을 말합니다. 

각각의 열은 작업 단계를 나타내며, 열마다 개별 작업을 나타내는 카드가 표시됩니다. 칸반 보드를 통해 작업이 시작되어 완료될 때까지 단계별로 진행 상황을 확인할 수 있어 효과적으로 팀의 협업을 관리할 수 있습니다.

![다운로드.jpeg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d7746abd-7ab0-42ca-9d4d-d102ef46bf6a/%E1%84%83%E1%85%A1%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%85%E1%85%A9%E1%84%83%E1%85%B3.jpeg)

# 기능

- 메인
    
    ![kanban-front-phi.vercel.app_.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/dde6e1a0-b062-4cc2-ad41-8fd7f0a0b169/kanban-front-phi.vercel.app_.png)
    
    ![kanban-front-phi.vercel.app_ (5).png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e1d2d5e8-abe2-44ce-b5b4-c6d1250a70ae/kanban-front-phi.vercel.app__(5).png)
    
    - **4단계 진행 상태로 구성**
        
        진행 상태별 버튼 클릭 시 해당 column으로 이동
        
        - 코드
            
            ```jsx
            const categoryList = ["todo", "working", "validate", "complete", "archive"];
            
              const categoryList_Kr = ["착수", "검토", "완료", "저장", "번복"];
            
              // todo 상태일때는 번복 버튼을 표시하지 않습니다. 
              if (nameBtn === "nextCategory" || CurrentCategory !== "todo") {
                return (
                  // 버튼 이름에 따라 번복 or 카테고리로 표시해줍니다. 
            			<CustomBtnStyle
                    name={nameBtn}
                    onClick={() =>
                      onToggle(nameBtn, BoardItemId, categoryList.indexOf(CurrentCategory))
                    }
                  >
                    {nameBtn === "nextCategory"
                      ? categoryList_Kr[categoryList.indexOf(CurrentCategory)]
                      : "번복"}
                  </CustomBtnStyle>
                );
              }
            ```
            

- 보드 카드 생성 모달
    
    ![kanban-front-phi.vercel.app_ (6).png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0c8ee74f-883d-4c63-94f6-7ea591c3a074/kanban-front-phi.vercel.app__(6).png)
    
    ![kanban-front-phi.vercel.app_ (7).png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f5dd4460-cd40-410d-9776-b57342af6fa1/kanban-front-phi.vercel.app__(7).png)
    
    - FAB 클릭 시 모달로 보드 생성하기
        - 코드
            
            ```jsx
            //boardSlice.js
            reducers: {
                showCreateBoardModal: (state) => {
                  state.createBoardModalVisibility = true;
                },
                hideCreateBoardModal: (state) => {
                  state.createBoardModalVisibility = false;
                },
              },
            
            //CustomFAB
            const handleOpenModal = () => {
                dispatch(showCreateBoardModal());
                lockScroll();
              };
              return (
                <div>
                  <CreateBoardModal />
                  <CustomFABStyled onClick={() => handleOpenModal()}>
            ```
            
    
    📌 배경 색상 조정으로 사용성 업그레이드
    
    - 버튼 비활성화로 유효성 검사

- 상세 페이지
    
    ![kanban-front-phi.vercel.app_ (1).png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9afeacf3-f9b8-489a-a80a-557c31aa9c41/kanban-front-phi.vercel.app__(1).png)
    
    ![kanban-front-phi.vercel.app_detail_CS4eIKS9lCKsrP5u9a-qh.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4d592302-553d-456b-82ae-d28dcd22f660/kanban-front-phi.vercel.app_detail_CS4eIKS9lCKsrP5u9a-qh.png)
    
    - 보드 R, U, D 구현
        - 코드
            
            ```jsx
            const editBoardHandler = (event) => {
                event.preventDefault();
            
                const newBoard = {
                  id: params,
                  content: content,
                  name: board.name,
                  pw: board.pw,
                  title: board.title,
                };
                // 유효성 {
                if (!content) {
                  setContent("");
                  alert("수정할 내용을 입력해주세요.");
                  return;
                }
            
                dispatch(patchBoardThunk(newBoard));
                setEditable(!editable);
                setContent("");
              };
            ```
            
            - form태그 onSubmit 핸들러
                
                💡 여기서는 content만 변경해주기 때문에 다른 키값은 `patchBoardThunk`에 그대로 넘겨줍니다.
                
    - 편집, 취소 버튼 조건부 렌더링
        - 코드
            
            ```jsx
            
              const [editable, setEditable] = useState(false);
            
              const editOn = () => {
                setEditable(!editable);
              };
            ```
            
            `onClick` 속성과 삼항 연산자로 `editable` 상태에 따른 구현
            

- 댓글
    
    ![kanban-front-phi.vercel.app_ (3).png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ea4b80d2-cb72-43b3-b460-1a3696883d2a/kanban-front-phi.vercel.app__(3).png)
    
    - 댓글 CRUD 구현
        - 코드
            
            ```jsx
            // CommentRead.js
            const handleEditComment = (id) => {
              dispatch(editComment(id));
            };
            
            // commentsSlice.js
            const commentsSlice = createSlice({
              name: "comments",
              initialState,
              reducers: {
                editComment: (state, action) => {
                  state.editText = action.payload;
                },
                emptyComment: (state) => {
                  state.editText = null;
                },
              },
            ```
            
            `editComment`는 `dispatch`로 보낸 `id`를 잠시 보관하기 위해 사용합니다. 반대로 `emptyComment`
            는 보관한 데이터를 비우기 위해 사용하는 메서드입니다.
            
            - 코드
                
                ```jsx
                // commentCreate.js
                
                // useEffect 내부 boardId, id을 접근하기 위해 사용합니다.
                let editTextSaveRef = useRef(null);
                useEffect(() => {
                  if (editText) {
                    const { boardId, comment, id, name, password } = comments.find(
                      (comment) => comment.id === editText
                    );
                    setWriter(name);
                    setComment(comment);
                    setPassword(password);
                
                    editTextSaveRef.current = { boardId, id };
                  }
                }, [editText]);
                ```
                
                `editText`가 `null`이 아닌 어떤 `id`값을 갖을 때 실행하도록 조건문을 추가했습니다. `comments.find`으로 db에서 해당하는 댓글의 데이터를 찾습니다. `CreateComment`는 제어된 `input`을 갖고 있는 로컬 컴포넌트에서 `setter 함수`로 댓글 데이터로 업데이트합니다.
                
                `useRef`로 `useEffect`내부 콜백함수에서 `boardId`, `id`를 외부 스코프로 유출시킵니다
                
            - 코드
                
                ```jsx
                // commentCreate.js
                
                const handleSaveComment = () => {
                  const editTextSave = {
                    id: editTextSaveRef.current.id,
                    boardId: editTextSaveRef.current.boardId,
                    name: writer,
                    comment: comment,
                    password: password,
                  };
                
                  dispatch(patchCommentThunk(editTextSave));
                  dispatch(emptyComment());
                  setWriter("");
                  setComment("");
                  setPassword("");
                };
                ```
                
                `handleSaveComment`는 `editTextSave` 에 업데이트할 데이터를 담고 `patchCommentThun` 으로 store 에 보냅니다. 그리고 editText 을 초기화할 `emptyComment` 를 실행합니다. 그리고 로컬 컴포넌트의 제어된 `input`을 모두 초기화합니다.
                
    - 빈 input 창 → 댓글작성 버튼 비활성화
    
    ![kanban-front-phi.vercel.app_ (4).png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4301538a-749c-4d51-be9c-c18daa985dba/kanban-front-phi.vercel.app__(4).png)
    

## #git flow

![github.com_yunjunhojj_kanban-front_pulls_q=is%3Apr+is%3Aclosed.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bde4ab0b-68e1-4ae0-a809-7d4b7d60c7bb/github.com_yunjunhojj_kanban-front_pulls_qis3Apris3Aclosed.png)

[convention](https://www.notion.so/convention-04fdfeab55754de789e58dfff9b2fe82)

## 트러블 슈팅

[트러블 스토리지](https://www.notion.so/a8eab786689f4ee5bd74f266f499b2ae)

### 그 외 역할 및 느낀점

윤준호 : 인간, 의견 조율, 배포 관리

- **부족한 실력에 팀장은 맡았지만, 다들 열심히 해줘서 무한 감사,**
- **git flow를 최대한 사용하려 했던 부분이 좋았습니다**.

김상현 : 인간 Stack overflow

- **설계를 어느 정도 하고 착수해서 진행이 수월해졌습니다.**
- **바로 merge하지 않고 PR을 통해서 merge를 진행했습니다. 다른 코드를 확인하고 병합하는 방법이 좋았습니다.**

홍희진 : 발표 자료 작성

- **깃으로 협업하는 것.. 이제 두렵지 않아요..**
- **프로젝트 기초 셋업을 함께 만들어서 시간도 단축된 것 같고 개념에 대한 이해도도 올라갔습니다.**
- **앞으로 협업은 이렇게 해야겠다는 인식을 심어준 프로젝트가 된 것 같아요 🥹**

임홍구 : 시연 영상 녹화

- **훌륭한 팀원들을 만나 많이 배우는 계기가 되었고 깃을 통한 협업이 얼마나 유용한지 알게되었습니다.**
- **리덕스 툴킷, thunk부분을 더 공부해봐야 할것 같고 프로젝트는 끝났지만 코드를 자세히 리뷰해보면 많은 도움이 될것 같습니다.**

박휘인 : 발표

- **항상 개인 저장소에 Push하기만 하였는데, Git 협업에 있어서 많은 배움이 있었던 프로젝트였습니다.**
- **컨벤션 규칙에 따라 처음 진행해보았는데, 상황마다 기준이 잡혀있어서 너무 좋았습니다.**
- **기능별 Branch를 따로 만들어서 진행하였는데, 충돌이 일어났을 때도 금방 복구할 수 있어서 좋았습니다.**
- **모자란 실력으로 프로젝트에 참여하게 되었는데, 팀원분들이 너무나 잘 배려해주고 친절하게 알려주셔서 진행 기간동안 감사했습니다. 개인 성장 욕구에 있어서 더 자극 받을 수 있었습니다.**
