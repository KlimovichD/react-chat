import React from 'react';

import { Message, Dialogs } from '../../components';

import './Home.scss';

function Home() {
  return (
    <section className="home">
      <Dialogs
        items={[
          {
            _id: 'd95b2b8d36ebc',
            text:
              'Мы все свидетельствуем Вам глубочайшее наше почтение и целуем Ваши ручки, дражайший папенька: Михайла, Федор, Варвара и Андрюша',
            isReaded: false,
            created_at: new Date(2010, 6, 4),
            user: {
              _id: 'd95b2b8d36ebc',
              fullName: 'Вертикальный',
              avatar: 'https://i.pinimg.com/236x/c4/38/9c/c4389cac48c18ec4431e0bb4dcb643c1.jpg',
            },
          },
          {
            _id: 'd95b2b8d36ebc',
            text: 'Привет, залетай на студию, запишем что-нибудь прикольное',
            isReaded: false,
            created_at: new Date(),
            user: {
              _id: 'd95b2b8d36ebc',
              fullName: 'Таггер',
              avatar: null,
              // 'https://static10.tgstat.ru/channels/_0/0c/0c2f61531b5812870bc319629d037f44.jpg',
            },
          },
        ]}
      />
      <Message
        avatar="https://i.pinimg.com/236x/c4/38/9c/c4389cac48c18ec4431e0bb4dcb643c1.jpg"
        date="Wed Jul 02 2020 16:41:15"
        audio="https://notificationsounds.com/soundfiles/f76a89f0cb91bc419542ce9fa43902dc/file-sounds-1154-done-for-you.mp3"
        isReaded={false}
      />
      {/* <Message
        avatar="https://i.pinimg.com/236x/c4/38/9c/c4389cac48c18ec4431e0bb4dcb643c1.jpg"
        text="Салам, Брут! Чё, как, уничтожил флот галлов?"
        date="Wed Jul 02 2020 16:41:15"
        attachments={[
          {
            filename: 'image1.jpg',
            url: 'https://source.unsplash.com/100x100/?random=1&nature,water',
            id: 1,
          },
          {
            filename: 'image2.jpg',
            url: 'https://source.unsplash.com/100x100/?random=2&nature,water',
            id: 2,
          },
          {
            filename: 'image3.jpg',
            url: 'https://source.unsplash.com/100x100/?random=3&nature,water',
            id: 3,
          },
        ]}
      />
      <Message
        avatar="https://static10.tgstat.ru/channels/_0/0c/0c2f61531b5812870bc319629d037f44.jpg"
        text="Да бро, все ровно у нас! Ты как сам?"
        date="Wed Jul 02 2020 16:46:15"
        isMe={true}
        isReaded={false}
      />
      <Message
        avatar="https://i.pinimg.com/236x/c4/38/9c/c4389cac48c18ec4431e0bb4dcb643c1.jpg"
        date="Wed Jul 02 2020 16:41:15"
        attachments={[
          {
            filename: 'image1.jpg',
            url: 'https://source.unsplash.com/100x100/?random=4&nature,water',
            id: 1,
          },
        ]}
      />
      <Message
        avatar="https://i.pinimg.com/236x/c4/38/9c/c4389cac48c18ec4431e0bb4dcb643c1.jpg"
        isTyping
      /> */}
    </section>
  );
}

export default Home;
