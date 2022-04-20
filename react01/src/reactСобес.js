/*
Основное отличия react от javascript это то что мы отдаем рендер только один html документ 
React - использует jsx язык это javascript но он не попадает в браузер его читает Babel - babel компелирует jsx в html и направляет в браузер
Компоненты - существуют классовые и функицональные 
<Компонента/> - это функция которая возвращает jsx файл , расширение для записи jsx используем только для компоненты для reduserov не используем
Эта чистая функция должна содержать пропсы пример:
const Название компоненты (Props) = () => {
  return (
    jsx
  )
}
Так после этого мы начинаем разработку начинаем со state так BLL важенне UI , но нет смысла делать бизнес логику без отрисованого ui (в шаблоне или еще где то)
далее мы создаем редьюсер - это чистая функция принимает state и action если нужно старый стэйт модифицирует и возвращает модифицированный state
Мы должны создать обьект внимательно смотрим что должно находиться в обьекте (если инфа о человеки имя фамиилия страна город где живет и тд)
когда мы создаем реактовский сторы при помощи createStore мы ему передаем наши ветки редьюсеров  



<Routes>
<Route path = 'url' element = "{<fdf/>}"> - компонента которая следит за url в браузере через Path если она свопадает то она делает render в нашем случае element
</Routes>








Контейнерная компонента
Dispatch (action) - принимает только один атрибут и это всегда обьект dispatch служит чтобы для отслеживания выпоняемых действий для стора 
Редюсеры (Reducers) Редюсеры определяют, как состояние приложения изменяется в ответ на экшены, отправленные в стор. Помните, что экшены только описывают, _что произошло, но не описывают, как изменяется состояние приложения.

Хранилище (store) — это объект, который:

содержит состояние приложения;
отображает состояние через getState();
может обновлять состояние через dispatch();
позволяет регистрироваться (или удаляться) в качестве слушателя изменения состояния через subscribe().
                                                                     CONTEXT
В типичном React-приложении данные передаются сверху вниз (от родителя к дочернему компоненту) с помощью пропсов. Однако, подобный способ использования может быть чересчур громоздким для некоторых типов пропсов (например, выбранный язык, UI-тема), которые необходимо передавать во многие компоненты в приложении. Контекст предоставляет способ делиться такими данными между компонентами без необходимости явно передавать пропсы через каждый уровень дерева.
Создаем контекст при помощи const MyContext = React.createContext(defaultValue);
Аргумент defaultValue используется только в том случае, если для компонента нет подходящего Provider выше в дереве
---<MyContext.Provider value={/* некоторое значение }
Каждый объект Context используется вместе с Provider компонентом, который позволяет дочерним компонентам, использующим этот контекст, подписаться на его изменения   
---<MyContext.Consumer>
  {value =>  отрендерить что-то, используя значение контекста }
</MyContext.Consumer>
Consumer — это React-компонент, который подписывается на изменения контекста. В свою очередь, использование этого компонента позволяет вам подписаться на контекст в функциональном компоненте.      
   
                                                         Библиотека react-redux
React Redux — это официальный уровень привязки пользовательского интерфейса React для Redux . Он позволяет вашим компонентам React считывать данные из хранилища Redux и отправлять действия в хранилище для обновления состояния.                                                         
Установка npm install react-redux
Функция connect()подключает компонент React к хранилищу Redux.

Он предоставляет подключенному компоненту части данных, которые ему нужны из хранилища, и функции, которые он может использовать для отправки действий в хранилище.

Он не изменяет переданный ему класс компонента; вместо этого он возвращает новый связанный класс компонента, который является оболочкой для компонента, который вы передали   
--connect принимает четыре различных параметра, все необязательные. По соглашению они называются:
--mapStateToProps?: Function
--mapDispatchToProps?: Function | Object
--mergeProps?: Function
--options?: Object  

-------------------------------------------------------------------------------------------------------------------
тут с 30 урока по порядку 
31 урок - ref

когда мы отдаем функцию (другой функции) чтобы ее вызвал кто то другой называется callback 
Если мы хотим как то взаимодействовать с jsx элементом
let newpostElement = React.CreateRef() - создает ссылку которая ссылается на какой то элемент из jsx    
<textarea ref = {newpostElement}></textarea> - связываем jsx элемент с нашей ссылкой 
Let addPost = () => {
  let text = newpostElement.carent.value тут мы берем наше значение у ссылки carent обозначает что мы ссылаемся на нативный javascript
  alert (text) 
}   
 32 урок передача callback через пропсы 
 функция которая должна что то изменить должна хранится в стэйсте (вообще взаимодействие которое меняет ui хранится в state )
 let state = {
   каккой то обьект ,
  export let addPost = (postMassage) => { при помощи export мы инпортируем ее в index. js и дальше прокидывавем ее через пропсы
     state.путь на обьект и push (что хотим добавить в обьект)
   }
 }  
  после того как наша фукция дошла через пропсы куда нам нужно мы ее вызываем и отдаем в аргументы то значение которое хотим отрисовать
  
  33 урок перерисовка страницы после изменений (зачатки flux)
  если нам нужно выполнить код несколько раз подряд то мы оборачиваем этот код в функцию
  let renderEntireTree = () => { в нашем случа эта функция которая отрисовывает наше дерево
    браузер роутер
    app.js
    /браузер роутер
  }
   renderEntireTree () вызвали функцию чтобы хоть один раз отрисовать наше дерево 
   дальше эту функцию нужно добавить в наш state потому что только стэйст знает что в нем что то изменилось поэтому мы закидываем нашу в функцию в state
   Но мы не можем напрямую передать функцию так как получется циклическая зависимость
   поэтому мы создадим новый файл render.js - и эта функция ипортирует renderentireTree  в state и в index.js
   главное придерживатся концепции flux если что то кликнулось в ui м ы в первую очеред должны изменить это в стэйте а только потом в ui
   
   34 урок flux архитектура
   В первую очередь когда мы будем разрабатывать приложение мы должны понимать как мы будем организовывать state 
   flux архитектуру реализует redux тоесть круговорот между компонентами, если мы меняем что-то в ui мы это отправляем в state и возврощаем опять  ui (циклическая зависемость)
   Пример :
   <textarea ref = {newpostElement} value = 'текст' /> мы теперь назначили свойство value и теперь мы не можем ничего ввести в textarea
   чтобы что поменялось мы должны создать обработчик событий onchenge 
   let onPostChange = () => {

   }
   <textarea onChenge = {onPostChange}/> - добавили обработчик событий 
   <textarea value = {props.newPostText}/> - теперь мы должны добавить переменную в state nePostText чтобы в value отображалось то что лежит в переменной newPOstText в state
   и теперь получается что мы взяли значение из state и прокинули его нам через props в наше значение value
   Теперь нужно добавить функцию в стэйт например updateNewPostChange (newText) => {берем newPostText = newText} мы создали фукнцию
   которая берет значение из аргумента newText (которы на должен придти) и присваивает его в newPOstText 
   Функцию мы должны передать через props и записать в ее аргумент и теперь точно так же как и с добовалением поста мы делали 
   let onPostChange = () => {
     let text = onPostElement.currunt.value 
     updateNewPostChange (text)
   }   
   урок 35 callback,subscribe,observe
   Тепрь удаляем render.js 
   и переносим renderEntireTree обратно в index.js
   теперь мы создаем еще одну функцию в state которая будет обновлять наш стэйт
   const subscribe = (observer) => {
    renderentirTree = observer 
   }
   далее ипортируем в index.js и вызываем его там и передаем туда renderEntiretree
   тоесть мы из index.js передали функцию как парметр и вызвали ее же в state этим самым мы добились что мы обновляем что то ui при каждом изменениии

   урок 36 Принципы ООП 
   если у обьекта есть методы то это уже приблежженно обьект становится оопшным
   Инкапсуляция скрытие делатлий 
   мы не можем обратится к свойству напряму например state = {} мы должны обратиться к нему черз метод например render() {this.state = {}}
   если мы не хотим чтобы напрямую использовали  пишем перед ним нижнее подчеркивание _state
   чтобы устоновить какое то значение свойству это называятся сэтер (как правило это приватное свойство) setContent (this._state)
   чтобы получить какое то свойство мы используем ГЭТЕР getContent

   Урок 37 store,state,ооп рефакторинг
   Основная задача упоковать все функции которые были описаны выше упоковать их в отдельны обьект
   назовем его store перенесем в него state 
   let store = {
     _state: {}, 
     renderEntireTree() { renderentireTree сделали методом обьекта стор - этот метод обновляет нашу state},
     addPost() { addPost тоже сделали мтеодом добовляет пост наш state},
     updateNepostText () {updateNewPostText тоже сделали методом обновляет наш жлемент newPostText },
     subscrib () {subscrib тоже метода вызывает нашу функцию снова },
     getState() {return this._state}

   }
   если мы передаем callback функцию без ее вызова то нужно указывать метод bind например addPost = {store.addPost.bind(store)}
   он привязывает контекст вызова именно к обьекту store
   добавить про метод bind() и Aply().....
   
   урок 38 dispatch и action 
   После того как мы создали оопшный обьект стор и сделали все наши функции его методами далее мы должны создать функцию dispatch
   API - aplication inteface взаимодействие с интерфейсом (интерфейс это что то что позволяет взаимодеймтвовать с чем то)
   Итак вместо того чтобы делать кучу методов в store мы вводим стороннию переменную которая называется dispatch и у него есть свойсвтво action
   при этом action это всегда обьект у которого есть обязательное свойство type которое потом сравнивается и если type совпадает то мы вызываем наш метод который хотим вызвать
   Это нужно чтобы грамотно управлять нашим state
   Тепреь добовляем наш метод dispatch в наш store с методом action пример dispatch(action) {if (action.type === нашему типу то мы выполняем функцию)}
   и теперь вместо наших пропсов которые мы передовали компонентам мы передаем метод dispatch
   далее прокидываем его через пропсы и засовываем его нашим callback функциям и action передаем тип 
   например
   myPost
   let addPost = () {
     props.dispatch({type:"addPost"}) и тогда в нашем стэйте функция dispatch поймет что у этого callback функции тип addPost и выпонит его
   } если нужен еще какой нибудь аргумент то просто добовляем в обьект action
   
   урок39 action creator и action type
   После того как мы создали dispatch - эта та функция которая обьеденяет у нас все методы внутри нашего store мы должны создать action creator
   Так как до этого мы создали action в мире ui и поскольку мы создаем (action обьект) в компоненте мы долны action делегировать
   Создадим функцию
   let actionCreator = (text) => {
     return {
       type: "addPost",
       text:text
     }
   } и теперь на actionCreator передаем в наш addPost 
   addPost = () {
     props.dispatch(actionCreator())
   }
    И теперь на actionCreator помещаем в наш store и экпортируем его
    поскольку значения type  в action не меняется мы должны его занести const чтобы минимизировать ошибки
   
    урок 40 добовление сообщений 
    Теперь чтобы довить сообщение в окне диалогов 
    мы сначала идем в state и добовляем туда в поле где у нас хранится массив с собщениями 
    newMessageBody:"" потом мы помним что весь state меняется только через dispatch(action)
    идем в dispatch и просписыываем там новое метод с новым типом action
    все типы нашего action это константы поэтому создаем константу с именем type 
    dispatch () => {
      if () {чточто}
      if else (action.type === const) {
        this._state.newMessageBody = action.body обратились к нашему стэйту присвоили newMassageBody значение из стэйта
        this.renderEntireTree (this._state) - обновили наш body
      }
      if else (action.type === const(SendMessage)) {
        let body = newMessageBody взяли что у нас лежит в newMessageBody и добовляем в массив 
        newMassageBody = "" зануляем чтобы очистить наш textarea
        и далее берем наш массив и пушем значение из body
        this.state.massage.push({id :5 , message:"body",})
      }
    }
     далее у нас есть еще отправить кнопка мы создаем опять константу с именем типа 
     и добовляем disptatch смотреть выше
     После этого соpдаем actionCreator который следит за action
     sendMessageCreator = ()body => {
       {type:const, body:body}
     } мы подготовили наш стэйт теперь идем в ui
     создаем нашу кнопку и textarea передаем туда функции и пердаем в функции dispatch

     урок 41 reducer
     Если в dispatch засовывать много логики то это неправильно поэтому мы создаем стороннию функцию reducer
     Reducer - это чистая функция которая принимает state и action либо применяет этот action к state либо возвращает state не изменным
     Та логика которая находится dispatch мы распределим по reducer сколько у нас состовных частей в state столько будет и reducer
     Все эти функции которые мы описывали выше испоьзуются в redux
     Сначала в папке redux создаем reducer назовем допустим profilePageReducer и massagePageReducer
     Далее создаем функцию например 
     const profilePageReducer = (state, action) => { функция как и говорили выше принимает state и action
      if (action.type === const) { как мы видим код такой же как и в dispatch 
        let massiv = {
          name:тд,
          age:18,
        }
        state.post.push (newPostText) и тд поскольку мы больше не работаем с обьектом а работаем со state напрямую мы обращемся без this (только обьекты)
        выполняем код
      }
      return state - если action не был применен 
     }
     Точно так же создаем и для других частей 
     Теперь из dispatch можем удалить нашу логику и добавить наши reducer
     dispatch (action) => {
       this._state.profilePage = profileReduce(this._state.profilePage, action); тут мы взяли текущий profilePage и присвоили ему функцию reducer () и добавили аргументами то с чем будем работать
      в нашем случае это this._state.profilePage и action 
       this._state.massagePage = dialogsReduce(this._state.massagePage, action);
       this.renderEntireTree(this._state); и уведомили подписчиков обновили наш store
     }
     еще сделаем небольшой рефакторинг нашего reducer когда у нас дискретный набор значений if else if else то логичнее использовать конструкци switch case
     и action creator тоже переносим к reducer

     42 урок redux 
     И так redux служит для управления state
     чтобы подключить redux ee нужно проинсталировать 
     npm install redux --save 
     redux предостовляет нам несколько возможностей если мы до этого создовали store в ручную то redux предостовляет нам возможность создать этот store  с помощью библиотеке redux
     чтобы создать нам store мы прописываем 
     let store = createStore(); вызвали функцию которая создает store и ипортируем из билиотеки redux
     Далее в index.js мы меняем ипорт нашего store
     Все методы которые мы описывале в локальном store есть в реакте 
     getState()
     subscrib()
     dispatch() 
     все reducer в которых лежит логика мы можем просто передать dispatch так как redux концепция подразумевает создания reducer
     Чтобы передать reducer нашему store мы должны их склеить
     let reducers = combineRedusers() - специальная функция которая приходит к нам из библиотеке redux в эту функцию мы передаем обьект
     let reducers = combineRedusers( воспринимаем этот обькт как наш стэйт с нашими ветками (свойствами)
       {
         profileReducer:profileReducer
         messageReducer:messageReducer

       }
     )после того как мы закомбаййнили reducer мы их одаем store
     let store = createStore (reducers) автоматически create store создает внутри себя state у которого есть вот эти свойства
     поскольку у каждого reducer должно быть нальное свойство мы должны передать нашим reducer значение по умолчанию
     переходи к нашему reducer
     let initialState = {
       наш обьект с свойствами
     }и передаем его свойствам нашему reducer по умолчанию 
     let profilereducer = (state = initialState, action) => {
      и дальше выпониться код если type совпал если нет то вернет state по умолчанию
     }
     далее мы до этого передавали наш state renderEntireTree чтобы обновлять страницу редаксовский store этого не делает поэтому мы должны переписать  index.js нашу функцию
     было
     renderEntireTree(store.getState());
     store.renderEntireTree (renderEntireTree)
     стало
     store.subscribe(() => {
   let state = store.getState()
   renderEntireTree(state);

   урок 43 container component
   Мы с вами задемся вопросом как дальше прокидывать store через компоненты,нам нужно как можно меньше прокидывать черз компоненты информации
   Чтобы наши компаненты оставались чистыми презинтационными
   Тоесть мы должны обернуть нашу презитанционную компаненту другой компонентой контэйнерной компонентой в контэйнерную компаненту будет приходить store и dispatch
   Создадим например копию myPOst и назовем myPostContainer - ей разрешенно быть не чистой компонентой ее задача удалить нужды презинтационной
   ЕЕ задача просто отрисовать презинтанционную компоненту 
   в myPostContainer возвращаем на презинтационную компаненту
   return <myPost/> 
   Теперь удаляем все что нам не нужно в myPost dispatch addPost  и тд
   return <myPost updateNewPostText = {updateNewPostText} addPost = {addPOst}/>
   теперь везде где мы вызывали презинтационнуюю компоненту мы прописываем контейнерную компоненту
   <myPostContainer store = {store} /> теперь вместо всех пропсов мы можем передать только один store и уже контэйнерная компонента его раскроет и передаст в презинтанционной компоненте
   но оборачивать все компонты не нужно оборачиваем только те в к которых у нас много логики 

   урок 44 context API не обязательная тема
   Контекст позволяет передавать данные через дерево компонентов без необходимости передавать пропсы на промежуточных уровнях
   Обычно контекст используется, если необходимо обеспечить доступ данных во многих компонентах на разных уровнях вложенности. По возможности не используйте его, так как это усложняет повторное использование компонентов.
   В нашем случае мы к нашим постома прокидываем через props наш store когда он нужен только компоненте myPost зачем нам ее засорять
   Поэтому мы создаем отдельный блок контект
   чтобы мы создали компонент для своих детей мы должны его создать в отдельном файле const MyContext = React.createContext(defaultValue);
   а нашему <myContext.Provider value = {store}/> а внутрь value помещаем наш store который хотим прокинуть напрямую
   <myContext.Consumer> {value => обращаемся к нашему стору} <myContext.Consumer/> теперь у дочерних жлементов есть доступ к store
  После того как мы создали мы идем в index.js и вокруг нашего app
  <StoreContext.Provider value = {store}> теперь нашему app и всем его дочерним элементам доступен store
  <app/>
  <StoreContext/>
   Далее мы перестаем передовать что либо через пропсы так как у наших всех компонентов есть доступ к store
   Чтобы наша компонента смогла иметь доступ к значению value мы должны обернуть ее в consumer
   MyPOstContainer 
   return 
   <StoreContext.Consumer>
   (store) => ( store берем из storeContext значение value
     <myPost/>
   )
   </StoreContext.Consumer>
   Далее подготовка следующиму кроку в файле Store.Context и создаем там 
   const Provider = (props) => {
     return (
       <StoreContext.Provider value = {props.store}> только value мы берем из props
       {props.children}
       </StoreContext.Provider>
     )
   }  и теперь в index.js вместо storeContext.Provider пишем просто provider и вместо value {просто store}
   поскольку это практично так оборачивать у нас появилась с вами библиотека react-redux это тема след урока

   урок45 connect, mapStateToProps, mapDispatchToProps работа с react-redux
   Мы с вами уже подключили библиотеку redux оона нам позволяет создать свой store и в обьекте передать reducer см папку redux-store
   redux это библиотека живет сама по себе ее не нужно использовать с react а можно использовать и просто с обычным js кодом
   На прошлом занятии мы с вами поняли чтобы достучатся напрямую до нашего store нужно проделать множество операци и тут нам на помощь приходит react-redux
   npm install react-redux --save это специальная прослойка между ui и store
   мы до этого создали свой провайдер теперь мы можем удалить файл storecontext потому что теперь за нас все выполнит react-redux 
   и тот же провайдер который у нас обертывал наш app теперь есть в react redux
   Теперь чтобы контэйнерной компоненте получить доступ к store нужно 
   теперь нам не нужно dialogs.container создавать логику теперь делаем это черз функцию connect
   const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs); где первый вызов принимает в себя две функции а второй мы передаем ту компоненту вокургу которой мы якобы хотим создать презинтационную компоненту
   а первым вызовом мы настраиваем нашу презинтационную компоненту
   let mapStateToProps = (state) => { эти две функции возвращают обьект в первую функцию он передаст стэйт
  return {
    massagePage:state.massagePage
  }
}
let mapDispatchToProps = (dispatch) => { в эту функцию он передал dispatch
  return {
    updateNewMassageBody: (body)=>{ и передаем callback функции
      dispatch(updateNewMassageBodyCreator(body));
    },
    SendMassage: () => { 
       dispatch(sendMassageCreator());
      }
  }
}
Сначала функция конект создает контейнерную компоненту внутри этой контейнерной компоненты она рендерит презитанционную компоненту и внутрь презитанционной в качестве проспсов передают наши ве функции   
При помощи этих двух функци мы заменили весь ког который писали в наших контейнерных компонентах   
connect возвращает нам новую контейнерную компаненту

Урок 46 копия обьектов поверхостная и глубокая
let a = { в javascript есть примитивы к ним отсится число стра булевое значение а есть обьект,когда рече идет про обьекты то речь идет о ссылках на обьекты
  b:{     тоесть в нашем случае в a сидит ссылка на обьект 
    c:{

    }
  } если мы напишем let b = a то в b сидит сcылка на обьект a
} тоесть если мы поменяем значение в b то оно поменяется и a
в итоге чтобы скопировать обьект то мы просто через spred оператор его копируем
let b = {...a} тогда скопируется только повехностная копия но если у нас есть внутрение обьекты то на них идет ссылка 
если мы хотим хотим создать внутрению копию нам вначале нужно создать поверхностную а потом копировать внутрению
let b.b = {...a.b} скопировали b
let b.b.c = {...a.b.c} если новый масив то мы говорим
let b.new = {...a.new}
   
урок 47 делаем копию состояния 
Посколько после нашего connect обьект не до конца скопировался react думает что мы будем придерживаться концепции чистых функци
Чистая функция это функция которая обязательно возвращает данные суть в чем если пришло data1 вернет result1 если пришло data2 вернет result2 это называется деторменированость
В нашем проекте явлются чистыми функциями компоненты и редьюсеры 
Что в нашем случае происходит когда мы засовываем data1 у нас в функции есть какой то обьект data1 взаимодействует с ним и возвращает result1
Что касаему фунционального компоненты на входе даем пропс на выходе jsx 
Что касаемо reducer на входе даем state и action на выходе получаем state
Если внутри что то может изменить обьект то это называется side effect (побочный эфект) и этих побочных sideEffect не должно быть
Теперь идет наши редюсеры нам приходит в функции стэйт и мы его должнисовкиы копировать чтобы он не изменился вернуть скопированный стэйт
Раньше мы перерисовывали все деререво ну в функции connect делает свой subscrib поэтому проиходит блокировка перерисовки redux создает virtual-dom
И идея в чем если раньше мы перерисовывали весь store то теперь перерисовываем только отдельные куски кода 
Поэтому мы можем убрать наш subscribe и renderEntireTree они нам больше не нужны потому что в функции connect свой локальный subscribe
ОН работает по принципу - каждый раз когда у нас в state происходит изменения каждый раз запускается функция mupStateToProps и создает новый обьект а потм сравниваются два обьекта старый и новый

урок 48 делаем копию ...state в диалогах делаем по анлогии как сверху описание единственной что можно сделать это рефакторинг 
если раньше мы постоянно копировали с каждый раз на новой строчке 
то тепреь можно скопировать обьектом 
let copy = {
  ...state,
  massages:""
} и т.д

урок 49 делаем вкалдку users повторение всего того что прошли раньше 
и так мы помним что в app есть две страницы мы их организовали при помощи роутов роут ищет совпадение по url в браузере и если она совпадает она выполняет нашу компоненту
в разделе навигэйшн при помощи navlink и атрибута to мы меняем url у нашей ссылки
и так по аналогии мы в app добовляем users и добовляем в навигейшн мы добавляем users и устанвливаем url
Теперь создаем компоненту создаем в папке компоненту новую папку users в ней создаем файл users.jsx , users.container.js,users.module.css
Всю разработку начинаем со state но перед этим мы должны вначале понять что у нас в ui
Теперь создаем reducer - это чистая функция которая принимает старый state и action(если нужно модифицирует старый стэйт или возвращает старый стэйт) который обрабатывает наш state
Создаем по аналогии с предыдущими reducer 
перед тем как мы начнем делать reducer нужно посмотреть на ui что мы видим если видим список пользователей то скорее всего это массив(получается у нас должен быть массив)
вначале создаем обьект с ключем users у этого ключа есть массив и массив состоит из обьектов данными об человеке
let state = {
  users:[
    {id,name,fullowed: false,status,location:{coutry,city}} обязательно у наших users должна быть id -  вдальнейшем id будем брать с сервера  к нам они в будущем будут приходить по ajax запросу
  ]
}
дальше создаем action creator который создает тип action {type:folow,userId} - это чистая функция которая возращает action {} с важным значением тип
тоесть вначале мы отправляем все в dispatch reduser все обрабатывает в возращает в диспатч диспат в свою очередь выбирает нужны нам тип в функции connect напоминаю есть свой dispatch
далее копируем массив но если нам нужен массив в котором нужно что то поменять то луше использовать map - он изменит наш масив и вернет новый массив
тоесть мы 
const reducer = (state = initialState, action) => { тоесть мы создали reducer которы принимает значения state и action (для action мы создали отдельный createaction)
  switch (action.type) { далее тут если action.type тру мы заходим сравниваем с case если тайп совпадет выпоняем код
    case Follow : 
    let stateCope = {...state,users: state.users.map(users => if (user.id === action.user.id) {...users,follow:true})} тут мы скопировали наш state а в разделе users произвели копирование при помощи map посокльку мы будем его менять в дальнейшем
  }и аналогичная ситуация unfollow
}далее мы переходим в userscontainer и там через функцию connect создаем две функции mapStateToProps(которая принимает весь стэйт и возвращает тот state который нам нужен)
далее мы создаем mapDispatchToProps -служит для того чтобы передовать через пропсы callback нашим дочерним элементам
в mapDispatchToProps (dispatch) => { приходит dispatch
return (
  follow: (userId) => {
    dispatch(followActionCreator(userId))
  }
)
}
50 урок rest api теория 
Рестовный и серверный api (Application Programming Interface) Interface взаимодействует с programming aplication тоесть взаимодействие с программой
Програмы например браузер или библиотека jquery или react native помимо всех этих приложений есть серверные программы
Например node vs APACHE и NGIUX нас интересует взаимодействие с сервоком как с программой 
server api - (это железная коробка большое мощное железо)
Есть какой то обьект у него есть интерфес мы с ним взаимодействуем
У каждого программного сервре есть какие то endpoint(конечные точки) - каждый endpoint характеризуется какой либо хракатеристикой сновная это (url адрес)
Какой тип запроса мы будем делать до недавних пор было два популярных типа запроса (get и post)
http-request type:
get - шлем когда от сервера хотим что то получит он не подразумевает что с сервера пойдет какая то нагрузка в get запросе нельзя передать много данных на сервер
Post - когда хотим отправить что то на сервер а post запрос мы подразумеваем что мы на сервер что то постим(создаем)
Put - мы хотим что то обновить
Delete - мы хотим что то удалить он как get тоесть нам не нужно что то большое отправлять на сервер
patch
request payload - что хотим слать на сервер
responce data - и какие данные нам придут с сервера 
далее знание http codes:404 not found,5xx-server errors,3xx-redirect,2xx-OK все эти четыре группы нужно знать нужно загуглить
 так взаимодействуют с сервером
 Есть такое понятие как server rest API
 это определенный набор правил
 ранеьше все запросы слали отдельно потом разработчики подумали и сделали чтобы все запросы слать на одну точку
 'http://samuraiJS.com/api/users' - get/post/put/delete
 GET-POST-PUT-DELETE(CRUD)- CreateReadUpdateDelete
Мы будем испоьзовать библиотеку axios
axios
.get("https:// и тд")
.then (data => console.log(data))
  нужно посмотреть ajax на практике  (посмотрел)

урок 51
На прошлом занятии мы подготовили страничку пользователей users сейчас на практике будем взаимодействовать с сервером
сегодня начнем с простых get запросов 
идем компоненту users
устанавливаем библиотеку axios для работы с сервером
npm install axios --save
далее в users прописываем
axios.get("") - мы делаем запрос на addpoint (тоесть какой url мы будем слать на andpoint чтобы он нам вернул данные )
далее в рамках проекта зашли на специальный https://social-network.samuraijs.com/ сервер 
и прописываем в url нашего axios
axios.get('https://social-network.samuraijs.com/api/1.0').then (()=> { тут мы ставаим когда что то произойдет выполнить эту функцию 
props.setUsers(response.data.items)
}) и далее меняем в jsx коде имена на те которые указаны на сервере


   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   */
   



















































































































































































































































