import React, { useEffect, useState } from 'react';
import Footer from '../../components/Layout/Footer';
import Tweet from '../../components/Tweet';
import styles from './MyPage.module.css';
import dummyTweets from '../../static/dummyData';

// TODO : 주어진 트윗 목록(dummyTweets)중 현재 유져인 parkhacker의 트윗만 보여줘야 합니다.
//💡MEMO: Tweets페이지에서 추가한 tweet을 MyPage에도 나오게 하려고 Tweets페이지에 있는 코드를 중복되게 썼는데 더 좋은 방법이 있을까요?
const MyPage = () => {
  const [tweets, setTweets] = useState(
    localStorage.getItem(dummyTweets) 
    ? JSON.parse(localStorage.getItem(dummyTweets))
    : dummyTweets);
  
  useEffect(() => {
    const tweets_local = localStorage.getItem(dummyTweets);
    if (tweets_local) {
      setTweets(JSON.parse(tweets_local));
    }
  }, []);

  useEffect(() => {
    if (tweets) {
      localStorage.setItem(dummyTweets, JSON.stringify(tweets));
    }
  }, [tweets]);

  const filteredTweets = tweets.filter(tweet => {
     return tweet.username === "parkhacker"
  })
  
  return (
    <section className={styles.myInfo}>
      <div className={styles.myInfo__container}>
        <div className={styles.myInfo__wrapper}>
          <div className={styles.myInfo__profile}>
            {/*💡MEMO: 1) 만약 parkhacker의 tweet가 없을 경우엔 에러발생하지 않게 옵셔널체이닝으로 처리하는게 괜찮은 방법일까요? 더 좋은 방법이 있을까요?  
                       2) 밑에 username은 옵셔널체이닝을 할 경우에 에러발생은 안하지만 이름이 뜨지 않는데 그냥 "parkhaker"라고 명시해주어야 하나요? 다른 방법있을까요?
            */}
            <img src={filteredTweets[0]?.picture} />
          </div>
          <div className={styles.myInfo__detail}>
            <p className={styles.myInfo__detailName}>
              {filteredTweets[0]?.username}
            </p>
            <p>28 팔로워 100 팔로잉</p>
          </div>
        </div>
      </div>
      <ul className={styles.tweets__mypage}>
        {/* TODO : 주어진 트윗 목록(dummyTweets)중 현재 유져인 parkhacker의 트윗만 보여줘야 합니다. */}
         {
          filteredTweets.map((tweet) => {
            return <Tweet key={tweet.id} tweet={tweet} />
          })
         } 
      </ul>
      <Footer />
    </section>
  );
};

export default MyPage;