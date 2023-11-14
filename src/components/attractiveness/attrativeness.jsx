import React, { useState } from 'react'
import cl from './dostoprimechat.module.css'
import AttrativeCard from './attractiveCard'

export default function Attrativeness() {
  const [attractive, setAttractive] = useState([
    {src: './pngs/attrativnes/glusi.jpg', name: 'Александр Глускер', text:'В общем, Глускер проработал в колледже уже 14 лет, и за это время успел много чего сотворить. Многие студенты его ненавидели, за то что его стиль обучения был слишком жесткий - он давал слишком много материала, но эти знания не всегда были нужны на практике. Но самое шокирующее, это то что он приставал к студентам(не студенткам!). Сначала он общался с ними просто по дружески, но заканчивалось все тем, что те, кто стал его жертвой получали фотку его члена. Но теперь он увольняется, под давлением студентов, Антонины Петуховой и Ирины Дзюбы. Все таки забавный был препод, но если серьезно, это очень мерзко. Лично мне повезло что я застал его только на приемной коммисии, и не смог познать ужасы его обучения. Если что заявление об увольнении он написал 12.11.2023, на своей страничке вк он подписал это как "пересмотрение планов на жизнь". В заключение, можно сказать что это очень противно что такой человек проработал так много времени и мог все это время скрываться, чего не скажешь о следующем преподе'},
    {src: './pngs/teachers/valeev.png', name: 'Валеев Михаил', text:'У него похожая ситуация с Глускером - он тоже педофил-гомосексуал, в личных разговорах со студентами он звал их пить вместе, спрашивал про личную жизнь и сразу давал понять какой он ориентации, после этого все равно предлагал пойти с ним выпить. Думаю у него были не самые приятные планы на этих студентов. По этому преподу впринципе можно внешне догадаться кто он, поэтому он и проработал всего год, но ушел тоже по "собственному желанию"'},
    {src: './pngs/attrativnes/novikov.png', name: 'Новиков Дмитрий', text:'Тоже вероятно препод педофил. Вероятно лишь потому, что это только слухи, однако слухи из воздуха не появляются. Но он уже хотя бы по девочкам, так что стоит быть осторожнее с ним.'},
    {src: './pngs/attrativnes/milanova.png', name: 'Миланова Ирина', text:'Ну эта хотя бы не педофил, но ужасным человеком быть от этого не перестает. Она очень психически не уравновешенная, постоянно на всех кричит, причем делает это вообще без причины. Возомнила себя самой главной и властелином мира, поэтому и позволяет себе бесконечно ругаться на студентов. Примеры: однажды она проходила мимо кабинета где шла пара, решила просто так заглянуть туда, и увидев что у кого то был надет капюшон, подняла такую панику и прямо посреди пары отчитала его за то, что он просто надел капюшон. Второе: устроила перепалку со студентом всячески оскорбляя его и крича, при этом когда ей говорили успокоится, она всего лишь отвечала что она "полностью спокойна, а вот вы наоборот". Выглядело это очень смешно. Так же вставлю сюда ее цитату: "вот у меня стол стоит, он мне не мешается, и ты мне не мешайся"'},
    {src: './pngs/attrativnes/kuantaeva.png', name: 'Куантаева Татьяна', text:'Преподаватель ОБЖ/биологии у которого прогрессирует какое то психическое заболевание (вероятно из-за возраста), скорее всего это деменция, но это лишь предположение. Ее поведение очень странное, она может абсолютно спокойно что-то рассказывать, потом начать бить по столу, ругаясь на тех кто говорит, и в этот же момент переключится обратно к состоянию как будто ничего и не было. Так же она относится к студентам как к своим 10 летним внукам, и это в плохом смысле, это очень не приятно. Ну, а по поводу преподавания на мой взгляд у нее самые бесполезные пары, потому что невозможно слушать все так, как будто ты находишься в детском саду'},
    {src: './pngs/attrativnes/kuropatkina.png', name: 'Куропаткина Ирина', text:'У данного преподавателя очень тяжело сидеть на парах. Поток ее мыслей очень хаотичен, поэтому лекции нормальные у нее никогда не получаются, потому что она постоянно переключается на обсуждение политики с учениками, и это может зайти очень далеко, вплоть до обсуждения макдональдса. Исходя из этого можно прояснить, что понимать какой то материал на ее лекциях невозможно. Но это еще не все, доказательтвом ее хаотичному распределению мыслей является ее речь. Она невероятно ужасная, практически после каждого слова присутсвует эээ, нуу, мгее. Подборка смешных фразочек: "ну это какое то быдлятсво!", "ну это просто мама-не горюй", "Егор, вы меня ОШАРАШИЛИ". Еще стоит отметить ее антироссийскую позицию, конечно против этого ничего не имеем, но она уж слишком выражена и во многом противоречит ее словам о "критическом мышлении" которому она так пытается нас научить.'},
  ])
  const [load, setLoad] = useState(false)
  const preLoad = []
  if (window.innerWidth < 900) {
    preLoad.push(attractive[0])
  } else {
    preLoad.push(attractive[0], attractive[1], attractive[2])
  }

  return (
    <>
      {load !== true
              ? <div className={cl.container}>
                  {preLoad.map(card => <AttrativeCard card={card} key={card.text}/>)}
                  <div className={cl.load} onClick={() => setLoad(true)}>Загрузить еще..</div>
                </div>
              : <div className={cl.container}>
                    {attractive.map(card => <AttrativeCard card={card} key={card.text}/>)}
                    <div className={cl.load} onClick={() => setLoad(false)}>Скрыть</div>
                </div>
        }
    </>
      
  )
}
